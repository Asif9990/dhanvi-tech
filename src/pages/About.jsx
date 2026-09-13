import React from 'react';
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  Award, 
  HardHat, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  Building2, 
  Wrench, 
  Flame, 
  Users 
} from 'lucide-react';
import Logo from '../components/Logo';
import { COMPANY_INFO, WHY_CHOOSE_US, EXECUTION_PROCESS } from '../data/company';

export default function About({ setActivePage }) {
  return (
    <div className="pt-28 pb-20 bg-[#05080D] min-h-screen">
      
      {/* 1. Header Banner & Identity */}
      <section className="relative py-16 border-b border-slate-800/80 mb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid-industrial opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-8">
              <span className="text-xs font-mono uppercase tracking-widest text-[#F26522] block mb-2 font-bold">
                Company Profile
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 font-heading">
                About Dhanvi Techno Engineering
              </h1>
              <p className="text-lg text-slate-300 max-w-3xl leading-relaxed mb-6 font-normal">
                {COMPANY_INFO.name} is an industrial engineering, civil construction, fire safety, mechanical piping, and manpower management company established to deliver precision and operational safety for commercial and industrial enterprises.
              </p>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-[#0B121C] border border-slate-800 text-xs font-mono text-slate-300">
                <span className="text-[#F26522] font-semibold">Motto:</span>
                <span>"{COMPANY_INFO.tagline}"</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="bg-[#0B121C] p-6 rounded-2xl border border-slate-800 shadow-2xl">
                <Logo variant="dark" size="lg" showTagline={true} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission */}
          <div className="bg-[#0B121C] rounded-2xl border border-slate-800 p-8 relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-[#F26522]/15 border border-[#F26522]/30 text-[#F26522] flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#F26522] block mb-2 font-bold">
              Our Purpose
            </span>
            <h3 className="text-2xl font-bold text-white mb-4 font-heading">
              Company Mission
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              To deliver dependable, structurally sound, and safety-compliant engineering, construction, and technical workforce solutions. We strive to execute projects with transparent communication, direct project management oversight, and unyielding adherence to industrial codes.
            </p>
            <p className="text-slate-400 text-xs leading-relaxed">
              Every system we install—from fire suppression networks and high-pressure fluid pipelines to RCC foundations and security infrastructure—is engineered to protect investments and ensure operational continuity.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-[#0B121C] rounded-2xl border border-slate-800 p-8 relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-sky-500/15 border border-sky-500/30 text-sky-400 flex items-center justify-center mb-6">
              <Eye className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-sky-400 block mb-2 font-bold">
              Our Direction
            </span>
            <h3 className="text-2xl font-bold text-white mb-4 font-heading">
              Company Vision
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              To be recognized as the premier multi-discipline engineering and industrial contracting partner across Delhi NCR and India, renowned for comprehensive turnkey capabilities, integrity in execution, and responsive technical support.
            </p>
            <p className="text-slate-400 text-xs leading-relaxed">
              Building dreams and creating futures by establishing durable civil infrastructure, safe manufacturing environments, and empowered industrial workforces.
            </p>
          </div>

        </div>
      </section>

      {/* 3. Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#F26522] block mb-2 font-bold">
            Operational Principles
          </span>
          <h2 className="text-3xl font-extrabold text-white mb-3 font-heading">
            Our Core Values
          </h2>
          <p className="text-slate-400 text-sm">
            The fundamental standards that govern every installation, weld, foundation, and contract.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Engineering Excellence",
              desc: "Disciplined engineering calculations, accurate material grading, and verified testing procedures across all disciplines."
            },
            {
              title: "Safety First & Compliance",
              desc: "Rigid enforcement of fire safety standards, hydraulic testing, electrical earthing protocols, and personal protective equipment."
            },
            {
              title: "Turnkey Accountability",
              desc: "Single-window responsibility from foundational civil works and piping to surveillance, electrical boards, and AMC support."
            },
            {
              title: "Transparent Partnership",
              desc: "Direct accessibility to Project Manager Shahid Manzer, honest BOQ estimates, and straightforward project milestones."
            }
          ].map((val, idx) => (
            <div key={idx} className="bg-[#0B121C] rounded-2xl border border-slate-800 p-6 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#0E1622] border border-slate-700 text-[#F26522] font-mono text-xs font-bold flex items-center justify-center mb-4">
                  0{idx + 1}
                </div>
                <h4 className="text-base font-bold text-white mb-2 font-heading">{val.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{val.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Leadership & Project Management */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-20">
        <div className="bg-[#0E1622] rounded-2xl border border-slate-800 p-8 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#F26522] mb-3">
                <HardHat className="w-4 h-4" />
                <span>Executive Project Management</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 font-heading">
                Direct Leadership Under Shahid Manzer
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                At Dhanvi Techno Engineering Private Limited, project execution is steered directly by Project Manager <strong className="text-white">Shahid Manzer</strong>. Unlike large bureaucratic firms where client requests are routed through layers of representatives, our clients maintain direct communication with executive management.
              </p>
              <p className="text-slate-400 text-xs leading-relaxed mb-6">
                This hands-on leadership structure guarantees prompt decision-making on site, tight cost controls, and rapid resolution of operational constraints.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
                <div>
                  <span className="text-[11px] font-mono text-slate-500 uppercase block">Phone / WhatsApp</span>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="text-sm font-bold text-white hover:text-[#F26522] font-tech">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-500 uppercase block">Official Email</span>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-xs font-medium text-slate-300 hover:text-[#F26522] font-tech break-all">
                    {COMPANY_INFO.email}
                  </a>
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-500 uppercase block">Office Location</span>
                  <span className="text-xs text-slate-300">Vasundhara Ghaziabad</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#070B12] rounded-xl border border-slate-800 p-6 flex flex-col justify-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#F26522]/15 border border-[#F26522]/40 text-[#F26522] flex items-center justify-center mx-auto mb-4">
                <HardHat className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-white">{COMPANY_INFO.projectManager}</h4>
              <span className="text-xs text-[#F26522] font-mono uppercase tracking-wider mb-4">Project Manager</span>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Available for technical discussions, site visits, and project commercial proposals.
              </p>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#F26522] hover:bg-[#ff7638] text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Directly</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Contact CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center bg-[#0B121C] rounded-2xl border border-slate-800 p-8 sm:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 font-heading">
            Partner With Dhanvi Techno Engineering
          </h3>
          <p className="text-sm text-slate-400 max-w-xl mx-auto mb-6">
            Get in touch to discuss your industrial engineering, civil construction, fire protection, or staffing requirement today.
          </p>
          <button
            onClick={() => {
              setActivePage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#F26522] hover:bg-[#ff7638] text-white text-sm font-bold shadow-lg shadow-[#F26522]/30 transition-all cursor-pointer"
          >
            <span>Proceed to Contact Page</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
}
