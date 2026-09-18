import React, { useState } from 'react';
import { X, Send, Sparkles, Mail, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface GrowthConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const GrowthConsultationModal: React.FC<GrowthConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Influencer Marketing'
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState(defaultService);
  const [goal, setGoal] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const services = [
    'Influencer Marketing',
    'Meme Marketing',
    'Personal Branding',
    'Lead Generation',
    'Content Strategy'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl rounded-3xl bg-[#160a24] border border-purple-500/30 shadow-2xl p-6 sm:p-10 my-8 max-h-[90vh] overflow-y-auto text-purple-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-purple-950/60 hover:bg-purple-900 text-purple-300 hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-10 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
              Consultation Scheduled!
            </h3>
            <p className="text-purple-200/80 text-sm max-w-md mx-auto leading-relaxed">
              Thanks <span className="text-white font-semibold">{name}</span>! Our lead strategist will review your brand goals for <span className="text-purple-300 font-semibold">{company || 'your business'}</span> and connect with you shortly.
            </p>
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="mailto:markflura@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-purple-700 hover:bg-purple-600 transition-colors shadow-lg"
              >
                <Mail className="w-4 h-4" />
                <span>Email Directly: markflura@gmail.com</span>
              </a>
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-xl text-xs font-semibold text-purple-300 hover:text-white bg-purple-950/60 border border-purple-500/20"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-[11px] font-bold uppercase tracking-wider text-purple-300 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                <span>Markflura Growth Brief</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Let's Make Your Brand Go Viral
              </h2>
              <p className="text-xs text-purple-200/70 mt-1">
                Tell us about your brand and what you want to achieve. We'll outline the exact creator & ads strategy.
              </p>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-purple-300 mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Rahul Sharma"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0d0618] border border-purple-500/30 text-white placeholder-purple-300/40 text-sm focus:outline-none focus:border-purple-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-purple-300 mb-1.5">
                  Brand / Company Name
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Acme Lifestyle"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0d0618] border border-purple-500/30 text-white placeholder-purple-300/40 text-sm focus:outline-none focus:border-purple-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-purple-300 mb-1.5">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="rahul@acme.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0d0618] border border-purple-500/30 text-white placeholder-purple-300/40 text-sm focus:outline-none focus:border-purple-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-purple-300 mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0d0618] border border-purple-500/30 text-white placeholder-purple-300/40 text-sm focus:outline-none focus:border-purple-400"
                />
              </div>
            </div>

            {/* Service Selection */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-purple-300 mb-2">
                Select Primary Focus
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {services.map((svc) => (
                  <button
                    type="button"
                    key={svc}
                    onClick={() => setService(svc)}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold border text-center transition-all cursor-pointer ${
                      service === svc
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 border-purple-400 text-white shadow-md'
                        : 'bg-[#0d0618] border-purple-500/20 text-purple-200/70 hover:text-white hover:border-purple-400/40'
                    }`}
                  >
                    {svc}
                  </button>
                ))}
              </div>
            </div>

            {/* Campaign Goals */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-purple-300 mb-1.5">
                Brief / Campaign Goal
              </label>
              <textarea
                rows={3}
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                placeholder="Target platforms, campaign launch dates, or key performance deliverables..."
                className="w-full px-4 py-2.5 rounded-xl bg-[#0d0618] border border-purple-500/30 text-white placeholder-purple-300/40 text-sm focus:outline-none focus:border-purple-400"
              />
            </div>

            <button
              type="submit"
              className="w-full group inline-flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-lg shadow-purple-900/40 transition-all cursor-pointer"
            >
              <span>Submit & Start Conversation</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
