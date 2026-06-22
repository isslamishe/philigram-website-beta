"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Hero from "@/commponents/sections/gameplay/hero.jsx";
import EMR from "@/commponents/sections/gameplay/exporation.movment.jsx";
import MenuPrincipal from "@/commponents/sections/gameplay/menu.principal.jsx";
import SystemeInventaire from "@/commponents/sections/gameplay/systeme.inventaire.jsx";
import QuetesProgression from "@/commponents/sections/gameplay/quetes.progression.jsx";
import AlchimieForge from "@/commponents/sections/gameplay/alchimie.forge.jsx";
import { useMainContext } from "@/context/main.context";

export default function Races() {
  const { setCurrentNav, setCurrentSubNav } = useMainContext();

  useEffect(() => {
    setCurrentNav("Gameplay");
    setCurrentSubNav("");
  }, []);

  return (
    <div className="flex flex-col  bg-white gap-0 bg-no-repeat bg-cover bg-center relative w-screen min-h-screen">
      <Hero />
      <EMR />
      <MenuPrincipal />
      <SystemeInventaire />
      <QuetesProgression />
      <AlchimieForge />
    </div>
  );
}
