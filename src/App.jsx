import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import LoadingScreen from './components/LoadingScreen';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activePage, setActivePage] = useState('home');
  const [selectedService, setSelectedService] = useState('');

  // Handle URL hash or path on mount
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'services', 'about', 'projects', 'contact'].includes(hash)) {
        setActivePage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handlePageChange = (pageId) => {
    setActivePage(pageId);
    window.location.hash = pageId === 'home' ? '' : pageId;
  };

  return (
    <div className="min-h-screen bg-[#05080D] text-slate-100 flex flex-col selection:bg-[#F26522] selection:text-white">
      {/* Initial Branded Loading Screen */}
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      {/* Sticky Header Navbar */}
      <Navbar activePage={activePage} setActivePage={handlePageChange} />

      {/* Main Multi-Page View Container */}
      <main className="flex-1">
        {activePage === 'home' && (
          <Home 
            setActivePage={handlePageChange} 
            setSelectedService={setSelectedService} 
          />
        )}
        {activePage === 'services' && (
          <Services 
            setActivePage={handlePageChange} 
            setSelectedService={setSelectedService} 
          />
        )}
        {activePage === 'about' && (
          <About 
            setActivePage={handlePageChange} 
          />
        )}
        {activePage === 'projects' && (
          <Projects 
            setActivePage={handlePageChange} 
            setSelectedService={setSelectedService} 
          />
        )}
        {activePage === 'contact' && (
          <Contact 
            preSelectedService={selectedService} 
          />
        )}
      </main>

      {/* Floating WhatsApp Quick Action Button */}
      <WhatsAppButton />

      {/* Official Company Footer */}
      <Footer setActivePage={handlePageChange} />
    </div>
  );
}
