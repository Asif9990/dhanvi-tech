import React from 'react';
import { 
  ArrowRight, 
  MessageSquare, 
  Phone, 
  ShieldCheck, 
  CheckCircle2, 
  Building2, 
  Flame, 
  Wrench, 
  Users, 
  Droplets, 
  Cpu, 
  ShieldAlert, 
  HardHat, 
  Layers, 
  Clock, 
  Compass 
} from 'lucide-react';
import Hero3D from '../components/Hero3D';
import ServiceCard from '../components/ServiceCard';
import { COMPANY_INFO, SERVICES_DATA, WHY_CHOOSE_US, EXECUTION_PROCESS } from '../data/company';

export default function Home({ setActivePage, setSelectedService }) {
  const handleSelectServiceForQuote = (serviceTitle) => {
    if (setSelectedService) setSelectedService(serviceTitle);
    setActivePage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppContact = () => {
    const text = encodeURIComponent(
      `Hello Dhanvi Techno Engineering Team, I would like to enquire about your engineering and construction services.`
    );
    window.open(`https://wa.me/919717058294?text=${text}`, '_blank');
  };

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* ========================================================================= */}
      {/* 1. CINEMATIC 3D HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative min-h-[90vh] lg:min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden border-b border-slate-800/80">
        {/* Background Grid Accent */}
        <div className="absolute inset-0 bg-grid-industrial opacity-40 pointer-events-none" />
        
        {/* Ambient Orange Brand Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#F26522]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Headlines & Call-to-Actions (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-start z-10">
              
              {/* Engineering Tag Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E1622] border border-[#F26522]/40 text-[#F26522] text-xs font-mono uppercase tracking-widest mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#F26522] animate-ping" />
                <span>{COMPANY_INFO.tagline}</span>
              </div>

              {/* Hero Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-5 font-heading tracking-tight">
                Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-[#F26522]">Excellence.</span><br />
                <span className="text-white">Built for the Future.</span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
                {COMPANY_INFO.name} provides integrated engineering, construction, safety, and manpower solutions for industrial and commercial requirements.
              </p>

              {/* 3 Hero Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-10">
                <button
                  onClick={() => {
                    setActivePage('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-white font-semibold text-sm border border-slate-700 hover:border-slate-500 shadow-md transition-all cursor-pointer"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4 text-[#F26522]" />
                </button>

                <button
                  onClick={() => {
                    setActivePage('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#F26522] hover:bg-[#ff7638] text-white font-bold text-sm shadow-xl shadow-[#F26522]/30 hover:shadow-[#F26522]/45 transition-all cursor-pointer"
                >
                  <span>Get a Free Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleWhatsAppContact}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/80 text-emerald-400 font-semibold text-sm border border-emerald-600/40 transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Contact</span>
                </button>
              </div>

              {/* Key Highlights Micro-Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-800/90 w-full">
                <div>
                  <span className="text-[11px] font-mono text-slate-500 uppercase block mb-0.5">Direct Management</span>
                  <span className="text-sm font-semibold text-white">{COMPANY_INFO.projectManager}</span>
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-500 uppercase block mb-0.5">Headquarters</span>
                  <span className="text-sm font-semibold text-white">Vasundhara Ghaziabad</span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-[11px] font-mono text-slate-500 uppercase block mb-0.5">Response Time</span>
                  <span className="text-sm font-semibold text-[#F26522]">Immediate On-Site Support</span>
                </div>
              </div>

            </div>

            {/* Right Column: Interactive 3D Industrial Scene (5 cols) */}
            <div className="lg:col-span-5 h-[480px] lg:h-[600px] w-full flex items-center justify-center relative">
              <Hero3D />
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. COMPANY INTRODUCTION */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#070B12] relative border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <span className="text-xs font-mono uppercase tracking-widest text-[#F26522] block mb-2 font-bold">
                About The Enterprise
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 font-heading">
                Integrated Industrial & Civil Engineering
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                <strong className="text-white">{COMPANY_INFO.name}</strong> operates as an integrated multi-discipline contractor serving industrial, commercial, and infrastructural sectors from our registered office in Vasundhara, Ghaziabad.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Under the project management of <strong className="text-slate-200">{COMPANY_INFO.projectManager}</strong>, we coordinate civil structural works, certified fire safety protection, high-pressure piping manifolds, electrical substations, and compliant contract manpower supply under single-window responsibility.
              </p>

              <div className="space-y-3">
                {[
                  "Complete engineering solutions from foundation to testing",
                  "Direct operational communication with Project Manager",
                  "Certified fire fighting installations and Annual Maintenance (AMC)",
                  "Verified technical, skilled, and facility manpower deployment"
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#F26522] shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Official Visiting Card Brand Panel */}
            <div className="lg:col-span-7">
              <div className="bg-[#0B121C] rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#F26522]" />
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                      Official Visiting Card & Identity Credentials
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">Reg. Ghaziabad – 201012</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs font-mono text-slate-400 uppercase block">Company Name</span>
                      <p className="text-base font-bold text-white font-heading">{COMPANY_INFO.name}</p>
                    </div>

                    <div>
                      <span className="text-xs font-mono text-slate-400 uppercase block">Tagline</span>
                      <p className="text-sm font-semibold text-[#F26522]">"{COMPANY_INFO.tagline}"</p>
                    </div>

                    <div>
                      <span className="text-xs font-mono text-slate-400 uppercase block">Project Manager</span>
                      <p className="text-sm font-bold text-white flex items-center gap-1.5">
                        <HardHat className="w-4 h-4 text-[#F26522]" />
                        {COMPANY_INFO.projectManager}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 bg-[#070B12] p-4 rounded-xl border border-slate-800/80">
                    <div>
                      <span className="text-xs font-mono text-slate-400 uppercase block">Direct Contact</span>
                      <a href={`tel:${COMPANY_INFO.phone}`} className="text-sm font-bold text-white hover:text-[#F26522] font-tech block">
                        {COMPANY_INFO.phone}
                      </a>
                    </div>

                    <div>
                      <span className="text-xs font-mono text-slate-400 uppercase block">Official Email</span>
                      <a href={`mailto:${COMPANY_INFO.email}`} className="text-xs font-medium text-slate-300 hover:text-[#F26522] font-tech break-all block">
                        {COMPANY_INFO.email}
                      </a>
                    </div>

                    <div>
                      <span className="text-xs font-mono text-slate-400 uppercase block">Official Web Domain</span>
                      <span className="text-xs font-medium text-[#F26522] font-tech">{COMPANY_INFO.website}</span>
                    </div>

                    <div>
                      <span className="text-xs font-mono text-slate-400 uppercase block">Corporate Address</span>
                      <p className="text-xs text-slate-300 leading-snug">
                        {COMPANY_INFO.address}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800/80 text-xs text-slate-400">
                  <span>Category: Industrial Engineering & Construction</span>
                  <button
                    onClick={() => {
                      setActivePage('about');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-[#F26522] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    <span>Read Full Company Profile</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. CORE SERVICES OVERVIEW */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#05080D] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#F26522] block mb-2 font-bold">
                What We Deliver
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
                Core Industrial & Engineering Services
              </h2>
            </div>
            <button
              onClick={() => {
                setActivePage('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm text-[#F26522] hover:text-[#ff7638] font-semibold group cursor-pointer"
            >
              <span>View All 7 Service Categories with Full Scope</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.slice(0, 6).map((service) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                onSelectService={handleSelectServiceForQuote} 
              />
            ))}
          </div>

          {/* 7th Service Banner: Civil & Construction Services */}
          <div className="mt-8 bg-[#0E1622] rounded-2xl border border-slate-800 p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-xl">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#F26522] uppercase tracking-wider mb-2">
                <Building2 className="w-4 h-4" />
                <span>Heavy Infrastructure Focus</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-heading">
                Civil & Construction Services (RCC, Masonry, Roads & Drainage)
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Building construction, civil repair & maintenance, renovation works, RCC/masonry, flooring, drainage pipelines, manholes, and infrastructure upkeep.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => handleSelectServiceForQuote("Civil & Construction Services")}
                className="px-6 py-3 rounded-xl bg-[#F26522] hover:bg-[#ff7638] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Civil Work Quote
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. WHY CHOOSE DHANVI TECHNO */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#0A1018] relative border-t border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#F26522] block mb-2 font-bold">
              Engineering Reliability
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 font-heading">
              Why Industrial Clients Partner With Us
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Built upon practical engineering competence, strict code adherence, and transparent project management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-[#070B12] rounded-2xl border border-slate-800 p-6 flex flex-col justify-between hover:border-[#F26522]/40 transition-colors"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#F26522]/15 border border-[#F26522]/30 text-[#F26522] font-mono font-bold text-sm flex items-center justify-center mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 font-heading">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. PROJECT EXECUTION PROCESS */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#05080D] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#F26522] block mb-2 font-bold">
              Systematic Delivery
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 font-heading">
              Our 5-Stage Project Execution Process
            </h2>
            <p className="text-slate-400 text-sm">
              How Dhanvi Techno manages your requirement from technical site analysis to post-handover maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {EXECUTION_PROCESS.map((proc) => (
              <div 
                key={proc.step}
                className="relative bg-[#0B121C] rounded-2xl border border-slate-800 p-5 flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-black font-tech text-slate-700 block mb-3">
                    {proc.step}
                  </span>
                  <h4 className="text-sm font-bold text-white mb-2 font-heading">
                    {proc.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {proc.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. CALL-TO-ACTION BANNER */}
      {/* ========================================================================= */}
      <section className="py-16 bg-gradient-to-r from-[#0E1622] via-[#141F2E] to-[#0A1018] border-t border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-industrial opacity-25 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#F26522] mb-2 font-bold">
              <Phone className="w-3.5 h-3.5" />
              <span>Direct Project Manager Consultation</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-2 font-heading">
              Have an Industrial, Civil, or Safety Requirement?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
              Connect directly with Shahid Manzer (+91 9717058294) to discuss technical specifications, site surveys, or formal quotes.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3.5 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold uppercase tracking-wider border border-slate-600 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#F26522]" />
              <span>Call +91 9717058294</span>
            </a>

            <button
              onClick={() => {
                setActivePage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#F26522] hover:bg-[#ff7638] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#F26522]/30 transition-all cursor-pointer"
            >
              <span>Request Quote Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
