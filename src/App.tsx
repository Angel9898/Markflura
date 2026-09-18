import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeTicker } from './components/MarqueeTicker';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PlatformsSection } from './components/PlatformsSection';
import { BrandsSection } from './components/BrandsSection';
import { ProcessSection } from './components/ProcessSection';
import { WhyAshencySection } from './components/WhyAshencySection';
import { NumbersSection } from './components/NumbersSection';
import { FounderSection } from './components/FounderSection';
import { CtaBanner } from './components/CtaBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CreatorNetworkModal } from './components/CreatorNetworkModal';
import { GrowthConsultationModal } from './components/GrowthConsultationModal';

export default function App() {
  const [networkModalOpen, setNetworkModalOpen] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<'linkedin' | 'x' | 'instagram'>('linkedin');

  const [consultationOpen, setConsultationOpen] = useState(false);
  const [consultationService, setConsultationService] = useState<string>('Influencer Marketing');

  const handleOpenNetworkModal = (platform: 'linkedin' | 'x' | 'instagram') => {
    setSelectedPlatform(platform);
    setNetworkModalOpen(true);
  };

  const handleOpenConsultation = (serviceName?: string) => {
    if (serviceName) {
      setConsultationService(serviceName);
    }
    setConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0d0618] text-[#f0eaff] selection:bg-[#a855f7]/30 selection:text-white overflow-x-hidden font-sans">
      {/* Sticky Header Navigation */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      {/* Main Content Flow */}
      <main id="main-content">
        {/* Hero Section: "We Make Brands Go Viral" */}
        <Hero onOpenConsultation={() => handleOpenConsultation()} />

        {/* Dynamic Running Services Marquee Ticker */}
        <MarqueeTicker />

        {/* Who We Are: An Agency Built for the Internet Age */}
        <AboutSection />

        {/* What We Do: 6 Core Services */}
        <ServicesSection onSelectService={(serviceTitle) => handleOpenConsultation(serviceTitle)} />

        {/* Cross Platform: LinkedIn, X (Twitter), Instagram */}
        <PlatformsSection onOpenNetworkModal={handleOpenNetworkModal} />

        {/* Trusted By: Dual Infinite Brand Logo Marquee */}
        <BrandsSection />

        {/* How We Work: Our 4-Step Growth Process */}
        <ProcessSection />

        {/* Why Ashency: Built Different. Results Proven. */}
        <WhyAshencySection />

        {/* By the Numbers: Metrics That Speak Louder */}
        <NumbersSection />

        {/* Founder & Leadership: Angel Thakral */}
        <FounderSection onOpenConsultation={() => handleOpenConsultation()} />

        {/* Call To Action Banner: Ready to Make Your Brand Go Viral? */}
        <CtaBanner onStartProject={() => handleOpenConsultation()} />

        {/* Contact & Proposal Request Section */}
        <ContactSection preselectedService={consultationService} />
      </main>

      {/* Comprehensive Ashency Footer */}
      <Footer />

      {/* Interactive Creator Network Roster Modal (LinkedIn, X, Instagram) */}
      <CreatorNetworkModal
        initialPlatform={selectedPlatform}
        isOpen={networkModalOpen}
        onClose={() => setNetworkModalOpen(false)}
      />

      {/* Fast-Track Campaign Brief / Consultation Modal */}
      <GrowthConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        defaultService={consultationService}
      />
    </div>
  );
}
