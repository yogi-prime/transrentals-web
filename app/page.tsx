import React from 'react';
import Header from '@/components/Header';
import GlobalSearch from '@/components/GlobalSearch';
import HeroSlider from '@/components/HeroSlider';
import TrustBar from '@/components/TrustBar';
import KPIStrip from '@/components/KPIStrip';
import ServiceGrid from '@/components/ServiceGrid';
import LocationFinder from '@/components/LocationFinder';
import ComparisonSection from '@/components/ComparisonSection';
import CostCalculator from '@/components/CostCalculator';
import BackrCoinRewards from '@/components/BackrCoinRewards';
import CouponsOffers from '@/components/CouponsOffers';
import VendorGrowthZone from '@/components/VendorGrowthZone';
import CustomerSafety from '@/components/CustomerSafety';
import ScenarioCards from '@/components/ScenarioCards';
import FeaturedTours from '@/components/FeaturedTours';
import HeroWithSearch from '@/components/HeroWithSearch';
import HeroMarket from '@/components/HeroMarket';
import CaseStudies from '@/components/CaseStudies';
import RatingsReviews from '@/components/RatingsReviews';
import SponsorsAds from '@/components/SponsorsAds';
import InsightsAnalytics from '@/components/InsightsAnalytics';
import BlogResources from '@/components/BlogResources';
import AppDownloadCTA from '@/components/AppDownloadCTA';
import SecondaryCTAs from '@/components/SecondaryCTAs';
import VendorSpotlight  from '@/components/VendorSpotlight';
import FleetMarketplace   from '@/components/FleetMarketplace';
import OffersForYou   from '@/components/OffersForYou';
import PopularSearches    from '@/components/PopularSearches';
import DestinationsForSelfDrive   from '@/components/DestinationsForSelfDrive';
import EntryLeadModal from '@/components/EntryLeadModal';
import FAQs from '@/components/FAQs';
import ChatbotLeadForm from '@/components/ChatbotLeadForm';
import Footer from '@/components/Footer';
import { SearchUIProvider } from '@/components/providers/SearchUIContext'; // <-- path per Option A/B
import FloatingPromo from '@/components/FloatingPromo';


const Index = () => {
  return (
     <SearchUIProvider>   {/* <-- add this wrapper */}
    <div className="min-h-screen bg-background">
      {/* Fixed Header */}
      <Header />
      
      {/* Main Content */}
      <main>
        {/* Hero Slider */}
        {/* <section className="pt-24">
          <HeroSlider />
        </section> */}
        <section >
          <HeroMarket />
        </section>

        {/* KPI Highlights */}
        <section>
          <KPIStrip />
        </section>

       <section className="mt-6">
  <VendorSpotlight />
</section>

<section className="mt-6">
  <FleetMarketplace />
</section>

<section className="mt-6">
  <OffersForYou />
</section>

<section className="mt-6">
  <DestinationsForSelfDrive />
</section>

<section className="mt-6">
  <PopularSearches />
</section>
        {/* FAQs */}
        <section>
          <FAQs />
        </section>
      </main>

      {/* Footer */}
      <Footer />
      <FloatingPromo />
       {/* Lead Capture Modal (auto opens on page entry) */}
        <EntryLeadModal />
      {/* Chatbot Lead Form (Sticky) */}
      <ChatbotLeadForm />
    </div>
    </SearchUIProvider>
  );
};

export default Index;
