"use client";


import React from "react";
import {
  Facebook, Twitter, Instagram, Linkedin, Youtube,
  Mail, Phone, MapPin, ChevronRight, Play
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

/* helpers */
const slug = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-");

const Footer = () => {
  /* ---- content ---- */
  const services = [
    "Self Drive Car","Car Rental","Bike Rental","Taxi Services","One Taxi",
    "Luxury Cars","Bus Rental","Truck Rental","Equipment Rental","Packers & Movers","Tours & Travel",
  ];

  const cities = [
    "Mumbai","Delhi","Bangalore","Hyderabad","Chennai","Kolkata","Pune","Ahmedabad",
    "Jaipur","Surat","Lucknow","Kanpur","Nagpur","Patna","Indore","Thane",
    "Bhopal","Visakhapatnam","Pimpri-Chinchwad","Vadodara","Ghaziabad","Ludhiana",
  ];

  const serviceCityCombinations = [
    "Self Drive Car Mumbai","Car Rental Delhi","Bike Rental Bangalore","Taxi Services Hyderabad",
    "Luxury Cars Mumbai","Bus Rental Delhi","Truck Rental Bangalore","Equipment Rental Mumbai",
    "Self Drive Car Delhi","Car Rental Mumbai","Bike Rental Delhi","Taxi Services Mumbai",
    "One Taxi Mumbai-Pune","Luxury Cars Delhi","Bus Rental Mumbai","Truck Rental Delhi",
  ];

  const companyLinks = [
    { label: "About Us", href: "/about" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Safety Standards", href: "/safety" },
    { label: "Press & Media", href: "/press" },
    { label: "Careers", href: "/careers" },
    { label: "Investor Relations", href: "/investors" },
    { label: "Sustainability", href: "/sustainability" },
    { label: "Community Guidelines", href: "/community-guidelines" },
    { label: "Accessibility", href: "/accessibility" },
    { label: "Corporate Solutions", href: "/corporate" },
  ];

  const supportLinks = [
    { label: "Help Center", href: "/help" },
    { label: "Contact Support", href: "/contact" },
    { label: "Booking Help", href: "/help/booking" },
    { label: "Payment Issues", href: "/help/payments" },
    { label: "Cancellation Policy", href: "/policies/cancellation" },
    { label: "Refund Policy", href: "/policies/refund" },
    { label: "Document Requirements", href: "/requirements" },
    { label: "Safety Guidelines", href: "/safety/guidelines" },
    { label: "Emergency Support", href: "/support/emergency" },
    { label: "Feedback", href: "/feedback" },
  ];

  const legalLinks = [
    { label: "Terms of Service", href: "/legal/terms" },
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Cookie Policy", href: "/legal/cookies" },
    { label: "Data Protection", href: "/legal/data-protection" },
    { label: "User Agreement", href: "/legal/user-agreement" },
    { label: "Vendor Agreement", href: "/legal/vendor-agreement" },
    { label: "Community Guidelines", href: "/community-guidelines" },
    { label: "Intellectual Property", href: "/legal/ip" },
    { label: "Dispute Resolution", href: "/legal/disputes" },
    { label: "Compliance", href: "/legal/compliance" },
  ];

  return (
    <footer className="border-t border-border/30">
      {/* Newsletter strip — green vibe */}
      {/* Newsletter strip — now uses button green as BG, light button */}
<div className="relative overflow-hidden">
  <div className="bg-gradient-to-br from-emerald-600 via-emerald-600 to-emerald-700">
    <div className="container mx-auto px-4 py-14">
      <div className="mx-auto max-w-4xl text-center text-white">
        <h3 className="mb-3 text-2xl font-bold">Stay Updated with TransRentals</h3>
        <p className="mb-8 text-white/80">
          Get the latest offers, travel tips, and platform updates delivered to your inbox
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            // TODO: connect to newsletter endpoint
          }}
          className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row"
        >
          <Input
            type="email"
            placeholder="Enter your email address"
            required
            className="
              flex-1 bg-white text-emerald-900 placeholder-emerald-700
              border-transparent
              focus-visible:ring-2 focus-visible:ring-white
              focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-600
            "
          />

          {/* Light button on green background */}
          <Button
            type="submit"
            className="
              h-10 rounded-md px-5
              bg-white text-emerald-700 hover:bg-white/90
              border border-white/20 shadow-sm
            "
          >
            Subscribe <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </form>

        <p className="mt-4 text-xs text-white/75">
          By subscribing, you agree to our Privacy Policy and Terms of Service
        </p>
      </div>
    </div>
  </div>
</div>


      {/* Main footer */}
      <div className="bg-gradient-card">
        <div className="container mx-auto px-4 py-16">
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand + contact */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                {/* your green app image as brand avatar; keep bg green look */}
                <img src="/logo.png" alt="TransRentals" className="h-10  object-cover" />
              
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                India&apos;s most trusted vehicle rental marketplace. Connecting customers with verified vendors across 50+ cities for all mobility needs.
              </p>
              <div className="space-y-3">
                <Link  href="https://maps.google.com/?q=TransRentals" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Pan-India Coverage, 50+ Cities</span>
                </Link >
                <Link  href="tel:+911800000000" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>+91-1800-XXX-XXXX (24/7 Support)</span>
                </Link >
                <Link  href="mailto:support@transrentals.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>support@transrentals.com</span>
                </Link >
              </div>

              {/* Socials */}
              <div className="flex gap-4">
                {[
                  { Icon: Facebook, href: "https://www.facebook.com/transrentals" },
                  { Icon: Twitter, href: "https://x.com/transrentals" },
                  { Icon: Instagram, href: "https://www.instagram.com/transrentals" },
                  { Icon: Linkedin, href: "https://www.linkedin.com/company/transrentals" },
                  { Icon: Youtube, href: "https://www.youtube.com/@transrentals" },
                ].map(({ Icon, href }, i) => (
                  <Link  key={i} href={href} target="_blank" rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground">
                    <Icon className="h-4 w-4" />
                    <span className="sr-only">Social link</span>
                  </Link >
                ))}
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="mb-6 text-lg font-bold text-foreground">Our Services</h4>
              <div className="space-y-3">
                {services.map((label, i) => (
                  <Link  key={i} href={`/${slug(label)}`} className="block text-sm text-muted-foreground hover:text-primary">
                    {label}
                  </Link >
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-6 text-lg font-bold text-foreground">Company</h4>
              <div className="space-y-3">
                {companyLinks.map((l, i) => (
                  <Link  key={i} href={l.href} className="block text-sm text-muted-foreground hover:text-primary">
                    {l.label}
                  </Link >
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-6 text-lg font-bold text-foreground">Support</h4>
              <div className="space-y-3">
                {supportLinks.map((l, i) => (
                  <Link  key={i} href={l.href} className="block text-sm text-muted-foreground hover:text-primary">
                    {l.label}
                  </Link >
                ))}
              </div>
            </div>
          </div>

          {/* Popular cities */}
          <div className="mb-8 border-t border-border/30 pt-8">
            <h4 className="mb-6 text-lg font-bold text-foreground">Popular Cities</h4>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6">
              {cities.map((city, i) => (
                <Link  key={i} href={`/city/${slug(city)}`} className="text-sm text-muted-foreground hover:text-primary">
                  {city}
                </Link >
              ))}
            </div>
          </div>

          {/* Popular searches */}
          <div className="mb-8 border-t border-border/30 pt-8">
            <h4 className="mb-6 text-lg font-bold text-foreground">Popular Searches</h4>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
              {serviceCityCombinations.map((c, i) => {
                const [svc, ...rest] = c.split(" ");
                const city = rest.join(" ");
                return (
                  <Link  key={i} href={`/${slug(svc)}-${slug(city)}`} className="text-sm text-muted-foreground hover:text-primary">
                    {c}
                  </Link >
                );
              })}
            </div>
            <div className="mt-4">
              <Link  href="/services" className="text-primary underline-offset-2 hover:underline">
                View all service pages →
              </Link >
            </div>
          </div>

          {/* Legal */}
          <div className="mb-8 border-t border-border/30 pt-8">
            <div className="flex flex-wrap gap-6">
              {legalLinks.map((l, i) => (
                <Link  key={i} href={l.href} className="text-sm text-muted-foreground hover:text-primary">
                  {l.label}
                </Link >
              ))}
            </div>
          </div>

          {/* Android-only App CTA — uicon + green background + your image */}
          <div className="mb-2 border-t border-border/30 pt-10">
            <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-700 p-6 text-white shadow">
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                <div className="flex items-center gap-3">
                  {/* app icon: the green tile you sent; keep radius 100% look */}
                  <img src="/fevicon.webp" alt="TransRentals App" className="h-10 w-10 rounded-md object-cover" />
                  <div>
                    <div className="text-lg font-semibold">Download TransRentals App</div>
                    <div className="text-sm/5 opacity-90">Faster bookings, live tracking, exclusive offers</div>
                  </div>
                </div>

                {/* Google Play badge with lucide 'Play' icon */}
                <Link 
                  href="https://play.google.com/store/search?q=TransRentals&c=apps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-xl bg-white/10 px-5 py-3 backdrop-blur transition hover:bg-white/15"
                  aria-label="Get it on Google Play"
                >
                  <div className="grid h-8 w-8 place-items-center rounded-lg bg-white text-emerald-700">
                    <Play className="h-5 w-5" />
                  </div>
                  <span className="text-left">
                    <span className="block text-[11px] leading-none opacity-90">GET IT ON</span>
                    <span className="text-sm font-semibold leading-tight">Google Play</span>
                  </span>
                </Link >
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/30 bg-muted/20">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} TransRentals. All rights reserved. Serving India with pride since 2019.
              </div>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span>Made in India</span>
                <span>•</span>
                <span>ISO 27001 Certified</span>
                <span>•</span>
                <span>Startup India Recognized</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
