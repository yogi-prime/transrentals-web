"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import HeroMarket from "@/components/HeroMarket";
import KPIStrip from "@/components/KPIStrip";
import Footer from "@/components/Footer";
import FloatingPromo from "@/components/FloatingPromo";
import EntryLeadModal from "@/components/EntryLeadModal";
import ChatbotLeadForm from "@/components/ChatbotLeadForm";
import DynamicSections from "@/components/sections/DynamicSections";
import { useSearchUI } from "@/components/providers/SearchUIContext";

const VALID = [
  "self-drive","chauffeur","bike","luxury","bus","truck","equipment","movers",
];

export default function IndexShell({ service }: { service: string }) {
  const router = useRouter();
  const { searchType, setSearchType } = useSearchUI();

  // URL → Context sync + invalid ko replace
  useEffect(() => {
    const s = VALID.includes(service) ? service : "self-drive";
    if (s !== service) {
      router.replace("/self-drive");
      return;
    }
    if (searchType !== s) setSearchType(s);
  }, [service]); // eslint-disable-line

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section><HeroMarket /></section>
        <section><KPIStrip /></section>
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
}
