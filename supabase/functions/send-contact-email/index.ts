import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const HCAPTCHA_SECRET_KEY = Deno.env.get("HCAPTCHA_SECRET_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Zod schema for input validation
const ContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name too long").trim(),
  email: z.string().email("Invalid email address").max(254, "Email too long"),
  phone: z.string().regex(/^[\+]?[0-9\s\-\(\)]{7,20}$/, "Invalid phone number").trim(),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000, "Message too long").trim(),
  honeypot: z.string().optional(),
  timestamp: z.number().optional(),
  captchaToken: z.string().min(1, "CAPTCHA token required")
});

// Verify hCaptcha token
async function verifyCaptcha(token: string): Promise<boolean> {
  try {
    const response = await fetch('https://api.hcaptcha.com/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `response=${token}&secret=${HCAPTCHA_SECRET_KEY}`
    });
    const data = await response.json();
    console.log("hCaptcha verification result:", data.success);
    return data.success === true;
  } catch (error) {
    console.error("hCaptcha verification error:", error);
    return false;
  }
}

// Simple in-memory rate limiting (resets on function cold start)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5; // Max submissions per window
const RATE_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds
const MIN_FORM_TIME = 3000; // Minimum 3 seconds to fill form

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW });
    return false;
  }
  
  if (record.count >= RATE_LIMIT) {
    return true;
  }
  
  record.count++;
  return false;
}

// HTML escape function to prevent injection
function escapeHtml(str: string): string {
  const htmlEntities: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };
  return str.replace(/[&<>"']/g, (char) => htmlEntities[char] || char);
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get client IP for rate limiting
    const clientIP = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
                     req.headers.get('x-real-ip') || 
                     'unknown';
    
    console.log("Contact form submission from IP:", clientIP);

    // Check rate limit
    if (isRateLimited(clientIP)) {
      console.warn("Rate limit exceeded for IP:", clientIP);
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const rawBody = await req.json();
    
    // Honeypot check - if filled, it's a bot
    if (rawBody.honeypot && rawBody.honeypot.trim() !== '') {
      console.warn("Honeypot triggered - bot detected");
      // Return success to not alert the bot, but don't send email
      return new Response(
        JSON.stringify({ success: true }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Time-based check - form filled too quickly
    if (rawBody.timestamp) {
      const formFillTime = Date.now() - rawBody.timestamp;
      if (formFillTime < MIN_FORM_TIME) {
        console.warn("Form submitted too quickly - possible bot");
        return new Response(
          JSON.stringify({ success: true }),
          { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
    }

    // Validate input with Zod
    const validation = ContactSchema.safeParse(rawBody);
    if (!validation.success) {
      console.error("Validation failed:", validation.error.errors);
      return new Response(
        JSON.stringify({ 
          error: "Invalid input", 
          details: validation.error.errors.map(e => e.message) 
        }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { name, email, phone, message, captchaToken } = validation.data;
    
    // Verify hCaptcha
    const captchaValid = await verifyCaptcha(captchaToken);
    if (!captchaValid) {
      console.warn("hCaptcha verification failed");
      return new Response(
        JSON.stringify({ error: "CAPTCHA verification failed. Please try again." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    
    console.log("hCaptcha verification passed");
    
    // Escape all user inputs for HTML
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeMessage = escapeHtml(message);

    console.log("Validated contact form submission:", { name: safeName, email: safeEmail, phone: safePhone });

    // Send to both HAFCO email addresses
    const recipientEmails = [
      "hafcobigmovers@gmail.com",
      "hafco.bigmovers@yahoo.com"
    ];

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #006C35; padding: 20px; text-align: center;">
          <h1 style="color: #D4AF37; margin: 0;">HAFCO Big Movers</h1>
          <p style="color: white; margin: 5px 0 0 0;">New Contact Form Submission</p>
        </div>
        
        <div style="padding: 30px; background-color: #f9f9f9;">
          <h2 style="color: #006C35; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">Contact Details</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #333; width: 120px;">Name:</td>
              <td style="padding: 10px 0; color: #555;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #333;">Email:</td>
              <td style="padding: 10px 0; color: #555;">
                <a href="mailto:${safeEmail}" style="color: #006C35;">${safeEmail}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #333;">Phone:</td>
              <td style="padding: 10px 0; color: #555;">
                <a href="tel:${safePhone}" style="color: #006C35;">${safePhone}</a>
              </td>
            </tr>
          </table>
          
          <h3 style="color: #006C35; margin-top: 20px;">Message:</h3>
          <div style="background-color: white; padding: 15px; border-radius: 8px; border-left: 4px solid #D4AF37;">
            <p style="color: #555; margin: 0; line-height: 1.6;">${safeMessage}</p>
          </div>
        </div>
        
        <div style="background-color: #006C35; padding: 15px; text-align: center;">
          <p style="color: white; margin: 0; font-size: 12px;">
            This email was sent from the HAFCO Big Movers website contact form.
          </p>
        </div>
      </div>
    `;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "HAFCO Contact Form <onboarding@resend.dev>",
        to: recipientEmails,
        subject: `New Contact Form Submission from ${safeName}`,
        html: emailHtml,
      }),
    });

    const emailResponse = await response.json();

    if (!response.ok) {
      console.error("Resend API error:", emailResponse);
      throw new Error(emailResponse.message || "Failed to send email");
    }

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
