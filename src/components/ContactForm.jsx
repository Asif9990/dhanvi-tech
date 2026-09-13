import React, { useState } from 'react';
import { 
  Send, 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Check, 
  ArrowRight 
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA, buildWhatsAppLink } from '../data/company';

export default function ContactForm({ preSelectedService = "" }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: preSelectedService || SERVICES_DATA[0].title,
    location: '',
    details: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Full Name is required";
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required";
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      errs.phone = "Please enter a valid phone number (e.g. 9717058294)";
    }
    if (!formData.email.trim()) {
      errs.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.location.trim()) errs.location = "Project location is required (e.g. Ghaziabad, Noida, Delhi NCR)";
    if (!formData.details.trim()) errs.details = "Please share details regarding your requirement";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Generate WhatsApp link and trigger
    const waUrl = buildWhatsAppLink(formData);
    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  const getFormattedMessageText = () => {
    return `Hello Dhanvi Techno Engineering Team,

I would like to enquire about your services.

Name: ${formData.name}
Company: ${formData.company || "N/A"}
Phone: ${formData.phone}
Email: ${formData.email}
Service Required: ${formData.service}
Project Location: ${formData.location}
Project Details: ${formData.details}

Please contact me regarding this requirement.

Thank you.`;
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(getFormattedMessageText());
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="bg-[#0B121C] rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#F26522]/5 rounded-full blur-3xl pointer-events-none" />

      {submitted ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-5">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <span className="text-xs font-mono uppercase tracking-widest text-[#F26522] block mb-1">
            Enquiry Prepared
          </span>
          <h3 className="text-2xl font-bold text-white mb-2 font-heading">
            WhatsApp Link Activated
          </h3>
          <p className="text-sm text-slate-400 max-w-md mx-auto mb-6">
            Your structured enquiry has been formatted for Project Manager <strong className="text-white">Shahid Manzer</strong> at Dhanvi Techno Engineering (+91 9717058294).
          </p>

          {/* Formatted Message Box */}
          <div className="text-left bg-[#05080D] rounded-xl border border-slate-800 p-4 max-w-lg mx-auto mb-6 text-xs font-mono text-slate-300 whitespace-pre-line relative">
            <button
              onClick={handleCopyMessage}
              className="absolute top-3 right-3 flex items-center gap-1 bg-slate-800/80 hover:bg-slate-700 px-2.5 py-1 rounded text-[11px] text-slate-200 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "Copied!" : "Copy Text"}</span>
            </button>
            {getFormattedMessageText()}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={buildWhatsAppLink(formData)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-900/30 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Reopen WhatsApp Chat</span>
            </a>

            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm transition-all"
            >
              <Phone className="w-4 h-4 text-[#F26522]" />
              <span>Call Now ({COMPANY_INFO.phone})</span>
            </a>

            <button
              onClick={() => setSubmitted(false)}
              className="px-4 py-2.5 rounded-xl text-slate-400 hover:text-white text-xs underline"
            >
              Submit Another Enquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-heading">
              Request Technical Proposal & Quote
            </h3>
            <p className="text-sm text-slate-400">
              Submit your engineering, civil, fire safety, or staffing requirements directly to Project Manager <strong className="text-slate-300">Shahid Manzer</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                Full Name <span className="text-[#F26522]">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Rajesh Sharma"
                className={`w-full bg-[#070B12] border rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#F26522] transition-colors ${
                  errors.name ? 'border-red-500/80 bg-red-950/10' : 'border-slate-800'
                }`}
              />
              {errors.name && (
                <span className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.name}
                </span>
              )}
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                Company / Organization
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="e.g. Apex Industrial Works"
                className="w-full bg-[#070B12] border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#F26522] transition-colors"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                Phone Number <span className="text-[#F26522]">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98XXXXXXXX"
                className={`w-full bg-[#070B12] border rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#F26522] transition-colors ${
                  errors.phone ? 'border-red-500/80 bg-red-950/10' : 'border-slate-800'
                }`}
              />
              {errors.phone && (
                <span className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.phone}
                </span>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                Email Address <span className="text-[#F26522]">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="contact@company.com"
                className={`w-full bg-[#070B12] border rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#F26522] transition-colors ${
                  errors.email ? 'border-red-500/80 bg-red-950/10' : 'border-slate-800'
                }`}
              />
              {errors.email && (
                <span className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.email}
                </span>
              )}
            </div>
          </div>

          {/* Select Service */}
          <div className="mb-4">
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
              Select Service Required <span className="text-[#F26522]">*</span>
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full bg-[#070B12] border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#F26522] transition-colors"
            >
              {SERVICES_DATA.map((srv) => (
                <option key={srv.id} value={srv.title} className="bg-[#0A1018] text-white">
                  {srv.title} — ({srv.category})
                </option>
              ))}
            </select>
          </div>

          {/* Project Location */}
          <div className="mb-4">
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
              Project Location / Site City <span className="text-[#F26522]">*</span>
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g. Vasundhara Ghaziabad, Greater Noida, Industrial Area Phase 2"
              className={`w-full bg-[#070B12] border rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#F26522] transition-colors ${
                errors.location ? 'border-red-500/80 bg-red-950/10' : 'border-slate-800'
              }`}
            />
            {errors.location && (
              <span className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.location}
              </span>
            )}
          </div>

          {/* Project Details */}
          <div className="mb-6">
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
              Project Details & Scope <span className="text-[#F26522]">*</span>
            </label>
            <textarea
              name="details"
              rows={4}
              value={formData.details}
              onChange={handleChange}
              placeholder="Describe your project requirements, quantities, site conditions, timeline, or manpower needs..."
              className={`w-full bg-[#070B12] border rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#F26522] transition-colors resize-none ${
                errors.details ? 'border-red-500/80 bg-red-950/10' : 'border-slate-800'
              }`}
            />
            {errors.details && (
              <span className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.details}
              </span>
            )}
          </div>

          {/* Submit Action */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-slate-800/80">
            <div className="text-xs text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>
              <span>Submits directly to WhatsApp: <strong className="text-white font-tech">+91 9717058294</strong></span>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-[#F26522] hover:bg-[#ff7638] text-white font-bold text-sm shadow-xl shadow-[#F26522]/25 hover:shadow-[#F26522]/40 transition-all cursor-pointer"
            >
              <span>Submit Enquiry via WhatsApp</span>
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
