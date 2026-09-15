"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const scrollY = window.scrollY;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    const preventScroll = (e) => e.preventDefault();
    const preventKeyScroll = (e) => {
      const keys = [
        "ArrowUp",
        "ArrowDown",
        "PageUp",
        "PageDown",
        "Home",
        "End",
        " ",
      ];
      if (keys.includes(e.key)) e.preventDefault();
    };

    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });
    window.addEventListener("keydown", preventKeyScroll, { passive: false });

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return prev;
        return Math.min(prev + Math.random() * 5 + 1, 90);
      });
    }, 150);

    const unlockScroll = () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, 0); // always reset to top instead of restoring scrollY

      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
      window.removeEventListener("keydown", preventKeyScroll);
    };

    // Guaranteed minimum splash duration instead of relying on window.load
    const MIN_DURATION = 2000; // tweak to taste

    const timeout = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setLoading(false);
        unlockScroll();
      }, 400);
    }, MIN_DURATION);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      unlockScroll();
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999]  pointer-events-auto flex h-screen w-screen items-center justify-center bg-black">
      <div
        className="text-3xl transition-all duration-500 font-serif72 bg-clip-text text-transparent"
        style={{
          backgroundImage: `
        linear-gradient(
          to right,
          white,
          white
        )
      `,
          backgroundSize: `${progress}% 100%`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "#444",
          WebkitBackgroundClip: "text",
        }}
      >
        ASCENDIA RISE
      </div>
    </div>
  );
}
