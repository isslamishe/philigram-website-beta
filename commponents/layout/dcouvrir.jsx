"use client";
import { icons } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useMainContext } from "@/lib/context/main.context";
import { t } from "@/lib/i18n/translation";

export default function Decouvrir({ className, type }) {
  const { language } = useMainContext();

  const discoversTypes = {
    races: [
      {
        id: "worldChanged",
        content: t("decouvrir.races.worldChanged.content", language),
        hoverContent: t("decouvrir.hoverContent", language),
        image: "/history/banner.png",
        direction: "/histoire",
      },
      {
        id: "worldLaws",
        content: t("decouvrir.races.worldLaws.content", language),
        hoverContent: t("decouvrir.hoverContent", language),
        image: "/home/Gallery.png",
        direction: "/gameplay",
      },
    ],

    history: [
      {
        id: "peoples",
        content: t("decouvrir.history.peoples.content", language),
        hoverContent: t("decouvrir.hoverContent", language),
        image: "/races/Hero-bg.png",
        direction: "/races",
      },
      {
        id: "worldLaws",
        content: t("decouvrir.history.worldLaws.content", language),
        hoverContent: t("decouvrir.hoverContent", language),
        image: "/home/Gallery.png",
        direction: "/gameplay",
      },
    ],
  };

  const discovers = discoversTypes[type];

  return (
    <div
      className={` flex flex-col bg-black  gap-0 pt-[20vh] z-30   mt-[0vh] bg-no-repeat border-[0.5px]  border-b-0 bg-cover bg-center relative overflow-hidden  w-screen h-auto lg:h-[75vh]  items-start   justify-start ${className}`}
    >
      {/*titel */}
      <div className="w-full relative z-30 h-[10vh]">
        <div className=" w-[30%] lg:w-[40%] left-0 absolute h-[50%] ">
          <Image fill alt="" src={"/Mask group.svg"} />
        </div>

        <div className="w-[50%] font-light text-[clamp(0.8rem,2vw,1.3rem)]  md:text-[clamp(1rem,3vw,1.8rem)] font-serif72 text-primary flex justify-center items-center left-1/2 -translate-x-1/2 absolute h-[50%] ">
          <span className="uppercase text-center">
            {t("decouvrir.title", language)}
          </span>
        </div>

        <div className="w-[30%] lg:w-[40%] right-0 rotate-180 absolute h-[50%] ">
          <Image fill alt="" src={"/Mask group.svg"} />
        </div>
      </div>

      <div className="w-full flex gap-[3%] justify-center items-center flex-col lg:flex-row h-screen lg:h-[50vh] ">
        {discovers.map((d) => (
          <Link
            href={d.direction}
            key={d.id}
            className="h-1/2 lg:h-full discover flex relative justify-center items-end border-2 border-primary w-[85%] md:w-[60%] lg:w-[40%]"
          >
            {" "}
            <Image
              className="z-10 object-cover object-center"
              fill
              alt=""
              src={d.image}
            />{" "}
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
