import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '966599990239'; // Work line number for WhatsApp
  const message = encodeURIComponent('Hello HAFCO! I would like to inquire about your heavy transport services.');

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-float"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white fill-white" />
    </a>
  );
};

export default WhatsAppButton;
