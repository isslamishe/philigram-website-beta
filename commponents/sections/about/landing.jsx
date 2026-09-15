"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useMainContext } from "@/lib/context/main.context";

export default function landing() {
  const { setCurrentNav, setCurrentSubNav } = useMainContext();

  return (
    <div className="flex flex-row justify-center items-center bg-white gap-0 mt-[10dvh]  relative w-screen h-[90dvh] ">
      <div className="flex z-20 flex-col justify-between items-center w-full  lg:w-[48%]  h-[90%]">
        <div className=" uppercase w-[95%] gap-[2%] flex justify-start flex-row ">
          <span className="font-serif72 font-bold md:text-[clamp(1.1rem,3vw,1.1rem)] text-[clamp(0.8rem,3vw,1rem)] text-primary">
            À propos de
          </span>
          <div className="relative w-2/4  h-[100%]">
            <Image
              src={"/Mask group.svg"}
              className="rotate-180 scale-100 object-contain object-right"
              alt=""
              fill
            />
          </div>
        </div>

        <div className=" uppercase w-[95%]  flex flex-row ">
          <span className="font-serif72 leading-none font-extrabold text-[clamp(3rem,3vw,4rem)] md:text-[clamp(7rem,3vw,9rem)]  lg:text-[clamp(5rem,3vw,7rem)] xl:text-[clamp(7.5rem,3vw,9rem)] text-background/90">
            {" "}
            PHILIGRAM
          </span>
        </div>

        <div className=" uppercase w-[95%] pt-[5%] pb-[3%]  flex flex-row ">
          <span className="font-serif72 leading-none font-bold text-[clamp(1.2rem,3vw,1.7rem)] md:text-[clamp(1.7rem,3vw,2rem)] lg:text-[clamp(1.5rem,3vw,1.7rem)] xl:text-[clamp(1.5rem,3vw,2rem)] text-primary">
            {" "}
            L’innovation au service de nouvelles expériences
          </span>
        </div>

        <div className="  w-[95%] my-[5%] flex flex-col gap-[10%] ">
          <span className=" leading-tight xl:text-[clamp(1rem,3vw,1.2rem)] lg:text-[clamp(0.8rem,3vw,1rem)] text-[clamp(0.9rem,3vw,1.2rem)] text-background">
            Fondée en 2011 et basée à Reims, PHILIGRAM est une entreprise
            spécialisée dans les services et le conseil en informatique. Nous
            accompagnons les projets technologiques à travers le développement
            de solutions logicielles, d’applications et de technologies adaptées
            aux besoins de nos clients.
          </span>
          <span className=" leading-tight xl:text-[clamp(1rem,3vw,1.2rem)] lg:text-[clamp(0.8rem,3vw,1rem)] text-[clamp(0.9rem,3vw,1.2rem)] text-background">
            Notre expertise s’étend du développement logiciel et applicatif aux
            nouvelles technologies, avec une volonté constante d’explorer de
            nouvelles façons d’utiliser la technologie pour créer des
            expériences utiles, innovantes et engageantes.
          </span>
        </div>

        <div className="  w-[95%] py-[3%] items-center flex flex-row gap-[10%] ">
          <Link
            className="bg-[#DFB96C] p-[1%] border-2 border-white/50 outline-[#DFB96C] outline-2 outline-y-3 text-[clamp(0.8rem,2dvw,1rem)] md:text-[clamp(1.1rem,2dvw,1.2rem)] text-white "
            href={"/"}
          >
            Découvrez Ascendia
          </Link>
          <Link
            href={"/"}
            className="text-black border-b text-[clamp(0.8rem,2dvw,1rem)] md:text-[clamp(1.1rem,2dvw,1.2rem)]"
          >
            Je me préinscris
          </Link>
        </div>
      </div>

      <div className="flex  z-10 flex-col lg:overflow-visible overflow-hidden  lg:relative absolute items-center  w-full  lg:w-[48%] h-[90%] ">
        <Image
          src={"/about/philigram_logo (1) 1.svg"}
          className="object-center opacity-50  lg:opacity-70 scale-105 object-contain"
          fill
          alt=""
        />
      </div>
    </div>
  );
}
