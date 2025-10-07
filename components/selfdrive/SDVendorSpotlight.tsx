// src/components/selfdrive/SDVendorSpotlight.tsx
import React from "react";
import Section from "./Section";
import { Button } from "@/components/ui/button";
import useHScroll from "./useHScroll";
import { BadgeCheck } from "lucide-react";
import OptimizedImage from "@/components/OptimizedImage";
const VENDORS = [
  { id: "v1", name: "Goa Wheels", city: "Goa", rating: 4.7, trips: "12k+", img: "/selfdrive/vendor/vendor-1.jpg", verified: true },
  { id: "v2", name: "Mumbai Drives", city: "Mumbai", rating: 4.6, trips: "9k+", img: "/selfdrive/vendor/vendor-2.jpg", verified: true },
  { id: "v3", name: "Delhi Zoom", city: "Delhi", rating: 4.8, trips: "15k+", img: "/selfdrive/vendor/vendor-3.jpg", verified: true },
  { id: "v4", name: "Pune Rides", city: "Pune", rating: 4.5, trips: "7k+", img: "/selfdrive/vendor/vendor-4.jpg", verified: true },
  { id: "v5", name: "Jaipur Trips", city: "Jaipur", rating: 4.6, trips: "5k+", img: "/selfdrive/vendor/vendor-5.jpg", verified: true },
  { id: "v6", name: "Sagun travels ", city: "Ahmedabad", rating: 4.9, trips: "50k+", img: "/selfdrive/vendor/vendor-6.jpg", verified: true },
];

const SDVendorSpotlight: React.FC = () => {
  const { ref, left, right } = useHScroll<HTMLDivElement>();

  return (
    <Section
      title="Top Self-Drive Vendors"
      subtitle="Trusted partners with great ratings and fleets."
      right={
        <div className="hidden md:flex gap-2">
          <Button variant="outline" size="sm" onClick={left}>‹</Button>
          <Button variant="outline" size="sm" onClick={right}>›</Button>
        </div>
      }
    >
      <div
        ref={ref}
        className="flex gap-4 overflow-x-auto scroll-smooth pb-2
        [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {VENDORS.map((v) => (
          <article
            key={v.id}
            className="min-w-[260px] max-w-[260px] rounded-xl border bg-white overflow-hidden"
          >
            {/* image + verified badge */}
            <div className="relative">
              <OptimizedImage src={v.img} rounded="rounded-none" alt={v.name} width={480} height={288} sizes="(max-width:768px) 80vw, 260px" className="h-36 w-full object-cover" />
              {v.verified && (
                <span className="absolute top-2 left-2 inline-flex items-center gap-1 rounded-full
                  bg-emerald-600/95 text-white px-2 py-1 text-[11px] font-medium shadow">
                  <BadgeCheck className="h-3.5 w-3.5" />
                  Verified
                </span>
              )}
            </div>

            {/* content */}
            <div className="p-3">
              <div className="font-medium">{v.name}</div>
              <div className="text-xs text-muted-foreground">{v.city}</div>
              <div className="mt-2 text-sm">
                <span className="font-semibold">★ {v.rating}</span> · {v.trips} trips
              </div>
              <Button className="mt-3 w-full">View Fleet</Button>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default SDVendorSpotlight;
