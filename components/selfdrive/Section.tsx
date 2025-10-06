// src/components/selfdrive/Section.tsx
import React from "react";

type Props = {
  title: string;
  subtitle?: string;
  right?: React.ReactNode;
  children: React.ReactNode;
  id?: string;
};
const Section: React.FC<Props> = ({ title, subtitle, right, children, id }) => (
  <section id={id} className="container mx-auto px-4 my-8">
    <div className="flex items-end justify-between gap-3 mb-3">
      <div>
        <h2 className="text-xl md:text-2xl font-semibold">{title}</h2>
        {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
      </div>
      {right}
    </div>
    <div className="rounded-2xl border bg-card p-4">{children}</div>
  </section>
);

export default Section;
