'use client';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Testimonials from '@/components/Testimonials';
import CampaignCreationSection from '@/components/CampaignCreationSection';
import OptimizationSection from '@/components/OptimizationSection';
import DashboardControlSection from '@/components/DashboardControlSection';
import BudgetSection from '@/components/BudgetSection'; // Renamed from BudgetManagement for consistency
import IntegrationsSection from '@/components/IntegrationsSection';
import JoinSection from '@/components/JoinSection';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

// Main Home Page Component
export default function HomePage() {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
      // You can add more AOS options here if needed
    });
  }, []);

  return (
    // I18nProviderWrapper is already in layout.tsx, no need to add it here
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
      {/* overflow-x-hidden to prevent horizontal scrollbars potentially caused by animations */}
      <Header />
      <HeroSection />
      <BudgetSection /> {/* Moved BudgetSection up as per original site structure */}
      <Testimonials />
      <CampaignCreationSection />
      <OptimizationSection />
      <DashboardControlSection />
      {/* Budget Management section seems to be integrated within DashboardControl or is the same as BudgetSection, removed duplicate */}
      <IntegrationsSection />
      <JoinSection />
      <Newsletter />
      <Footer />
    </main>
  );
}

