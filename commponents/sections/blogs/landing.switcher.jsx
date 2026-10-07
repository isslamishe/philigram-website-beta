"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { t } from "@/lib/i18n/translation";
import { useMainContext } from "@/lib/context/main.context";
import ArticleDots from "@/commponents/layout/dots";

export default function Switcher({ articles }) {
  const { language } = useMainContext();

  const [currentArtical, setCurrentArtical] = useState(0);

  const isRTL = language === "ar";

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, direction: "ltr", align: "start" },
    [WheelGesturesPlugin()],
  );

  // Buttons / dots
  const scrollToArticle = (index) => emblaApi?.scrollTo(index);
  const scrollNext = () => emblaApi?.scrollNext();
  const scrollPrevious = () => emblaApi?.scrollPrev();

  // Keep dots in sync (swipe / drag / wheel / buttons all trigger "select")
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setCurrentArtical(emblaApi.selectedScrollSnap());

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <div
      dir="ltr"
      className="flex flex-col bg-white gap-0 bg-no-repeat overflow-hidden bg-cover bg-center relative w-screen h-svh"
    >
      {/* Carousel */}
      <div className="relative z-30 w-screen h-full">
        {/* Previous */}
        <button
          onClick={scrollPrevious}
          className="absolute hidden md:flex cursor-pointer left-[3%] top-1/2 -translate-y-1/2 z-40 w-[8vh] md:w-[10vh] aspect-square bg-[#D7D8DA]/60 font-bold items-center justify-center"
        >
          <div className="relative w-1/3 scale-115 h-1/3">
            <Image unoptimized fill alt="Previous" src="/icons8-left-50.png" />
          </div>
        </button>

        {/* Next */}
        <button
          onClick={scrollNext}
          className="absolute hidden md:flex right-[3%] cursor-pointer top-1/2 -translate-y-1/2 z-40 w-[8vh] md:w-[10vh] aspect-square bg-[#D7D8DA]/60 font-bold items-center justify-center"
        >
          <div className="relative w-1/3 scale-115 h-1/3 rotate-180">
            <Image unoptimized fill alt="Next" src="/icons8-left-50.png" />
          </div>
        </button>

        {/* Viewport — Embla ref goes here */}
        <div
          ref={emblaRef}
          dir="ltr"
          className="h-svh w-screen overflow-hidden cursor-grab active:cursor-grabbing select-none"
        >
          {/* Container */}
          <div className="flex h-full">
            {articles.map((blog, index) => (
              <div
                key={index}
                className="relative flex h-svh min-w-0 flex-[0_0_100%] justify-center items-end overflow-hidden"
              >
                {/* blog banner */}
                <Image
                  unoptimized
                  draggable={false}
                  src={blog.image}
                  className="object-cover z-20 object-center"
                  fill
                  alt=""
                />
                {/* filter */}
                <div className="absolute h-full w-full bg-black/50 z-20" />

                {/* Text content */}
                <div
                  dir={isRTL ? "rtl" : "ltr"}
                  className="w-9/10 md:w-7/10 lg:w-6/10 xl:w-5/10 text-start md:text-center h-1/2 z-30 flex gap-[3%] md:gap-[1%] items-start md:items-center flex-col"
                >
                  <span className="font-serif72 text-[clamp(0.9rem,4dvw,1rem)] md:text-[clamp(1rem,4dvw,1.3rem)] lg:text-[clamp(1rem,4dvw,1.5rem)]">
                    {blog.title}
                  </span>
                  <span className="font-serif72 text-[clamp(1rem,7dvw,2.5rem)] leading-none md:text-[clamp(1rem,4dvw,2rem)] lg:text-[clamp(1rem,4dvw,2.3rem)]">
                    {blog.subTitel}
                  </span>
                  <span className="lowercase text-[clamp(0.8rem,4dvw,1rem)] lg:text-[clamp(0.9rem,4dvw,1.1rem)]">
                    {blog.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dots */}
      <ArticleDots
        total={articles.length}
        current={currentArtical}
        onSelect={scrollToArticle}
      />
    </div>
  );
}
