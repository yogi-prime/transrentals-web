import IndexShell from "@/components/IndexShell";

const VALID = [
  "self-drive","chauffeur","bike","luxury","bus","truck","equipment","movers",
] as const;

export default function ServicePage({ params }: { params: { service: string } }) {
  const s = params.service;
  // galat service ho to bhi client me handle (replace) hoga
  return <IndexShell service={s} />;
}
