"use client";
import React, { useState, useEffect } from 'react';
import { MapPin, Users, TrendingUp, Star, Clock, Shield } from 'lucide-react';

const KPIStrip = () => {
  const [counters, setCounters] = useState({
    cities: 0,
    vendors: 0,
    trips: 0,
    rating: 0,
    uptime: 0,
    response: 0
  });

  const targets = {
    cities: 50,
    vendors: 5000,
    trips: 2000000,
    rating: 4.8,
    uptime: 99.9,
    response: 2
  };

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);

        setCounters({
          cities: Math.floor(targets.cities * easeOutQuart),
          vendors: Math.floor(targets.vendors * easeOutQuart),
          trips: Math.floor(targets.trips * easeOutQuart),
          rating: Math.min(targets.rating, (targets.rating * easeOutQuart)),
          uptime: Math.min(targets.uptime, (targets.uptime * easeOutQuart)),
          response: Math.max(targets.response, targets.response + (1 - easeOutQuart) * 8)
        });

        if (step >= steps) {
          clearInterval(timer);
          setCounters(targets);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('kpi-strip');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const kpis = [
    {
      icon: <MapPin className="w-8 h-8" />,
      value: `${counters.cities}+`,
      label: "Cities Covered",
      sublabel: "Pan-India Presence",
      color: "text-primary"
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: `${Math.floor(counters.vendors / 1000)}K+`,
      label: "Verified Vendors",
      sublabel: "Quality Assured",
      color: "text-accent"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: `${Math.floor(counters.trips / 1000000)}M+`,
      label: "Trips Completed",
      sublabel: "Successfully Delivered",
      color: "text-success"
    },
    {
      icon: <Star className="w-8 h-8" />,
      value: `${counters.rating.toFixed(1)}★`,
      label: "Average Rating",
      sublabel: "Customer Satisfaction",
      color: "text-warning"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      value: `${counters.uptime.toFixed(1)}%`,
      label: "Platform Uptime",
      sublabel: "Always Available",
      color: "text-primary"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      value: `${Math.ceil(counters.response)}min`,
      label: "Support Response",
      sublabel: "Average Time",
      color: "text-accent"
    }
  ];

  return (
    <div id="kpi-strip" className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Millions Across India
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real numbers that showcase our commitment to excellence and customer satisfaction
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {kpis.map((kpi, index) => (
            <div key={index} className="kpi-card group">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 mb-4 ${kpi.color}`}>
                {kpi.icon}
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-foreground">
                  {kpi.value}
                </div>
                <div className="text-sm font-semibold text-foreground">
                  {kpi.label}
                </div>
                <div className="text-xs text-muted-foreground">
                  {kpi.sublabel}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Timeline */}
        {/* <div className="mt-16 pt-8 border-t border-border/30">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">2019</div>
              <div className="text-sm text-muted-foreground">Platform Launch</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-2">2021</div>
              <div className="text-sm text-muted-foreground">1M+ Users Milestone</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-success mb-2">2023</div>
              <div className="text-sm text-muted-foreground">Pan-India Expansion</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-warning mb-2">2024</div>
              <div className="text-sm text-muted-foreground">Industry Leader</div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default KPIStrip;