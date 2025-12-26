import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message }: ContactEmailRequest = await req.json();

    console.log("Received contact form submission:", { name, email, phone });

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
              <td style="padding: 10px 0; color: #555;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #333;">Email:</td>
              <td style="padding: 10px 0; color: #555;">
                <a href="mailto:${email}" style="color: #006C35;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #333;">Phone:</td>
              <td style="padding: 10px 0; color: #555;">
                <a href="tel:${phone}" style="color: #006C35;">${phone}</a>
              </td>
            </tr>
          </table>
          
          <h3 style="color: #006C35; margin-top: 20px;">Message:</h3>
          <div style="background-color: white; padding: 15px; border-radius: 8px; border-left: 4px solid #D4AF37;">
            <p style="color: #555; margin: 0; line-height: 1.6;">${message}</p>
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
        subject: `New Contact Form Submission from ${name}`,
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
