import React, { useState } from 'react';
import { Mail, MapPin, CheckCircle2, ArrowRight, Sparkles, Send, Copy, Check } from 'lucide-react';
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
    services: preselectedService ? [preselectedService] : ['Personal Branding'],
    requirement: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const availableServices = [
    'Personal Branding',
    'LinkedIn Growth',
    'Influencer Marketing',
    'Lead Generation'
  ];

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(service);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== service)
          : [...prev.services, service]
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;

    // Trigger submission state
    setIsSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('a1.infulencercampaign@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const mailtoUrl = `mailto:a1.infulencercampaign@gmail.com?subject=${encodeURIComponent(
    `Growth Inquiry: ${formData.company || formData.fullName} (${formData.services.join(', ')})`
  )}&body=${encodeURIComponent(
    `Hello Markflura Team,\n\nName: ${formData.fullName}\nCompany: ${formData.company}\nPhone/WhatsApp: ${formData.phone}\nEmail: ${formData.email}\nServices Needed: ${formData.services.join(', ')}\n\nRequirement Details:\n${formData.requirement}\n\nLooking forward to speaking.`
  )}`;

  return (
    <section id="contact" className="py-24 bg-[#0d0d11] border-t border-zinc-800/60 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Section Header & Contact Details */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Initiate Engagement</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-6">
              Let&apos;s Build Your Influence.
            </h2>

            <div className="space-y-2 text-base sm:text-lg text-zinc-300 font-medium mb-6">
              <p>Your expertise deserves attention.</p>
              <p>Your story deserves to be heard.</p>
              <p>Your business deserves opportunities.</p>
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed mb-8">
              Let&apos;s build a digital presence that makes people <strong className="text-white">notice you, remember you and trust you.</strong>
            </p>

            {/* Direct Contact Card */}
            <div className="p-7 rounded-3xl bg-zinc-900/80 border border-zinc-800 space-y-6">
              <div>
                <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-amber-400 block mb-1">
                  GET IN TOUCH
                </span>
                <h3 className="font-display font-bold text-xl text-white">
                  MARKFLURA
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-center gap-3 text-zinc-300">
                  <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-amber-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-zinc-400 block">Headquarters</span>
                    <span className="font-semibold text-white">Delhi, India</span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 text-zinc-300">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-amber-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] text-zinc-400 block">Direct Email</span>
                      <a
                        href="mailto:a1.infulencercampaign@gmail.com"
                        className="font-semibold text-white hover:text-amber-300 transition-colors"
                      >
                        a1.infulencercampaign@gmail.com
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                    title="Copy email address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                <a
                  href="mailto:a1.infulencercampaign@gmail.com"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300 hover:text-amber-200"
                >
                  <span>Let&apos;s Talk</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <span className="text-[11px] text-zinc-400">Usually responds within 24h</span>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900/60 border border-zinc-800 backdrop-blur-md relative">
              {isSubmitted ? (
                <div className="text-center py-12 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white mb-3">
                    Inquiry Received.
                  </h3>
                  <p className="text-zinc-300 text-sm max-w-md mx-auto mb-6 leading-relaxed">
                    Thank you, {formData.fullName}. Angel Thakral and the Markflura team will review your requirements for{' '}
                    <strong className="text-amber-300">{formData.services.join(', ')}</strong> and respond directly to {formData.email}.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={mailtoUrl}
                      className="px-6 py-3 rounded-full bg-gradient-to-r from-[#d4af37] to-[#eab308] text-zinc-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Direct Email Now</span>
                    </a>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-3 rounded-full bg-zinc-800 text-zinc-300 hover:text-white text-xs font-semibold"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-display font-bold text-xl text-white mb-1">
                      CONTACT FORM
                    </h3>
                    <p className="text-xs text-zinc-400">
                      Share your current position and business goals. All conversations remain strictly confidential.
                    </p>
                  </div>

                  {/* Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                        Full Name <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-500/60"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                        Company / Brand
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-500/60"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                        Email Address <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-500/60"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-500/60"
                      />
                    </div>
                  </div>

                  {/* What do you need help with? */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-3">
                      What do you need help with? (Select all that apply)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {availableServices.map((service) => {
                        const checked = formData.services.includes(service);
                        return (
                          <div
                            key={service}
                            onClick={() => handleServiceToggle(service)}
                            className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${
                              checked
                                ? 'bg-amber-500/10 border-amber-500/40 text-amber-200'
                                : 'bg-zinc-950/60 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                            }`}
                          >
                            <div
                              className={`w-4 h-4 rounded flex items-center justify-center border transition-colors ${
                                checked
                                  ? 'bg-amber-400 border-amber-400 text-zinc-950'
                                  : 'border-zinc-700 bg-zinc-900'
                              }`}
                            >
                              {checked && <Check className="w-3 h-3 stroke-[3]" />}
                            </div>
                            <span className="text-xs font-medium">{service}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Requirement Text */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                      Tell us about your requirement
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Write your message... Share your current audience size, industry, or immediate growth milestone."
                      value={formData.requirement}
                      onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-500/60 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="contact-form-submit-btn"
                    className="w-full py-4 rounded-full bg-gradient-to-r from-[#d4af37] via-[#eab308] to-[#ca8a04] hover:from-[#eab308] hover:to-[#facc15] text-zinc-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xl shadow-amber-500/20 active:scale-[0.99]"
                  >
                    <span>Start the Conversation</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
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
