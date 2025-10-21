import React from 'react';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useBlog } from '../contexts/BlogContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export const BlogPage = () => {
  const { t } = useLanguage();
  const { posts } = useBlog();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

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
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-white/30">
              <BookOpen className="w-4 h-4" />
              <span className="text-sm">Insights & Updates</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              {t.blog.title}
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-95 leading-relaxed">
              Stay updated with the latest news, insights, and stories from the GUS community
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {posts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center py-20"
              >
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3C7A22] to-[#FF4D00] rounded-full blur-2xl opacity-20" />
                  <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#3C7A22] to-[#4a9629] flex items-center justify-center mx-auto shadow-xl">
                    <BookOpen className="w-12 h-12 text-white" />
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl mb-4 text-gray-900">
                  No Posts Yet
                </h2>
                <p className="text-lg text-gray-600 max-w-md mx-auto">
                  {t.blog.noPosts}
                </p>
              </motion.div>
            ) : (
              <div className="space-y-8">
                {posts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="card-hover border-0 shadow-lg hover:shadow-2xl bg-white overflow-hidden group">
                      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#3C7A22] to-[#FF4D00] opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      <CardHeader className="space-y-4">
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#3C7A22]/10 rounded-full">
                            <Calendar className="w-4 h-4 text-[#3C7A22]" />
                            <span className="text-[#3C7A22]">{formatDate(post.date)}</span>
                          </span>
                          <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF4D00]/10 rounded-full">
                            <User className="w-4 h-4 text-[#FF4D00]" />
                            <span className="text-[#FF4D00]">{post.author}</span>
                          </span>
                        </div>
                        
                        <CardTitle className="text-2xl md:text-3xl text-gray-900 group-hover:text-[#3C7A22] transition-colors">
                          {post.title}
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        <div 
                          className="prose max-w-none text-gray-700 leading-relaxed blog-content"
                          dangerouslySetInnerHTML={{ 
                            __html: post.content.substring(0, 300) + (post.content.length > 300 ? '...' : '') 
                          }}
                        />
                        
                        {post.content.length > 300 && (
                          <Button 
                            variant="link" 
                            className="p-0 h-auto text-[#3C7A22] hover:text-[#2d5e1a] group/button"
                          >
                            <span>{t.blog.readMore}</span>
                            <ArrowRight className="ml-2 w-4 h-4 group-hover/button:translate-x-1 transition-transform" />
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
