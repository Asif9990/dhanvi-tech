import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function WhatsAppButton() {
  const [tooltipVisible, setTooltipVisible] = useState(true);

  const handleOpenWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Dhanvi Techno Engineering Team, I would like to enquire about your industrial engineering & construction services.`
    );
    window.open(`https://wa.me/919717058294?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Tooltip speech bubble */}
      {tooltipVisible && (
        <div className="hidden sm:flex items-center gap-2 bg-[#0A1018] text-white text-xs py-2 px-3.5 rounded-xl border border-emerald-500/40 shadow-2xl animate-bounce">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span className="font-medium">Direct WhatsApp: <strong className="text-emerald-400 font-tech">{COMPANY_INFO.phone}</strong></span>
          <button 
            onClick={() => setTooltipVisible(false)}
            className="text-slate-400 hover:text-white ml-1 p-0.5"
            aria-label="Dismiss"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Main Action Floating Button */}
      <button
        onClick={handleOpenWhatsApp}
        className="group relative flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl shadow-emerald-600/40 hover:scale-105 active:scale-95 transition-all duration-300 border border-emerald-400/40"
        title="Chat with Dhanvi Techno on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-7 h-7 text-white fill-white/20" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#F26522] rounded-full border-2 border-[#0A1018]" />
      </button>
    </div>
  );
}
