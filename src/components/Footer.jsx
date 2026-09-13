import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, ArrowUpRight, ShieldCheck, ChevronRight } from 'lucide-react';
import Logo from './Logo';
import { COMPANY_INFO, SERVICES_DATA } from '../data/company';

export default function Footer({ setActivePage }) {
  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceClick = (serviceId) => {
    setActivePage('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Dhanvi Techno Engineering Team, I would like to enquire about your services.`
    );
    window.open(`https://wa.me/919717058294?text=${text}`, '_blank');
  };

  return (
    <footer className="relative bg-[#070B12] text-slate-300 border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      {/* Background industrial grid accent */}
      <div className="absolute inset-0 bg-grid-industrial opacity-30 pointer-events-none" />

      {/* Subtle brand glow accent */}
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-[#F26522]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">
          
          {/* Col 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <button 
              onClick={() => handleNavClick('home')}
              className="text-left mb-5 focus:outline-none cursor-pointer"
            >
              <Logo variant="dark" size="md" showTagline={true} />
            </button>

            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-sm">
              Dhanvi Techno Engineering Private Limited delivers integrated engineering, industrial civil construction, fire safety solutions, mechanical piping, electrical systems, and verified workforce management.
            </p>

            <div className="p-3.5 rounded-xl bg-[#0E1622] border border-slate-800/80 flex items-center gap-3 w-full max-w-sm">
              <div className="w-9 h-9 rounded-lg bg-[#F26522]/15 border border-[#F26522]/30 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#F26522]" />
              </div>
              <div className="text-xs">
                <span className="text-white font-semibold block">Engineering Integrity</span>
                <span className="text-slate-400">Vasundhara Ghaziabad Head Office</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#F26522] mb-4 font-bold">
              Company Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'services', label: 'Core Services' },
                { id: 'about', label: 'About Company' },
                { id: 'projects', label: 'Project Capabilities' },
                { id: 'contact', label: 'Contact & Quotes' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-[#F26522] transition-colors" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#F26522] mb-4 font-bold">
              Core Engineering Services
            </h4>
            <ul className="space-y-2 text-sm">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => handleServiceClick(srv.id)}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer group text-left"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-[#F26522] shrink-0" />
                    <span className="line-clamp-1">{srv.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Verified Contact Info (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#F26522] mb-4 font-bold">
              Official Contact
            </h4>
            <div className="space-y-3.5 text-sm">
              <div>
                <span className="text-[11px] font-mono text-slate-500 uppercase block mb-0.5">Project Manager</span>
                <span className="text-white font-semibold">{COMPANY_INFO.projectManager}</span>
              </div>

              <a 
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-start gap-3 group text-slate-300 hover:text-white transition-colors"
              >
                <div className="w-7 h-7 rounded bg-slate-800/60 flex items-center justify-center shrink-0 mt-0.5 text-[#F26522]">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Phone & WhatsApp</span>
                  <span className="font-tech text-white group-hover:text-[#F26522]">{COMPANY_INFO.phone}</span>
                </div>
              </a>

              <a 
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-start gap-3 group text-slate-300 hover:text-white transition-colors"
              >
                <div className="w-7 h-7 rounded bg-slate-800/60 flex items-center justify-center shrink-0 mt-0.5 text-[#F26522]">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Official Email</span>
                  <span className="font-tech text-white group-hover:text-[#F26522] break-all">{COMPANY_INFO.email}</span>
                </div>
              </a>

              <div className="flex items-start gap-3 text-slate-300">
                <div className="w-7 h-7 rounded bg-slate-800/60 flex items-center justify-center shrink-0 mt-0.5 text-[#F26522]">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs text-slate-400 leading-relaxed">
                  <span className="text-slate-300 font-medium block">Office Address:</span>
                  {COMPANY_INFO.address}
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleWhatsApp}
                  className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-emerald-950/60 border border-emerald-600/40 text-emerald-400 text-xs font-semibold hover:bg-emerald-900/60 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Direct WhatsApp Chat</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Verified Info */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} <span className="text-slate-300 font-medium">{COMPANY_INFO.name}</span>. All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span>Website: <a href={COMPANY_INFO.websiteUrl} className="text-slate-300 hover:text-[#F26522] underline font-tech">{COMPANY_INFO.website}</a></span>
            <span>•</span>
            <span>{COMPANY_INFO.tagline}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
