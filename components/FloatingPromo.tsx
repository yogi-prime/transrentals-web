'use client';

import * as React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

/** Internal default campaigns (edit freely). */
const DEFAULT_CAMPAIGNS = [
  {
    id: 'diwali-2025',
    title: 'Diwali Dhamaka • Up to 35% OFF',
    subtitle: 'Cars, cabs, buses & more across India',
    ctaText: 'Grab Offer',
    href: '/offers/diwali',
    image: '/images/promos/diwali.jpg',
    badge: '-35%',
  },
  {
    id: 'navratri-ride',
    title: 'Navratri Travel Sale',
    subtitle: 'Special fares for 9 festive nights',
    ctaText: 'View Deals',
    href: '/offers/navratri',
    image: '/images/promos/navratri.jpg',
  },
  {
    id: 'become-vendor',
    title: 'Become a Vendor',
    subtitle: 'Join India’s largest vehicle rental marketplace',
    ctaText: 'Start Earning',
    href: '/vendor',
    image: '/images/promos/vendor.jpg',
    badge: 'New',
  },
  {
    id: 'backr-coins',
    title: 'Earn Backr Coins on every trip',
    subtitle: 'Redeem for discounts & perks',
    ctaText: 'Know More',
    href: '/rewards',
    image: '/images/promos/backr-coins.jpg',
  },
] satisfies Array<{
  id: string;
  title: string;
  subtitle?: string;
  ctaText: string;
  href: string;
  image?: string;
  badge?: string;
  gradient?: string;
  paused?: boolean;
}>;

type Props = {
  /** Optional: override campaigns if you ever want. */
  campaigns?: typeof DEFAULT_CAMPAIGNS;
  /** Optional: rotation interval in ms. 0 disables auto-rotate. */
  rotateInterval?: number;
  /** Optional: show tiny dot when all cards are dismissed. */
  showMinimizedDot?: boolean;
  /** Optional: offsets (px). */
  bottom?: number;
  left?: number;
  /** Optional: z-index. */
  zIndex?: number;
  /** Optional: localStorage namespace key. */
  storageKey?: string;
};

export default function FloatingPromo({
  campaigns = DEFAULT_CAMPAIGNS,
  rotateInterval = 6000,
  showMinimizedDot = true,
  bottom = 24,
  left = 24,
  zIndex = 50,
  storageKey = 'tr_floating_promo',
}: Props) {
  const [idx, setIdx] = React.useState(0);
  const [hiddenIds, setHiddenIds] = React.useState<string[]>([]);
  const [collapsed, setCollapsed] = React.useState(false);

  // Hydrate dismissed ids (SSR-safe)
  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const raw = localStorage.getItem(`${storageKey}:dismissed`);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) setHiddenIds(parsed);
    } catch {}
  }, [storageKey]);

  // Filter visible list
  const visible = React.useMemo(() => {
    const active = campaigns.filter((c) => !hiddenIds.includes(c.id) && !c.paused);
    if (active.length) return active;
    return campaigns.filter((c) => !hiddenIds.includes(c.id));
  }, [campaigns, hiddenIds]);

  // Nothing left → show tiny dot (if enabled)
  if (!visible.length) {
    if (!showMinimizedDot) return null;
    return (
      <button
        aria-label="Show promos"
        onClick={() => {
          setHiddenIds([]);
          if (typeof window !== 'undefined') {
            localStorage.removeItem(`${storageKey}:dismissed`);
          }
        }}
        style={{ position: 'fixed', bottom, left, zIndex }}
        className="h-10 w-10 rounded-xl bg-emerald-600 text-white shadow-lg hover:scale-105 transition grid place-items-center"
      >
        %
      </button>
    );
  }

  const current = visible[idx % visible.length];

  // Auto-rotate (SSR-safe)
  React.useEffect(() => {
    if (!rotateInterval || collapsed || visible.length <= 1) return;
    const t = window.setInterval(
      () => setIdx((i) => (i + 1) % visible.length),
      rotateInterval
    );
    return () => window.clearInterval(t);
  }, [rotateInterval, collapsed, visible.length]);

  const dismiss = (id: string) => {
    const next = Array.from(new Set([...hiddenIds, id]));
    setHiddenIds(next);
    if (typeof window !== 'undefined') {
      localStorage.setItem(`${storageKey}:dismissed`, JSON.stringify(next));
    }
  };

  return (
    <div style={{ position: 'fixed', bottom, left, zIndex }}>
      {collapsed ? (
        <button
          onClick={() => setCollapsed(false)}
          className="rounded-full bg-foreground text-background text-xs px-3 py-2 shadow-xl hover:opacity-90 transition"
        >
          View offers
        </button>
      ) : (
        <div className="relative w-[260px] rounded-2xl bg-card shadow-xl border overflow-hidden">
          {/* Dismiss current */}
          <button
            className="absolute right-2 top-2 h-7 w-7 grid place-items-center rounded-full bg-black/40 text-white hover:bg-black/55"
            onClick={() => dismiss(current.id)}
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Media */}
          <div className="h-[180px] relative">
            {current.image ? (
              <img
                src={current.image}
                alt={current.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            ) : (
              <div
                className={
                  current.gradient ||
                  'h-full w-full bg-gradient-to-br from-emerald-600 to-teal-400'
                }
              />
            )}
            {current.badge && (
              <div className="absolute left-3 top-3 text-[11px] px-2 py-1 rounded-full bg-white/90 text-foreground font-semibold shadow">
                {current.badge}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-3 space-y-2">
            <div className="text-base font-semibold leading-tight">
              {current.title}
            </div>
            {current.subtitle && (
              <p className="text-xs text-muted-foreground">{current.subtitle}</p>
            )}

            <div className="flex items-center justify-between pt-2">
              <Button asChild size="sm" className="rounded-full">
                <a href={current.href}>{current.ctaText}</a>
              </Button>

              {visible.length > 1 && (
                <div className="flex items-center gap-1">
                  <button
                    className="h-8 w-8 grid place-items-center rounded-full hover:bg-muted"
                    onClick={() => setIdx((i) => (i - 1 + visible.length) % visible.length)}
                    aria-label="Previous"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    className="h-8 w-8 grid place-items-center rounded-full hover:bg-muted"
                    onClick={() => setIdx((i) => (i + 1) % visible.length)}
                    aria-label="Next"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="px-3 pb-3">
            <button
              className="text-[11px] text-muted-foreground hover:text-foreground transition"
              onClick={() => setCollapsed(true)}
            >
              Minimize
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
