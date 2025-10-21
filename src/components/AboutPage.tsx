import React from 'react';
import { Target, Eye, Heart, Users, Globe, Award, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { motion } from 'motion/react';

export const AboutPage = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Heart,
      title: 'Faith-Centered',
      description: 'Rooted in Islamic principles and values, fostering Barakah in all endeavors',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a supportive network of Muslim women entrepreneurs',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Striving for business excellence while maintaining spiritual integrity',
    },
    {
      icon: Globe,
      title: 'Empowerment',
      description: 'Enabling women to thrive in business with confidence and purpose',
    },
  ];

  const painPoints = [
    {
      title: 'Limited Access to Mentorship',
      description: 'Many Muslimah entrepreneurs lack access to faith-driven business mentorship and guidance.',
    },
    {
      title: 'Gap Between Faith and Business',
      description: 'Struggle to align business success with Islamic values, creating internal conflict.',
    },
    {
      title: 'Few Supportive Platforms',
      description: 'Limited platforms that promote women\'s entrepreneurship with Islamic guidance.',
    },
    {
      title: 'Need for Practical Skills',
      description: 'Desire for hands-on, skill-based training and networking opportunities among Muslim women.',
    },
  ];

  const solutions = [
    {
      title: 'Faith-Driven Mentorship',
      description: 'Connect with seasoned Muslimah entrepreneurs who understand your journey',
    },
    {
      title: 'Practical Training',
      description: 'Hands-on workshops and skill-building sessions tailored for Muslim women',
    },
    {
      title: 'Funding Opportunities',
      description: 'Access to business grants to kickstart or scale your venture',
    },
    {
      title: 'Strong Network',
      description: 'Build lasting connections with like-minded Muslim women entrepreneurs',
    },
  ];

  const stats = [
    { number: '500+', label: 'Participants' },
    { number: '50+', label: 'Partnerships' },
    { number: '20+', label: 'Workshops' },
    { number: '10+', label: 'Grants Awarded' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero */}
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
              About Us
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              {t.about.title}
            </h1>
            <p className="text-lg md:text-2xl max-w-3xl mx-auto opacity-95 leading-relaxed">
              {t.about.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full card-hover border-0 shadow-xl bg-white">
                <CardHeader>
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#3C7A22] to-[#4a9629] rounded-2xl blur-xl opacity-20" />
                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3C7A22] to-[#4a9629] flex items-center justify-center shadow-lg">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-3xl">{t.mission.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t.mission.content}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full card-hover border-0 shadow-xl bg-white">
                <CardHeader>
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF4D00] to-[#e64400] rounded-2xl blur-xl opacity-20" />
                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF4D00] to-[#e64400] flex items-center justify-center shadow-lg">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-3xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    To create a thriving ecosystem where Muslim women entrepreneurs can build 
                    successful businesses that honor their faith, serve their communities, and 
                    leave a lasting legacy of Barakah.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              Our Values
            </span>
            <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-[#3C7A22] to-[#FF4D00] bg-clip-text text-transparent">
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full text-center card-hover border-0 shadow-lg bg-white">
                    <CardHeader>
                      <div className="relative mb-4 mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#3C7A22] to-[#FF4D00] rounded-full blur-xl opacity-20" />
                        <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#3C7A22] to-[#4a9629] flex items-center justify-center mx-auto shadow-lg">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Problem Statement */}
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
              <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-[#3C7A22] to-[#FF4D00] bg-clip-text text-transparent">
                Challenges We Address
              </h2>
            </div>

            <div className="space-y-6">
              {painPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 md:p-8 rounded-2xl bg-white shadow-lg border-l-4 border-[#FF4D00] hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-xl md:text-2xl mb-3 text-[#3C7A22]">
                    {point.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {point.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-[#3C7A22] to-[#FF4D00] bg-clip-text text-transparent">
              How We Help
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full card-hover border-0 shadow-lg bg-white group">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF4D00] to-[#e64400] flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-110 transition-transform">
                        {index + 1}
                      </div>
                      <CardTitle className="text-2xl">{solution.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {solution.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story/Background */}
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
              <span className="inline-block px-4 py-2 bg-[#3C7A22]/10 text-[#3C7A22] rounded-full text-sm mb-4">
                Our Journey
              </span>
              <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-[#3C7A22] to-[#FF4D00] bg-clip-text text-transparent">
                Our Story
              </h2>
            </div>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p className="p-6 bg-white rounded-2xl shadow-md">
                Global United Sisters (GUS) was born from a recognition that Muslim women 
                entrepreneurs face unique challenges in balancing their faith with their 
                business ambitions. Too often, Muslimahs are forced to choose between spiritual 
                fulfillment and material success.
              </p>
              <p className="p-6 bg-white rounded-2xl shadow-md">
                We believe this is a false dichotomy. Islam provides comprehensive guidance 
                for ethical business practices, and Barakah (divine blessing) comes from 
                aligning our work with our faith. The GUS Muslimah Summit is our answer to 
                this need—a space where Muslim women can learn, grow, and thrive as entrepreneurs 
                without compromising their values.
              </p>
              <p className="p-6 bg-white rounded-2xl shadow-md">
                Through mentorship, training, networking, and funding opportunities, we're 
                building a community of faith-driven entrepreneurs who are changing the narrative 
                and proving that you can have both spiritual purpose and business success.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats/Impact */}
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl mb-4">
                Expected Impact
              </h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Together, we're building a movement that will transform the landscape for Muslim women entrepreneurs
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="relative mb-4">
                    <TrendingUp className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <div className="text-5xl md:text-6xl">{stat.number}</div>
                  </div>
                  <p className="text-lg md:text-xl opacity-90">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
