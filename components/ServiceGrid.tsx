import React, { useEffect, useRef, useState } from "react";
import { Car, Users, Bike, Bus, Truck, Wrench, PackageX, MapPin, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

/* ---------- tiny dot-only slider for the top-left area ---------- */
function PromoSlider({
  slides,
  interval = 4000,
  className = "",
}: {
  slides: { src: string; alt?: string; href?: string }[];
  interval?: number;
  className?: string;
}) {
  const [idx, setIdx] = useState(0);
  const timerRef = useRef<number | null>(null);
  const pausedRef = useRef(false);

  // autoplay
  useEffect(() => {
    const play = () => {
      if (!pausedRef.current) {
        setIdx((i) => (i + 1) % slides.length);
      }
      timerRef.current = window.setTimeout(play, interval);
    };
    timerRef.current = window.setTimeout(play, interval);
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [slides.length, interval]);

  return (
    <div
      className={`relative overflow-hidden rounded-2xl shadow-lg ${className}`}
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
      aria-roledescription="carousel"
    >
      {/* slides */}
      <div className="relative h-full w-full">
        {slides.map((s, i) => {
          const active = i === idx;
          const body = (
            <img
              src={s.src}
              alt={s.alt ?? `slide-${i + 1}`}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                active ? "opacity-100" : "opacity-0"
              }`}
              draggable={false}
            />
          );
          return (
            <div key={i} className="absolute inset-0">
              {s.href ? (
                <a href={s.href} aria-label={s.alt ?? `Go to ${i + 1}`}>
                  {body}
                </a>
              ) : (
                body
              )}
            </div>
          );
        })}
      </div>

      {/* dots */}
    {/* dots */}
<div className="absolute bottom-3 left-1/2 -translate-x-1/2">
  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 shadow">
    {slides.map((_, i) => (
      <button
        key={i}
        onClick={() => setIdx(i)}
        aria-label={`Go to slide ${i + 1}`}
        className={`h-2.5 w-2.5 rounded-full transition ${
          i === idx ? "bg-neutral-800" : "bg-neutral-400/70 hover:bg-neutral-500"
        }`}
      />
    ))}
  </div>
</div>

    </div>
  );
}

/* ---------- your services (unchanged) ---------- */
const services = [
  { id: "self-drive", name: "Self Drive Car", icon: Car, color: "text-blue-600", gradient: "from-blue-500/10 to-blue-600/10" },
  { id: "chauffeur", name: "Car Rental", icon: Users, color: "text-green-600", gradient: "from-green-500/10 to-green-600/10" },
  { id: "bike", name: "Bike Rental", icon: Bike, color: "text-orange-600", gradient: "from-orange-500/10 to-orange-600/10" },
  { id: "taxi", name: "Taxi Services", icon: Car, color: "text-yellow-600", gradient: "from-yellow-500/10 to-yellow-600/10" },
  { id: "one-taxi", name: "One Taxi", icon: MapPin, color: "text-purple-600", gradient: "from-purple-500/10 to-purple-600/10" },
  { id: "luxury", name: "Luxury", icon: Crown, color: "text-indigo-600", gradient: "from-indigo-500/10 to-indigo-600/10" },
  { id: "bus", name: "Bus", icon: Bus, color: "text-red-600", gradient: "from-red-500/10 to-red-600/10" },
  { id: "truck", name: "Truck", icon: Truck, color: "text-gray-600", gradient: "from-gray-500/10 to-gray-600/10" },
  { id: "equipment", name: "Equipment", icon: Wrench, color: "text-teal-600", gradient: "from-teal-500/10 to-teal-600/10" },
  { id: "movers", name: "Packers & Movers", icon: PackageX, color: "text-pink-600", gradient: "from-pink-500/10 to-pink-600/10" },
];

export default function ServiceGrid() {
  // slides for the top-left slider
  const slides = [
    { src: "/service/markeeting/image/marketplace-offer-1.jpg", alt: "Festive offers", href: "/offers" },
    { src: "/service/markeeting/image/marketplace-offer-2.jpg", alt: "Lowest fares", href: "/offers/lowest" },
    { src: "/service/markeeting/image/marketplace-offer-3.jpg", alt: "Corporate deals", href: "/corporate" },
  ];

  return (
    <div className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* LEFT 40% — slider (top) + static image (bottom) */}
          <div className="lg:col-span-2 space-y-4">
            <PromoSlider slides={slides} className="h-60" />
            
            <div className="h-40 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/service/markeeting/image/marketplace-offer-4.jpg"
                alt="Become Vendor"
                className="h-full w-full object-cover"
              />
            </div>
            
          </div>

          {/* RIGHT 60% — compact services grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {services.map((s) => (
                <a
                  key={s.id}
                  href={`/${s.id}`}
                  className="group flex flex-col items-center p-4 rounded-xl bg-card hover:shadow-lg transition"
                >
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${s.gradient}`}>
                    <s.icon className={`w-8 h-8 ${s.color}`} />
                  </div>
                  <h3 className="mt-3 text-sm font-medium text-foreground group-hover:text-primary text-center">
                    {s.name}
                  </h3>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
