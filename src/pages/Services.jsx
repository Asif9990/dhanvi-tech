import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  Flame, 
  Droplets, 
  Wrench, 
  Users, 
  Cpu, 
  ShieldAlert, 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  FileText,
  SlidersHorizontal,
  X
} from 'lucide-react';
import { SERVICES_DATA, buildWhatsAppLink, COMPANY_INFO } from '../data/company';

const ICON_MAP = {
  Flame,
  Droplets,
  Wrench,
  Users,
  Cpu,
  ShieldAlert,
  Building2
};

export default function Services({ setActivePage, setSelectedService }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalService, setActiveModalService] = useState(null);

  // Extract unique categories
  const categories = useMemo(() => {
    return ['All', ...new Set(SERVICES_DATA.map(s => s.category))];
  }, []);

  // Filtered services
  const filteredServices = useMemo(() => {
    return SERVICES_DATA.filter(service => {
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      const matchesSearch = 
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.items.some(i => i.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const handleRequestQuote = (serviceTitle) => {
    if (setSelectedService) setSelectedService(serviceTitle);
    setActivePage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppEnquiry = (serviceTitle) => {
    const link = buildWhatsAppLink({
      name: "",
      company: "",
      phone: "",
      email: "",
      service: serviceTitle,
      location: "",
      details: `Enquiring specifically regarding ${serviceTitle} capabilities.`
    });
    window.open(link, '_blank');
  };

  return (
    <div className="pt-28 pb-20 bg-[#05080D] min-h-screen">
      
      {/* Header Banner */}
      <section className="relative py-12 border-b border-slate-800/80 mb-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-industrial opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <span className="text-xs font-mono uppercase tracking-widest text-[#F26522] block mb-2 font-bold">
            Comprehensive Industrial Solutions
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 font-heading">
            Our Engineering Services
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            From heavy civil construction, RCC works, and structural mechanics to certified fire protection, high-pressure piping, and multi-tier manpower deployment.
          </p>
        </div>
      </section>

      {/* Search & Category Filter Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-10">
        <div className="bg-[#0B121C] rounded-2xl border border-slate-800 p-4 sm:p-5 shadow-lg flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services (e.g. fire extinguishers, RO plant, RCC, manpower, piping)..."
              className="w-full bg-[#070B12] border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#F26522] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#F26522] text-white font-semibold shadow-md shadow-[#F26522]/20'
                    : 'bg-[#070B12] text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-16">
        {filteredServices.length === 0 ? (
          <div className="bg-[#0B121C] rounded-2xl border border-slate-800 p-12 text-center max-w-lg mx-auto">
            <SlidersHorizontal className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">No Matching Services Found</h3>
            <p className="text-xs text-slate-400 mb-4">
              Try adjusting your search terms or select "All" categories.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-4 py-2 rounded-xl bg-[#F26522] text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => {
              const IconComp = ICON_MAP[service.icon] || Building2;
              return (
                <div 
                  key={service.id}
                  className="bg-[#0B121C] hover:bg-[#0E1624] rounded-2xl border border-slate-800/90 hover:border-[#F26522]/50 p-6 flex flex-col justify-between transition-all duration-300 group shadow-lg"
                >
                  <div>
                    {/* Header: Icon & Category */}
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center border"
                        style={{ 
                          backgroundColor: `${service.color}15`, 
                          borderColor: `${service.color}40`,
                          color: service.color 
                        }}
                      >
                        <IconComp className="w-6 h-6" />
                      </div>

                      <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
                        {service.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2.5 font-heading group-hover:text-[#F26522] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-sm text-slate-400 leading-relaxed mb-5">
                      {service.shortDescription}
                    </p>

                    {/* Scope Checklist from Company Profile */}
                    <div className="space-y-2 mb-6 pt-3 border-t border-slate-800/60">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-[#F26522] block mb-2 font-semibold">
                        Specific Deliverables:
                      </span>
                      {service.items.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#F26522] shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions & Detail Modal Trigger */}
                  <div className="pt-4 border-t border-slate-800/80 space-y-2.5 mt-auto">
                    <button
                      onClick={() => setActiveModalService(service)}
                      className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-slate-800/60 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-medium transition-colors"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Technical Specification Details</span>
                    </button>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => handleRequestQuote(service.title)}
                        className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#F26522] hover:bg-[#ff7638] text-white text-xs font-bold transition-all cursor-pointer shadow-md shadow-[#F26522]/20"
                      >
                        <span>Request Quote</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => handleWhatsAppEnquiry(service.title)}
                        className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/60 text-emerald-400 text-xs font-semibold border border-emerald-700/40 transition-all cursor-pointer"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>WhatsApp</span>
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#0B121C] border border-slate-800 rounded-2xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-mono uppercase tracking-widest text-[#F26522] block mb-1 font-bold">
              {activeModalService.category}
            </span>
            <h3 className="text-2xl font-bold text-white mb-4 font-heading">
              {activeModalService.title}
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {activeModalService.details}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 font-semibold">
                Verified Scope of Works:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeModalService.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-200 bg-[#070B12] p-2 rounded-lg border border-slate-800/80">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#F26522] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-slate-800/80">
              <button
                onClick={() => setActiveModalService(null)}
                className="px-4 py-2 rounded-xl text-slate-400 hover:text-white text-xs"
              >
                Close
              </button>

              <button
                onClick={() => {
                  const sTitle = activeModalService.title;
                  setActiveModalService(null);
                  handleRequestQuote(sTitle);
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#F26522] hover:bg-[#ff7638] text-white text-xs font-bold"
              >
                <span>Proceed to Quote Form</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
