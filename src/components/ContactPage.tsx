import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Instagram, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { motion } from 'motion/react';

export const ContactPage = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Phone,
      title: t.contact.phone,
      content: '+234 806 683 0622',
      link: 'tel:+2348066830622',
      color: 'from-[#3C7A22] to-[#4a9629]',
    },
    {
      icon: Mail,
      title: t.contact.email,
      content: 'info@gussisters.org',
      link: 'mailto:info@gussisters.org',
      color: 'from-[#FF4D00] to-[#e64400]',
    },
    {
      icon: MessageCircle,
      title: t.contact.whatsapp,
      content: 'Chat with us',
      link: 'https://wa.me/2348066830622',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Nigeria',
      link: null,
      color: 'from-blue-500 to-blue-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3C7A22] via-[#2d5e1a] to-[#3C7A22]" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="blob absolute top-20 right-20 w-96 h-96 bg-white" />
        <div className="blob absolute bottom-20 left-20 w-80 h-80 bg-[#FF4D00]" style={{ animationDelay: '2s' }} />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <span className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm mb-6 border border-white/30">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              {t.contact.title}
            </h1>
            <p className="text-lg md:text-2xl max-w-3xl mx-auto opacity-95 leading-relaxed">
              {t.contact.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#3C7A22]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#FF4D00]/5 to-transparent rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full card-hover border-0 shadow-lg bg-white group">
                      <CardHeader>
                        <div className="relative mb-4">
                          <div className={`absolute inset-0 bg-gradient-to-br ${info.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity`} />
                          <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        <CardTitle className="text-2xl text-gray-900">{info.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        {info.link ? (
                          <a 
                            href={info.link}
                            target={info.link.startsWith('http') ? '_blank' : undefined}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-lg text-[#FF4D00] hover:text-[#e64400] transition-colors inline-flex items-center gap-2 group"
                          >
                            {info.content}
                            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </a>
                        ) : (
                          <p className="text-lg text-gray-700">{info.content}</p>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Social Media Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 bg-[#3C7A22]/10 text-[#3C7A22] rounded-full text-sm mb-4">
                Connect With Us
              </span>
              <h2 className="text-4xl md:text-5xl mb-8 bg-gradient-to-r from-[#3C7A22] to-[#FF4D00] bg-clip-text text-transparent">
                Follow Us on Social Media
              </h2>
              <div className="flex justify-center gap-6">
                <motion.a
                  href="https://www.instagram.com/global_united_sisters?igsh=NXZobW5wdzZtd3k="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="relative">
                    <div 
                      className="absolute inset-0 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"
                      style={{ 
                        background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)' 
                      }}
                    />
                    <div 
                      className="relative w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all"
                      style={{ 
                        background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)' 
                      }}
                    >
                      <Instagram className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <p className="mt-4 text-gray-700">@global_united_sisters</p>
                </motion.a>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#3C7A22] via-[#2d5e1a] to-[#3C7A22]" />
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full" style={{ 
                  backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                  backgroundSize: '40px 40px'
                }} />
              </div>
              
              <div className="relative z-10 p-8 md:p-12 text-center text-white">
                <h2 className="text-3xl md:text-4xl mb-4">
                  Have Questions?
                </h2>
                <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto leading-relaxed">
                  We're here to help! Reach out to us through any of the channels above, and we'll get back to you as soon as possible.
                </p>
                <a
                  href="https://wa.me/2348066830622"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#3C7A22] rounded-xl text-lg shadow-xl hover:shadow-2xl transition-all"
                  >
                    Contact Us Now
                    <Send className="w-5 h-5" />
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
