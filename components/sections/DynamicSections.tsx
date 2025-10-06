import React from "react";
import VendorSpotlight from "@/components/VendorSpotlight";
import FleetMarketplace from "@/components/FleetMarketplace";
import OffersForYou from "@/components/OffersForYou";
import DestinationsForSelfDrive from "@/components/DestinationsForSelfDrive";
import PopularSearches from "@/components/PopularSearches";
import FAQs from "@/components/FAQs";
import {
  SDVendorSpotlight,
  SDFleetMarketplace,
  SDOffers,
  SDDestinations,
  SDPopularSearches,
  SDBrandPartners,
  SDAppBanner,
  SDFaq,
} from "@/components/selfdrive";
type Props = { service: string };

const DynamicSections: React.FC<{ service: string }> = ({ service }) => {
  switch (service) {
    case "self-drive":
      return (
        <>
           <SDVendorSpotlight />
          <SDFleetMarketplace />
          <SDOffers />
          <SDDestinations />
          <SDBrandPartners />
          <SDPopularSearches />
          <SDAppBanner />
          <SDFaq />
        </>
      );
    case "bike":
      return (
        <>
          <FleetMarketplace />
          <OffersForYou />
          <PopularSearches />
          <FAQs />
        </>
      );
    case "luxury":
      return (
        <>
          <VendorSpotlight />
          <FleetMarketplace />
          <OffersForYou />
          <FAQs />
        </>
      );
    default:
      return (
        <>
          <SDFleetMarketplace />
          <SDOffers />
          <SDFaq />
        </>
      );
  }
};
export default DynamicSections;