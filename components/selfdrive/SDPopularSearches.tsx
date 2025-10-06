// src/components/selfdrive/SDPopularSearches.tsx
import React from "react";
import Section from "./Section";

const TERMS = [
  "Goa Self-Drive", "Bangalore SUV", "Hyderabad Hatchback", "Pune Weekend", "Jaipur Sedan",
  "Delhi Airport Pickup", "Mumbai Long Trip", "Udaipur Convertible"
];

const SDPopularSearches: React.FC = () => (
  <Section title="Popular Searches">
    <div className="flex flex-wrap gap-2">
      {TERMS.map(t => (
        <button key={t} className="text-sm px-3 py-1 rounded-full border hover:bg-muted">
          {t}
        </button>
      ))}
    </div>
  </Section>
);

export default SDPopularSearches;
