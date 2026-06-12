"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Hero from "@/commponents/sections/races/hero.jsx";
import ShowCase from "@/commponents/sections/races/races.showcase.jsx";
import { useMainContext } from "@/context/main.context";

export default function Races() {
  const { setCurrentNav, setCurrentSubNav } = useMainContext();

  useEffect(() => {
    setCurrentNav("Les Races");
    setCurrentSubNav("");
  }, []);

  return (
    <div className="flex flex-col  bg-white gap-0 bg-no-repeat bg-cover bg-center relative w-screen min-h-screen">
      <Hero />
      <ShowCase />
    </div>
  );
}
