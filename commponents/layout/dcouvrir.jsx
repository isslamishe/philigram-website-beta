"use client";
import { icons } from "lucide-react";
import Image from "next/image";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Decouvrir({ className, type }) {
  const discoversTypes = {
    races: [
      {
        content: "Le Monde a Changé à Jamais",
        hoverContent: "Explore",
        image: "/history/banner.png",
        direction: "/histoire",
      },
      {
        content: "Les Lois du Monde",
        hoverContent: "Explore",
        image: "/home/Gallery.png",
        direction: "/",
      },
    ],

    history: [
      {
        content: "LES PEUPLES D'ASCENDIA",
        hoverContent: "Explore",
        image: "/races/Hero-bg.png",
        direction: "/races",
      },
      {
        content: "Les Lois du Monde",
        hoverContent: "Explore",
        image: "/home/Gallery.png",
        direction: "/",
      },
    ],
  };

  const discovers = discoversTypes[type];

  return (
    <div
      className={` flex flex-col z-20  gap-0 pt-[10vh]   mt-[10vh] bg-no-repeat border-[0.5px]  border-b-0 bg-cover bg-center relative overflow-hidden  w-screen h-screen lg:h-[75vh]  items-start   justify-start ${className}`}
    >
      {/*titel */}
      <div className="w-full relative z-30 h-[10vh]">
        <div className=" w-[30%] lg:w-[40%] left-0 absolute h-[50%] ">
          <Image fill alt="" src={"/Mask group.svg"} />
        </div>

        <div className="w-[50%] font-light text-[clamp(0.8rem,2vw,1.3rem)]  md:text-[clamp(1rem,3vw,1.8rem)] font-serif72 text-primary flex justify-center items-center left-1/2 -translate-x-1/2 absolute h-[50%] ">
          <span className="uppercase text-center">Découvrir Ascendia</span>
        </div>

        <div className="w-[30%] lg:w-[40%] right-0 rotate-180 absolute h-[50%] ">
          <Image fill alt="" src={"/Mask group.svg"} />
        </div>
      </div>

      <div className="w-full flex gap-[3%] justify-center items-center flex-col lg:flex-row h-screen lg:h-[50vh] ">
        {discovers.map((d) => (
          <Link
            href={d.direction}
            key={d.content}
            className="h-full discover flex relative justify-center items-end border-2 border-primary w-[85%] md:w-[60%] lg:w-[40%]"
          >
            {" "}
            <Image className="z-10" fill alt="" src={d.image} />{" "}
            <div className=" flex content border-t-2 bg-black/80 z-20 border-primary flex-col justify-center relative overflow-hidden items-center h-auto  w-full duration-500 delay-100 transition-all  ">
              <div className=" flex flex-col absolute top-0 justify-center items-center h-auto  w-full ">
                <span className="uppercase text-center  text-[clamp(1rem,2vw,1.5rem)] font-serif72 overflow-hidden flex justify-center items-center  transition-all duration-500  w-full text-primary h-[15vh]">
                  {d.content}
                </span>
                <div className="h-[0.5px] bg-primary w-[70%]" />
                <span className=" text-center text-[clamp(1rem,2vw,1.2rem)] font-serif72 overflow-hidden flex justify-center items-center  transition-all duration-500  w-full text-primary h-[10vh]">
                  {d.hoverContent}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
