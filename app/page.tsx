"use client";
import Image from "next/image";

import Hero from "@/commponents/sections/landing/hero";

import Section2 from "@/commponents/sections/landing/section-2";
import ESM from "@/commponents/sections/landing/explore-survive-maitre";
import Histoire from "@/commponents/sections/landing/Histoire";
import LPD from "@/commponents/sections/landing/peuples";
import Gallery from "@/commponents/sections/landing/gallery";
import Reservez from "@/commponents/sections/landing/reservez";
import { useMainContext } from "@/context/main.context";
import { useEffect } from "react";

export default function Home() {
  const { setCurrentNav, isOpen } = useMainContext();

  useEffect(() => {
    setCurrentNav("Accueil");
  }, []);

  return (
    <div className={`flex flex-col overflow-hidden h-auto  bg-white`}>
      <Hero />
      <Section2 />
      <ESM />
      <Histoire />
      <LPD />
      <Gallery />
      <Reservez />
    </div>
  );
}
