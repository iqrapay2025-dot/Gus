import React from 'react';
import { Calendar, MapPin, Users, Target, TrendingUp, Award, ArrowRight, Sparkles, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'motion/react';

export const SummitPage = () => {
  const { t } = useLanguage();
  
  const teamPlugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const scopeItems = [
    {
      title: 'Event Planning & Logistics',
      description: 'Comprehensive planning including venue, materials, and coordination',
    },
    {
      title: 'Branding & Speaker Sessions',
      description: 'Professional branding and sessions from seasoned Muslimah entrepreneurs',
    },
    {
      title: 'Workshops',
      description: 'Hands-on training including Gift Box & Bag Making',
    },
    {
      title: 'Product Launch',
      description: 'Platform for innovative Muslimah-led product launches',
    },
    {
      title: 'Networking & Exhibition',
      description: 'Connect with fellow entrepreneurs and showcase your business',
    },
    {
      title: 'Business Grants',
      description: 'Funding opportunities to kickstart or scale your venture',
    },
  ];

  const kpis = [
    {
      icon: Users,
      title: 'Attendance Rate',
      description: 'High participant engagement and satisfaction',
    },
    {
      icon: TrendingUp,
      title: 'Collaborations',
      description: 'New partnerships and business relationships formed',
    },
    {
      icon: Award,
      title: 'Product Launch',
      description: 'Successful launch of Muslimah-led products',
    },
    {
      icon: Target,
      title: 'Grants Impact',
      description: 'Business grants awarded with post-event tracking',
    },
  ];

  const teamMembers = [
    {
      name: 'Project Lead',
      role: 'Overall Coordination',
      description: 'Strategic planning and team leadership',
    },
    {
      name: 'Partnership Team',
      role: 'Sponsorships & Partnerships',
      description: 'Securing sponsors and building strategic partnerships',
    },
    {
      name: 'Programs Team',
      role: 'Content & Speakers',
      description: 'Curating content and confirming speakers',
    },
    {
      name: 'Media Team',
      role: 'Marketing & Communications',
      description: 'Social media campaigns and publicity',
    },
    {
      name: 'Logistics Team',
      role: 'Event Operations',
      description: 'Venue, materials, and day-of coordination',
    },
    {
      name: 'Grants Committee',
      role: 'Funding & Disbursement',
      description: 'Grant selection and impact tracking',
    },
  ];

  const milestones = [
    {
      phase: 'Project Kickoff',
      description: 'Planning and team setup',
      team: 'GUS Committee',
    },
    {
      phase: 'Partnership Drive',
      description: 'Seek sponsors and partners',
      team: 'Sponsorship Team',
    },
    {
      phase: 'Speaker Confirmation',
      description: 'Secure seasoned Muslimah entrepreneurs',
      team: 'Programs Lead',
    },
    {
      phase: 'Marketing Launch',
      description: 'Social media and campaign activation',
      team: 'Media Team',
    },
    {
      phase: 'Event Day',
      description: 'Full execution and coordination',
      team: 'All Teams',
    },
    {
      phase: 'Post-Event Review',
      description: 'Feedback collection and grant disbursement',
      team: 'Core Team',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF4D00] via-[#e64400] to-[#FF4D00]" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="blob absolute top-20 right-20 w-96 h-96 bg-white" />
        <div className="blob absolute bottom-20 left-20 w-80 h-80 bg-[#3C7A22]" style={{ animationDelay: '2s' }} />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-white/30">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm">Inaugural Event</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              GUS Muslimah Summit 1.0
            </h1>
            <p className="text-lg md:text-2xl mb-10 max-w-3xl mx-auto opacity-95 leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-lg">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <Calendar className="w-5 h-5" />
                <span>Coming Soon</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <MapPin className="w-5 h-5" />
                <span>Nigeria</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <Users className="w-5 h-5" />
                <span>Muslim Women Entrepreneurs</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Summit Overview */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-[#FF4D00]/10 text-[#FF4D00] rounded-full text-sm mb-4">
                About the Summit
              </span>
              <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-[#3C7A22] to-[#FF4D00] bg-clip-text text-transparent">
                About the Summit
              </h2>
            </div>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p className="p-6 bg-white rounded-2xl shadow-md">
                The GUS Muslimah Summit 1.0 is designed to empower Muslim women entrepreneurs 
                and aspiring business owners by merging business excellence with faith-based 
                principles, fostering growth rooted in Barakah.
              </p>
              <p className="p-6 bg-white rounded-2xl shadow-md">
                We address the challenge many Muslimah entrepreneurs face: aligning business 
                success with Islamic values. This summit bridges the gap between material growth 
                and spiritual purpose.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scope */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#3C7A22]/10 text-[#3C7A22] rounded-full text-sm mb-4">
              Event Features
            </span>
            <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-[#3C7A22] to-[#FF4D00] bg-clip-text text-transparent">
              What's Included
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {scopeItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full card-hover border-0 shadow-lg bg-white group">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3C7A22] to-[#4a9629] flex items-center justify-center text-white text-xl mb-4 shadow-lg group-hover:scale-110 transition-transform">
                      {index + 1}
                    </div>
                    <CardTitle className="text-xl group-hover:text-[#3C7A22] transition-colors">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-gray-600 leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* KPIs */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-[#3C7A22] to-[#FF4D00] bg-clip-text text-transparent">
              Success Criteria
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {kpis.map((kpi, index) => {
              const Icon = kpi.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full text-center card-hover border-0 shadow-lg bg-white group">
                    <CardHeader>
                      <div className="relative mb-4 mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FF4D00] to-[#e64400] rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                        <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#FF4D00] to-[#e64400] flex items-center justify-center mx-auto shadow-lg">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <CardTitle className="text-lg">{kpi.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600">
                        {kpi.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#3C7A22]/10 text-[#3C7A22] rounded-full text-sm mb-4">
              Roadmap
            </span>
            <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-[#3C7A22] to-[#FF4D00] bg-clip-text text-transparent">
              Summit Timeline
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border-l-4 border-[#3C7A22]"
              >
                <div className="flex items-start gap-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#3C7A22] to-[#4a9629] rounded-full blur-md opacity-20" />
                    <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-[#3C7A22] to-[#4a9629] flex items-center justify-center flex-shrink-0 text-white text-xl shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl mb-2 text-gray-900">{milestone.phase}</h3>
                    <p className="text-gray-700 mb-3 leading-relaxed">{milestone.description}</p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF4D00]/10 rounded-full">
                      <Clock className="w-4 h-4 text-[#FF4D00]" />
                      <span className="text-sm text-[#FF4D00]">
                        Responsible: {milestone.team}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Carousel */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#3C7A22]/10 text-[#3C7A22] rounded-full text-sm mb-4">
              Our Team
            </span>
            <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-[#3C7A22] to-[#FF4D00] bg-clip-text text-transparent">
              Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated professionals driving the GUS Muslimah Summit vision
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <Carousel 
              plugins={[teamPlugin.current]}
              className="w-full"
              onMouseEnter={teamPlugin.current.stop}
              onMouseLeave={teamPlugin.current.reset}
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent className="-ml-4">
                {teamMembers.map((member, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full card-hover border-0 shadow-lg hover:shadow-2xl bg-white">
                      <CardHeader>
                        <div className="relative mb-4 mx-auto">
                          <div className="absolute inset-0 bg-gradient-to-br from-[#3C7A22] to-[#FF4D00] rounded-full blur-xl opacity-20" />
                          <div 
                            className="relative w-20 h-20 rounded-full flex items-center justify-center mx-auto text-white text-3xl shadow-lg"
                            style={{ 
                              background: 'linear-gradient(135deg, #3C7A22 0%, #4a9629 100%)'
                            }}
                          >
                            {member.name.charAt(0)}
                          </div>
                        </div>
                        <CardTitle className="text-center text-xl">{member.name}</CardTitle>
                        <CardDescription className="text-center text-[#FF4D00]">
                          {member.role}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-center text-gray-700 leading-relaxed">
                          {member.description}
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-4 mt-8">
                <CarouselPrevious className="relative left-0 translate-y-0 bg-white hover:bg-gray-100 border-0 shadow-lg" />
                <CarouselNext className="relative right-0 translate-y-0 bg-white hover:bg-gray-100 border-0 shadow-lg" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3C7A22] via-[#2d5e1a] to-[#3C7A22]" />
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
              Ready to Join Us?
            </h2>
            <p className="text-lg md:text-xl mb-10 opacity-95 max-w-2xl mx-auto leading-relaxed">
              Secure your spot at the GUS Muslimah Summit 1.0 and be part of this transformative experience
            </p>
            <a
              href="https://chat.whatsapp.com/J5EUdlzgraF20W6PxEVjKo?mode=ems_copy_c"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="bg-white text-[#3C7A22] hover:bg-gray-100 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 px-10 py-6 text-lg"
              >
                {t.hero.cta} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
