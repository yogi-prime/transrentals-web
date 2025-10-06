"use client";
import React, { useState } from "react";

type Offer = {
  id: string;
  tab: "All" | "Bank" | "Flights" | "Hotels" | "Cabs" | "Bus" | "Trains";
  title: string;
  subtitle?: string;
  image: string;
  cta?: string;
  href?: string;
  validity?: string;
};

const OFFERS: Offer[] = [
  { id: "1", tab: "All", title: "Flat 12% OFF on App", subtitle: "Use code WELCOME", image: "/offers/app.jpg", cta: "Get App", href: "#" },
  { id: "2", tab: "Bank", title: "Up to ₹1500 OFF with HDFC", image: "/offers/bank-hdfc.jpg", validity: "Till 5 Oct" },
  { id: "3", tab: "Flights", title: "Winter Flight Deals", image: "/offers/flights.jpg" },
  { id: "4", tab: "Hotels", title: "Goa Beachfront Hotels 40% OFF", image: "/offers/hotel-goa.jpg", validity: "Till 5 Oct" },
  { id: "5", tab: "Cabs", title: "₹500 OFF on Outstation Cabs", image: "/offers/cabs.jpg" },
  { id: "6", tab: "Bus", title: "Festive Bus Sale", image: "/offers/bus.jpg" },
  { id: "7", tab: "Trains", title: "Zero PG Charges – UPI", image: "/offers/trains.jpg" },
];

const TABS: Offer["tab"][] = ["All", "Bank", "Flights", "Hotels", "Cabs", "Bus", "Trains"];

const OffersForYou: React.FC = () => {
  const [active, setActive] = useState<Offer["tab"]>("All");
  const filtered = OFFERS.filter(o => active === "All" ? true : o.tab === active);

  return (
    <section className="container mx-auto px-4">
      <div className="rounded-2xl bg-card ring-1 ring-black/5 p-5 md:p-6">
        <div className="flex items-end justify-between gap-3">
          <h2 className="text-xl md:text-2xl font-semibold">Offers for You</h2>
          <a href="/offers" className="text-sm text-primary hover:underline">View all →</a>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {TABS.map(t => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`h-9 rounded-full px-3 text-sm border transition ${
                active === t ? "bg-emerald-600 text-white border-emerald-600" : "bg-background hover:bg-muted"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {filtered.map(o => (
            <a key={o.id} href={o.href || "#"} className="group overflow-hidden rounded-xl ring-1 ring-black/5 bg-white">
              <img src={o.image} alt={o.title} className="h-36 w-full object-cover transition group-hover:scale-[1.03]" />
              <div className="p-3">
                <div className="font-medium">{o.title}</div>
                {o.subtitle && <div className="text-sm text-muted-foreground">{o.subtitle}</div>}
                <div className="mt-2 flex items-center justify-between">
                  {o.validity ? <div className="text-xs text-muted-foreground">Valid: {o.validity}</div> : <span />}
                  {o.cta && <span className="text-sm text-primary"> {o.cta} →</span>}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersForYou;
