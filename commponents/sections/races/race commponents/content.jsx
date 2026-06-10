"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Hero from "@/commponents/sections/races/hero.jsx";
import ShowCase from "@/commponents/sections/races/races.showcase.jsx";
import { useMainContext } from "@/context/main.context";

export default function Races({ content }) {
  const { setCurrentNav } = useMainContext();

  return (
    <div className="flex flex-col overflow-hidden pt-[10vh] justify-center items-center gap-[10vh]  bg-black  bg-no-repeat bg-cover bg-center relative w-screen min-h-screen">
      {content.map((c) => (
        <div
          key={c.title}
          className="w-[60%] gap-[6vh]   flex flex-col items-center justify-center min-h-[70vh] h-auto md:min-h-[75vh] z-30 "
        >
          <div className="font-serif72  h-[7vh] flex justify-center flex-col items-center  relative text-[clamp(0.9rem,3vw,1.9rem)]">
            <span>{c.title}</span>
            <div className="relative  mx-auto h-1/4 w-2/3 ">
              {" "}
              <Image
                className="bottom-0"
                fill
                alt=""
                src={"/Title Devider.png"}
              />
            </div>
          </div>
          <div
            className={` relative flex w-full  flex-col text-[clamp(0.9rem,2vw,1.3rem)] justify-center items-center text-center ${c.paragraphs ? "gap-[1vh]" : "gap-[3vh]"}`}
          >
            {c.paragraphs &&
              c.paragraphs.map((p) => (
                <span className="text-white/65" key={p}>
                  {p}
                </span>
              ))}

            {c.sections &&
              c.sections.map((p) => (
                <span
                  key={p.paragraphs}
                  className="flex justify-center gap-[1vh] items-center flex-col"
                >
                  <span className="font-semibold ">{p.subtitle}</span>
                  <span className="font-light  leading-relaxed ">
                    {p.paragraphs}
                  </span>
                </span>
              ))}

            {c.sections_type2 &&
              c.sections_type2.map((p) => (
                <span
                  key={p.paragraphs}
                  className="flex justify-center gap-[0vh] items-center flex-col"
                >
                  <span className="font-extralight ">{p.subtitle}</span>
                  <span className="font-semibold w-[100%] leading-relaxed ">
                    {p.paragraphs}
                  </span>
                  {p.paragraphs_type2 && (
                    <span className="font-extralight w-[100%] leading-relaxed ">
                      {p.paragraphs_type2}
                    </span>
                  )}
                </span>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
