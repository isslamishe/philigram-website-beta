"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Hero from "@/commponents/sections/histoire/hero.jsx";
import HistoireSections from "@/commponents/sections/histoire/histoire.sections.jsx";
import { useMainContext } from "@/lib/context/main.context";
export default function Races() {
  const { setCurrentNav, setCurrentSubNav } = useMainContext();

  useEffect(() => {
    setCurrentNav("histoire");
    setCurrentSubNav("");
  }, []);

  return (
    <div className="flex flex-col  bg-black  relative w-screen min-h-screen">
      <Hero />
      <HistoireSections />
    </div>
  );
}
