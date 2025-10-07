// src/components/selfdrive/SDOffers.tsx
import React from "react";
import Section from "./Section";
import { Button } from "@/components/ui/button";
import OptimizedImage from "@/components/OptimizedImage";
const OFFERS = [
  { id: "o1", title: "Flat 20% OFF on Weekends", desc: "Use code WEEKEND20", img: "/selfdrive/offer/offer-1.jpg" },
  { id: "o2", title: "Bank Offer: 10% OFF", desc: "ICICI / HDFC Credit Cards", img: "/selfdrive/offer/offer-2.jpg" },
  { id: "o3", title: "Long Trip Special", desc: "7+ days rentals get 15% OFF", img: "/selfdrive/offer/offer-3.jpg" },
];

const SDOffers: React.FC = () => (
  <Section title="Offers for You" subtitle="Save more on your next self-drive.">
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {OFFERS.map(o => (
        <div key={o.id} className="rounded-xl border bg-white overflow-hidden">
           <OptimizedImage src={o.img} rounded="rounded-none" alt={o.title} width={640} height={360} sizes="(max-width:1024px) 50vw, 33vw" className="h-40 w-full object-cover" />
          <div className="p-4">
            <div className="font-semibold">{o.title}</div>
            <p className="text-sm text-muted-foreground">{o.desc}</p>
            <Button className="mt-3">Book Now</Button>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

export default SDOffers;
