"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  MessageCircle, X, CheckCircle, Car, Building2, MapPin, Calendar, ListChecks,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

/* ------------ Types ------------ */
type Role = "customer" | "vendor";
type Msg = { id: string; role: "bot" | "user"; text: string };

enum Step {
  Start = 0,
  Role = 1,

  // Customer flow
  C_Name = 2,
  C_Phone = 3,
  C_Email = 4,
  C_Location = 5,
  C_Pick = 6,
  C_Drop = 7,
  C_Service = 8,
  C_Done = 9,

  // Vendor flow
  V_Name = 10,
  V_Phone = 11,
  V_Email = 12,
  V_City = 13,
  V_Service = 14,
  V_FleetCount = 15,
  V_Company = 16,
  V_Message = 17,
  V_Done = 18,
}

/* ------------ Data ------------ */
const SERVICES = [
  "All",
  "Car Rental",
  "Self Drive",
  "Taxi Service",
  "Luxury Vehicle",
  "Bus Rental",
  "Truck Rental",
  "Packers & Movers",
  "Bike Rental",
  "Equipment on Rent",
];

const CITIES = [
  "Ahmedabad",
  "Bengaluru",
  "Chennai",
  "Delhi",
  "Hyderabad",
  "Jaipur",
  "Kolkata",
  "Mumbai",
  "Noida",
  "Pune",
];

/* ------------ Helpers ------------ */
const think = () => new Promise((r) => setTimeout(r, 500 + Math.random() * 600));
const id = () => Math.random().toString(36).slice(2);
const greeting = () => {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 17) return "Good afternoon";
  if (h < 20) return "Good evening";
  return "Hello";
};
const maskPhone = (p: string) => {
  const v = p.replace(/\D/g, "");
  if (v.length < 4) return v;
  return v.slice(0, 2) + "******" + v.slice(-2);
};

/* ===================================================== */
export default function ChatbotLeadForm() {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [typing, setTyping] = useState(false);
  const [completed, setCompleted] = useState(false);

  const [role, setRole] = useState<Role | null>(null);
  const [step, setStep] = useState<Step>(Step.Start);

  // Shared fields
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // Customer fields
  const [cLocation, setCLocation] = useState("");
  const [cPick, setCPick] = useState("");
  const [cDrop, setCDrop] = useState("");
  const [cService, setCService] = useState("");

  // Vendor fields
  const [vCity, setVCity] = useState("");
  const [vService, setVService] = useState("");
  const [vFleet, setVFleet] = useState("");
  const [vCompany, setVCompany] = useState("");
  const [vMessage, setVMessage] = useState("");

  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 9e9, behavior: "smooth" });
  }, [messages, typing]);

  /* ---------- Boot conversation ---------- */
  useEffect(() => {
    if (!isOpen) return;
    (async () => {
      // reset
      setMessages([]);
      setCompleted(false);
      setRole(null);
      setStep(Step.Start);
      setName(""); setPhone(""); setEmail("");
      setCLocation(""); setCPick(""); setCDrop(""); setCService("");
      setVCity(""); setVService(""); setVFleet(""); setVCompany(""); setVMessage("");

      setTyping(true);
      await think();
      pushBot(`${greeting()}! 👋 We’re <b>TransRentals</b> — India’s vehicle rental marketplace.`);
      await think();
      pushBot("I’ll ask a few quick questions to get you to the right place.");
      await think();
      pushBot("Are you a <b>Customer</b> or a <b>Vendor</b>?");
      setStep(Step.Role);
      setTyping(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const pushBot = (text: string) =>
    setMessages((m) => [...m, { id: id(), role: "bot", text }]);
  const pushUser = (text: string) =>
    setMessages((m) => [...m, { id: id(), role: "user", text }]);

  /* =======================
     Role selection handlers
     ======================= */
  const chooseRole = async (r: Role) => {
    setRole(r);
    pushUser(r === "customer" ? "Customer" : "Vendor");

    setTyping(true);
    await think();
    pushBot(`Great — let’s proceed as a <b>${r === "customer" ? "Customer" : "Vendor"}</b>.`);

    if (r === "customer") {
      await think();
      pushBot("What’s your <i>name</i>?");
      setStep(Step.C_Name);
    } else {
      await think();
      pushBot("What’s your <i>name</i>?");
      setStep(Step.V_Name);
    }
    setTyping(false);
  };

  /* =======================
     Validations
     ======================= */
  const validName = (v: string) => v.trim().length >= 2;
  const validPhone = (v: string) => /^(\+?91)?[6-9]\d{9}$/.test(v.replace(/\s+/g, ""));
  const validEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
  const must = (ok: boolean, title: string, description: string) => {
    if (!ok) toast({ title, description, variant: "destructive" });
    return ok;
  };

  /* =======================
     Customer flow handlers
     ======================= */
  const c_nextName = async () => {
    if (!must(validName(name), "Name looks short", "Please enter your full first name.")) return;
    pushUser(name);
    setTyping(true);
    await think(); pushBot("Phone number, please?");
    setStep(Step.C_Phone);
    setTyping(false);
  };

  const c_nextPhone = async () => {
    if (!must(validPhone(phone), "Invalid phone", "Use a valid Indian mobile number.")) return;
    pushUser(phone);
    setTyping(true);
    await think(); pushBot("What’s your email address?");
    setStep(Step.C_Email);
    setTyping(false);
  };

  const c_nextEmail = async () => {
    if (!must(validEmail(email), "Invalid email", "Example: name@example.com")) return;
    pushUser(email);
    setTyping(true);
    await think(); pushBot("Which city do you need the service in?");
    setStep(Step.C_Location);
    setTyping(false);
  };

  const c_nextLocation = async () => {
    if (!must(!!cLocation, "Pick a city", "Choose your pickup city.")) return;
    pushUser(cLocation);
    setTyping(true);
    await think(); pushBot("Select your <i>pickup date & time</i>.");
    setStep(Step.C_Pick);
    setTyping(false);
  };

  const c_nextPick = async () => {
    if (!must(!!cPick, "Pickup missing", "Choose pickup date & time.")) return;
    pushUser(new Date(cPick).toLocaleString());
    setTyping(true);
    await think(); pushBot("Select your <i>drop date & time</i>.");
    setStep(Step.C_Drop);
    setTyping(false);
  };

  const c_nextDrop = async () => {
    if (!must(!!cDrop, "Drop missing", "Choose drop date & time.")) return;
    if (!must(new Date(cDrop) > new Date(cPick), "Dates invalid", "Drop must be after pickup.")) return;
    pushUser(new Date(cDrop).toLocaleString());
    setTyping(true);
    await think(); pushBot("Which service do you need?");
    setStep(Step.C_Service);
    setTyping(false);
  };

  const c_finish = async () => {
    if (!must(!!cService, "Pick a service", "Select a rental service.")) return;
    pushUser(cService);

    setTyping(true);
    await think();
    pushBot(
      `Awesome, <b>${name}</b>! We’ll call <b>${maskPhone(phone)}</b> and email <b>${email}</b> about <b>${cService}</b> in <b>${cLocation}</b> (Pickup: ${new Date(
        cPick,
      ).toLocaleString()} → Drop: ${new Date(cDrop).toLocaleString()}).`,
    );
    await think();
    pushBot("✨ <i>Thanks for choosing TransRentals.</i> Our expert will reach out within <b>2 minutes</b>.");
    setTyping(false);
    setCompleted(true);
    setStep(Step.C_Done);

    // TODO: send payload to your API
    // await fetch("/api/leads/customer", { method: "POST", body: JSON.stringify({...}) })
  };

  /* =======================
     Vendor flow handlers
     ======================= */
  const v_nextName = async () => {
    if (!must(validName(name), "Name looks short", "Please enter your full first name.")) return;
    pushUser(name);
    setTyping(true);
    await think(); pushBot("Your phone number?");
    setStep(Step.V_Phone);
    setTyping(false);
  };

  const v_nextPhone = async () => {
    if (!must(validPhone(phone), "Invalid phone", "Use a valid Indian mobile number.")) return;
    pushUser(phone);
    setTyping(true);
    await think(); pushBot("Your email address?");
    setStep(Step.V_Email);
    setTyping(false);
  };

  const v_nextEmail = async () => {
    if (!must(validEmail(email), "Invalid email", "Example: name@example.com")) return;
    pushUser(email);
    setTyping(true);
    await think(); pushBot("Where are you located? (City)");
    setStep(Step.V_City);
    setTyping(false);
  };

  const v_nextCity = async () => {
    if (!must(!!vCity, "Pick a city", "Choose your operating city.")) return;
    pushUser(vCity);
    setTyping(true);
    await think(); pushBot("Which service are you serving?");
    setStep(Step.V_Service);
    setTyping(false);
  };

  const v_nextService = async () => {
    if (!must(!!vService, "Pick a service", "Select at least one service.")) return;
    pushUser(vService);
    setTyping(true);
    await think(); pushBot("How many vehicles do you have?");
    setStep(Step.V_FleetCount);
    setTyping(false);
  };

  const v_nextFleet = async () => {
    if (!must(/^\d+$/.test(vFleet) && +vFleet >= 0, "Enter a number", "Fleet count should be a non-negative number.")) return;
    pushUser(vFleet);
    setTyping(true);
    await think(); pushBot("Your company name?");
    setStep(Step.V_Company);
    setTyping(false);
  };

  const v_nextCompany = async () => {
    if (!must(vCompany.trim().length >= 2, "Company?", "Please enter your company name.")) return;
    pushUser(vCompany);
    setTyping(true);
    await think(); pushBot("Any message for us?");
    setStep(Step.V_Message);
    setTyping(false);
  };

  const v_finish = async () => {
    const msg = vMessage.trim() || "—";
    pushUser(msg);

    setTyping(true);
    await think();
    pushBot(
      `Thank you, <b>${name}</b> from <b>${vCompany}</b>! We’ll contact <b>${maskPhone(
        phone,
      )}</b> & <b>${email}</b> about <b>${vService}</b> in <b>${vCity}</b>. Fleet size: <b>${vFleet}</b>.`,
    );
    await think();
    pushBot("✨ <i>We’ll get you onboarded shortly.</i> Expect a call within <b>2 minutes</b>.");
    setTyping(false);
    setCompleted(true);
    setStep(Step.V_Done);

    // TODO: send payload to your API
    // await fetch("/api/leads/vendor", { method: "POST", body: JSON.stringify({...}) })
  };

  /* ---------- Enter key helper ---------- */
  const onEnter = (fn: () => void) => (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); fn(); }
  };

  /* =========================
     Minimized Floating Button
     ========================= */
  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <style>{`
          .halo {position:absolute;inset:0;border-radius:9999px;
            background: radial-gradient(closest-side, rgba(16,185,129,.35), transparent 70%);
            opacity:.35;filter:blur(8px);animation:haloPulse 2.6s ease-in-out infinite}
          @keyframes haloPulse {0%,100%{opacity:.28;transform:scale(1)} 50%{opacity:.6;transform:scale(1.06)}}
        `}</style>

        <div className="relative">
          <div className="halo" />
          <Button
            onClick={() => setIsOpen(true)}
            className="relative w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-all duration-300 bg-gradient-to-br from-emerald-700 to-emerald-500"
            size="icon"
            aria-label="Open chat"
          >
            <MessageCircle className="w-6 h-6 text-white" />
          </Button>
        </div>
      </div>
    );
  }

  /* ======================
     Open Chat UI (green)
     ====================== */
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* typing dots CSS */}
      <style>{`
        @keyframes chatDots {0%{opacity:.2} 20%{opacity:1} 100%{opacity:.2}}
        .typing-dot{animation:chatDots 1.2s infinite}
        .typing-dot:nth-child(2){animation-delay:.2s}
        .typing-dot:nth-child(3){animation-delay:.4s}
      `}</style>

      <Card className="w-[320px] md:w-[360px] rounded-2xl overflow-hidden border-2 border-emerald-200 shadow-xl">
        <CardHeader className="pb-3 bg-gradient-to-r from-emerald-50 via-emerald-100 to-transparent">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base md:text-lg flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600/10">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-700" />
              </span>
              Shivi • TransRentals
            </CardTitle>
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} aria-label="Close">
              <X className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-xs md:text-sm text-muted-foreground">
            We’ll connect you to an expert. Average response: <b>2 min</b>.
          </p>
        </CardHeader>

        <CardContent className="p-0">
          {/* Messages */}
          <div ref={scrollRef} className="max-h-[340px] overflow-auto p-3 space-y-2 bg-white">
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`rounded-2xl px-3 py-2 text-sm leading-relaxed shadow
                    ${m.role === "user"
                      ? "bg-gradient-to-br from-emerald-600 to-emerald-500 text-white rounded-br-md"
                      : "bg-emerald-50 border border-emerald-100 text-emerald-900"}`
                  }
                  dangerouslySetInnerHTML={{ __html: m.text.replace(/\n/g, "<br/>") }}
                />
              </div>
            ))}

            {typing && (
              <div className="flex items-center gap-1 pl-1 text-muted-foreground">
                <span className="typing-dot">•</span>
                <span className="typing-dot">•</span>
                <span className="typing-dot">•</span>
              </div>
            )}
          </div>

          {/* ===== Input area (hidden after completion) ===== */}
          {!completed && (
            <div className="border-t p-3 space-y-3 bg-white">
              {/* STEP: Role */}
              {step === Step.Role && (
                <div className="grid grid-cols-2 gap-2">
                  <Button className="bg-emerald-600 hover:bg-emerald-700" onClick={() => chooseRole("customer")}>
                    I’m a Customer
                  </Button>
                  <Button variant="outline" onClick={() => chooseRole("vendor")}>
                    I’m a Vendor
                  </Button>
                </div>
              )}

              {/* ===== Customer Flow ===== */}
              {step === Step.C_Name && (
                <FieldRow
                  label="Your Name"
                  placeholder="e.g., Saurav"
                  value={name}
                  setValue={setName}
                  onSend={c_nextName}
                />
              )}

              {step === Step.C_Phone && (
                <FieldRow
                  label="Phone"
                  placeholder="+91 98XXXXXXXX"
                  value={phone}
                  setValue={setPhone}
                  onSend={c_nextPhone}
                  type="tel"
                />
              )}

              {step === Step.C_Email && (
                <FieldRow
                  label="Email"
                  placeholder="you@email.com"
                  value={email}
                  setValue={setEmail}
                  onSend={c_nextEmail}
                  type="email"
                />
              )}

              {step === Step.C_Location && (
                <div>
                  <Label className="text-xs font-medium flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> City</Label>
                  <div className="flex gap-2 mt-1">
                    <Select value={cLocation} onValueChange={setCLocation}>
                      <SelectTrigger className="flex-1">
                        <SelectValue placeholder="Select city" />
                      </SelectTrigger>
                      <SelectContent>
                        {CITIES.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                      </SelectContent>
                    </Select>
                    <Button onClick={c_nextLocation}>Next</Button>
                  </div>
                </div>
              )}

              {step === Step.C_Pick && (
                <div>
                  <Label className="text-xs font-medium flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> Pickup</Label>
                  <div className="flex gap-2 mt-1">
                    <Input type="datetime-local" value={cPick} onChange={(e) => setCPick(e.target.value)} className="flex-1" />
                    <Button onClick={c_nextPick}>Next</Button>
                  </div>
                </div>
              )}

              {step === Step.C_Drop && (
                <div>
                  <Label className="text-xs font-medium flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> Drop</Label>
                  <div className="flex gap-2 mt-1">
                    <Input type="datetime-local" value={cDrop} onChange={(e) => setCDrop(e.target.value)} className="flex-1" />
                    <Button onClick={c_nextDrop}>Next</Button>
                  </div>
                </div>
              )}

              {step === Step.C_Service && (
                <div>
                  <Label className="text-xs font-medium flex items-center gap-1"><Car className="w-3.5 h-3.5" /> Service Needed</Label>
                  <div className="flex gap-2 mt-1">
                    <Select value={cService} onValueChange={setCService}>
                      <SelectTrigger className="flex-1">
                        <SelectValue placeholder="Select service" />
                      </SelectTrigger>
                      <SelectContent>
                        {SERVICES.filter((s) => s !== "Packers & Movers" && s !== "Equipment on Rent").map((s) => (
                          <SelectItem key={s} value={s}>{s}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Button onClick={c_finish}>Finish</Button>
                  </div>
                </div>
              )}

              {/* ===== Vendor Flow ===== */}
              {step === Step.V_Name && (
                <FieldRow
                  label="Your Name"
                  placeholder="e.g., Ramesh"
                  value={name}
                  setValue={setName}
                  onSend={v_nextName}
                />
              )}

              {step === Step.V_Phone && (
                <FieldRow
                  label="Phone"
                  placeholder="+91 98XXXXXXXX"
                  value={phone}
                  setValue={setPhone}
                  onSend={v_nextPhone}
                  type="tel"
                />
              )}

              {step === Step.V_Email && (
                <FieldRow
                  label="Email"
                  placeholder="you@email.com"
                  value={email}
                  setValue={setEmail}
                  onSend={v_nextEmail}
                  type="email"
                />
              )}

              {step === Step.V_City && (
                <div>
                  <Label className="text-xs font-medium flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> Operating City</Label>
                  <div className="flex gap-2 mt-1">
                    <Select value={vCity} onValueChange={setVCity}>
                      <SelectTrigger className="flex-1">
                        <SelectValue placeholder="Select city" />
                      </SelectTrigger>
                      <SelectContent>
                        {CITIES.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                      </SelectContent>
                    </Select>
                    <Button onClick={v_nextCity}>Next</Button>
                  </div>
                </div>
              )}

              {step === Step.V_Service && (
                <div>
                  <Label className="text-xs font-medium flex items-center gap-1"><ListChecks className="w-3.5 h-3.5" /> Service You Serve</Label>
                  <div className="flex gap-2 mt-1">
                    <Select value={vService} onValueChange={setVService}>
                      <SelectTrigger className="flex-1">
                        <SelectValue placeholder="Select service" />
                      </SelectTrigger>
                      <SelectContent>
                        {SERVICES.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                      </SelectContent>
                    </Select>
                    <Button onClick={v_nextService}>Next</Button>
                  </div>
                </div>
              )}

              {step === Step.V_FleetCount && (
                <FieldRow
                  label="How many vehicles?"
                  placeholder="e.g., 12"
                  value={vFleet}
                  setValue={setVFleet}
                  onSend={v_nextFleet}
                  type="number"
                />
              )}

              {step === Step.V_Company && (
                <div>
                  <Label className="text-xs font-medium flex items-center gap-1"><Building2 className="w-3.5 h-3.5" /> Company Name</Label>
                  <div className="flex gap-2 mt-1">
                    <Input
                      autoFocus
                      placeholder="Your company"
                      value={vCompany}
                      onChange={(e) => setVCompany(e.target.value)}
                      onKeyDown={onEnter(v_nextCompany)}
                      className="flex-1"
                    />
                    <Button onClick={v_nextCompany}>Next</Button>
                  </div>
                </div>
              )}

              {step === Step.V_Message && (
                <div>
                  <Label className="text-xs font-medium">Message (optional)</Label>
                  <div className="flex gap-2 mt-1">
                    <Textarea
                      placeholder="Tell us anything important…"
                      value={vMessage}
                      onChange={(e) => setVMessage(e.target.value)}
                      onKeyDown={onEnter(v_finish)}
                      className="flex-1"
                    />
                    <Button onClick={v_finish}>Finish</Button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Footer (after completion) */}
          {completed && (
            <div className="border-t p-3 text-xs text-muted-foreground flex items-center justify-between bg-white">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Request received — we’ll call shortly.</span>
              </div>
              <Button size="sm" variant="outline" onClick={() => setIsOpen(false)}>
                Close
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

/* ---------- Small reusable row ---------- */
function FieldRow({
  label, placeholder, value, setValue, onSend, type = "text",
}: {
  label: string;
  placeholder: string;
  value: string;
  setValue: (v: string) => void;
  onSend: () => void;
  type?: "text" | "email" | "tel" | "number";
}) {
  const onEnter =
    (e: React.KeyboardEvent<HTMLInputElement>) => { if (e.key === "Enter") onSend(); };
  return (
    <div>
      <Label className="text-xs font-medium">{label}</Label>
      <div className="flex gap-2 mt-1">
        <Input
          autoFocus
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={onEnter}
          className="flex-1"
          type={type}
        />
        <Button onClick={onSend}>Send</Button>
      </div>
    </div>
  );
}
