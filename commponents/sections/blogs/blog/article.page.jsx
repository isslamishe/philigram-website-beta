"use client";

import { useEffect, useRef, useState } from "react";

import { usePathname } from "next/navigation";

import SkilitonLouder from "@/commponents/sections/blogs/blog/skiliton.louder";
import Articale from "@/commponents/sections/blogs/blog/articale";
import BreadBar from "@/commponents/sections/blogs/blog/bread.bar.nav";
import { useMainContext } from "@/lib/context/main.context";
export default function ArticalePage({ article }) {
  const { setCurrentNav, setCurrentSubNav } = useMainContext();

  useEffect(() => {
    setCurrentNav("");
    setCurrentSubNav("");
  }, []);

  return (
    <div className="relative w-full py-[0svh] gap-[5svh] flex items-center flex-col h-auto min-h-[90svh] mt-[10svh] bg-white">
      {/*bar  */}

      <BreadBar article={article} />

      {/*skiliton loader  */}
      <SkilitonLouder article={article} />

      {/*article data */}
      {article && <Articale article={article} />}
    </div>
  );
}

/*<div className="float-left w-1/2 h-[50svh] bg-amber-500">Left</div>

      <div className="w-[100%] bg-red-400 min-h-full"></div> */
