import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PhilosophySection } from './components/PhilosophySection';
import { ServicesSection } from './components/ServicesSection';
import { WhyMarkflura } from './components/WhyMarkflura';
import { ProcessSection } from './components/ProcessSection';
import { SelectedWorkSection } from './components/SelectedWorkSection';
import { ApproachPipeline } from './components/ApproachPipeline';
import { AudienceSection } from './components/AudienceSection';
import { AboutSection } from './components/AboutSection';
import { FounderSection } from './components/FounderSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { FinalCtaAndFooter } from './components/FinalCtaAndFooter';
import { CaseStudyModal } from './components/CaseStudyModal';
import { GrowthConsultationModal } from './components/GrowthConsultationModal';
import { CaseStudy } from './types';

export default function App() {
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudy | null>(null);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedServiceForConsultation, setSelectedServiceForConsultation] = useState<string>('Personal Branding');

  const handleOpenConsultation = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForConsultation(serviceName);
    }
    setConsultationOpen(true);
  };

  const handleScrollToContact = (serviceName?: string) => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] selection:bg-[#d4af37]/20 selection:text-[#fef08a] overflow-x-hidden font-sans">
      {/* Sticky Header Navigation */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Content Flow */}
      <main id="main-content">
        {/* Hero Section */}
        <Hero onOpenConsultation={handleOpenConsultation} />

        {/* Philosophy & Brand Manifesto */}
        <PhilosophySection />

        {/* What We Do (4 Core Practices) */}
        <ServicesSection onSelectService={handleOpenConsultation} />

        {/* Why Markflura (Pillars & Multiplication of Attention) */}
        <WhyMarkflura />

        {/* 6-Step Growth Process */}
        <ProcessSection />

        {/* Selected Work & Detailed Case Studies */}
        <SelectedWorkSection onOpenCaseStudy={(study) => setActiveCaseStudy(study)} />

        {/* The Markflura Strategic Approach Pipeline */}
        <ApproachPipeline />

        {/* Who We Work With (Founders, Creators, Brands, etc.) */}
        <AudienceSection onSelectCategory={handleOpenConsultation} />

        {/* About Markflura (Vision & Mission) */}
        <AboutSection />

        {/* Meet The Founder: Angel Thakral */}
        <FounderSection onOpenConsultation={handleOpenConsultation} />

        {/* FAQs (All 12 Questions Answered) */}
        <FaqSection />

        {/* Contact Form & Direct Headquarters Contact */}
        <ContactSection preselectedService={selectedServiceForConsultation} />

        {/* Final CTA & Comprehensive Footer */}
        <FinalCtaAndFooter onOpenConsultation={handleOpenConsultation} />
      </main>

      {/* Interactive Case Study Detail Modal */}
      <CaseStudyModal
        caseStudy={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
        onInquire={(serviceName) => {
          handleScrollToContact(serviceName);
        }}
      />

      {/* Fast-Track Growth Journey Modal */}
      <GrowthConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        defaultService={selectedServiceForConsultation}
      />
    </div>
  );
}
