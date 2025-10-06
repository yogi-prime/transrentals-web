// src/components/selfdrive/SDFaq.tsx
import React, { useState } from "react";
import Section from "./Section";

const QA = [
  { q: "Is fuel included in self-drive tariff?", a: "Tariff typically excludes fuel. You return the car at same fuel level as pickup." },
  { q: "What documents are required?", a: "Valid driving license, government ID and refundable security deposit." },
  { q: "Is there a km limit?", a: "Plans may include limited or unlimited km. Check plan details during booking." },
];

const Item: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border rounded-xl p-4">
      <button className="w-full text-left font-medium flex justify-between" onClick={() => setOpen(o => !o)}>
        <span>{q}</span><span>{open ? "–" : "+"}</span>
      </button>
      {open && <p className="mt-2 text-sm text-muted-foreground">{a}</p>}
    </div>
  );
};

const SDFaq: React.FC = () => (
  <Section title="Self-Drive FAQs">
    <div className="grid gap-3">
      {QA.map((x, i) => <Item key={i} q={x.q} a={x.a} />)}
    </div>
  </Section>
);

export default SDFaq;
