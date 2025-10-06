// src/components/selfdrive/SDFleetMarketplace.tsx
import React from "react";
import Section from "./Section";
import useHScroll from "./useHScroll";
import { Button } from "@/components/ui/button";
import OptimizedImage from "@/components/OptimizedImage";
const FLEET = [
  { id: "c1", name: "Hyundai i20",  tag: "Hatchback", price: 1499, img: "/selfdrive/vehicle/car-1.jpg" },
  { id: "c2", name: "Swift Dzire",  tag: "Sedan",     price: 1599, img: "/selfdrive/vehicle/car-2.jpg" },
  { id: "c3", name: "Creta",        tag: "SUV",       price: 1999, img: "/selfdrive/vehicle/car-3.jpg" },
  { id: "c4", name: "Innova Crysta",tag: "MUV",       price: 2499, img: "/selfdrive/vehicle/car-4.jpg" },
  { id: "c5", name: "Thar",         tag: "Lifestyle", price: 2599, img: "/selfdrive/vehicle/car-5.jpg" },
  { id: "c6", name: "Fortuner",     tag: "Luxury",    price: 2599, img: "/selfdrive/vehicle/car-6.jpg" },
];

const SDFleetMarketplace: React.FC = () => {
  const { ref, left, right } = useHScroll<HTMLDivElement>();

  return (
    <Section
      title="Explore Popular Cars"
      subtitle="Hand-picked self-drive favourites near you."
      right={
        <div className="hidden md:flex gap-2">
          <Button variant="outline" size="sm" onClick={left}>‹</Button>
          <Button variant="outline" size="sm" onClick={right}>›</Button>
        </div>
      }
    >
      <div ref={ref} className="flex gap-4 overflow-x-auto scroll-smooth pb-2
        [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {FLEET.map((c) => (
          <div
            key={c.id}
            className="min-w-[240px] max-w-[240px] rounded-xl border bg-white overflow-visible"
          >
            {/* image + favicon badge */}
          {/* image + favicon (inside, no bg circle) */}
<div className="relative">
  {/* favicon FIRST so it always overlays */}
  <OptimizedImage
    src="/fevicon.webp"
    alt="Brand"
    className="
      absolute top-2 left-2 md:top-3 md:left-3
      h-7 w-7 md:h-8 md:w-8
      rounded-full object-cover
      drop-shadow-md z-20"   // 👈 ensures it's always above
  />

  {/* main car image */}
  <OptimizedImage
    src={c.img}
    alt={c.name}
    className="h-36 w-full object-cover"
    rounded="rounded-none"
  />
</div>


            <div className="p-3">
              <div className="text-sm text-muted-foreground">{c.tag}</div>
              <div className="font-semibold">{c.name}</div>
              <div className="mt-1 text-sm">From ₹{c.price}/day</div>
              <Button className="mt-3 w-full">See Details</Button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default SDFleetMarketplace;
