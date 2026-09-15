"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Landing from "../../commponents/sections/about/landing";
import NotreVision from "@/commponents/sections/about/notre.vision";
import Equipe from "@/commponents/sections/about/equipe";
import Construire from "@/commponents/sections/about/construire";
import { useMainContext } from "@/lib/context/main.context";

export default function Races() {
  const { setCurrentNav, setCurrentSubNav } = useMainContext();

  return (
    <div className="flex flex-col  bg-white gap-0 relative w-screen min-h-screen">
      <Landing />
      <NotreVision />
      <Equipe />
      <Construire />
    </div>
  );
}
