import React from 'react';
import { Card, CardContent } from './ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useLanguage } from '../contexts/LanguageContext';

export const TeamCarousel = () => {
  const { language } = useLanguage();

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const teamMembers = [
    {
      name: 'Aisha Mohammed',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1625987306773-8b9e554b25e2?w=400&h=400&fit=crop',
      bio: 'Passionate about empowering Muslim women entrepreneurs',
    },
    {
      name: 'Fatima Abdullah',
      role: 'Director of Programs',
      image: 'https://images.unsplash.com/photo-1606877096964-c306a05f4d6f?w=400&h=400&fit=crop',
      bio: 'Leading innovative business training programs',
    },
    {
      name: 'Zainab Hassan',
      role: 'Community Manager',
      image: 'https://images.unsplash.com/photo-1724627561306-508445c15be9?w=400&h=400&fit=crop',
      bio: 'Building connections within our global community',
    },
    {
      name: 'Maryam Ali',
      role: 'Business Mentor',
      image: 'https://images.unsplash.com/photo-1728135394135-58c2236cd2bb?w=400&h=400&fit=crop',
      bio: 'Guiding entrepreneurs with faith-based principles',
    },
    {
      name: 'Khadijah Ibrahim',
      role: 'Events Coordinator',
      image: 'https://images.unsplash.com/photo-1625987306773-8b9e554b25e2?w=400&h=400&fit=crop',
      bio: 'Creating memorable and impactful summit experiences',
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-4">
          {teamMembers.map((member, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <Card className="card-hover overflow-hidden border-2 h-full shadow-lg hover:shadow-2xl transition-shadow">
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div 
                      className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                    />
                  </div>
                  <div className="p-6 flex-1 bg-white">
                    <h3 className="text-xl mb-2" style={{ color: '#3C7A22' }}>
                      {member.name}
                    </h3>
                    <p 
                      className="text-sm mb-3"
                      style={{ color: '#FF4D00' }}
                    >
                      {member.role}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-4 mt-8">
          <CarouselPrevious className="relative left-0 translate-y-0" />
          <CarouselNext className="relative right-0 translate-y-0" />
        </div>
      </Carousel>
    </div>
  );
};
