import React from 'react';
import { 
  Building2, 
  Flame, 
  Wrench, 
  Users, 
  Droplets, 
  Cpu, 
  ShieldAlert, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  HardHat, 
  FileCheck,
  Compass
} from 'lucide-react';
import { PROJECT_CAPABILITIES, COMPANY_INFO } from '../data/company';

// Visual Schematic / Architectural Glyph per Capability
const CAPABILITY_ICONS = {
  "cap-industrial": Layers,
  "cap-structural": Wrench,
  "cap-civil": Building2,
  "cap-fire": Flame,
  "cap-electrical": ShieldAlert,
  "cap-plumbing": Compass,
  "cap-ro": Droplets,
  "cap-manpower": Users
};

export default function Projects({ setActivePage, setSelectedService }) {
  const handleQuoteClick = (capabilityTitle) => {
    if (setSelectedService) setSelectedService(capabilityTitle);
    setActivePage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-28 pb-20 bg-[#05080D] min-h-screen">
      
      {/* Header Banner */}
      <section className="relative py-14 border-b border-slate-800/80 mb-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid-industrial opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#F26522] block mb-2 font-bold">
              Engineering Execution Scope
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 font-heading">
              Our Project Capabilities
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Dhanvi Techno Engineering delivers specialized industrial, mechanical, civil, safety, and workforce execution capabilities designed for high structural reliability, regulatory compliance, and seamless commissioning.
            </p>
          </div>
        </div>
      </section>

      {/* Note on Verified Integrity */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-10">
        <div className="bg-[#0B121C] rounded-xl border border-slate-800/90 p-4 flex items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <FileCheck className="w-4 h-4 text-[#F26522] shrink-0" />
            <span>
              All project capabilities are supported directly by our engineering teams and certified on-site technicians under Project Manager <strong className="text-slate-200">Shahid Manzer</strong>.
            </span>
          </div>
          <span className="hidden sm:inline-block font-mono text-[11px] text-slate-500">
            Reg. Ghaziabad, UP
          </span>
        </div>
      </div>

      {/* Capabilities 8-Grid Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {PROJECT_CAPABILITIES.map((cap, idx) => {
            const Icon = CAPABILITY_ICONS[cap.id] || Building2;
            return (
              <div
                key={cap.id}
                className="bg-[#0B121C] rounded-2xl border border-slate-800 p-6 sm:p-8 flex flex-col justify-between hover:border-[#F26522]/50 transition-all duration-300 group shadow-xl"
              >
                <div>
                  {/* Top Header: Badge & Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#F26522]/15 border border-[#F26522]/30 text-[#F26522] flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono text-slate-500 uppercase block">Capability Area</span>
                        <h3 className="text-xl font-bold text-white font-heading group-hover:text-[#F26522] transition-colors">
                          {cap.title}
                        </h3>
                      </div>
                    </div>
                    <span className="text-3xl font-black font-tech text-slate-800 group-hover:text-slate-700 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {cap.description}
                  </p>

                  {/* Services / Execution Deliverables */}
                  <div className="mb-6 bg-[#070B12] p-4 rounded-xl border border-slate-800/80">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#F26522] block mb-2.5 font-semibold">
                      Included Scope & Services:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {cap.services.map((srv, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#F26522] shrink-0" />
                          <span>{srv}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-4 mt-auto">
                  <span className="text-xs text-slate-400">
                    Turnkey Engineering Solution
                  </span>

                  <button
                    onClick={() => handleQuoteClick(cap.title)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#131E2C] hover:bg-[#F26522] text-white text-xs font-bold border border-slate-700 hover:border-[#F26522] transition-all cursor-pointer shadow-sm"
                  >
                    <span>Request a Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-r from-[#0E1622] via-[#141F2E] to-[#0A1018] rounded-2xl border border-slate-800 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2 font-heading">
              Custom Industrial Project Inquiry?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              We tailor our engineering teams, civil machinery, and workforce supply to your precise timeline and engineering specifications.
            </p>
          </div>

          <button
            onClick={() => {
              setActivePage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-6 py-3.5 rounded-xl bg-[#F26522] hover:bg-[#ff7638] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#F26522]/30 shrink-0 transition-all cursor-pointer"
          >
            Contact Project Manager
          </button>
        </div>
      </section>

    </div>
  );
}
