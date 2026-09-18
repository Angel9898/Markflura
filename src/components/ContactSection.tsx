import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, ArrowUpRight, Clock, Sparkles, ShieldCheck } from 'lucide-react';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    services: preselectedService ? [preselectedService] : ['Influencer Marketing'],
    requirement: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const availableServices = [
    'Influencer Marketing',
    'Meme Marketing',
    'Personal Branding',
    'Lead Generation',
    'Content Strategy'
  ];

  const toggleService = (svc: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(svc);
      if (exists) {
        return { ...prev, services: prev.services.filter((s) => s !== svc) };
      } else {
        return { ...prev, services: [...prev.services, svc] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#0d0618] border-t border-purple-500/15 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-left mb-16 max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-6 h-[1.5px] bg-purple-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-purple-400">
              Get In Touch
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let's Build Your Brand Together
          </h2>
          <p className="text-lg sm:text-xl text-purple-200/80 leading-relaxed">
            We'd love to hear from you. Whether you have a specific campaign brief in mind or want an end-to-end creator and growth strategy, reach out and we will get back to you quickly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Agency Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* Email Proposal Card (Primary) */}
            <a
              href="mailto:markflura@gmail.com"
              className="group block p-6 sm:p-7 rounded-3xl bg-[#160a24]/90 border border-purple-500/30 hover:border-pink-500/50 backdrop-blur-xl shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-pink-400 bg-pink-950/80 px-3 py-1 rounded-full border border-pink-500/30">
                  Direct Inquiries
                </span>
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-purple-300 mb-1">
                Email Proposals & RFPs
              </div>
              <div className="font-display text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">
                markflura@gmail.com
              </div>
              <p className="text-xs text-purple-200/70 leading-relaxed">
                Send campaign briefs, creator roster requests, and partnership proposals directly to our leadership team.
              </p>
            </a>

            {/* Response Time & Turnaround Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#160a24]/90 border border-purple-500/20 backdrop-blur-xl shadow-lg">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Clock className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/30">
                  Fast Turnaround
                </span>
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-300 mb-1">
                Response Protocol
              </div>
              <div className="font-display text-lg sm:text-xl font-bold text-white mb-2">
                Within 2 Business Hours
              </div>
              <p className="text-xs text-purple-200/70 leading-relaxed">
                Our strategy specialists review requirements immediately and return actionable roadmaps and creator pricing proposals without delay.
              </p>
            </div>

            {/* Strategic Execution Assurance */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#160a24]/90 border border-purple-500/20 backdrop-blur-xl shadow-lg">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-purple-300 mb-1">
                Quality & Verification
              </div>
              <div className="font-display text-base font-bold text-white mb-1">
                Verified Creator Rosters
              </div>
              <p className="text-xs text-purple-200/70 leading-relaxed">
                Guaranteed authentic creators across LinkedIn (500+), X (250+), and Instagram (1000+). Real metrics with zero vanity padding.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Proposal Request Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#160a24]/95 border border-purple-500/25 backdrop-blur-2xl shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                    Proposal Request Received!
                  </h3>
                  <p className="text-purple-200/80 max-w-md mx-auto text-sm leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{formData.fullName}</span>. A Markflura strategist will review your requirements for{' '}
                    <span className="text-purple-300 font-semibold">{formData.company || 'your brand'}</span> and reply to <span className="text-pink-300 font-semibold">{formData.email}</span> shortly.
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
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 rounded-xl text-xs font-semibold text-purple-300 hover:text-white bg-purple-950/60 border border-purple-500/20"
                    >
                      Send Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="font-display text-2xl font-bold text-white mb-2">
                    Request a Campaign Proposal
                  </h3>
                  <p className="text-xs text-purple-200/70 mb-6">
                    Tell us about your brand and what goals you want to hit. We will prepare an actionable execution roadmap.
                  </p>

                  {/* Name and Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-purple-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-[#0d0618] border border-purple-500/30 text-white placeholder-purple-300/40 text-sm focus:outline-none focus:border-purple-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-purple-300 mb-2">
                        Brand / Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Acme Health"
                        className="w-full px-4 py-3 rounded-xl bg-[#0d0618] border border-purple-500/30 text-white placeholder-purple-300/40 text-sm focus:outline-none focus:border-purple-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-purple-300 mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rahul@acme.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#0d0618] border border-purple-500/30 text-white placeholder-purple-300/40 text-sm focus:outline-none focus:border-purple-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-purple-300 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-[#0d0618] border border-purple-500/30 text-white placeholder-purple-300/40 text-sm focus:outline-none focus:border-purple-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Select Services Pills */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-purple-300 mb-2.5">
                      Services Interested In (Select all that apply)
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {availableServices.map((svc) => {
                        const selected = formData.services.includes(svc);
                        return (
                          <button
                            type="button"
                            key={svc}
                            onClick={() => toggleService(svc)}
                            className={`px-3.5 py-1.5 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                              selected
                                ? 'bg-gradient-to-r from-purple-600 to-pink-600 border-purple-400 text-white shadow-md'
                                : 'bg-[#0d0618] border-purple-500/25 text-purple-200/70 hover:text-white hover:border-purple-400/40'
                            }`}
                          >
                            {svc}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Requirement Text */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-purple-300 mb-2">
                      Campaign Goals & Target Platforms
                    </label>
                    <textarea
                      rows={3}
                      value={formData.requirement}
                      onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                      placeholder="Tell us about your campaign objectives, target audience, preferred platforms (LinkedIn, X, Instagram) or estimated launch timeline..."
                      className="w-full px-4 py-3 rounded-xl bg-[#0d0618] border border-purple-500/30 text-white placeholder-purple-300/40 text-sm focus:outline-none focus:border-purple-400 transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full group inline-flex items-center justify-center gap-2 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:shadow-[0_0_35px_rgba(236,72,153,0.6)] transition-all duration-300 cursor-pointer active:scale-98"
                  >
                    <span>Send Proposal Request</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
