// src/components/selfdrive/useHScroll.ts
import { useRef } from "react";

export default function useHScroll<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
    const by = (px: number) => () =>
ref.current?.scrollBy({ left: px, behavior: "smooth" });
  return { ref, left: by(-360), right: by(360) };
}
