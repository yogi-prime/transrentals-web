// src/components/selfdrive/SDFleetMarketplace.tsx
import React from "react";
import Section from "./Section";
import useHScroll from "./useHScroll";
import { Button } from "@/components/ui/button";
import OptimizedImage from "@/components/OptimizedImage";

const FLEET = [
  { id: "c1", name: "Hyundai i20", tag: "Hatchback", price: 1499, img: "/selfdrive/vehicle/car-1.webp" },
  { id: "c2", name: "Swift Dzire", tag: "Sedan", price: 1599, img: "/selfdrive/vehicle/car-2.webp" },
  { id: "c3", name: "Creta", tag: "SUV", price: 1999, img: "/selfdrive/vehicle/car-3.webp" },
  { id: "c4", name: "Innova Crysta", tag: "MUV", price: 2499, img: "/selfdrive/vehicle/car-4.webp" },
  { id: "c5", name: "Thar", tag: "Lifestyle", price: 2599, img: "/selfdrive/vehicle/car-5.webp" },
  { id: "c6", name: "Fortuner", tag: "Luxury", price: 2599, img: "/selfdrive/vehicle/car-6.webp" },
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
      <div
        ref={ref}
        className="flex gap-4 overflow-x-auto scroll-smooth pb-2 snap-x snap-mandatory
        [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {FLEET.map((c) => (
          <article
            key={c.id}
            className="min-w-[260px] max-w-[260px] snap-start rounded-xl border bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            {/* image + favicon badge */}
            <div className="relative">
              {/* main vehicle image */}
              <OptimizedImage
                src={c.img}
                alt={c.name}
                width={480}
                height={288}
                sizes="(max-width:768px) 80vw, 240px"
                eager={["c1", "c2"].includes(c.id)}
                className="h-36 w-full object-cover"
                rounded="rounded-none"
              />
            </div>

            {/* content */}
            <div className="p-3">
              <div className="text-sm text-muted-foreground">{c.tag}</div>
              <div className="font-medium">{c.name}</div>
              <div className="mt-1 text-sm">
                From ₹{c.price}/day
              </div>
              <Button className="mt-3 w-full">See Details</Button>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default SDFleetMarketplace;
