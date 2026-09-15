"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { t } from "@/lib/i18n/translation"; // adjust path to your json file
import { useMainContext } from "@/lib/context/main.context";

export default function Switcher() {
  const { language } = useMainContext(); // replace with your actual languageuage source

  const [currentPeuple, setCurrentPeuple] = useState(0);

  const containerRef = useRef(null);

  const articles = [
    {
      id: 1,
      title: "PRÉ-INSCRIPTIONS OUVERTES",
      subTitel: "L’aventure commence maintenant.",
      description:
        "LES PRÉ-INSCRIPTIONS POUR ASCENDIA RISE SONT OFFICIELLEMENT OUVERTES. REJOIGNEZ LES PREMIERS AVENTURIERS ET PRÉPAREZ-VOUS À DÉCOUVRIR UN MONDE OÙ CHAQUE DÉPLACEMENT PEUT DEVENIR UNE NOUVELLE AVENTURE.",
      category: "ANNONCE",
      date: "20 AOÛT 2026",
      image: "/inscerption/Bg.png",
      link: "/pre-inscriptions",
      buttonText: "DÉCOUVRIR",
    },

    {
      id: 2,
      title: "LE MONDE D'ASCENDIA",
      subTitel: "L’aventure commence maintenant.",
      description:
        "DÉCOUVREZ LES FONDATIONS DU MONDE D'ASCENDIA RISE ET COMMENT L'EXPLORATION DU MONDE RÉEL DEVIENT LE CŒUR DE VOTRE AVENTURE.",
      category: "PRÉSENTATION",
      date: "20 AOÛT 2026",
      image: "/home/Gallery.png",
      link: "/le-monde-d-ascendia",
      buttonText: "LIRE L'ARTICLE",
    },

    {
      id: 3,
      title: "LES PREMIÈRES DÉCOUVERTES",
      subTitel: "L’aventure commence maintenant.",
      description:
        "DANS ASCENDIA RISE, LE MONDE QUI VOUS ENTOURE DEVIENT VOTRE TERRAIN D'EXPLORATION. DÉCOUVREZ COMMENT VOS DÉPLACEMENTS PEUVENT VOUS MENER VERS DE NOUVELLES RESSOURCES, RENCONTRES ET DÉCOUVERTES.",
      category: "GAMEPLAY",
      date: "20 AOÛT 2026",
      image: "/history/banner.png",
      link: "/premieres-decouvertes",
      buttonText: "DÉCOUVRIR",
    },

    {
      id: 4,
      title: "PRÉ-INSCRIPTIONS OUVERTES",
      subTitel: "L’aventure commence maintenant.",
      description:
        "LES PRÉ-INSCRIPTIONS POUR ASCENDIA RISE SONT OFFICIELLEMENT OUVERTES. REJOIGNEZ LES PREMIERS AVENTURIERS ET PRÉPAREZ-VOUS À DÉCOUVRIR UN MONDE OÙ CHAQUE DÉPLACEMENT PEUT DEVENIR UNE NOUVELLE AVENTURE.",
      category: "ANNONCE",
      date: "20 AOÛT 2026",
      image: "/inscerption/Bg.png",
      link: "/pre-inscriptions",
      buttonText: "DÉCOUVRIR",
    },
  ];

  /*  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    container.scrollTo({
      left: currentPeuple * container.clientWidth,
      behavior: "smooth",
    });
  }, [currentPeuple]);*/

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const handleScroll = () => {
      const index = Math.round(container.scrollLeft / container.clientWidth);

      setCurrentPeuple(index);
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToArticle = (index) => {
    const container = containerRef.current;

    if (!container) return;

    container.scrollTo({
      left: index * container.clientWidth,
      behavior: "smooth",
    });
  };

  const scrollNext = () => {
    const container = containerRef.current;

    if (!container) return;

    container.scrollBy({
      left: container.clientWidth,
      behavior: "smooth",
    });
  };

  const scrollPrevious = () => {
    const container = containerRef.current;

    if (!container) return;

    container.scrollBy({
      left: -container.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col  bg-white gap-0 bg-no-repeat  overflow-hidden bg-cover bg-center relative w-screen h-svh">
      {/* Carousel */}
      <div className="relative z-30  w-screen h-full">
        {/* Previous */}
        <button
          onClick={scrollPrevious}
          className="absolute hidden md:flex cursor-pointer left-[3%] top-1/2 -translate-y-1/2 z-40 w-[8vh] md:w-[10vh] aspect-square bg-[#D7D8DA]/60 font-bold  items-center justify-center"
        >
          <div className="relative w-1/3 scale-115 h-1/3">
            <Image fill alt="Previous" src="/icons8-left-50.png" />
          </div>
        </button>

        {/* Next */}
        <button
          onClick={scrollNext}
          className="absolute hidden md:flex right-[3%] cursor-pointer top-1/2 -translate-y-1/2 z-40 w-[8vh] md:w-[10vh] aspect-square bg-[#D7D8DA]/60 font-bold   items-center justify-center"
        >
          <div className="relative w-1/3 scale-115 h-1/3 rotate-180">
            <Image fill alt="Next" src="/icons8-left-50.png" />
          </div>
        </button>

        {/* Sections Container */}
        <div
          ref={containerRef}
          className="flex h-svh w-screen overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-none"
        >
          {articles.map((blog, index) => (
            <div
              key={index}
              className="relative flex h-svh w-screen shrink-0 snap-start justify-center items-end overflow-hidden"
            >
              {/*blog banner */}
              <Image
                src={blog.image}
                className="object-cover z-20 object-center"
                fill
                alt=""
              />
              {/*filter */}
              <div className="absolute h-full w-full bg-black/50 z-20" />

              <div className=" w-9/10 md:w-7/10 lg:w-6/10 xl:w-5/10 text-start md:text-center h-1/2 z-30 flex gap-[3%] md:gap-[1%] items-start md:items-center flex-col">
                <span className="font-serif72 text-[clamp(0.9rem,4dvw,1rem)] md:text-[clamp(1rem,4dvw,1.3rem)] lg:text-[clamp(1rem,4dvw,1.5rem)]">
                  {blog.title}
                </span>
                <span className=" font-serif72 text-[clamp(1rem,7dvw,2.5rem)] leading-none md:text-[clamp(1rem,4dvw,2rem)] lg:text-[clamp(1rem,4dvw,2.3rem)]">
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

      {/* Dots */}
      <div className="absolute bottom-0 z-40 flex h-[5vh] md:h-[10vh] w-full items-center justify-center gap-2">
        {articles.map((_, index) => (
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
