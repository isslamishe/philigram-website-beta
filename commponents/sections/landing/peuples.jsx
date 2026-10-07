"use client";

import Image from "next/image";
import { useEffect, useRef, useCallback, useState } from "react";
import { t } from "@/lib/i18n/translation"; // adjust path to your json file
import { useMainContext } from "@/lib/context/main.context";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

export default function Peuples() {
  const { language } = useMainContext();

  const [currentPeuple, setCurrentPeuple] = useState(0);

  const containerRef = useRef(null);

  const isRTL = language === "ar";

  const Peuples = [
    {
      key: "varkhans",
      name: t("landing.peuples.varkhans.name", language),
      description: t("landing.peuples.varkhans.description", language),
      image: "/home/peuples images/varkhans.webp",
    },
    {
      key: "sylveride",
      name: t("landing.peuples.sylveride.name", language),
      description: t("landing.peuples.sylveride.description", language),
      image: "/home/peuples images/Sylvéride.webp",
    },
    {
      key: "luminels",
      name: t("landing.peuples.luminels.name", language),
      description: t("landing.peuples.luminels.description", language),
      image: "/home/peuples images/Luminels.webp",
    },
    {
      key: "aetherin",
      name: t("landing.peuples.aetherin.name", language),
      description: t("landing.peuples.aetherin.description", language),
      image: "/home/peuples images/Aetherïn.webp",
    },
    {
      key: "brumecrocs",
      name: t("landing.peuples.brumecrocs.name", language),
      description: t("landing.peuples.brumecrocs.description", language),
      image: "/home/peuples images/brumecrocs.webp",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, direction: "ltr", align: "center" },
    [WheelGesturesPlugin()],
  );

  // Buttons / dots
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollPrevious = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollToArticle = useCallback(
    (index) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  // Keep dots in sync (swipe / drag / wheel / buttons all trigger "select")
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setCurrentPeuple(emblaApi.selectedScrollSnap());

    onSelect(); // set initial value
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="flex flex-col  bg-white gap-0 bg-no-repeat bg-cover bg-center relative w-screen min-h-screen">
      <div className="absolute hidden bottom-0 left-1/2 md:flex  -translate-x-1/2 w-[100%] z-30 h-[100%] ">
        <Image
          unoptimized
          fill
          className="object-bottom object-cover"
          alt=""
          src="/home/race-bg.webp"
        />
      </div>

      <div className="absolute flex md:hidden  bottom-0 left-1/2  -translate-x-1/2 w-[100%] z-30 h-[100%] ">
        <Image
          unoptimized
          fill
          className="object-center object-cover"
          alt=""
          src="/races/Bg-races-phone.png"
        />
      </div>

      {/* Header */}
      <div
        dir={isRTL ? "rtl" : "ltr"}
        className="h-[20vh] w-full mt-[3%] flex flex-col justify-center items-center z-30"
      >
        <span className="text-[clamp(1rem,7vw,4.5rem)] md:text-[clamp(1rem,5vw,3.5rem)] text-center font-serif72 text-white">
          {t("landing.peuples.title", language)}
        </span>

        <span className="text-[clamp(1rem,2vw,1.3rem)] w-[90%] md:w-[55%] text-center font-light text-white">
          {t("landing.peuples.subtitle", language)}
        </span>
      </div>

      {/* Carousel */}
      <div className="relative z-30 w-screen h-screen">
        {/* Previous — stays physically on the left regardless of language */}
        <button
          onClick={scrollPrevious}
          className="absolute cursor-pointer left-[3%] top-1/2 -translate-y-1/2 z-40 w-[8vh] md:w-[10vh] aspect-square bg-[#989898]/60 font-bold flex items-center justify-center"
        >
          <div className="relative w-1/3 scale-115 h-1/3">
            <Image unoptimized fill alt="Previous" src="/icons8-left-50.png" />
          </div>
        </button>

        {/* Next — stays physically on the right regardless of language */}
        <button
          onClick={scrollNext}
          className="absolute right-[3%] cursor-pointer top-1/2 -translate-y-1/2 z-40 w-[8vh] md:w-[10vh] aspect-square bg-[#989898]/60 font-bold  flex items-center justify-center"
        >
          <div className="relative w-1/3 scale-115 h-1/3 rotate-180">
            <Image unoptimized fill alt="Next" src="/icons8-left-50.png" />
          </div>
        </button>

        {/* Sections Container — locked to LTR so scrollLeft/scrollTo math never flips across browsers */}
        {/* Viewport */}
        <div
          ref={emblaRef}
          dir="ltr"
          className="h-screen w-screen overflow-hidden cursor-grab active:cursor-grabbing select-none"
        >
          {/* Container */}
          <div className="flex h-full">
            {Peuples.map((peuple, index) => (
              <div
                key={index}
                className="relative flex h-screen min-w-0 flex-[0_0_100%] flex-col items-center justify-end overflow-hidden pb-[10%]"
              >
                <span
                  dir={isRTL ? "rtl" : "ltr"}
                  className="uppercase z-30 font-serif72 text-[clamp(1rem,7vw,3.5rem)] md:text-[clamp(1rem,3vw,3.5rem)] font-bold text-white"
                >
                  {peuple.name}
                </span>

                <span
                  dir={isRTL ? "rtl" : "ltr"}
                  className="w-[90%] md:w-1/2 text-center z-30 text-[clamp(1rem,2vw,1.8rem)] font-light text-white"
                >
                  {peuple.description}
                </span>

                <div className="absolute inset-x-0 z-5 h-full w-full -translate-x-1/2 left-1/2 -bottom-[15%]">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent from-0% to-100% md:to-70% to-[#19275E]/50 z-10" />
                  <Image
                    unoptimized
                    fill
                    draggable={false}
                    src={peuple.image}
                    alt={peuple.name}
                    className="object-contain scale-105 inset-0 absolute lg:scale-115"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-0 z-40 flex h-[5vh] md:h-[10vh] w-full items-center justify-center gap-2">
        {Peuples.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToArticle(index)}
            className="relative aspect-square w-3 cursor-pointer rounded-full border-2 border-white/70"
          >
            <div
              className={`absolute left-1/2 top-1/2 aspect-square w-1.5 md:h-2.5 md:w-2.5
        -translate-x-1/2 -translate-y-1/2 rounded-full
        ${currentPeuple === index ? "bg-white/70" : ""}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
