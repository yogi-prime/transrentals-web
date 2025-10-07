import React, { useEffect, useRef, useState } from "react";

type Props = {
  src: string;              // original path e.g. "/images/car-1.jpg"
  alt: string;
  className?: string;       // size classes (give height/aspect here)
  rounded?: string;         // tailwind radius e.g. "rounded-xl"
  eager?: boolean;          // above-the-fold? true -> no lazy
  placeholderColor?: string;// skeleton bg
};

const toWebp = (p: string) => p.replace(/\.(png|jpg|jpeg)$/i, ".webp");

const OptimizedImage: React.FC<Props> = ({
  src,
  alt,
  className = "",
  rounded = "rounded-xl",
  eager = false,
  placeholderColor = "bg-gray-100",
}) => {
  const [inView, setInView] = useState(eager);
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

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
      { rootMargin: "400px 0px" } // preload before it appears
    );
    io.observe(el);
    return () => io.disconnect();
  }, [eager]);

  return (
  <div ref={ref} className={`relative ${rounded}`}>
  {!loaded && (
    <div
      className={`absolute inset-0 ${placeholderColor} animate-pulse`}
      aria-hidden
    />
  )}

  {inView && (
    <picture>
      <source srcSet={toWebp(src)} type="image/webp" />
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={eager ? "high" : "low"}
        className={`${className} object-cover ${loaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
        onLoad={() => setLoaded(true)}
      />
    </picture>
  )}
</div>

  );
};

export default OptimizedImage;
