"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useMainContext } from "@/lib/context/main.context";

export default function Construire() {
  return (
    <div className="flex flex-col  justify-evenly items-end bg-white gap-0 overflow-hidden  relative w-screen h-[90svh] min-h-[90svh] ">
      <div className="absolute z-20 right-0 md:top-0 top-[25%] md:right-[25%] w-full h-full">
        <Image
          src={"/home/Gellery.webp"}
          className="object-center  object-cover "
          alt=""
          fill
        />
      </div>
      <div className=" bg-linear-to-t md:bg-linear-to-r right-0  md:right-[25%] w-full h-full absolute from-transparent from-0% md:from-50% to-white to-60% md:to-70% z-20" />

      <div className="z-40 w-[95%] md:w-[55%] text-center md:text-start h-8/10 relative bg-transparent md:bg-white ">
        <div className="text-[#B58523] my-[1%] text-[clamp(1rem,2dvw,1.4rem)] font-serif72 font-bold uppercase">
          <span>Construire l'avenir</span>
        </div>
        <div className="text-[#403E37] text-[clamp(1rem,2dvw,1.8rem)] font-serif72 font-semibold ">
          <span>Constuire Ascendia, ensemble</span>
        </div>
        <div className="text-[#403E37] my-[5%] text-[clamp(1rem,2dvw,1.6rem)]">
          <span>Ascendia Rise est actuellement en développement.</span>
        </div>
        <div className="text-[#403E37] my-[5%] text-[clamp(1rem,2dvw,1.6rem)] w-full md:w-[76%]">
          <span>
            Nous construisons progressivement un monde dans lequel la
            technologie, l'exploration réelle et la fantasy se rencontrent. Le
            projet évoluera au fil de son développement et de l'enrichissement
            de l'univers d'Ascendia.
          </span>
        </div>

        <div className="  w-[95%] py-[3%] justify-center md:justify-start items-center flex flex-col md:flex-row gap-[2rem] md:gap-[3%] ">
          <Link
            className="bg-[#DFB96C] p-[1%] border-2 border-white/50 outline-[#DFB96C] md:outline-2 outline-4 outline-y-3 text-[clamp(1.4rem,2dvw,1.5rem)] md:text-[clamp(1.1rem,2dvw,1.2rem)] text-white "
            href={"/"}
          >
            Découvrez Ascendia
          </Link>
          <Link
            href={"/"}
            className="text-[#403E37] border-b text-[clamp(1.2rem,2dvw,1.5rem)] md:text-[clamp(1.1rem,2dvw,1.2rem)]"
          >
            Je me préinscris
          </Link>
        </div>
      </div>
    </div>
  );
}
