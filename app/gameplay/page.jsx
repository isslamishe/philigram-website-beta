"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Hero from "@/commponents/sections/gameplay/hero.jsx";
import EMR from "@/commponents/sections/gameplay/exporation.movment.jsx";
import MenuPrincipal from "@/commponents/sections/gameplay/menu.principal.jsx";
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
    </div>
  );
}
