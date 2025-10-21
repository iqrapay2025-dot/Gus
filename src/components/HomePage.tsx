import React from 'react';
import { ArrowRight, Users, Award, BookOpen, Briefcase, Gift, Rocket, CheckCircle2, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { TeamCarousel } from './TeamCarousel';
import { motion } from 'motion/react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export const HomePage = ({ onNavigate }: HomePageProps) => {
  const { t, language } = useLanguage();

  const heroImages = [
    {
      url: 'https://images.unsplash.com/photo-1555893117-d74b025a63c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWphYiUyMHdvbWFuJTIwYmFjayUyMHZpZXd8ZW58MXx8fHwxNzYxMDQ1MDQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Muslim woman in hijab - back view'
    },
    {
      url: 'https://images.unsplash.com/photo-1734629166224-120e94bde153?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNsaW0lMjBwcmF5ZXIlMjBzaWxob3VldHRlfGVufDF8fHx8MTc2MTA0NTA0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Muslim prayer silhouette'
    },
    {
      url: 'https://images.unsplash.com/photo-1759568950656-4d2e3006f837?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpc2xhbWljJTIwd29tYW4lMjByZWFkaW5nJTIwcXVyYW58ZW58MXx8fHwxNzYxMDQ1MDQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Islamic woman reading Quran'
    },
    {
      url: 'https://images.unsplash.com/photo-1598723106415-862ab917eb7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaXFhYiUyMHdvbWVuJTIwZ3JvdXB8ZW58MXx8fHwxNzYxMDQ1MDQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Muslim women in modest attire'
    },
    {
      url: 'https://images.unsplash.com/photo-1630273019508-932547191e17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNsaW0lMjB3b21hbiUyMGhhbmRzJTIwcHJheWVyfGVufDF8fHx8MTc2MTA0NTA0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Muslim woman hands in prayer'
    },
    {
      url: 'https://images.unsplash.com/photo-1641652984347-8fb4b52dc051?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWphYiUyMHNpbGhvdWV0dGUlMjBtb3NxdWV8ZW58MXx8fHwxNzYxMDQ1MDQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Hijab silhouette at mosque'
    },
    {
      url: 'https://images.unsplash.com/photo-1760727752031-672913909ae7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpc2xhbWljJTIwYXJjaGl0ZWN0dXJlJTIwd29tZW58ZW58MXx8fHwxNzYxMDQ1MDQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Islamic architecture with modest women'
    },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  const features = [
    {
      icon: BookOpen,
      title: t.features.workshops,
      description: t.features.workshopsDesc,
    },
    {
      icon: Users,
      title: t.features.mentorship,
      description: t.features.mentorshipDesc,
    },
    {
      icon: Briefcase,
      title: t.features.networking,
      description: t.features.networkingDesc,
    },
    {
      icon: Award,
      title: t.features.grants,
      description: t.features.grantsDesc,
    },
    {
      icon: Gift,
      title: t.features.exhibition,
      description: t.features.exhibitionDesc,
    },
    {
      icon: Rocket,
      title: t.features.launch,
      description: t.features.launchDesc,
    },
  ];

  const objectives = [
    t.objectives.obj1,
    t.objectives.obj2,
    t.objectives.obj3,
    t.objectives.obj4,
  ];

  const benefits = [
    t.benefits.benefit1,
    t.benefits.benefit2,
    t.benefits.benefit3,
    t.benefits.benefit4,
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Carousel Section */}
      <section className="relative">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {heroImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[600px] md:h-[700px] lg:h-[800px]">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ 
                      backgroundImage: `url(${image.url})`,
                    }}
                  />
                  {/* Modern Gradient Overlay */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(135deg, rgba(60, 122, 34, 0.85) 0%, rgba(255, 77, 0, 0.75) 100%)'
                    }}
                  />
                  {/* Animated Background Blobs */}
                  <div className="blob absolute top-20 left-20 w-72 h-72 bg-white" style={{ animationDelay: '0s' }} />
                  <div className="blob absolute bottom-20 right-20 w-96 h-96 bg-[#FF4D00]" style={{ animationDelay: '2s' }} />
                  
                  {/* Content */}
                  <div className="relative h-full flex items-center justify-center">
                    <div className="container mx-auto px-6 text-center text-white">
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                      >
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-white/30">
                          <Sparkles className="w-4 h-4" />
                          <span className="text-sm">Muslimah Summit 1.0</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 max-w-5xl mx-auto leading-tight">
                          {t.hero.title}
                        </h1>
                        <p className="text-lg md:text-2xl mb-10 max-w-3xl mx-auto opacity-95 leading-relaxed">
                          {t.hero.subtitle}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                          <a
                            href="https://wa.me/2348066830622"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button 
                              size="lg" 
                              className="bg-white text-[#3C7A22] hover:bg-gray-100 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 px-8 py-6 text-lg"
                            >
                              {t.hero.cta} <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                          </a>
                        </div>
                        <p className="mt-8 text-lg opacity-90 flex items-center justify-center gap-2">
                          <span className="inline-block w-2 h-2 bg-white rounded-full animate-pulse"></span>
                          {t.hero.date}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-6 bg-white/90 hover:bg-white border-0 shadow-lg" />
          <CarouselNext className="right-6 bg-white/90 hover:bg-white border-0 shadow-lg" />
        </Carousel>
      </section>

      {/* About Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#3C7A22]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#FF4D00]/5 to-transparent rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-[#3C7A22]/10 text-[#3C7A22] rounded-full text-sm mb-4">
                About GUS
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-[#3C7A22] via-[#4a9629] to-[#FF4D00] bg-clip-text text-transparent">
                {t.about.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                {t.about.description}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-[#3C7A22] to-[#2d5e1a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8">
              {t.mission.title}
            </h2>
            <p className="text-lg md:text-xl leading-relaxed opacity-95">
              {t.mission.content}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#FF4D00]/10 text-[#FF4D00] rounded-full text-sm mb-4">
              What We Offer
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 bg-gradient-to-r from-[#3C7A22] to-[#FF4D00] bg-clip-text text-transparent">
              {t.features.title}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full card-hover border-0 shadow-lg hover:shadow-2xl bg-white group">
                    <CardHeader>
                      <div className="relative mb-4">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#3C7A22] to-[#FF4D00] rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                        <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3C7A22] to-[#4a9629] flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-8 h-8" />
                        </div>
                      </div>
                      <CardTitle className="text-2xl text-gray-900 group-hover:text-[#3C7A22] transition-colors">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base text-gray-600 leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-[#3C7A22] to-[#FF4D00] bg-clip-text text-transparent">
              {t.objectives.title}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {objectives.map((objective, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <CheckCircle2 className="w-6 h-6 text-[#3C7A22] flex-shrink-0 mt-1" />
                <p className="text-gray-700 leading-relaxed">{objective}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gradient-to-br from-[#FF4D00]/5 via-white to-[#3C7A22]/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-[#FF4D00] to-[#3C7A22] bg-clip-text text-transparent">
              {t.benefits.title}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF4D00] to-[#e64400] flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-700 leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-[#3C7A22]/10 text-[#3C7A22] rounded-full text-sm mb-4">
              Our Team
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 bg-gradient-to-r from-[#3C7A22] to-[#FF4D00] bg-clip-text text-transparent">
              {t.team.title}
            </h2>
          </motion.div>
          <TeamCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#3C7A22] via-[#2d5e1a] to-[#3C7A22] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
              {t.cta.title}
            </h2>
            <p className="text-lg md:text-xl mb-10 opacity-95 leading-relaxed">
              {t.cta.subtitle}
            </p>
            <a
              href="https://wa.me/2348066830622"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="bg-white text-[#3C7A22] hover:bg-gray-100 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 px-10 py-6 text-lg"
              >
                {t.cta.button} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
