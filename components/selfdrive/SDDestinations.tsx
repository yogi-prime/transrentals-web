// src/components/selfdrive/SDDestinations.tsx
import React from "react";
import Section from "./Section";
import OptimizedImage from "@/components/OptimizedImage";
const DESTS = [
  { id: "d1", title: "Goa Beach Circuit", chips: ["Vagator", "Candolim"], img: "/selfdrive/destinations/dest-1.jpg" },
  { id: "d2", title: "Bangalore → Coorg", chips: ["Nature", "Coffee"], img: "/selfdrive/destinations/dest-2.jpg" },
  { id: "d3", title: "Delhi → Jaipur", chips: ["Fort", "Food"], img: "/selfdrive/destinations/dest-3.jpg" },
  { id: "d4", title: "Mumbai → Lonavala", chips: ["Monsoon", "Ghats"], img: "/selfdrive/destinations/dest-4.jpg" },
];

const SDDestinations: React.FC = () => (
  <Section title="Road-trip Ideas" subtitle="Curated routes tailor-made for self-drive.">
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {DESTS.map(d => (
        <article key={d.id} className="rounded-xl border bg-white overflow-hidden">
  <OptimizedImage rounded="rounded-none" src={d.img} alt={d.title}  width={640} height={360} sizes="(max-width:1024px) 50vw, 25vw" className="h-40 w-full object-cover" />
          <div className="p-3">
            <div className="font-medium">{d.title}</div>
            <div className="mt-1 flex flex-wrap gap-1">
              {d.chips.map(c => (
                <span key={c} className="text-xs px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  </Section>
);

export default SDDestinations;
