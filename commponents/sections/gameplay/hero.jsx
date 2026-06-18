"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { useMainContext } from "@/context/main.context";

export default function Races() {
  const { setCurrentNav, setCurrentSubNav } = useMainContext();

  useEffect(() => {
    setCurrentSubNav("");
  }, []);

  return (
    <div className="flex flex-col  bg-white gap-0 bg-no-repeat bg-cover bg-center relative w-screen min-h-screen"></div>
  );
}
