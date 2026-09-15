"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Switcher from "@/commponents/sections/blogs/landing.switcher";
import BlogsSection from "@/commponents/sections/blogs/blogs.section";
import { useMainContext } from "@/lib/context/main.context";

export default function Races() {
  const { setCurrentNav, setCurrentSubNav } = useMainContext();

  return (
    <div className="flex flex-col  bg-white gap-0 relative w-screen min-h-screen">
      <Switcher />
      <BlogsSection />
    </div>
  );
}
