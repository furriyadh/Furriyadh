import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
// import Section2 from '@/components/Section2'; // Placeholder - Needs implementation if required
import Testimonials from '@/components/Testimonials';
// import Section4 from '@/components/Section4'; // Placeholder - Needs implementation if required
// import Section5 from '@/components/Section5'; // Placeholder - Needs implementation if required
import DashboardSection from '@/components/DashboardSection';
import BudgetSection from '@/components/BudgetSection';
import IntegrationsSection from '@/components/IntegrationsSection';
// import JoinSection from '@/components/JoinSection'; // Placeholder (Section 9) - Needs implementation if required
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

// TODO: Implement remaining sections based on ar.html content if needed.
// TODO: Add i18next provider and configuration for internationalization.
// TODO: Add AOS or similar animation library setup if needed (requires client-side initialization).
// TODO: Ensure all assets (images, etc.) are copied to the public folder.
// TODO: Implement Modal component for video playback.

export default function Home() {
  return (
    // Using fragment <>...</> as the main wrapper unless a specific layout component is needed
    <>
      <Header />
      <main className="flex flex-col">
        {/* Render the sections in the correct order */}
        <HeroSection />
        {/* <Section2 /> */}
        <Testimonials />
        {/* <Section4 /> */}
        {/* <Section5 /> */}
        <DashboardSection />
        <BudgetSection />
        <IntegrationsSection />
        {/* <JoinSection /> */}
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

