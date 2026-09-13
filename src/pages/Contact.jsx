import React from 'react';
import { 
  Phone, 
  MessageSquare, 
  Mail, 
  MapPin, 
  Globe, 
  HardHat, 
  Clock, 
  ShieldCheck, 
  ArrowUpRight 
} from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { COMPANY_INFO } from '../data/company';

export default function Contact({ preSelectedService }) {
  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Dhanvi Techno Engineering Team, I would like to enquire about your services.`
    );
    window.open(`https://wa.me/919717058294?text=${text}`, '_blank');
  };

  return (
    <div className="pt-28 pb-20 bg-[#05080D] min-h-screen">
      
      {/* Header Banner */}
      <section className="relative py-14 border-b border-slate-800/80 mb-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid-industrial opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <span className="text-xs font-mono uppercase tracking-widest text-[#F26522] block mb-2 font-bold">
            Direct Commercial & Technical Channel
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 font-heading">
            Contact & Request a Quote
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Connect directly with Project Manager <strong className="text-white">Shahid Manzer</strong> for industrial engineering solutions, site evaluations, civil works, or technical staffing estimates.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Official Contact Information (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Project Manager Card */}
            <div className="bg-[#0B121C] rounded-2xl border border-slate-800 p-6 sm:p-7 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#F26522]/15 border border-[#F26522]/30 text-[#F26522] flex items-center justify-center shrink-0">
                  <HardHat className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#F26522] uppercase tracking-wider block">
                    {COMPANY_INFO.designation}
                  </span>
                  <h3 className="text-xl font-bold text-white font-heading">
                    {COMPANY_INFO.projectManager}
                  </h3>
                  <span className="text-xs text-slate-400">
                    {COMPANY_INFO.name}
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed mb-6 pt-4 border-t border-slate-800/80">
                Direct point of contact for technical BOQs, project consultations, commercial tenders, and site visits across Ghaziabad and Delhi NCR.
              </p>

              {/* Direct Action Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#F26522]" />
                  <span>Call Directly</span>
                </a>

                <button
                  onClick={handleWhatsApp}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/80 text-emerald-400 text-xs font-semibold border border-emerald-600/40 transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Detailed Contact List */}
            <div className="bg-[#0B121C] rounded-2xl border border-slate-800 p-6 sm:p-7 space-y-5 shadow-xl">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#F26522] font-bold">
                Company Credentials
              </h4>

              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#070B12] border border-slate-800 flex items-center justify-center text-[#F26522] shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-500 uppercase block">Phone / WhatsApp</span>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="text-sm font-bold text-white hover:text-[#F26522] font-tech transition-colors">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#070B12] border border-slate-800 flex items-center justify-center text-[#F26522] shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-500 uppercase block">Official Email</span>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm font-semibold text-white hover:text-[#F26522] font-tech break-all transition-colors">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#070B12] border border-slate-800 flex items-center justify-center text-[#F26522] shrink-0 mt-0.5">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-500 uppercase block">Official Web Domain</span>
                  <a href={COMPANY_INFO.websiteUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#F26522] hover:underline font-tech">
                    {COMPANY_INFO.website}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5 pt-2 border-t border-slate-800/80">
                <div className="w-9 h-9 rounded-lg bg-[#070B12] border border-slate-800 flex items-center justify-center text-[#F26522] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-500 uppercase block">Office Address</span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {COMPANY_INFO.address}
                  </p>
                  <span className="text-[11px] text-slate-500 block mt-1">
                    Landmark: {COMPANY_INFO.landmark}
                  </span>
                </div>
              </div>
            </div>

            {/* Operating Hours & Response */}
            <div className="bg-[#0E1622] rounded-2xl border border-slate-800 p-5 flex items-center gap-3.5">
              <Clock className="w-6 h-6 text-[#F26522] shrink-0" />
              <div className="text-xs">
                <span className="text-white font-semibold block">Office Hours: Mon – Sat (9:00 AM – 7:00 PM)</span>
                <span className="text-slate-400">Emergency breakdown & on-site support available 24/7 for contracted clients.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm preSelectedService={preSelectedService} />
          </div>

        </div>

        {/* Embedded Google Map Section */}
        <div className="mt-16 bg-[#0B121C] rounded-2xl border border-slate-800 p-6 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#F26522] font-bold">
                Location Map
              </span>
              <h3 className="text-lg font-bold text-white font-heading">
                Visit Our Registered Office in Vasundhara Ghaziabad
              </h3>
            </div>
            <span className="text-xs text-slate-400 font-tech">Sector-5, Vasundhara, Ghaziabad – 201012</span>
          </div>

          {/* Google Maps Iframe */}
          <div className="w-full h-80 rounded-xl overflow-hidden border border-slate-800 relative bg-[#070B12]">
            <iframe
              title="Dhanvi Techno Engineering Office Location"
              src={COMPANY_INFO.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(85%) contrast(90%)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>

    </div>
  );
}
