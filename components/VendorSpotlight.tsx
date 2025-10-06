import React from "react";

type Vendor = {
  id: string;
  title: string;
  image: string;
  href?: string;
  badge?: string;
};

const VENDORS: Vendor[] = [
  { id: "a1", title: "WheelzOn Partner", image: "/vendors/vendor-1.jpg", href: "#" },
  { id: "a2", title: "RideHub Elite", image: "/vendors/vendor-2.jpg", href: "#"},
  { id: "a3", title: "MetroWheels Pro", image: "/vendors/vendor-3.jpg", href: "#"},
  { id: "a4", title: "Coastal Drives", image: "/vendors/vendor-4.jpg", href: "#"},
];

const VendorSpotlight: React.FC = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="rounded-2xl bg-card ring-1 ring-black/5 p-5 md:p-6">
        <div className="flex items-end justify-between gap-3">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold">Our Featured Vendor Partners</h2>
            <p className="text-sm text-muted-foreground">
              Trusted fleets across India with assured quality and support.
            </p>
          </div>
          <a href="/vendors" className="text-sm text-primary hover:underline">View all →</a>
        </div>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {VENDORS.map(v => (
            <a key={v.id} href={v.href || "#"} className="group relative overflow-hidden rounded-xl">
              <img src={v.image} alt={v.title} className="h-40 md:h-48 w-full object-cover transition group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-0 p-3">
                <div className="text-white font-medium drop-shadow">{v.title}</div>
                {v.badge && <div className="text-xs text-white/90">{v.badge}</div>}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VendorSpotlight;
