// src/components/OptimizedImage.tsx
"use client";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;          // img ke liye (object-cover, h-40 etc.)
  rounded?: string;            // wrapper radius
  eager?: boolean;             // above-the-fold
  width?: number;              // intrinsic width (px)
  height?: number;             // intrinsic height (px)
  sizes?: string;              // responsive sizes
  placeholderColor?: string;   // fallback bg color
};

const toWebp = (p: string) => p.replace(/\.(png|jpg|jpeg)$/i, ".webp");

// tiny blur SVG (very cheap)
const blurData =
  "data:image/svg+xml;charset=utf-8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 6'>
       <filter id='b'><feGaussianBlur stdDeviation='1.5'/></filter>
       <rect width='10' height='6' fill='#eef2f1' filter='url(#b)'/>
     </svg>`
  );

const OptimizedImage: React.FC<Props> = ({
  src,
  alt,
  className = "",
  rounded = "rounded-xl",
  eager = false,
  width = 800,
  height = 600,
  sizes = "(max-width:768px) 100vw, 33vw",
  placeholderColor = "bg-gray-100",
}) => {
  const [inView, setInView] = useState(eager);
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  // Lazy observe
  useEffect(() => {
    if (eager) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "400px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [eager]);

  // reserve space + smooth paint:
  const ar = width && height ? (width / height) : undefined;

  return (
    <div
      ref={ref}
      className={`relative ${rounded} overflow-hidden`}
      style={{
        // before-load intrinsic size (prevents layout shift)
        containIntrinsicSize: `${height}px ${width}px`,
        // if you don't give Tailwind aspect-*, we still reserve ratio
        ...(ar ? { aspectRatio: `${width}/${height}` } : {}),
      }}
    >
      {/* soft blur placeholder (visible till onLoad) */}
      {!loaded && (
        <img
          src={blurData}
          alt=""
          aria-hidden
          className={`absolute inset-0 w-full h-full object-cover ${placeholderColor}`}
          style={{ filter: "blur(8px)", transform: "scale(1.02)" }}
        />
      )}

      {inView && (
        <picture>
          <source srcSet={toWebp(src)} type="image/webp" />
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes={sizes}
            loading={eager ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={eager ? "high" : "low"}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              loaded ? "opacity-100" : "opacity-0"
            } ${className}`}
            onLoad={() => setLoaded(true)}
            onError={() => setLoaded(true)}
          />
        </picture>
      )}
    </div>
  );
};

export default OptimizedImage;