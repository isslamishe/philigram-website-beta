"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Decouvrir from "@/commponents/layout/dcouvrir.jsx";
import { useMainContext } from "@/lib/context/main.context";
import { t } from "@/lib/i18n/translation";

export default function histoireSecios() {
  const { setCurrentNav, language } = useMainContext();

  const epsodes = [
    {
      id: "episode1",
      titel: t("histoire.histoiresections.episode1.title", language),
      description: [
        t("histoire.histoiresections.episode1.paragraph1", language),
        t("histoire.histoiresections.episode1.paragraph2", language),
      ],
      image: "/history/sections/section1-img.png",
    },
    {
      id: "episode2",
      titel: t("histoire.histoiresections.episode2.title", language),
      description: [
        t("histoire.histoiresections.episode2.paragraph1", language),
        t("histoire.histoiresections.episode2.paragraph2", language),
      ],
      image: "/history/sections/section2-img.png",
    },
    {
      id: "episode3",
      titel: t("histoire.histoiresections.episode3.title", language),
      description: [
        t("histoire.histoiresections.episode3.paragraph1", language),
        t("histoire.histoiresections.episode3.paragraph2", language),
        t("histoire.histoiresections.episode3.paragraph3", language),
      ],
      image: "/history/sections/section3-img.png",
    },
    {
      id: "episode4",
      titel: t("histoire.histoiresections.episode4.title", language),
      description: [
        t("histoire.histoiresections.episode4.paragraph1", language),
        t("histoire.histoiresections.episode4.paragraph2", language),
      ],
      image: "/history/sections/section4-img.png",
    },
    {
      id: "episode5",
      titel: t("histoire.histoiresections.episode5.title", language),
      description: [
        t("histoire.histoiresections.episode5.paragraph1", language),
        t("histoire.histoiresections.episode5.paragraph2", language),
        t("histoire.histoiresections.episode5.paragraph3", language),
      ],
      image: "/history/sections/section5-img.png",
    },
  ];

  return (
    <div
      className={`flex flex-col   h-auto bg-no-repeat  overflow-hidden  justify-center items-end   gap-0  bg-contain bg-top relative w-screen  `}
    >
      {/*bg image */}
      <div className="absolute opacity-70 brightness-12 top-0 w-full h-full z-5">
        <Image fill alt="" src="/history/main-bg.jpg" className="object-fill" />
      </div>

      {/*bg black filter */}
      <div
        className={`flex z-20 absolute top-0   h-[3vh] w-full flex-col bg-linear-to-b from-black/50  to-transparent  bg-no-repeat   gap-0  bg-cover bg-center     `}
      />

      {/* story sections */}
      {epsodes.map((epsode, idx) => (
        <div
          key={epsode.id}
          className={`w-screen relative pt-[5vh]  flex justify-start items-center z-10 h-screen ${idx % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
        >
          <div className=" w-[100%] lg:w-[60%] gap-[2vh] flex flex-col justify-start items-center  h-[90%]">
            <div className="relative flex justify-center  flex-col">
              <span className=" font-serif72 text-center text-[clamp(1rem,10vw,1.3rem)] md:text-[clamp(1rem,5vw,2rem)] lg:text-[clamp(1rem,5vw,2.2rem)] 3xl:text-[clamp(1rem,10vw,5rem)]!">
                {epsode.titel}
              </span>

              <div className="relative mx-auto  w-[40vw] md:w-[20vw] h-[2vh] md:h-[1vw]">
                <Image alt="" fill src={"/Title Devider.png"} />
              </div>
            </div>
            <div className=" w-[95%] md:w-[90%] font-light flex  flex-col justify-center gap-[2%] items-center text-center text-[clamp(1rem,5vw,1.2rem)] lg:text-[clamp(1rem,5vw,1.3rem)] 3xl:text-[clamp(1rem,5vw,2.2rem)]!">
              {epsode.description.map((p, pIdx) => (
                <span key={pIdx} className="  ">
                  {p}
                </span>
              ))}
            </div>
          </div>

          <div
            className={` w-[100%] md:w-[65vw] top-1/2 mt- brightness-50 opacity-70 scale-120 -translate-y-1/2 absolute h-[90vh] md:h-[110vh] ${idx % 2 ? "sm:-left-[10%] left-0 " : " right-0 md:-right-[5%]"}`}
          >
            <Image className="z-10" alt="" fill src={epsode.image} />
          </div>
        </div>
      ))}

      <div
        className={`w-screen relative  mt-[10vh] md:mt-0  flex justify-start items-center z-10 h-screen `}
      >
        <div className="w-full gap-[2vh] flex flex-col justify-start items-center  h-[90%]">
          <div className="relative flex justify-center  flex-col">
            <span className=" font-serif72 text-center text-[clamp(1rem,10vw,1.3rem)] md:text-[clamp(1rem,5vw,2rem)] lg:text-[clamp(1rem,5vw,2.2rem)] 3xl:text-[clamp(1rem,5vw,5rem)]!">
              {t("histoire.histoiresections.oneWorld.title", language)}
            </span>

            <div className="relative mx-auto  w-[40vw] md:w-[20vw] h-[2vh] md:h-[1vw]">
              <Image alt="" fill src={"/Title Devider.png"} />
            </div>
          </div>
          <div className="  w-[90%] font-light flex  flex-col justify-center gap-[2%] items-center text-center text-[clamp(1rem,5vw,1.2rem)] lg:text-[clamp(1rem,5vw,1.3rem)] 3xl:text-[clamp(1rem,5vw,2.2rem)]!">
            <span>
              {t("histoire.histoiresections.oneWorld.paragraph", language)}
            </span>
          </div>
        </div>

        <div
          className={`w-[80%] left-1/2 -translate-x-1/2 bottom-0 translate-y-[10%] brightness-50 opacity-70 scale-120  absolute h-[90vh]`}
        >
          <Image
            className="z-10"
            alt=""
            fill
            src={"/history/sections/s4.png"}
          />
        </div>
      </div>

      <div
        className={`w-screen relative  flex justify-start items-center z-10 h-auto min-h-screen `}
      >
        <div className="w-full gap-[2vh] flex flex-col justify-start items-center  h-[90%]">
          <div className="relative flex justify-center  flex-col">
            <span className=" font-serif72 text-center text-[clamp(1rem,5vw,2.3rem)] 3xl:text-[clamp(1rem,5vw,5rem)]!">
              {t("histoire.histoiresections.awakening.title", language)}
            </span>

            <div className="relative mx-auto  w-[40vw] md:w-[20vw] h-[2vh] md:h-[1vw]">
              <Image alt="" fill src={"/Title Devider.png"} />
            </div>
          </div>
          <div className="  w-[90%] font-light flex  flex-col justify-center gap-[2%] items-center text-center text-[clamp(1rem,5vw,1.2rem)] lg:text-[clamp(1rem,5vw,1.6rem)] 3xl:text-[clamp(1rem,5vw,2.2rem)]!">
            <span>
              {t("histoire.histoiresections.awakening.paragraph", language)}
            </span>
          </div>
        </div>
      </div>

      <Decouvrir
        type={"history"}
        className={
          "bg-linear-to-b from-transparent border-white/0 border mb-0 to-black"
        }
      />

      <div className="w-full z-20 bg-black h-[10vh]" />
    </div>
  );
}
