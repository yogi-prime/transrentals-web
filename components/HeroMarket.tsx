// // components/HeroMarket.tsx
// import React from "react";
// import GlobalSearch from "@/components/GlobalSearch";

// // Tip: apni image ko /public/media/hero/market.jpg ya jo chahe waha rakho
// const HERO_IMAGE = "/hero1/hero5.jpeg";

// const HeroMarket: React.FC = () => {
//   return (
//     <section className="relative isolate">
//       {/* BG IMAGE + GRADIENT STACK */}
//       <div className="relative h-[600px] overflow-hidden">
//         {/* Image layer */}
//         <picture>
//           <img
//             src={HERO_IMAGE}
//             alt="TransRentals marketplace hero"
//             className="absolute opacity-40 inset-0 h-full w-full object-cover"
//           />
//         </picture>

//         {/* Gradient wash (greens) */}
//         {/* <div className="absolute inset-0 bg-gradient-to-br from-emerald-700/80 via-green-600/60 to-teal-600/70 mix-blend-multiply" /> */}
//         {/* Gradient wash (darker greens) */}
// {/* <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 via-green-800/80 to-teal-900/85 mix-blend-multiply" /> */}
// <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-emerald-900/85 to-green-800/80 mix-blend-multiply" />



//         {/* Soft radial glow for premium feel */}
//         <div className="pointer-events-none absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-emerald-400/25 blur-[80px]" />

//         {/* Content */}
//         <div className="relative z-10 h-full container mx-auto px-4">
//           <div className="h-full flex flex-col items-center justify-center text-center">
//             <h1 className="text-4xl md:text-5xl mt-20 font-semibold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
//               Everything You Need On Wheels
//             </h1>
//             <p className="mt-3 text-white/90 text-lg max-w-2xl">
//               Rent cars, bikes, buses, trucks & more from trusted vendors across India.
//             </p>

//             {/* ---- GLOBAL SEARCH (AS-IS) INSIDE HERO ---- */}
//             {/* No style/logic changes to your GlobalSearch; just mounted here */}
//             <div className="mt-8 w-full">
//               <GlobalSearch floatOverHero={false} />
//             </div>
//           </div>
//         </div>

//         {/* Bottom Curve (cuts the hero into the page smoothly) */}
//         <svg
//           className="absolute bottom-[-1px] left-0 right-0 w-full"
//           viewBox="0 0 1440 110"
//           preserveAspectRatio="none"
//           aria-hidden="true"
//         >
//           {/*
//             Fill ko theme background se match kar rahe hain.
//             Shadcn/Tailwind theme var: hsl(var(--background))
//           */}
//           <path
//             d="M0,80 C240,20 480,140 720,90 C960,40 1200,70 1440,10 L1440,110 L0,110 Z"
//             style={{ fill: "hsl(var(--background))" }}
//           />
//         </svg>
//       </div>
//     </section>
//   );
// };

// export default HeroMarket;
// components/GlobalSearch.tsx
"use client";

import React, { useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// ... (agar tumhare select/date inputs wagairah hai to unke imports yahin)

type Props = { floatOverHero?: boolean };

export default function GlobalSearch({ floatOverHero = true }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // local states — apne fields ke hisaab se adjust karo
  const [q, setQ] = useState(searchParams.get("q") ?? "");
  const [city, setCity] = useState(searchParams.get("city") ?? "");
  const [service, setService] = useState(searchParams.get("service") ?? "");

  // navigate helper (useNavigate -> router.push)
  const go = (href: string) => router.push(href);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    if (city) params.set("city", city);
    if (service) params.set("service", service);

    // apne desired results path pe le jao:
    go(`/search${params.toString() ? `?${params.toString()}` : ""}`);
  };

  return (
    <form
      onSubmit={onSubmit}
      className={`rounded-2xl border bg-white/95 backdrop-blur p-3 shadow-lg ${floatOverHero ? "mx-auto max-w-3xl" : ""}`}
    >
      <div className="flex gap-2">
        <Input
          placeholder="Search cars, bikes, buses..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="flex-1"
        />
        {/* yahan tumhare city/service selectors daal do */}
        {/* <CitySelect value={city} onValueChange={setCity} /> */}
        {/* <ServiceSelect value={service} onValueChange={setService} /> */}
        <Button type="submit">Search</Button>
      </div>
    </form>
  );
}
