"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useMainContext } from "@/lib/context/main.context";
import { t } from "@/lib/i18n/translation";

export default function landing() {
  const { setCurrentNav, setCurrentSubNav, language } = useMainContext();

  const isRTL = language === "ar";

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className="flex flex-row justify-center items-center bg-white gap-0 mt-[10svh]  relative w-screen h-[90svh] "
    >
      <div className="flex z-20 flex-col justify-between items-center w-full  lg:w-[48%]  h-[90%]">
        <div className=" uppercase w-[95%] gap-[2%] flex justify-start flex-row ">
          <span className="font-serif72 font-bold md:text-[clamp(1.1rem,3vw,1.1rem)] text-[clamp(0.8rem,3vw,1rem)] text-primary">
            {t("about.landing.aboutLabel", language)}
          </span>
          <div className="relative w-2/4  h-[100%]">
            <Image
              unoptimized
              src={"/Mask group.svg"}
              className="rotate-180 scale-100 object-contain object-right"
              alt=""
              fill
            />
          </div>
        </div>

        <div className=" uppercase w-[95%]  flex flex-row ">
          <span className="font-serif72 leading-none font-extrabold text-[clamp(3rem,2vw,4rem)] md:text-[clamp(4rem,4vw,9rem)]  lg:text-[clamp(5rem,3vw,7rem)] xl:text-[clamp(7.5rem,3vw,9rem)] text-background/90">
            {" "}
            {t("about.landing.brand", language)}
          </span>
        </div>

        <div className=" uppercase w-[95%] pt-[3%] lg:pt-[5%] pb-[0%]  flex flex-row ">
          <span className="font-serif72 leading-none font-bold text-[clamp(1.2rem,3vw,1.7rem)] md:text-[clamp(1.5rem,3vw,2rem)] lg:text-[clamp(1.5rem,3vw,1.7rem)] xl:text-[clamp(1.5rem,3vw,2rem)] text-primary">
            {" "}
            {t("about.landing.tagline", language)}
          </span>
        </div>

        <div className="  w-[95%] my-[5%] flex flex-col gap-[10%] ">
          <span className=" leading-tight xl:text-[clamp(1rem,3vw,1.2rem)] lg:text-[clamp(0.8rem,3vw,1rem)] text-[clamp(0.9rem,3vw,1rem)] text-background">
            {t("about.landing.paragraph1", language)}
          </span>
          <span className=" leading-tight  xl:text-[clamp(1rem,3vw,1.2rem)] lg:text-[clamp(0.8rem,3vw,1rem)] text-[clamp(0.9rem,3vw,1rem)] text-background">
            {t("about.landing.paragraph2", language)}
          </span>
        </div>

        <div className="  w-[95%] py-[3%] items-center flex flex-row gap-[10%] ">
          <Link
            className="bg-[#DFB96C] p-[1%] border-2 border-white/50 outline-[#DFB96C] outline-2 outline-y-3 text-[clamp(0.8rem,2dvw,1rem)] md:text-[clamp(1.1rem,2dvw,1.2rem)] text-white "
            href={"/"}
          >
            {t("about.landing.discoverBtn", language)}
          </Link>
          <Link
            href={"/inscription"}
            className="text-black border-b text-[clamp(0.8rem,2dvw,1rem)] md:text-[clamp(1.1rem,2dvw,1.2rem)]"
          >
            {t("about.landing.preRegisterLink", language)}
          </Link>
        </div>
      </div>

      <div className="flex  z-10 flex-col lg:overflow-visible overflow-hidden  lg:relative absolute items-center  w-full  lg:w-[48%] h-[90%] ">
        <Image
          unoptimized
          src={"/about/philigram_logo (1) 1 (1).svg"}
          className="object-center opacity-50  lg:opacity-70 scale-105 object-contain"
          fill
          alt=""
        />
      </div>
    </div>
  );
}
