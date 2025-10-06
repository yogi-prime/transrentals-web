import React from "react";

type Fleet = {
  id: string;
  title: string;
  image: string;
  tag?: string;
  priceFrom?: string;
  href?: string;
};

const FLEETS: Fleet[] = [
  { id: "sd", title: "Hatchback (Self-Drive)", image: "/fleet/hatch.jpg", priceFrom: "₹999/day" },
  { id: "sed", title: "Sedan (Self-Drive)", image: "/fleet/sedan.jpg", priceFrom: "₹1,299/day" },
  { id: "suv", title: "SUV (Self-Drive)", image: "/fleet/suv.jpg", priceFrom: "₹1,699/day", tag: "Popular" },
  { id: "lux", title: "Luxury", image: "/fleet/lux.jpg", priceFrom: "₹6,999/day" },
  { id: "bike", title: "Bikes", image: "/fleet/bike.jpg", priceFrom: "₹499/day" },
  { id: "bus", title: "Mini Bus", image: "/fleet/bus.jpg", priceFrom: "On request" },
];

const FleetMarketplace: React.FC = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="rounded-2xl bg-card ring-1 ring-black/5 p-5 md:p-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold">Browse Fleets</h2>
            <p className="text-sm text-muted-foreground">Choose by category & budget</p>
          </div>
          <a className="text-sm text-primary hover:underline" href="/fleets">View more →</a>
        </div>

        <div className="mt-5 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
          {FLEETS.map(f => (
            <a key={f.id} href={f.href || "#"} className="group rounded-xl overflow-hidden ring-1 ring-black/5 bg-white">
              <div className="relative">
                <img src={f.image} alt={f.title} className="h-28 w-full object-cover transition group-hover:scale-[1.03]" />
                {f.tag && (
                  <span className="absolute top-2 left-2 text-[11px] rounded-full bg-emerald-600 text-white px-2 py-0.5">
                    {f.tag}
                  </span>
                )}
              </div>
              <div className="p-3">
                <div className="text-sm font-medium">{f.title}</div>
                <div className="text-xs text-muted-foreground">{f.priceFrom}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetMarketplace;
