"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  Car, Bike, Bus, Truck, Gem, Wrench, Package, MapPin, Phone, User, Mail, Loader2, X
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select, SelectTrigger, SelectContent, SelectValue, SelectItem,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

/* ----------------- service options + icons ----------------- */
const SERVICE_OPTIONS = [
  { value: "self-drive",    label: "Self Drive Car",  Icon: Car },
  { value: "chauffeur",     label: "Car with Driver (Taxi)", Icon: Car },
  { value: "bike",          label: "Bike Rental",     Icon: Bike },
  { value: "luxury",        label: "Luxury Cars",     Icon: Gem },
  { value: "bus",           label: "Bus Rental",      Icon: Bus },
  { value: "truck",         label: "Truck Rental",    Icon: Truck },
  { value: "equipment",     label: "Equipment Rental",Icon: Wrench },
  { value: "movers",        label: "Packers & Movers",Icon: Package },
  { value: "tours",         label: "Tours & Travel",  Icon: MapPin },
] as const;

type ServiceKey = (typeof SERVICE_OPTIONS)[number]["value"];

type LeadForm = {
  name: string;
  phone: string;
  email: string;
  service: ServiceKey | "";
};

const initial: LeadForm = { name: "", phone: "", email: "", service: "" };

/* --------------- utility validators --------------- */
const isValidPhone = (v: string) => /^(\+?91)?[6-9]\d{9}$/.test(v.replace(/\s+/g, ""));
const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

/* --------------- Component --------------- */
export default function EntryLeadModal() {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<LeadForm>(initial);
  const [submitting, setSubmitting] = useState(false);

  // Open once per session on first page load
  useEffect(() => {
    const key = "entryLeadModalShown";
    if (!sessionStorage.getItem(key)) {
      setOpen(true);
      sessionStorage.setItem(key, "1");
    }
  }, []);

  const ServiceIcon = useMemo(() => {
    const found = SERVICE_OPTIONS.find(s => s.value === form.service);
    return found?.Icon ?? Car;
  }, [form.service]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name.trim().length < 2) {
      toast({ title: "Please enter your name", variant: "destructive" });
      return;
    }
    if (!isValidPhone(form.phone)) {
      toast({
        title: "Invalid mobile number",
        description: "Enter a valid Indian mobile (e.g., 98XXXXXXXX or +91 98XXXXXXXX).",
        variant: "destructive",
      });
      return;
    }
    if (!isValidEmail(form.email)) {
      toast({ title: "Invalid email", description: "Use a valid email like name@example.com", variant: "destructive" });
      return;
    }
    if (!form.service) {
      toast({ title: "Select a service", variant: "destructive" });
      return;
    }

    setSubmitting(true);
    try {
      // TODO: send to backend here
      console.log("Lead payload:", form);

      toast({
        title: "Thanks! We’re on it.",
        description: "Expect a call within 2 minutes.",
      });
      setOpen(false);
      setForm(initial);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className="p-0 overflow-hidden max-w-3xl md:grid md:grid-cols-[1.1fr,1fr] gap-0"
        aria-describedby={undefined}
      >
       {/* Left: visual / promo */}
<div className="relative hidden md:block">
  {/* fallback gradient in case image fails */}
  <div
    className="absolute inset-0 bg-gradient-to-br from-emerald-700 via-emerald-600 to-emerald-500"
    aria-hidden
  />

  {/* background image (70% opacity) */}
  <div
    className="absolute inset-0 bg-[url('/modalform.jpg')] bg-cover bg-center"
    aria-hidden
  />

  {/* dark wash for readability */}
  {/* <div className="absolute inset-0 bg-black/45" aria-hidden /> */}

  {/* subtle bottom vignette so the copy pops */}
  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/35 to-transparent" aria-hidden />

  {/* content */}
  <div className="relative h-full w-full p-8 flex flex-col justify-end text-left">
    <div className="text-white">
      <h3 className="text-2xl font-bold leading-tight">
        {/* Book any vehicle. Anywhere in India. */}
      </h3>
      <p className="text-white/85 mt-2">
        {/* Self drive, chauffeur, luxury cars, buses, trucks, equipment &amp; more — from verified vendors. */}
      </p>
      <ul className="mt-4 space-y-1 text-sm text-white/85">
        <li>• 1M+ trips completed</li>
        <li>• Pan-India coverage</li>
        <li>• Support within 2 minutes</li>
      </ul>
    </div>
  </div>
</div>


        {/* Right: Form */}
        <div className="p-6 md:p-7">
          <DialogHeader className="space-y-1">
            <DialogTitle className="text-xl">Get a quick callback</DialogTitle>
            <p className="text-sm text-muted-foreground">
              Share a few details and our concierge will reach out.
            </p>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {/* Name */}
            <div>
              <Label htmlFor="lead-name">Full Name</Label>
              <div className="relative mt-1">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="lead-name"
                  placeholder="Your name"
                  className="pl-10"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  autoFocus
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <Label htmlFor="lead-phone">Mobile Number</Label>
              <div className="relative mt-1">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="lead-phone"
                  inputMode="tel"
                  placeholder="+91 98XXXXXXXX"
                  className="pl-10"
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="lead-email">Email</Label>
              <div className="relative mt-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="lead-email"
                  type="email"
                  placeholder="you@email.com"
                  className="pl-10"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                />
              </div>
            </div>

            {/* Service */}
            <div>
              <Label>Service Needed</Label>
              <div className="relative mt-1">
                {/* Dynamic icon based on service */}
                <div
                  className={cn(
                    "absolute left-1.5 top-1/2 -translate-y-1/2",
                    "inline-flex items-center justify-center w-7 h-7 rounded-full bg-muted"
                  )}
                >
                  <ServiceIcon className="w-4 h-4 text-foreground" />
                </div>

                <Select
                  value={form.service}
                  onValueChange={(value: ServiceKey) => setForm((f) => ({ ...f, service: value }))}
                >
                  <SelectTrigger className="pl-10">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {SERVICE_OPTIONS.map(({ value, label, Icon }) => (
                      <SelectItem key={value} value={value} className="gap-2">
                        <span className="inline-flex items-center gap-2">
                           {label}
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex items-center gap-3">
              <Button type="submit" className="min-w-[120px]" disabled={submitting}>
                {submitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting…
                  </>
                ) : (
                  "Get Callback"
                )}
              </Button>

              <p className="text-xs text-muted-foreground">
                By continuing you agree to our Terms & Privacy.
              </p>
            </div>
          </form>

          {/* small close in corner (mobile friendly) */}
          <DialogClose asChild>
            <button
              className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-muted"
              aria-label="Close"
            >
              {/* <X className="h-4 w-4" /> */}
            </button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
