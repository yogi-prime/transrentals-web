import React from "react";

type Quick = { id: string; title: string; image: string; href?: string; cta?: string };

const QUICK: Quick[] = [
  { id: "q1", title: "Car Service", image: "/quick/car-service.jpg" },
  { id: "q2", title: "Bike Service", image: "/quick/bike-service.jpg" },
  { id: "q3", title: "Wedding Cars", image: "/quick/wedding.jpg" },
  { id: "q4", title: "Airport Transfers", image: "/quick/airport.jpg" },
  { id: "q5", title: "Banquet Halls", image: "/quick/banquet.jpg" },
];

const PopularSearches: React.FC = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="rounded-2xl bg-card ring-1 ring-black/5 p-5 md:p-6">
        <h2 className="text-xl md:text-2xl font-semibold">Popular Searches</h2>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {QUICK.map(q => (
            <a key={q.id} href={q.href || "#"} className="group rounded-xl overflow-hidden ring-1 ring-black/5 bg-white">
              <img src={q.image} alt={q.title} className="h-40 w-full object-cover transition group-hover:scale-[1.03]" />
              <div className="p-3 flex items-center justify-between">
                <div className="font-medium">{q.title}</div>
                <span className="text-sm text-primary">Enquire →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularSearches;
