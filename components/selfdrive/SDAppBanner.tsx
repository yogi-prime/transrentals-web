// src/components/selfdrive/SDAppBanner.tsx
import React from "react";
import Section from "./Section";
import { Button } from "@/components/ui/button";

const SDAppBanner: React.FC = () => (
  <Section title="Download App & Get Flat 12% OFF" subtitle="Use code WELCOMEMMT on your first booking.">
    <div className="grid md:grid-cols-[1fr_auto] gap-4 items-center">
      <input
        placeholder="Enter mobile number"
        className="h-11 rounded-xl border px-3 outline-none"
      />
      <Button className="h-11 px-6">Get App Link</Button>
    </div>
  </Section>
);

export default SDAppBanner;
