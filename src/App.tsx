import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { BlogProvider, useBlog } from './contexts/BlogContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { SummitPage } from './components/SummitPage';
import { BlogPage } from './components/BlogPage';
import { ContactPage } from './components/ContactPage';
import { AdminLogin } from './components/AdminLogin';
import { AdminPanel } from './components/AdminPanel';
import { WhatsAppSupport } from './components/WhatsAppSupport';
import { Toaster } from './components/ui/sonner';

function AppContent() {
  const getInitialPage = () => {
    const hash = window.location.hash.slice(1) || 'home';
    return hash.startsWith('admin') ? 'home' : hash;
  };

  const [currentPage, setCurrentPage] = useState(getInitialPage());
  const [showAdmin, setShowAdmin] = useState(false);
  const [logoClickCount, setLogoClickCount] = useState(0);
  const [logoClickTimer, setLogoClickTimer] = useState<NodeJS.Timeout | null>(null);
  const { isAuthenticated } = useBlog();

  // Listen to hash changes for browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home';
      if (!hash.startsWith('admin')) {
        setCurrentPage(hash);
        setShowAdmin(false);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Handle logo clicks for admin access
  const handleLogoClick = () => {
    // Clear existing timer
    if (logoClickTimer) {
      clearTimeout(logoClickTimer);
    }

    const newCount = logoClickCount + 1;
    setLogoClickCount(newCount);

    // Check if 3 clicks reached
    if (newCount === 3) {
      setShowAdmin(true);
      setLogoClickCount(0);
      return;
    }

    // Reset counter after 5 seconds
    const timer = setTimeout(() => {
      setLogoClickCount(0);
    }, 5000);

    setLogoClickTimer(timer);
  };

  // Navigate to a page
  const handleNavigate = (page: string) => {
    window.location.hash = page;
    setCurrentPage(page);
    setShowAdmin(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle successful admin login
  const handleAdminLoginSuccess = () => {
    // Admin panel will be shown automatically through isAuthenticated check
  };

  // Render the appropriate page
  const renderPage = () => {
    if (showAdmin) {
      if (isAuthenticated) {
        return <AdminPanel onBack={() => setShowAdmin(false)} />;
      }
      return (
        <AdminLogin 
          onSuccess={handleAdminLoginSuccess} 
          onBack={() => setShowAdmin(false)} 
        />
      );
    }

    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage />;
      case 'summit':
        return <SummitPage />;
      case 'blog':
        return <BlogPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {!showAdmin && (
        <Header 
          onNavigate={handleNavigate} 
          currentPage={currentPage}
          onLogoClick={handleLogoClick}
        />
      )}
      
      <main className="flex-1">
        {renderPage()}
      </main>
      
      {!showAdmin && <Footer />}
      {!showAdmin && <WhatsAppSupport />}
      <Toaster />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <BlogProvider>
        <AppContent />
      </BlogProvider>
    </LanguageProvider>
  );
}
