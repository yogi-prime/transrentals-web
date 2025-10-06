import React from "react";

type Coll = { id: string; title: string; image: string; href?: string; tag?: string };

const COLLECTIONS: Coll[] = [
  { id: "c1", title: "Weekend Getaways", image: "/collections/weekend.jpg", tag: "TOP 12" },
  { id: "c2", title: "Beaches Near You", image: "/collections/beach.jpg", tag: "TOP 10" },
  { id: "c3", title: "Hill Stations", image: "/collections/hills.jpg", tag: "TOP 9" },
  { id: "c4", title: "Heritage Drives", image: "/collections/heritage.jpg", tag: "TOP 7" },
  { id: "c5", title: "Foodie Road Trips", image: "/collections/food.jpg", tag: "TOP 8" },
];

const DestinationsForSelfDrive: React.FC = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="rounded-2xl bg-card ring-1 ring-black/5 p-5 md:p-6">
        <div className="flex items-end justify-between">
          <h2 className="text-xl md:text-2xl font-semibold">Destinations for Self-Drive</h2>
          <a className="text-sm text-primary hover:underline" href="/destinations">Explore All →</a>
        </div>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {COLLECTIONS.map(c => (
            <a key={c.id} href={c.href || "#"} className="group relative overflow-hidden rounded-xl">
              <img src={c.image} alt={c.title} className="h-48 w-full object-cover transition group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute top-2 left-2 text-[11px] rounded-full bg-white/95 px-2 py-0.5">
                {c.tag}
              </div>
              <div className="absolute bottom-0 p-3">
                <div className="text-white font-medium drop-shadow">{c.title}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsForSelfDrive;
