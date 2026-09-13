import React from 'react';
import { 
  Flame, 
  Droplets, 
  Wrench, 
  Users, 
  Cpu, 
  ShieldAlert, 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare 
} from 'lucide-react';
import { buildWhatsAppLink } from '../data/company';

// Icon mapper for dynamic services
const ICON_COMPONENTS = {
  Flame,
  Droplets,
  Wrench,
  Users,
  Cpu,
  ShieldAlert,
  Building2
};

export default function ServiceCard({ service, onSelectService }) {
  const IconComponent = ICON_COMPONENTS[service.icon] || Building2;

  const handleWhatsAppEnquiry = (e) => {
    e.stopPropagation();
    const link = buildWhatsAppLink({
      name: "",
      company: "",
      phone: "",
      email: "",
      service: service.title,
      location: "",
      details: `Enquiring specifically about ${service.title} services.`
    });
    window.open(link, '_blank');
  };

  const handleQuoteClick = () => {
    if (onSelectService) {
      onSelectService(service.title);
    }
  };

  return (
    <div 
      className="group relative flex flex-col justify-between bg-[#0B121C] hover:bg-[#0E1624] rounded-2xl border border-slate-800/90 hover:border-[#F26522]/50 p-6 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#F26522]/10"
    >
      {/* Top Accent Orange Notch on hover */}
      <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-[#F26522] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        {/* Header: Icon & Category */}
        <div className="flex items-center justify-between gap-4 mb-5">
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-105"
            style={{ 
              backgroundColor: `${service.color}15`, 
              borderColor: `${service.color}40`,
              color: service.color 
            }}
          >
            <IconComponent className="w-6 h-6" />
          </div>

          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800">
            {service.category}
          </span>
        </div>

        {/* Title & Short Description */}
        <h3 className="text-xl font-bold text-white mb-2.5 font-heading group-hover:text-[#F26522] transition-colors">
          {service.title}
        </h3>
        
        <p className="text-sm text-slate-400 leading-relaxed mb-5">
          {service.shortDescription}
        </p>

        {/* Service Checklist */}
        <div className="space-y-2 mb-6 pt-3 border-t border-slate-800/60">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#F26522] block mb-2 font-semibold">
            Scope of Solutions:
          </span>
          {service.items.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#F26522] shrink-0 mt-0.5" />
              <span className="leading-snug">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-2 mt-auto">
        <button
          onClick={handleQuoteClick}
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#131E2C] hover:bg-[#F26522] text-white text-xs font-semibold border border-slate-700/60 hover:border-[#F26522] transition-all cursor-pointer"
        >
          <span>Get Quote</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={handleWhatsAppEnquiry}
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/60 text-emerald-400 hover:text-emerald-300 text-xs font-semibold border border-emerald-700/40 transition-all cursor-pointer"
          title="WhatsApp Enquiry"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </button>
      </div>
    </div>
  );
}
