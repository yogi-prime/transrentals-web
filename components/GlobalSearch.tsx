// GlobalSearch.tsx
"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { addDays, endOfWeek, isBefore, isSameDay, format, getDay } from "date-fns";
import { useSearchUI } from "@/components/providers/SearchUIContext";
// GlobalSearch.tsx (TOP imports me add karo)
import { useNavigate, useLocation } from "react-router-dom";

/* =========================================================================================
   TYPO + UTILS
========================================================================================= */
const ring =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-1";

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const CITIES = [
  "Goa, India",
  "Mumbai, India",
  "Delhi, India",
  "Bengaluru, India",
  "Hyderabad, India",
  "Chennai, India",
  "Kolkata, India",
  "Pune, India",
  "Ahmedabad, India",
  "Jaipur, India",
  "Surat, India",
];

function makeHours() {
  return Array.from({ length: 24 }, (_, i) => `${String(i).padStart(2, "0")}:00`);
}

/* =========================================================================================
   TYPES
========================================================================================= */
type ServiceKey =
  | "self-drive"
  | "chauffeur"
  | "bike"
  | "luxury"
  | "movers"
  | "bus"
  | "truck"
  | "equipment"

type FieldKind =
  | "city"
  | "fromCity"
  | "toCity"
  | "date"
  | "time"
  | "select"
  | "travellers"
  | "homeSize";

type FieldDef = {
  id: string;
  label: string;
  kind: FieldKind;
  props?: Record<string, any>;
};

type ServiceConfig = {
  value: ServiceKey;
  label: string;
  icons: { outline: string; fill: string }; // used in hero tabs
  fields: FieldDef[];
};

/* =========================================================================================
   SERVICES (swap icon paths with yours)
========================================================================================= */
const SERVICES: ServiceConfig[] = [
  {
    value: "self-drive",
    label: "Self Drive Car",
    icons: { outline: "/services/self.png", fill: "/services/self.png" },
    fields: [
      { id: "city", label: "City", kind: "city" },
      { id: "pickupDate", label: "Pickup", kind: "date" },
      { id: "returnDate", label: "Return", kind: "date" },
      { id: "pickupTime", label: "Time", kind: "time", props: { options: makeHours() } },
    ],
  },
  {
    value: "chauffeur",
    label: "Car with Driver",
    icons: { outline: "/services/driver.png", fill: "/services/driver.png" },
    fields: [
      { id: "city", label: "City", kind: "city" },
      { id: "pickupDate", label: "Pickup", kind: "date" },
      { id: "returnDate", label: "Return", kind: "date" },
      { id: "pickupTime", label: "Time", kind: "time", props: { options: makeHours() } },
    ],
  },
    {
    value: "bike",
    label: "Bike Rental",
    icons: { outline: "/services/bike.png", fill: "/services/bike.png" },
    fields: [
      { id: "city", label: "City", kind: "city" },
      { id: "pickupDate", label: "Pickup", kind: "date" },
      { id: "returnDate", label: "Return", kind: "date" },
      { id: "pickupTime", label: "Time", kind: "time", props: { options: makeHours() } },
    ],
  },
  {
    value: "luxury",
    label: "Luxury Cars",
    icons: { outline: "/services/luxury.png", fill: "/services/luxury.png" },
    fields: [
      { id: "city", label: "City", kind: "city" },
      { id: "pickupDate", label: "Pickup", kind: "date" },
      { id: "returnDate", label: "Return", kind: "date" },
      { id: "pickupTime", label: "Time", kind: "time", props: { options: makeHours() } },
    ],
  },
  {
    value: "movers",
    label: "Packers & Movers",
    icons: { outline: "/services/movers.png", fill: "/services/movers.png" },
    fields: [
      { id: "fromCity", label: "From", kind: "fromCity" },
      { id: "toCity", label: "To", kind: "toCity" },
      { id: "pickupDate", label: "Move", kind: "date" },
      { id: "homeSize", label: "Home Size", kind: "homeSize", props: { options: ["1 RK", "1 BHK", "2 BHK", "3 BHK+", "Office"] } },
    ],
  },
  {
    value: "bus",
    label: "Bus Rental",
    icons: { outline: "/services/bus.png", fill: "/services/bus.png" },
    fields: [
      { id: "fromCity", label: "From", kind: "fromCity" },
      { id: "toCity", label: "To", kind: "toCity" },
      { id: "pickupDate", label: "Journey", kind: "date" },
      { id: "travellers", label: "Seats", kind: "travellers" },
    ],
  },
  {
    value: "truck",
    label: "Truck Rental",
    icons: { outline: "/services/truck.png", fill: "/services/truck.png" },
    fields: [
      { id: "fromCity", label: "Pickup", kind: "fromCity" },
      { id: "toCity", label: "Drop", kind: "toCity" },
      {
        id: "goodsType",
        label: "Goods Type",
        kind: "select",
        props: { options: ["Household", "Electronics", "Furniture", "Construction"] },
      },
      { id: "pickupDate", label: "Date", kind: "date" },
    ],
  },
  {
    value: "equipment",
    label: "Equipment",
    icons: { outline: "/services/equipment.png", fill: "/services/equipment.png" },
    fields: [
      { id: "city", label: "City", kind: "city" },
      {
        id: "equipmentType",
        label: "Equipment",
        kind: "select",
        props: { options: ["JCB", "Boom Lift", "Forklift", "Generator"] },
      },
      { id: "pickupDate", label: "Start", kind: "date" },
      { id: "returnDate", label: "End", kind: "date" },
    ],
  },
  

];

/* =========================================================================================
   ATOMS
========================================================================================= */
const LabelTop = ({ children }: { children: React.ReactNode }) => (
  <div className="text-[11px] uppercase tracking-wide text-muted-foreground">{children}</div>
);
const BigValue = ({ children }: { children: React.ReactNode }) => (
  <div className="text-xl md:text-2xl font-semibold text-foreground leading-none">{children}</div>
);
const Sub = ({ children }: { children: React.ReactNode }) => (
  <div className="text-xs text-muted-foreground mt-1">{children}</div>
);

/* =========================================================================================
   INPUT PIECES
========================================================================================= */
function CityDropdown({
  label,
  placeholder,
  defaultValue,
}: {
  label: string;
  placeholder: string;
  defaultValue?: string;
}) {
  const [open, setOpen] = useState(false);
  const [val, setVal] = useState(defaultValue ?? "");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query) return CITIES;
    return CITIES.filter((c) => c.toLowerCase().includes(query.toLowerCase()));
  }, [query]);

  return (
    <div className="space-y-1">
      <LabelTop>{label}</LabelTop>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            className={`w-full rounded-xl border bg-white h-16 px-4 text-left flex items-center justify-between ${ring} shadow-[0_1px_2px_rgba(16,24,40,.04)] hover:shadow-md`}
          >
            <div className="min-w-0">
              <BigValue>{val || placeholder}</BigValue>
              <Sub>{val ? "India" : " "}</Sub>
            </div>
          </button>
        </PopoverTrigger>
        <PopoverContent align="start" className="p-0 w-[320px]">
          <div className="p-3 border-b">
            <input
              className="w-full h-9 rounded-md border px-3 text-sm"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={`Search ${placeholder.toLowerCase()}`}
            />
          </div>
          <div className="max-h-64 overflow-auto p-1">
            {filtered.map((c) => (
              <button
                key={c}
                className="w-full text-left px-3 py-2 rounded-md hover:bg-emerald-50"
                onClick={() => {
                  setVal(c);
                  setOpen(false);
                }}
              >
                {c}
              </button>
            ))}
            {!filtered.length && <div className="px-3 py-2 text-sm text-muted-foreground">No results</div>}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

function TimeDropdown({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="space-y-1">
      <LabelTop>{label}</LabelTop>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            className={`w-full rounded-xl border bg-white h-16 px-4 text-left flex items-center justify-between ${ring} shadow-[0_1px_2px_rgba(16,24,40,.04)] hover:shadow-md`}
          >
            <div className="min-w-0">
              <BigValue>{value || "Select time"}</BigValue>
              <Sub>{value ? "24-hour" : " "}</Sub>
            </div>
          </button>
        </PopoverTrigger>
        <PopoverContent align="start" className="p-0 w-[220px]">
          <div className="max-h-64 overflow-auto p-1">
            {options.map((t) => (
              <button
                key={t}
                className="w-full text-left px-3 py-2 rounded-md hover:bg-emerald-50"
                onClick={() => {
                  onChange(t);
                  setOpen(false);
                }}
              >
                {t}
              </button>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

function GenericSelect({
  label,
  options,
  placeholder = "Select",
}: {
  label: string;
  options: string[];
  placeholder?: string;
}) {
  const [open, setOpen] = useState(false);
  const [val, setVal] = useState("");
  return (
    <div className="space-y-1">
      <LabelTop>{label}</LabelTop>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            className={`w-full rounded-xl border bg-white h-16 px-4 text-left flex items-center justify-between ${ring} shadow-[0_1px_2px_rgba(16,24,40,.04)] hover:shadow-md`}
          >
            <div className="min-w-0">
              <BigValue>{val || placeholder}</BigValue>
              <Sub>{val ? "Selected" : " "}</Sub>
            </div>
          </button>
        </PopoverTrigger>
        <PopoverContent align="start" className="p-0 w-[260px]">
          <div className="max-h-64 overflow-auto p-1">
            {options.map((o) => (
              <button
                key={o}
                className="w-full text-left px-3 py-2 rounded-md hover:bg-emerald-50"
                onClick={() => {
                  setVal(o);
                  setOpen(false);
                }}
              >
                {o}
              </button>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

function DatePickerField({
  label,
  value,
  onChange,
  minDate,
}: {
  label: string;
  value: Date | null;
  onChange: (d: Date | null) => void;
  minDate?: Date;
}) {
  const [open, setOpen] = useState(false);
  const today = new Date();
  const isToday = value && isSameDay(value, today);
  const day = value ? dayNames[getDay(value)] : "";

  return (
    <div className="space-y-1">
      <LabelTop>{label}</LabelTop>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            className={`w-full rounded-xl border bg-white h-16 px-4 text-left flex items-center justify-between ${ring} shadow-[0_1px_2px_rgba(16,24,40,.04)] hover:shadow-md`}
          >
            <div className="min-w-0">
              <BigValue>{value ? format(value, "d LLL yy") : "Select date"}</BigValue>
              <Sub>{value ? day : " "}</Sub>
            </div>
          </button>
        </PopoverTrigger>
        <PopoverContent align="start" className="p-3 w-auto">
          <div className="flex flex-wrap gap-2 pb-3 border-b">
            <Button size="sm" variant={isToday ? "default" : "outline"} onClick={() => onChange(new Date())}>
              Today
            </Button>
            <Button size="sm" variant="outline" onClick={() => onChange(addDays(new Date(), 1))}>
              Tomorrow
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => {
                const end = endOfWeek(new Date(), { weekStartsOn: 1 });
                onChange(addDays(end, -1));
              }}
            >
              Weekend
            </Button>
          </div>
          <div className="pt-3">
            <Calendar
              mode="single"
              selected={value ?? undefined}
              onSelect={(d) => onChange(d ?? null)}
              numberOfMonths={2}
              disabled={(date) => (minDate ? isBefore(date, minDate) : false)}
              initialFocus
            />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

function TravellersField({ label }: { label: string }) {
  const [count, setCount] = useState<number>(2);
  return (
    <div className="space-y-1">
      <LabelTop>{label}</LabelTop>
      <div
        className={`w-full rounded-xl border bg-white h-16 px-4 flex items-center justify-between ${ring} shadow-[0_1px_2px_rgba(16,24,40,.04)]`}
      >
        <BigValue>{count}</BigValue>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => setCount(Math.max(1, count - 1))}>
            −
          </Button>
          <Button variant="outline" size="sm" onClick={() => setCount(count + 1)}>
            +
          </Button>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================================
   SERVICE TABS (hero)
========================================================================================= */
const ServiceTabs: React.FC<{
  active: ServiceKey;
  setActive: (s: ServiceKey) => void;
}> = ({ active, setActive }) => {
  return (
    <div className="mb-5 grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
      {SERVICES.map((s) => {
        const isActive = active === s.value;
        const icon = isActive ? s.icons.fill : s.icons.outline;
        return (
          <button
            key={s.value}
            onClick={() => setActive(s.value)}
            className="group relative flex flex-col items-center"
            aria-label={s.label}
          >
            <img
              src={icon}
              alt={s.label}
              className={`mb-2 h-10 transition-all ${isActive ? "scale-110" : "opacity-80 group-hover:opacity-100"}`}
            />
            <span className={`text-[13px] ${isActive ? "font-semibold text-emerald-700" : "text-foreground/70"}`}>
              {s.label}
            </span>
            <span
              className={`mt-2 block h-[3px] w-10 rounded-full bg-emerald-600 transition-all ${
                isActive ? "opacity-100" : "opacity-0 group-hover:opacity-50"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
};

/* =========================================================================================
   FIELD SWITCHER
========================================================================================= */
function RenderField({
  def,
  today,
  pickupDate,
  setPickupDate,
  returnDate,
  setReturnDate,
  time,
  setTime,
}: {
  def: FieldDef;
  today: Date;
  pickupDate: Date | null;
  setPickupDate: (d: Date | null) => void;
  returnDate: Date | null;
  setReturnDate: (d: Date | null) => void;
  time: string;
  setTime: (v: string) => void;
}) {
  switch (def.kind) {
    case "city":
      return <CityDropdown label={def.label} placeholder="Select city" defaultValue="Goa, India" />;
    case "fromCity":
      return <CityDropdown label={def.label} placeholder="From city" defaultValue="Delhi, India" />;
    case "toCity":
      return <CityDropdown label={def.label} placeholder="To city" defaultValue="Kanpur, India" />;
    case "date": {
      const isStart = /pickup|start|journey|move/i.test(def.id);
      return (
        <DatePickerField
          label={def.label}
          value={isStart ? pickupDate : returnDate}
          onChange={(d) => {
            if (isStart) {
              setPickupDate(d);
              if (returnDate && d && isBefore(returnDate, d)) setReturnDate(d);
            } else {
              setReturnDate(d);
            }
          }}
          minDate={isStart ? today : pickupDate ?? today}
        />
      );
    }
    case "time":
      return <TimeDropdown label={def.label} value={time} onChange={setTime} options={def.props?.options ?? []} />;
    case "travellers":
      return <TravellersField label={def.label} />;
    case "homeSize":
      return <GenericSelect label={def.label} options={def.props?.options ?? ["1 BHK", "2 BHK"]} />;
    case "select":
      return <GenericSelect label={def.label} options={def.props?.options ?? []} />;
    default:
      return null;
  }
}

/* =========================================================================================
   MAIN
========================================================================================= */
const GlobalSearch = ({ floatOverHero = true }: { floatOverHero?: boolean }) => {
  const { searchType, setSearchType, setDocked, headerH } = useSearchUI();
    // 👇 add these
  const navigate = useNavigate();
  const location = useLocation();

    useEffect(() => {
    const seg = location.pathname.split("/").filter(Boolean)[0] as ServiceKey | undefined;
    if (seg && seg !== searchType) setSearchType(seg);
  }, [location.pathname]); // eslint-disable-line

    // 👇 add this inside GlobalSearch component
  const onTabChange = (k: ServiceKey) => {
    setSearchType(k);
    navigate(`/${k}`);               // URL change, SPA navigation
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [pickupDate, setPickupDate] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);
  const [time, setTime] = useState<string>("10:00");

  useEffect(() => {
    const t = addDays(new Date(), 1);
    setPickupDate(t);
    setReturnDate(addDays(t, 1));
  }, []);

  const today = useMemo(() => new Date(), []);
  const active = (searchType as ServiceKey) || ("self-drive" as ServiceKey);
  const conf = SERVICES.find((s) => s.value === active) ?? SERVICES[0];

  // Observe a trigger placed immediately AFTER the hero service tabs.
  // When that trigger scrolls above the top (not intersecting), we set docked=true -> header with icons appears.
  const dockTriggerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = dockTriggerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setDocked(!entry.isIntersecting),
      { root: null, rootMargin: `-${Math.max(0, headerH + 8)}px 0px 0px 0px`, threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [headerH, setDocked]);

  return (
    <div className="relative z-20">
      <div className={`${floatOverHero ? "-mt-16 md:-mt-24 lg:-mt-28" : ""}`}>
        <div className="container mx-auto px-4">
          <div className="p-6 pt-10 max-w-5xl mx-auto rounded-2xl bg-white/95 backdrop-blur ring-1 ring-black/5">
            {/* HERO SERVICE TABS */}
            <ServiceTabs active={active as ServiceKey} setActive={onTabChange} />
            {/* Dock trigger: right after tabs */}
            <div ref={dockTriggerRef} style={{ height: 1 }} />

            {/* FORM — Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(4,minmax(0,1fr))_auto] gap-5">
              {conf.fields.slice(0, 4).map((f) => (
                <RenderField
                  key={f.id}
                  def={f}
                  today={today}
                  pickupDate={pickupDate}
                  setPickupDate={setPickupDate}
                  returnDate={returnDate}
                  setReturnDate={setReturnDate}
                  time={time}
                  setTime={setTime}
                />
              ))}

            </div>

            {/* FORM — Row 2 (if any) */}
            {conf.fields.length > 4 && (
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {conf.fields.slice(4).map((f) => (
                  <RenderField
                    key={`row2-${f.id}`}
                    def={f}
                    today={today}
                    pickupDate={pickupDate}
                    setPickupDate={setPickupDate}
                    returnDate={returnDate}
                    setReturnDate={setReturnDate}
                    time={time}
                    setTime={setTime}
                  />
                ))}
              </div>
            )}

            {/* Trending */}
            <div className="mt-6 pt-4 border-t">
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="text-sm text-muted-foreground">Trending searches:</span>
                {[
                  "Bangkok, Thailand",
                  "Singapore, Singapore",
                  "New York, United States",
                  "Bangalore Self Drive",
                ].map((term) => (
                  <button key={term} className="text-primary hover:underline text-sm">
                    {term}
                  </button>
                ))}
              </div>
            </div>

            {/* Secondary CTA (optional) */}
            <Button className="w-auto mt-4 h-12 btn-premium">
              Search Vehicles
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalSearch;
