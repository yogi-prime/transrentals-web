// // src/components/Header.tsx
// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { Menu, X, User, Phone, Building2, Users, MapPin } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import ProfileOffcanvas from "@/components/ProfileOffcanvas";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";
// import { useSearchUI } from "@/components/providers/SearchUIContext";
// import { useNavigate, useLocation } from "react-router-dom";

// /* ---------- mock auth (replace with real auth when ready) ---------- */
// const mockAuth = { isAuthenticated: true, name: "Saurav" };

// /* ---------- service keys used across the app ---------- */
// type ServiceKey =
//   | "self-drive"
//   | "chauffeur"
//   | "bike"
//   | "luxury"
//   | "movers"
//   | "bus"
//   | "truck"
//   | "equipment";

// const ORDER: ServiceKey[] = [
//   "self-drive",
//   "chauffeur",
//   "bike",
//   "luxury",
//   "movers",
//   "bus",
//   "truck",
//   "equipment",
// ];

// const ICONS: Record<ServiceKey, { label: string; outline: string; fill: string }> = {
//   "self-drive": { label: "Self Drive", outline: "/services/self.png", fill: "/services/self.png" },
//   chauffeur: { label: "Standard", outline: "/services/driver.png", fill: "/services/driver.png" },
//   bike: { label: "Bike", outline: "/services/bike.png", fill: "/services/bike.png" },
//   luxury: { label: "Luxury", outline: "/services/luxury.png", fill: "/services/luxury.png" },
//   movers: { label: "P&M", outline: "/services/movers.png", fill: "/services/movers.png" },
//   bus: { label: "Bus", outline: "/services/bus.png", fill: "/services/bus.png" },
//   truck: { label: "Truck", outline: "/services/truck.png", fill: "/services/truck.png" },
//   equipment: { label: "Equipment", outline: "/services/equipment.png", fill: "/services/equipment.png" },
// };

// /* ---------- data for the mega menus ---------- */
// const LOCATIONS = [
//   { name: "Ahmedabad", href: "/rentals/ahmedabad", img: "/city/ahmedabad.jpg" },
//   { name: "Mumbai", href: "/rentals/mumbai", img: "/city/mumbai.jpeg" },
//   { name: "Bangalore", href: "/rentals/bangalore", img: "/city/bangalore.webp" },
//   { name: "Delhi", href: "/rentals/delhi", img: "/city/delhi.jpg" },
//   { name: "Hyderabad", href: "/rentals/hyderabad", img: "/city/hyderabad.jpg" },
//   { name: "Kolkata", href: "/rentals/kolkata", img: "/city/kolkata.webp" },
//   { name: "Chennai", href: "/rentals/chennai", img: "/city/chennai.jpg" },
//   { name: "Pune", href: "/rentals/pune", img: "/city/pune.webp" },
// ];

// const INSIGHTS = [
//   { title: "Weekend getaways trending", tag: "Trending", href: "/insights/weekend-getaways", img: "/insights/1.jpg" },
//   { title: "Top 5 wedding fleets", tag: "Events", href: "/insights/wedding-fleets", img: "/insights/2.jpg" },
//   { title: "Corporate travel playbook", tag: "Corporate", href: "/insights/corporate-travel", img: "/insights/3.jpg" },
//   { title: "Hill stations are hot", tag: "Seasonal", href: "/insights/hills", img: "/insights/4.jpg" },
//   { title: "EV rentals on the rise", tag: "EV", href: "/insights/ev-rentals", img: "/insights/5.jpg" },
//   { title: "Destination weddings", tag: "Wedding", href: "/insights/destination-wedding", img: "/insights/6.jpg" },
// ];

// const BLOGS = [
//   { title: "Leh–Ladakh roadtrip guide", date: "Sep 18", href: "/blog/leh-ladakh-guide", img: "/blogs/leh.jpg" },
//   { title: "Self-drive vs chauffeur?", date: "Sep 10", href: "/blog/selfdrive-vs-chauffeur", img: "/blogs/sd-vs-ch.jpg" },
//   { title: "Best time to visit Goa", date: "Aug 28", href: "/blog/goa-best-time", img: "/blogs/goa.jpg" },
//   { title: "How to pick a bus", date: "Aug 15", href: "/blog/pick-bus", img: "/blogs/bus.jpg" },
//   { title: "Luxury car for weddings", date: "Aug 02", href: "/blog/luxury-weddings", img: "/blogs/luxury.jpg" },
//   { title: "Bike trips near Pune", date: "Jul 25", href: "/blog/pune-bikes", img: "/blogs/bikes.jpg" },
// ];

// const WANDER_FEATURE = [
//   { title: "Himalayan Loops", href: "/tours/himalayas", img: "/wander/himalaya.jpg", chip: "Road Trips" },
//   { title: "Beach Hopping", href: "/tours/beaches", img: "/wander/beach.jpg", chip: "Beaches" },
//   { title: "Heritage Circuits", href: "/tours/heritage", img: "/wander/heritage.jpg", chip: "Heritage" },
// ];

// const WANDER_LINKS = [
//   ["Hill Stations", "Beaches", "Heritage"],
//   ["City Breaks", "Corporate", "Weddings & Events"],
//   ["Pilgrimage", "Road Trips", "All Tours"],
// ];

// /* ---------- small UI helpers ---------- */
// const ImgCover: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className }) => (
//   <div className={`relative overflow-hidden ${className ?? ""}`}>
//     <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover object-center" />
//   </div>
// );

// const PanelTitle: React.FC<{ title: string; desc?: string }> = ({ title, desc }) => (
//   <div className="mb-3">
//     <div className="text-base font-semibold">{title}</div>
//     {desc ? <p className="text-sm text-muted-foreground">{desc}</p> : null}
//   </div>
// );

// const CityCard: React.FC<{ name: string; img: string; href: string }> = ({ name, img, href }) => (
//   <a href={href} className="group block overflow-hidden rounded-lg border bg-card hover:shadow-md transition h-full">
//     <ImgCover src={img} alt={name} className="aspect-[4/3]" />
//     <div className="p-2">
//       <div className="text-sm font-medium">{name}</div>
//       <div className="text-xs text-muted-foreground">Rentals • Chauffeur • Tours</div>
//     </div>
//   </a>
// );

// const InsightItem: React.FC<{ title: string; tag: string; img: string; href: string }> = ({
//   title,
//   tag,
//   img,
//   href,
// }) => (
//   <a href={href} className="group flex items-center gap-3 rounded-md p-2 hover:bg-muted/50 transition">
//     <ImgCover src={img} alt={title} className="h-10 w-14 rounded-md" />
//     <div className="min-w-0">
//       <div className="text-sm font-medium truncate">{title}</div>
//       <div className="text-xs text-primary/80">{tag}</div>
//     </div>
//   </a>
// );

// const BlogCard: React.FC<{ title: string; date: string; img: string; href: string }> = ({
//   title,
//   date,
//   img,
//   href,
// }) => (
//   <a
//     href={href}
//     className="group overflow-hidden rounded-lg border bg-card hover:shadow-md transition h-full flex flex-col"
//   >
//     <ImgCover src={img} alt={title} className="aspect-[16/9]" />
//     <div className="p-3 flex-1 flex flex-col">
//       <div className="text-sm font-semibold leading-tight line-clamp-2">{title}</div>
//       <div className="mt-1 text-xs text-muted-foreground">{date}</div>
//     </div>
//   </a>
// );

// const FeatureCard: React.FC<{ title: string; img: string; href: string; chip: string }> = ({
//   title,
//   img,
//   href,
//   chip,
// }) => (
//   <a href={href} className="group relative block h-full overflow-hidden rounded-xl border bg-card">
//     <div className="absolute inset-0">
//       <img
//         src={img}
//         alt={title}
//         className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
//       />
//       <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 via-white/40 to-white/95" />
//     </div>

//     <div className="absolute inset-x-3 bottom-3">
//       <span className="inline-flex items-center rounded-full bg-emerald-600/90 px-2 py-0.5 text-[11px] font-medium text-white shadow">
//         {chip}
//       </span>
//       <div className="mt-1 text-[15px] font-semibold text-slate-900">{title}</div>
//     </div>

//     <div className="invisible">.</div>
//   </a>
// );

// /* =======================================================================================
//    HEADER
// ======================================================================================= */

// const Header: React.FC = () => {
//   const [profileOpen, setProfileOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const { docked, searchType, setSearchType, setHeaderH } = useSearchUI();

//   const navigate = useNavigate();
//   const location = useLocation();

//   /* keep context in sync with URL */
//   useEffect(() => {
//     const seg = location.pathname.split("/").filter(Boolean)[0] as ServiceKey | undefined;
//     if (seg && ORDER.includes(seg) && seg !== searchType) {
//       setSearchType(seg);
//     }
//   }, [location.pathname]); // eslint-disable-line

//   /* click helper: update context + URL */
//   const goService = (k: ServiceKey) => {
//     setSearchType(k);
//     navigate(`/${k}`);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   /* measure static header height for docked threshold */
//   const staticRef = useRef<HTMLElement>(null);
//   useEffect(() => {
//     const onScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", onScroll);

//     const update = () => {
//       const h = staticRef.current?.offsetHeight ?? 0;
//       setHeaderH(h);
//       document.documentElement.style.setProperty("--header-h", `${h}px`);
//     };
//     update();
//     const ro = new ResizeObserver(update);
//     if (staticRef.current) ro.observe(staticRef.current);
//     window.addEventListener("resize", update);

//     return () => {
//       window.removeEventListener("scroll", onScroll);
//       window.removeEventListener("resize", update);
//       ro.disconnect();
//     };
//   }, [setHeaderH]);

//   return (
//     <>
//       {/* ---------- STATIC HEADER (mega menus) ---------- */}
//       <header ref={staticRef as any} className="relative z-30 border-b bg-background">
//         {/* utility strip */}
//         {!isScrolled && (
//           <div className="bg-primary/5 border-b border-border/30">
//             <div className="container mx-auto px-4">
//               <div className="flex h-10 items-center justify-between text-sm">
//                 <div className="flex items-center space-x-3 sm:space-x-6">
//                   <a href="/corporate" className="nav-link flex items-center gap-1 py-1">
//                     <Building2 className="h-4 w-4" />
//                     Corporate Solutions
//                   </a>
//                   <a href="/vendor" className="nav-link flex items-center gap-1 py-1">
//                     <Users className="h-4 w-4" />
//                     Become a Vendor
//                   </a>
//                 </div>
//                 <div className="flex items-center space-x-3 sm:space-x-6">
//                   <a href="/track" className="nav-link flex items-center gap-1 py-1">
//                     <MapPin className="h-4 w-4" />
//                     Track Booking
//                   </a>
//                   <a href="/support" className="nav-link flex items-center gap-1 py-1">
//                     <Phone className="h-4 w-4" />
//                     Support
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* main row */}
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-[auto,1fr,auto] items-center h-16 gap-4">
//             <a
//               href="#"
//               onClick={(e) => {
//                 e.preventDefault();
//                 navigate(`/${(searchType as ServiceKey) || "self-drive"}`);
//               }}
//               className="flex items-center"
//             >
//               <img src="/logo.png" alt="TransRentals Logo" className="h-7 w-auto" />
//             </a>

//             {/* NAV menus */}
//             <div className="hidden lg:block justify-self-center">
//               <NavigationMenu>
//                 <NavigationMenuList>
//                   {/* LOCATIONS */}
//                   <NavigationMenuItem>
//                     <NavigationMenuTrigger className="nav-link text-sm font-medium">Locations</NavigationMenuTrigger>
//                     <NavigationMenuContent>
//                       <div className="w-[860px] p-5 grid grid-cols-4 gap-5 bg-card border rounded-xl shadow-xl">
//                         <div className="col-span-1">
//                           <PanelTitle
//                             title="Top Cities"
//                             desc="Choose a city to see self-drive, chauffeur & tours available now."
//                           />
//                           <a href="/locations" className="inline-flex text-sm text-primary hover:underline">
//                             Browse all locations →
//                           </a>
//                         </div>
//                         <div className="col-span-3 grid grid-cols-4 gap-4 [grid-auto-rows:1fr]">
//                           {LOCATIONS.map((c) => (
//                             <CityCard key={c.name} {...c} />
//                           ))}
//                         </div>
//                       </div>
//                     </NavigationMenuContent>
//                   </NavigationMenuItem>

//                   {/* INSIGHTS */}
//                   <NavigationMenuItem>
//                     <NavigationMenuTrigger className="nav-link text-sm font-medium">Insights</NavigationMenuTrigger>
//                     <NavigationMenuContent>
//                       <div className="w-[720px] p-5 grid grid-cols-3 gap-4 bg-card border rounded-xl shadow-xl">
//                         <div className="col-span-1">
//                           <PanelTitle
//                             title="What’s popular now"
//                             desc="Real-time vibes from across India—events, trends & ideas."
//                           />
//                           <a href="/insights" className="inline-flex text-sm text-primary hover:underline">
//                             Explore Insights →
//                           </a>
//                         </div>
//                         <div className="col-span-2 grid grid-cols-2 gap-2">
//                           {INSIGHTS.map((i) => (
//                             <InsightItem key={i.href} {...i} />
//                           ))}
//                         </div>
//                       </div>
//                     </NavigationMenuContent>
//                   </NavigationMenuItem>

//                   {/* BLOGS */}
//                   <NavigationMenuItem>
//                     <NavigationMenuTrigger className="nav-link text-sm font-medium">Blogs</NavigationMenuTrigger>
//                     <NavigationMenuContent>
//                       <div className="w-[860px] p-5 grid grid-cols-4 gap-5 bg-card border rounded-xl shadow-xl">
//                         <div className="col-span-1">
//                           <PanelTitle title="Latest from the blog" desc="Guides, tips & deep dives for smarter trips." />
//                           <a href="/blog" className="inline-flex text-sm text-primary hover:underline">
//                             See all posts →
//                           </a>
//                         </div>
//                         <div className="col-span-3 grid grid-cols-3 gap-4 [grid-auto-rows:1fr]">
//                           {BLOGS.slice(0, 6).map((b) => (
//                             <BlogCard key={b.href} {...b} />
//                           ))}
//                         </div>
//                       </div>
//                     </NavigationMenuContent>
//                   </NavigationMenuItem>

//                   {/* ABOUT */}
//                   <NavigationMenuItem>
//                     <NavigationMenuLink href="/about" className="nav-link text-sm font-medium px-3 py-2 rounded-md">
//                       About
//                     </NavigationMenuLink>
//                   </NavigationMenuItem>

//                   {/* WANDER */}
//                   <NavigationMenuItem>
//                     <NavigationMenuTrigger className="nav-link text-sm font-medium">Wander</NavigationMenuTrigger>
//                     <NavigationMenuContent>
//                       <div className="w-[900px] p-5 grid grid-cols-12 gap-5 bg-card border rounded-xl shadow-xl">
//                         <div className="col-span-4">
//                           <PanelTitle
//                             title="Tours & Travel"
//                             desc="Curated itineraries: road trips, city breaks, weddings, corporate & more."
//                           />
//                           <div className="space-y-1">
//                             {WANDER_LINKS.map((col, idx) => (
//                               <div key={idx} className="grid grid-cols-1 gap-1 mb-2">
//                                 {col.map((label) => (
//                                   <NavigationMenuLink
//                                     key={label}
//                                     href="#"
//                                     className="block rounded-md py-2 px-2 text-sm nav-link"
//                                   >
//                                     {label}
//                                   </NavigationMenuLink>
//                                 ))}
//                               </div>
//                             ))}
//                           </div>
//                           <a href="/tours" className="inline-flex text-sm text-primary hover:underline mt-2">
//                             Browse all tours →
//                           </a>
//                         </div>
//                         <div className="col-span-8 grid grid-cols-3 gap-4 items-stretch">
//                           {WANDER_FEATURE.map((f) => (
//                             <FeatureCard key={f.href} {...f} />
//                           ))}
//                         </div>
//                       </div>
//                     </NavigationMenuContent>
//                   </NavigationMenuItem>
//                 </NavigationMenuList>
//               </NavigationMenu>
//             </div>

//             {/* right actions */}
//             <div className="flex items-center gap-3 justify-self-end">
//               {mockAuth.isAuthenticated ? (
//                 <>
//                   <button
//                     type="button"
//                     onClick={() => setProfileOpen(true)}
//                     className="flex items-center gap-2 hover:opacity-90"
//                     aria-label="Open profile"
//                   >
//                     <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
//                       <User className="h-4 w-4" />
//                     </div>
//                     <span className="font-medium">{mockAuth.name}</span>
//                   </button>
//                   <Button className="rounded-full px-4 py-2 text-white shadow transition hover:scale-105 bg-gradient-to-r from-emerald-500 to-emerald-600">
//                     Download App
//                   </Button>
//                 </>
//               ) : (
//                 <>
//                   <Button variant="outline" size="sm">
//                     Login / Register
//                   </Button>
//                   <Button className="rounded-full px-4 py-2 text-white shadow bg-gradient-to-r from-emerald-500 to-emerald-600">
//                     Download App
//                   </Button>
//                 </>
//               )}

//               <button
//                 className="p-2 lg:hidden"
//                 onClick={() => setIsMobileMenuOpen((s) => !s)}
//                 aria-label="Toggle menu"
//               >
//                 {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
//               </button>
//             </div>
//           </div>
//         </div>

//         <ProfileOffcanvas open={profileOpen} onClose={() => setProfileOpen(false)} />
//       </header>

//       {/* ---------- DOCKED HEADER (services switcher) ---------- */}
//       <div
//         className={`fixed inset-x-0 top-0 z-50 py-3 bg-background/95 backdrop-blur border-b transition-all duration-300 ${
//           docked ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"
//         }`}
//         aria-hidden={!docked}
//       >
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-[auto,1fr,auto] items-center h-14 gap-3">
//             <a
//               href="#"
//               onClick={(e) => {
//                 e.preventDefault();
//                 navigate(`/${(searchType as ServiceKey) || "self-drive"}`);
//               }}
//               className="flex items-center"
//             >
//               <img src="/logo.png" alt="TransRentals" className="h-6 w-auto" />
//             </a>

//             <div className="overflow-x-auto justify-self-center">
//               <div className="inline-flex items-end gap-1 px-1 py-2 whitespace-nowrap">
//                 {ORDER.map((key) => {
//                   const it = ICONS[key];
//                   const active = (searchType as ServiceKey) === key;
//                   const icon = active ? it.fill : it.outline;
//                   return (
//                     <button
//                       key={key}
//                       onClick={() => goService(key)}
//                       className="group relative inline-flex flex-col items-center justify-center min-w-[72px]"
//                       aria-label={it.label}
//                     >
//                       <img
//                         src={icon}
//                         alt={it.label}
//                         className={`mb-1 h-6 transition-all ${
//                           active ? "scale-110" : "opacity-80 group-hover:opacity-100"
//                         }`}
//                       />
//                       <span
//                         className={`text-[12px] ${
//                           active ? "font-semibold text-emerald-700" : "text-foreground/70"
//                         }`}
//                       >
//                         {it.label}
//                       </span>
//                       <span
//                         className={`mt-1 block h-[2px] w-8 rounded-full bg-emerald-600 transition-all ${
//                           active ? "opacity-100" : "opacity-0 group-hover:opacity-50"
//                         }`}
//                       />
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>

//             <div className="justify-self-end">
//               <Button className="rounded-full px-4 py-2 text-white shadow bg-gradient-to-r from-emerald-500 to-emerald-600">
//                 Download App
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;
// components/Header.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X, User, Phone, Building2, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProfileOffcanvas from "@/components/ProfileOffcanvas";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useSearchUI } from "@/components/providers/SearchUIContext";

/* ---------- mock auth (replace with real auth when ready) ---------- */
const mockAuth = { isAuthenticated: true, name: "Saurav" };

/* ---------- service keys used across the app ---------- */
type ServiceKey =
  | "self-drive"
  | "chauffeur"
  | "bike"
  | "luxury"
  | "movers"
  | "bus"
  | "truck"
  | "equipment";

const ORDER: ServiceKey[] = [
  "self-drive",
  "chauffeur",
  "bike",
  "luxury",
  "movers",
  "bus",
  "truck",
  "equipment",
];

const ICONS: Record<ServiceKey, { label: string; outline: string; fill: string }> = {
  "self-drive": { label: "Self Drive", outline: "/services/self.png", fill: "/services/self.png" },
  chauffeur: { label: "Standard", outline: "/services/driver.png", fill: "/services/driver.png" },
  bike: { label: "Bike", outline: "/services/bike.png", fill: "/services/bike.png" },
  luxury: { label: "Luxury", outline: "/services/luxury.png", fill: "/services/luxury.png" },
  movers: { label: "P&M", outline: "/services/movers.png", fill: "/services/movers.png" },
  bus: { label: "Bus", outline: "/services/bus.png", fill: "/services/bus.png" },
  truck: { label: "Truck", outline: "/services/truck.png", fill: "/services/truck.png" },
  equipment: { label: "Equipment", outline: "/services/equipment.png", fill: "/services/equipment.png" },
};

/* ---------- data for the mega menus ---------- */
const LOCATIONS = [
  { name: "Ahmedabad", href: "/rentals/ahmedabad", img: "/city/ahmedabad.jpg" },
  { name: "Mumbai", href: "/rentals/mumbai", img: "/city/mumbai.jpeg" },
  { name: "Bangalore", href: "/rentals/bangalore", img: "/city/bangalore.webp" },
  { name: "Delhi", href: "/rentals/delhi", img: "/city/delhi.jpg" },
  { name: "Hyderabad", href: "/rentals/hyderabad", img: "/city/hyderabad.jpg" },
  { name: "Kolkata", href: "/rentals/kolkata", img: "/city/kolkata.webp" },
  { name: "Chennai", href: "/rentals/chennai", img: "/city/chennai.jpg" },
  { name: "Pune", href: "/rentals/pune", img: "/city/pune.webp" },
];

const INSIGHTS = [
  { title: "Weekend getaways trending", tag: "Trending", href: "/insights/weekend-getaways", img: "/insights/1.jpg" },
  { title: "Top 5 wedding fleets", tag: "Events", href: "/insights/wedding-fleets", img: "/insights/2.jpg" },
  { title: "Corporate travel playbook", tag: "Corporate", href: "/insights/corporate-travel", img: "/insights/3.jpg" },
  { title: "Hill stations are hot", tag: "Seasonal", href: "/insights/hills", img: "/insights/4.jpg" },
  { title: "EV rentals on the rise", tag: "EV", href: "/insights/ev-rentals", img: "/insights/5.jpg" },
  { title: "Destination weddings", tag: "Wedding", href: "/insights/destination-wedding", img: "/insights/6.jpg" },
];

const BLOGS = [
  { title: "Leh–Ladakh roadtrip guide", date: "Sep 18", href: "/blog/leh-ladakh-guide", img: "/blogs/leh.jpg" },
  { title: "Self-drive vs chauffeur?", date: "Sep 10", href: "/blog/selfdrive-vs-chauffeur", img: "/blogs/sd-vs-ch.jpg" },
  { title: "Best time to visit Goa", date: "Aug 28", href: "/blog/goa-best-time", img: "/blogs/goa.jpg" },
  { title: "How to pick a bus", date: "Aug 15", href: "/blog/pick-bus", img: "/blogs/bus.jpg" },
  { title: "Luxury car for weddings", date: "Aug 02", href: "/blog/luxury-weddings", img: "/blogs/luxury.jpg" },
  { title: "Bike trips near Pune", date: "Jul 25", href: "/blog/pune-bikes", img: "/blogs/bikes.jpg" },
];

const WANDER_FEATURE = [
  { title: "Himalayan Loops", href: "/tours/himalayas", img: "/wander/himalaya.jpg", chip: "Road Trips" },
  { title: "Beach Hopping", href: "/tours/beaches", img: "/wander/beach.jpg", chip: "Beaches" },
  { title: "Heritage Circuits", href: "/tours/heritage", img: "/wander/heritage.jpg", chip: "Heritage" },
];

const WANDER_LINKS = [
  ["Hill Stations", "Beaches", "Heritage"],
  ["City Breaks", "Corporate", "Weddings & Events"],
  ["Pilgrimage", "Road Trips", "All Tours"],
];

/* ---------- small UI helpers ---------- */
const ImgCover: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className }) => (
  <div className={`relative overflow-hidden ${className ?? ""}`}>
    <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover object-center" />
  </div>
);

const PanelTitle: React.FC<{ title: string; desc?: string }> = ({ title, desc }) => (
  <div className="mb-3">
    <div className="text-base font-semibold">{title}</div>
    {desc ? <p className="text-sm text-muted-foreground">{desc}</p> : null}
  </div>
);

const CityCard: React.FC<{ name: string; img: string; href: string }> = ({ name, img, href }) => (
  <Link href={href} className="group block overflow-hidden rounded-lg border bg-card hover:shadow-md transition h-full">
    <ImgCover src={img} alt={name} className="aspect-[4/3]" />
    <div className="p-2">
      <div className="text-sm font-medium">{name}</div>
      <div className="text-xs text-muted-foreground">Rentals • Chauffeur • Tours</div>
    </div>
  </Link>
);

const InsightItem: React.FC<{ title: string; tag: string; img: string; href: string }> = ({
  title,
  tag,
  img,
  href,
}) => (
  <Link href={href} className="group flex items-center gap-3 rounded-md p-2 hover:bg-muted/50 transition">
    <ImgCover src={img} alt={title} className="h-10 w-14 rounded-md" />
    <div className="min-w-0">
      <div className="text-sm font-medium truncate">{title}</div>
      <div className="text-xs text-primary/80">{tag}</div>
    </div>
  </Link>
);

const BlogCard: React.FC<{ title: string; date: string; img: string; href: string }> = ({
  title,
  date,
  img,
  href,
}) => (
  <Link
    href={href}
    className="group overflow-hidden rounded-lg border bg-card hover:shadow-md transition h-full flex flex-col"
  >
    <ImgCover src={img} alt={title} className="aspect-[16/9]" />
    <div className="p-3 flex-1 flex flex-col">
      <div className="text-sm font-semibold leading-tight line-clamp-2">{title}</div>
      <div className="mt-1 text-xs text-muted-foreground">{date}</div>
    </div>
  </Link>
);

const FeatureCard: React.FC<{ title: string; img: string; href: string; chip: string }> = ({
  title,
  img,
  href,
  chip,
}) => (
  <Link href={href} className="group relative block h-full overflow-hidden rounded-xl border bg-card">
    <div className="absolute inset-0">
      <img
        src={img}
        alt={title}
        className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 via-white/40 to-white/95" />
    </div>

    <div className="absolute inset-x-3 bottom-3">
      <span className="inline-flex items-center rounded-full bg-emerald-600/90 px-2 py-0.5 text-[11px] font-medium text-white shadow">
        {chip}
      </span>
      <div className="mt-1 text-[15px] font-semibold text-slate-900">{title}</div>
    </div>

    <div className="invisible">.</div>
  </Link>
);

/* =======================================================================================
   HEADER
======================================================================================= */

const Header: React.FC = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { docked, searchType, setSearchType, setHeaderH } = useSearchUI();

  const router = useRouter();
  const pathname = usePathname();

  /* keep context in sync with URL */
  useEffect(() => {
    const seg = pathname.split("/").filter(Boolean)[0] as ServiceKey | undefined;
    if (seg && ORDER.includes(seg) && seg !== searchType) {
      setSearchType(seg);
    }
  }, [pathname, searchType, setSearchType]);

  /* click helper: update context + URL */
  const goService = (k: ServiceKey) => {
    setSearchType(k);
    router.push(`/${k}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* measure static header height for docked threshold */
  const staticRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);

    const update = () => {
      const h = staticRef.current?.offsetHeight ?? 0;
      setHeaderH(h);
      document.documentElement.style.setProperty("--header-h", `${h}px`);
    };
    update();
    const ro = new ResizeObserver(update);
    if (staticRef.current) ro.observe(staticRef.current);
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
      ro.disconnect();
    };
  }, [setHeaderH]);

  return (
    <>
      {/* ---------- STATIC HEADER (mega menus) ---------- */}
      <header ref={staticRef as any} className="relative z-30 border-b bg-background">
        {/* utility strip */}
        {!isScrolled && (
          <div className="bg-primary/5 border-b border-border/30">
            <div className="container mx-auto px-4">
              <div className="flex h-10 items-center justify-between text-sm">
                <div className="flex items-center space-x-3 sm:space-x-6">
                  <Link href="/corporate" className="nav-link flex items-center gap-1 py-1">
                    <Building2 className="h-4 w-4" />
                    Corporate Solutions
                  </Link>
                  <Link href="/vendor" className="nav-link flex items-center gap-1 py-1">
                    <Users className="h-4 w-4" />
                    Become a Vendor
                  </Link>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-6">
                  <Link href="/track" className="nav-link flex items-center gap-1 py-1">
                    <MapPin className="h-4 w-4" />
                    Track Booking
                  </Link>
                  <Link href="/support" className="nav-link flex items-center gap-1 py-1">
                    <Phone className="h-4 w-4" />
                    Support
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* main row */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-[auto,1fr,auto] items-center h-16 gap-4">
            <button
              onClick={() => router.push(`/${(searchType as ServiceKey) || "self-drive"}`)}
              className="flex items-center"
              aria-label="Go home"
            >
              <img src="/logo.png" alt="TransRentals Logo" className="h-7 w-auto" />
            </button>

            {/* NAV menus */}
            <div className="hidden lg:block justify-self-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {/* LOCATIONS */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="nav-link text-sm font-medium">Locations</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[860px] p-5 grid grid-cols-4 gap-5 bg-card border rounded-xl shadow-xl">
                        <div className="col-span-1">
                          <PanelTitle
                            title="Top Cities"
                            desc="Choose a city to see self-drive, chauffeur & tours available now."
                          />
                          <Link href="/locations" className="inline-flex text-sm text-primary hover:underline">
                            Browse all locations →
                          </Link>
                        </div>
                        <div className="col-span-3 grid grid-cols-4 gap-4 [grid-auto-rows:1fr]">
                          {LOCATIONS.map((c) => (
                            <CityCard key={c.name} {...c} />
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* INSIGHTS */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="nav-link text-sm font-medium">Insights</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[720px] p-5 grid grid-cols-3 gap-4 bg-card border rounded-xl shadow-xl">
                        <div className="col-span-1">
                          <PanelTitle
                            title="What’s popular now"
                            desc="Real-time vibes from across India—events, trends & ideas."
                          />
                          <Link href="/insights" className="inline-flex text-sm text-primary hover:underline">
                            Explore Insights →
                          </Link>
                        </div>
                        <div className="col-span-2 grid grid-cols-2 gap-2">
                          {INSIGHTS.map((i) => (
                            <InsightItem key={i.href} {...i} />
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* BLOGS */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="nav-link text-sm font-medium">Blogs</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[860px] p-5 grid grid-cols-4 gap-5 bg-card border rounded-xl shadow-xl">
                        <div className="col-span-1">
                          <PanelTitle title="Latest from the blog" desc="Guides, tips & deep dives for smarter trips." />
                          <Link href="/blog" className="inline-flex text-sm text-primary hover:underline">
                            See all posts →
                          </Link>
                        </div>
                        <div className="col-span-3 grid grid-cols-3 gap-4 [grid-auto-rows:1fr]">
                          {BLOGS.slice(0, 6).map((b) => (
                            <BlogCard key={b.href} {...b} />
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* ABOUT */}
                  <NavigationMenuItem>
                    <NavigationMenuLink href="/about" className="nav-link text-sm font-medium px-3 py-2 rounded-md">
                      About
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  {/* WANDER */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="nav-link text-sm font-medium">Wander</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[900px] p-5 grid grid-cols-12 gap-5 bg-card border rounded-xl shadow-xl">
                        <div className="col-span-4">
                          <PanelTitle
                            title="Tours & Travel"
                            desc="Curated itineraries: road trips, city breaks, weddings, corporate & more."
                          />
                          <div className="space-y-1">
                            {WANDER_LINKS.map((col, idx) => (
                              <div key={idx} className="grid grid-cols-1 gap-1 mb-2">
                                {col.map((label) => (
                                  <NavigationMenuLink
                                    key={label}
                                    href="#"
                                    className="block rounded-md py-2 px-2 text-sm nav-link"
                                  >
                                    {label}
                                  </NavigationMenuLink>
                                ))}
                              </div>
                            ))}
                          </div>
                          <Link href="/tours" className="inline-flex text-sm text-primary hover:underline mt-2">
                            Browse all tours →
                          </Link>
                        </div>
                        <div className="col-span-8 grid grid-cols-3 gap-4 items-stretch">
                          {WANDER_FEATURE.map((f) => (
                            <FeatureCard key={f.href} {...f} />
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* right actions */}
            <div className="flex items-center gap-3 justify-self-end">
              {mockAuth.isAuthenticated ? (
                <>
                  <button
                    type="button"
                    onClick={() => setProfileOpen(true)}
                    className="flex items-center gap-2 hover:opacity-90"
                    aria-label="Open profile"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                      <User className="h-4 w-4" />
                    </div>
                    <span className="font-medium">{mockAuth.name}</span>
                  </button>
                  <Button className="rounded-full px-4 py-2 text-white shadow transition hover:scale-105 bg-gradient-to-r from-emerald-500 to-emerald-600">
                    Download App
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline" size="sm">
                    Login / Register
                  </Button>
                  <Button className="rounded-full px-4 py-2 text-white shadow bg-gradient-to-r from-emerald-500 to-emerald-600">
                    Download App
                  </Button>
                </>
              )}

              <button
                className="p-2 lg:hidden"
                onClick={() => setIsMobileMenuOpen((s) => !s)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        <ProfileOffcanvas open={profileOpen} onClose={() => setProfileOpen(false)} />
      </header>

      {/* ---------- DOCKED HEADER (services switcher) ---------- */}
      <div
        className={`fixed inset-x-0 top-0 z-50 py-3 bg-background/95 backdrop-blur border-b transition-all duration-300 ${
          docked ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"
        }`}
        aria-hidden={!docked}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-[auto,1fr,auto] items-center h-14 gap-3">
            <button
              onClick={() => router.push(`/${(searchType as ServiceKey) || "self-drive"}`)}
              className="flex items-center"
              aria-label="Go home"
            >
              <img src="/logo.png" alt="TransRentals" className="h-6 w-auto" />
            </button>

            <div className="overflow-x-auto justify-self-center">
              <div className="inline-flex items-end gap-1 px-1 py-2 whitespace-nowrap">
                {ORDER.map((key) => {
                  const it = ICONS[key];
                  const active = (searchType as ServiceKey) === key;
                  const icon = active ? it.fill : it.outline;
                  return (
                    <button
                      key={key}
                      onClick={() => goService(key)}
                      className="group relative inline-flex flex-col items-center justify-center min-w-[72px]"
                      aria-label={it.label}
                    >
                      <img
                        src={icon}
                        alt={it.label}
                        className={`mb-1 h-6 transition-all ${active ? "scale-110" : "opacity-80 group-hover:opacity-100"}`}
                      />
                      <span className={`text-[12px] ${active ? "font-semibold text-emerald-700" : "text-foreground/70"}`}>
                        {it.label}
                      </span>
                      <span
                        className={`mt-1 block h-[2px] w-8 rounded-full bg-emerald-600 transition-all ${
                          active ? "opacity-100" : "opacity-0 group-hover:opacity-50"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="justify-self-end">
              <Button className="rounded-full px-4 py-2 text-white shadow bg-gradient-to-r from-emerald-500 to-emerald-600">
                Download App
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
