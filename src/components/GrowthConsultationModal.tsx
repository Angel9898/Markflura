import React, { useState } from 'react';
import { X, ArrowRight, Check, Send, Sparkles, Mail } from 'lucide-react';

interface GrowthConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const GrowthConsultationModal: React.FC<GrowthConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Personal Branding'
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('Founder');
  const [service, setService] = useState(defaultService);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const roles = ['Founder', 'Entrepreneur', 'Professional', 'Creator', 'Brand / Business'];
  const services = [
    'Personal Branding',
    'LinkedIn Growth',
    'Influencer Marketing',
    'Lead Generation'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setSubmitted(true);
  };

  const mailtoLink = `mailto:a1.infulencercampaign@gmail.com?subject=${encodeURIComponent(
    `Growth Consultation: ${name} (${role} - ${service})`
  )}&body=${encodeURIComponent(
    `Hello Angel & Markflura Team,\n\nI would like to start my growth journey with Markflura.\n\nName: ${name}\nRole: ${role}\nCompany: ${company}\nEmail: ${email}\nPhone: ${phone}\nPrimary Focus: ${service}\n\nLooking forward to hearing from you!`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-2xl rounded-3xl bg-[#0e0e12] border border-zinc-800 shadow-2xl p-6 sm:p-10 my-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-6 right-6 p-2 rounded-full bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center mx-auto mb-5 border border-amber-500/30">
              <Sparkles className="w-8 h-8" />
            </div>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white mb-2">
              Growth Journey Initiated
            </h3>
            <p className="text-sm text-zinc-300 max-w-md mx-auto mb-6 leading-relaxed">
              Thank you, {name}. Your inquiry for <span className="text-amber-300 font-semibold">{service}</span> has been queued for review by Angel Thakral.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={mailtoLink}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#d4af37] to-[#eab308] text-zinc-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Open Mail Client</span>
              </a>
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-full bg-zinc-800 text-zinc-300 hover:text-white text-xs font-semibold"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-amber-400 block mb-1">
                START YOUR JOURNEY
              </span>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
                Influence Strategy Consultation
              </h2>
              <p className="text-xs text-zinc-400 mt-1">
                Evaluate your positioning, discover your untapped authority, and map your growth roadmap.
              </p>
            </div>

            {/* Role Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                I am a:
              </label>
              <div className="flex flex-wrap gap-2">
                {roles.map((r) => (
                  <button
                    type="button"
                    key={r}
                    onClick={() => setRole(r)}
                    className={`text-xs px-3.5 py-1.5 rounded-xl border transition-all ${
                      role === r
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 font-semibold'
                        : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-zinc-200'
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            {/* Primary Discipline Needed */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                Primary Goal:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {services.map((s) => (
                  <button
                    type="button"
                    key={s}
                    onClick={() => setService(s)}
                    className={`text-xs p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                      service === s
                        ? 'bg-amber-500/15 text-amber-200 border-amber-500/40 font-semibold'
                        : 'bg-zinc-950/80 text-zinc-400 border-zinc-800 hover:border-zinc-700'
                    }`}
                  >
                    <span>{s}</span>
                    {service === s && <Check className="w-3.5 h-3.5 text-amber-400" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Input fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Angel or Jane Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-amber-500/60"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-amber-500/60"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
                  Company / Organization
                </label>
                <input
                  type="text"
                  placeholder="Company name"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-amber-500/60"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
                  Phone / WhatsApp
                </label>
                <input
                  type="text"
                  placeholder="+91 / International"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-amber-500/60"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#d4af37] via-[#eab308] to-[#ca8a04] text-zinc-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl hover:brightness-110 active:scale-[0.99] transition-all"
            >
              <span>Submit & Request Callback</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
