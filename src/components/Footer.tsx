import React from 'react';
import { Phone, Mail, MessageCircle, Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import gusLogo from 'figma:asset/c488890d002c452c6d0ad8392b570b3c5af36518.png';

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#3C7A22]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#FF4D00]/10 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#3C7A22] to-[#FF4D00] rounded-full blur-md opacity-50" />
                <img 
                  src={gusLogo} 
                  alt="GUS Logo" 
                  className="w-12 h-12 object-contain relative z-10"
                />
              </div>
              <h3 className="text-2xl bg-gradient-to-r from-[#3C7A22] via-[#4a9629] to-[#FF4D00] bg-clip-text text-transparent">GUS</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl mb-6 text-white">Quick Links</h3>
            <div className="flex flex-col gap-3">
              <a href="#home" className="text-gray-300 hover:text-[#FF4D00] transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-2 group">
                <span className="w-0 h-0.5 bg-[#FF4D00] group-hover:w-4 transition-all duration-300" />
                {t.nav.home}
              </a>
              <a href="#about" className="text-gray-300 hover:text-[#FF4D00] transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-2 group">
                <span className="w-0 h-0.5 bg-[#FF4D00] group-hover:w-4 transition-all duration-300" />
                {t.nav.about}
              </a>
              <a href="#summit" className="text-gray-300 hover:text-[#FF4D00] transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-2 group">
                <span className="w-0 h-0.5 bg-[#FF4D00] group-hover:w-4 transition-all duration-300" />
                {t.nav.summit}
              </a>
              <a href="#blog" className="text-gray-300 hover:text-[#FF4D00] transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-2 group">
                <span className="w-0 h-0.5 bg-[#FF4D00] group-hover:w-4 transition-all duration-300" />
                {t.nav.blog}
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl mb-6 text-white">{t.contact.title}</h3>
            <div className="flex flex-col gap-4">
              <a href="tel:+2348066830622" className="flex items-center gap-3 text-gray-300 hover:text-[#FF4D00] transition-all duration-300 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#FF4D00]/20 transition-all">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+234 806 683 0622</span>
              </a>
              <a href="mailto:globalunitedsisters2025@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-[#FF4D00] transition-all duration-300 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#FF4D00]/20 transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                <span>globalunitedsisters2025@gmail.com</span>
              </a>
              <a 
                href="https://wa.me/2348066830622" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-[#FF4D00] transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#FF4D00]/20 transition-all">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <span>{t.contact.whatsapp}</span>
              </a>
              <a 
                href="https://www.instagram.com/global_united_sisters?igsh=NXZobW5wdzZtd3k=" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-[#FF4D00] transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#FF4D00]/20 transition-all">
                  <Instagram className="w-4 h-4" />
                </div>
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700/50 pt-8 text-center">
          <p className="text-gray-400">© {currentYear} Global United Sisters. {t.footer.rights}.</p>
        </div>
      </div>
    </footer>
  );
};
