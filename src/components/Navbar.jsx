import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, ArrowRight, ShieldCheck, HardHat } from 'lucide-react';
import Logo from './Logo';
import { COMPANY_INFO } from '../data/company';

export default function Navbar({ activePage, setActivePage }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About Us' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppDirect = () => {
    const defaultMsg = encodeURIComponent(
      `Hello Dhanvi Techno Engineering Team, I would like to enquire about your industrial engineering & construction services.`
    );
    window.open(`https://wa.me/919717058294?text=${defaultMsg}`, '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top micro-bar for direct contact & verification */}
      <div className="bg-[#0A1018] border-b border-slate-800/80 text-xs text-slate-400 py-1.5 px-4 sm:px-8 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-300">
              <HardHat className="w-3.5 h-3.5 text-[#F26522]" />
              Industrial Engineering & Civil Infrastructure
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Vasundhara, Ghaziabad, UP</span>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href={`tel:${COMPANY_INFO.phone}`} 
              className="flex items-center gap-1.5 text-slate-300 hover:text-[#F26522] transition-colors"
              title="Call Project Manager"
            >
              <Phone className="w-3.5 h-3.5 text-[#F26522]" />
              <span className="font-tech">{COMPANY_INFO.phone}</span>
              <span className="text-[10px] text-slate-500">({COMPANY_INFO.projectManager})</span>
            </a>
            <span className="text-slate-600">•</span>
            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="text-slate-300 hover:text-[#F26522] transition-colors font-tech"
            >
              {COMPANY_INFO.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className={`transition-all duration-300 ${
          scrolled 
            ? 'bg-[#0A1018]/95 backdrop-blur-md shadow-2xl shadow-black/50 border-b border-slate-800/90 py-3' 
            : 'bg-[#05080D]/85 backdrop-blur-sm border-b border-slate-800/50 py-4'
        } px-4 sm:px-8`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Company Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left focus:outline-none group cursor-pointer"
            aria-label="Dhanvi Techno Home"
          >
            <Logo variant="dark" size="sm" showTagline={false} className="group-hover:opacity-95 transition-opacity" />
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer ${
                    isActive 
                      ? 'text-white bg-[#0E1622] border border-[#F26522]/40 shadow-sm' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#F26522] rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Desktop Right CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={handleWhatsAppDirect}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg bg-[#0F201B] hover:bg-[#132C24] text-emerald-400 border border-emerald-600/40 transition-all cursor-pointer"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/20" />
              <span>WhatsApp</span>
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg bg-[#F26522] hover:bg-[#ff7536] text-white shadow-lg shadow-[#F26522]/20 hover:shadow-[#F26522]/35 transition-all cursor-pointer"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/80 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#F26522]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-slate-800 bg-[#0A1018] rounded-2xl p-4 shadow-2xl">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = activePage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-left transition-colors ${
                      isActive 
                        ? 'bg-[#F26522]/10 text-[#F26522] border border-[#F26522]/30 font-semibold' 
                        : 'text-slate-300 hover:bg-slate-800/60'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <ArrowRight className="w-4 h-4 text-[#F26522]" />}
                  </button>
                );
              })}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  handleNavClick('contact');
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#F26522] text-white font-bold text-sm shadow-md"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleWhatsAppDirect}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-950/80 text-emerald-400 border border-emerald-600/40 text-sm font-semibold"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enquire on WhatsApp (+91 9717058294)</span>
              </button>

              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-800/80 text-slate-200 text-sm font-medium"
              >
                <Phone className="w-4 h-4 text-[#F26522]" />
                <span>Call Project Manager: {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
