import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import HeroMarket from "@/components/HeroMarket";
import KPIStrip from "@/components/KPIStrip";
import Footer from "@/components/Footer";
import FloatingPromo from "@/components/FloatingPromo";
import EntryLeadModal from "@/components/EntryLeadModal";
import ChatbotLeadForm from "@/components/ChatbotLeadForm";
import DynamicSections from "@/components/sections/DynamicSections";
import { useSearchUI } from "@/SearchUIContext";

const VALID_SERVICES = [
  "self-drive",
  "chauffeur",
  "bike",
  "luxury",
  "bus",
  "truck",
  "equipment",
  "movers",
];

const IndexShell: React.FC = () => {
  const { service } = useParams();
  const navigate = useNavigate();
  const { searchType, setSearchType } = useSearchUI();

  // Sync URL → Context
  useEffect(() => {
    const s = service || "self-drive";
    if (!VALID_SERVICES.includes(s)) {
      navigate("/self-drive", { replace: true });
      return;
    }
    if (searchType !== s) setSearchType(s as any);
  }, [service]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <section>
          <HeroMarket />
        </section>

        <section>
          <KPIStrip />
        </section>

        {/* Hero ke niche dynamic sections */}
        <section className="mt-6">
          <DynamicSections service={searchType || "self-drive"} />
        </section>
      </main>

      <Footer />
      <FloatingPromo />
      <EntryLeadModal />
      <ChatbotLeadForm />
    </div>
  );
};

export default IndexShell;
