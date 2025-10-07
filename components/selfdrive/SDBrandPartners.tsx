// src/components/selfdrive/SDBrandPartners.tsx
import React from "react";
import Section from "./Section";
import OptimizedImage from "@/components/OptimizedImage";
const PARTNERS = [
  { id: "p1", name: "AirAsia", img: "/selfdrive/partners/partner-1.jpg" },
  { id: "p2", name: "Cathay Pacific", img: "/selfdrive/partners/partner-2.jpg" },
];

const SDBrandPartners: React.FC = () => (
  <Section title="Experience with our Partners">
    <div className="grid md:grid-cols-2 gap-4">
      {PARTNERS.map(p => (
        <div key={p.id} className="rounded-2xl overflow-hidden">
          <OptimizedImage rounded="rounded-none" src={p.img} alt={p.name} width={960} height={300} sizes="(max-width:768px) 100vw, 50vw" className="w-full h-40 md:h-52 object-cover" />
        </div>
      ))}
    </div>
  </Section>
);

export default SDBrandPartners;
