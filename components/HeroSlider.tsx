import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Slide = {
  id: number;
  title?: string;
  subtitle?: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  bg: string;           // background image URL (you’ll set real images)
  imageOnly?: boolean;  // if true => show only background image (no text)
};

/* ---------- BRAND BUTTON STYLES ---------- */
const BRAND = {
  // tweak if you have exact brand hex
  from: 'from-emerald-500',
  via:  'via-green-600',
  to:   'to-teal-500',
};

const brandPrimary =
  `inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold
   text-white shadow-sm transition
   bg-gradient-to-r ${BRAND.from} ${BRAND.via} ${BRAND.to}
   hover:opacity-95 active:scale-[0.99] focus:outline-none
   focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500`;

const brandOutline =
  `inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold
   border border-emerald-600 text-emerald-700 bg-white/95 backdrop-blur
   hover:bg-emerald-50 hover:text-emerald-800 active:scale-[0.99] transition
   focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500`;


const SLIDES: Slide[] = [
  {
    id: 1,
    title: 'Everything you need on wheels',
    subtitle: 'From daily commutes to cross-country adventures',
    description:
      "India's largest fleet from verified vendors — self-drive, chauffeur, bikes, buses, trucks, equipment.",
    primaryCta: { label: 'Explore services', href: '/services' },
    secondaryCta: { label: 'Browse cities', href: '/cities' },
    bg: '/hero1/hero3.jpeg',
  },
  {
    id: 2,
    title: 'Grow with TransRentals',
    subtitle: 'Join the marketplace built for vendors',
    description:
      'List your fleet, get bookings, track payouts. Tools that scale your business.',
    primaryCta: { label: 'Become a vendor', href: '/vendor' },
    secondaryCta: { label: 'See how it works', href: '/vendor/how-it-works' },
    bg: '/hero2/hero.jpeg',
  },
  {
    id: 3,
    // Pure marketing banner (image only)
    bg: '/hero5/hero.jpeg',
    imageOnly: true,
  },
  {
    id: 4,
    title: 'Save more with rewards & coupons',
    subtitle: 'Earn coins on every booking',
    description:
      'Stack coupons, redeem coins, and get transparent pricing across India.',
    primaryCta: { label: 'See offers', href: '/offers' },
    secondaryCta: { label: 'Join rewards', href: '/rewards' },
    bg: '/hero4/hero.jpeg',
  },
  {
    id: 5,
    title: 'Trusted by leading brands',
    subtitle: 'Corporate mobility that delivers',
    description:
      'Pan-India coverage, SLAs, and support built for scale.',
    primaryCta: { label: 'Corporate solutions', href: '/corporate' },
    secondaryCta: { label: 'Case studies', href: '/case-studies' },
    bg: '/hero3/hero.jpeg',
  },
];

const AUTO_MS = 5000;

const HeroSlider: React.FC = () => {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % SLIDES.length), AUTO_MS);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative">
      {/* hero wrapper */}
      <div className="relative  h-[560px] overflow-hidden border-b border-border">
        {/* slides */}
        {SLIDES.map((s, idx) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-linear ${
              idx === i ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            aria-hidden={idx !== i}
          >
      
<div
  className="absolute inset-0 bg-center bg-cover"
  style={{
    backgroundImage: `url(${s.bg})`
  }}
/>

{/* global gentle wash */}
<div className="absolute inset-0 bg-black/20" />

{/* stronger on the left where the text sits */}
<div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-transparent" />

{/* subtle bottom vignette so vehicles pop */}
<div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/30 to-transparent" />


            {/* content container (hidden if imageOnly) */}
            {!s.imageOnly && (
              <div className="relative  h-full">
                <div className="container mx-auto h-full px-4">
                  <div className="max-w-8xl mx-auto h-full flex items-center">
                    <div className="w-full max-w-2xl">
                      <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                        {s.title}
                      </h1>
                      {s.subtitle && (
                        <p className="mt-3 text-lg md:text-xl text-white/90">
                          {s.subtitle}
                        </p>
                      )}
                      {s.description && (
                        <p className="mt-4 text-base md:text-lg text-white/80">
                          {s.description}
                        </p>
                      )}
                      <div className="mt-6 flex flex-wrap gap-3">
                        { s.primaryCta && (
  <a href={s.primaryCta.href} className={brandPrimary}>
    {s.primaryCta.label}
    <ChevronRight className="ml-1 h-4 w-4" />
  </a>
)}
                        { s.secondaryCta && (
  <a href={s.secondaryCta.href} className={brandOutline}>
    {s.secondaryCta.label}
  </a>
)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* dots */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-2">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  idx === i ? 'w-6 bg-foreground' : 'w-2.5 bg-foreground/40 hover:bg-foreground/70'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
