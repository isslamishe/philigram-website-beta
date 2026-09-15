"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { t } from "@/lib/i18n/translation"; // adjust path to your json file
import { useMainContext } from "@/lib/context/main.context";
import Link from "next/link";
import { motion } from "framer-motion";
export default function BlogsSection() {
  const { language } = useMainContext(); // replace with your actual languageuage source
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Toutes");
  const [selectedTopic, setSelectedTopic] = useState("Tous");

  const articles = [
    {
      id: 1,
      title: "PRÉ-INSCRIPTIONS OUVERTES",
      subTitel: "L’aventure commence maintenant.",
      description:
        "LES PRÉ-INSCRIPTIONS POUR ASCENDIA RISE SONT OFFICIELLEMENT OUVERTES. REJOIGNEZ LES PREMIERS AVENTURIERS ET PRÉPAREZ-VOUS À DÉCOUVRIR UN MONDE OÙ CHAQUE DÉPLACEMENT PEUT DEVENIR UNE NOUVELLE AVENTURE.",
      category: "Annonce",
      topic: ["Exploration"],
      createdAt: "2026-08-20T14:30:00.000Z",
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
      category: "Présentation",
      topic: ["Gameplay"],
      createdAt: "2026-08-18T10:15:00.000Z",
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
      category: "Gameplay",
      topic: ["Ascendia"],
      createdAt: "2025-08-12T16:45:00.000Z",
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
      category: "Annonce",
      topic: ["Actualités"],
      createdAt: "2016-08-05T09:00:00.000Z",
      image: "/inscerption/Bg.png",
      link: "/pre-inscriptions",
      buttonText: "DÉCOUVRIR",
    },
  ];

  function ShowAll() {
    setShowAll((prev) => !prev);
  }

  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
  );

  const filteredArticles = sortedArticles.filter((article) => {
    const categoryMatch =
      selectedCategory === "Toutes" || article.category === selectedCategory;

    const topicMatch =
      selectedTopic === "Tous" || article.topic?.includes(selectedTopic);

    return categoryMatch && topicMatch;
  });

  const displayedArticles = showAll
    ? filteredArticles
    : filteredArticles.slice(0, 3);

  const categories = [...new Set(articles.map((article) => article.category))];
  const topics = [...new Set(articles.flatMap((article) => article.topic))];

  return (
    <div className="flex flex-col-reverse md:flex-row py-[10svh]  bg- gap-0 bg-no-repeat justify-center items-center  md:items-start   bg-cover bg-center relative w-screen h-auto min-h-svh">
      {/*articals hightlights */}
      <div className=" w-9/10 overflow-hidden md:w-[65%] flex md:items-start items-center flex-col gap-5 h-auto min-h-svh bg ">
        <div className=" w-[95%] md:w-full h-auto flex flex-row items-center gap-[2%] text-[#A47B27] md:text-[clamp(1.h-4rem,5dvw,1.7rem)] lg:text-[clamp(2rem,5dvw,2.1rem)] font-serif72 font-semibold uppercase ">
          <div className="w-2 h-2 md:w-3 rotate-45 shrink-0 md:h-3 bg-[#C8AA6E] " />
          <span className="">Nouveautés</span>
        </div>

        <div className="min-h-[90svh] gap-[5svh] w-full md:items-start items-center lg:w-9/10 h-auto flex flex-col ">
          {displayedArticles.map((artical, index) => (
            <motion.div
              key={artical.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className=" w-[100%] md:w-[95%] lg:w-[85%] h-[30svh] md:h-[25svh] gap-5 border-b items-start border-[#C8AA6E] flex flex-row "
            >
              {/*artical image */}
              <div className=" w-[40svw] md:w-[10svw] aspect-square  md:self-start relative  shrink-0">
                <Image
                  fill
                  alt=""
                  src={artical.image}
                  className="object-center object-cover"
                />
              </div>

              {/*artical data */}
              <div className="w-auto p-0 h-9/10 flex flex-col justify-evenly  relative flex-1  shrink-0">
                <div className="w-full text-[clamp(0.7rem,4dvw,0.8rem)] md:text-[clamp(0.8rem,4dvw,1rem)] lg:text-[clamp(1rem,4dvw,1.2rem)] text-[#403E37] font-serif72 font-bold">
                  <span>{artical.title}</span>
                </div>

                <div className="w-full text-[clamp(0.5rem,2dvw,0.6rem)] md:text-[clamp(0.5rem,2dvw,0.6rem)] lg:text-[clamp(0.6rem,3dvw,0.8rem)] xl:text-[clamp(0.8rem,3dvw,0.9rem)] text-[#403E37] ">
                  <span>{artical.description}</span>
                </div>

                <div className="w-full text-[clamp(0.4rem,3dvw,0.5rem)]  md:text-[clamp(0.4rem,3dvw,0.6rem)]  lg:text-[clamp(0.8rem,3dvw,0.9rem)] flex flex-row justify-between text-[#403E37] ">
                  <div className="flex items-center justify-evenly gap-0.5  md:gap-2 flex-row ">
                    <div className="border border-[#C8AA6E] px-1 py-0.5 md:px-1.5 md:py-1 text-[#C8AA6E] uppercase md:text-[clamp(0.4rem,3dvw,0.6rem)] text-[clamp(0.35rem,3dvw,0.38rem)]  lg:text-[clamp(0.7rem,1dvw,0.8rem)]">
                      {artical.category}
                    </div>

                    <div className=" w-0.5 md:w-1 rotate-45 shrink-0 h-0.5 md:h-1 bg-[#C8AA6E] " />
                    <div className=" px-1.5 py-1  uppercase md:text-[clamp(0.4rem,3dvw,0.6rem)] text-[clamp(0.4rem,3dvw,0.45rem)] lg:text-[clamp(0.7rem,1dvw,0.8rem)]">
                      {new Date(artical.createdAt).toLocaleDateString("fr-FR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </div>
                  </div>{" "}
                  <Link
                    href={"/"}
                    className="text-[#C8AA6E] border-b  border-[#C8AA6E] leading-none text-center justify-center flex items-center p-0"
                  >
                    <span>DÉCOUVRIR</span>
                    <span>➜</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className=" w-[100%] md:w-[95%] lg:w-[85%] justify-center items-center flex">
          {" "}
          <button
            onClick={ShowAll}
            className=" w-8/10 cursor-pointer text-[#C8AA6E]  text-center text-[clamp(1rem,5dvw,1.3rem)]  md:text-[clamp(1.2rem,5dvw,1.5rem)] uppercase flex justify-center"
          >
            {showAll ? (
              <span className=" w-8/10">Voir less </span>
            ) : (
              <span className=" w-8/10 shrink-0">Voir plus</span>
            )}
          </button>
        </div>
      </div>

      {/*sticky sidebar */}

      <div className=" w-9/10 md:w-[25%]    min-h-[50svh]  top-[20%] flex  relative md:sticky border-[#969696]/50">
        <div className="  flex flex-col border-l-2 pb-[10svh] gap-[10svh]  w-full h-auto min-h-[50svh]">
          {/*catigories */}
          <div className="justify-center gap-[2svh] items-center flex-col flex   ">
            <div className="flex gap-[4%] border-b border-[#C8AA6E] text-[#A47B27] w-9/10 font-semibold text-[clamp(1rem,3dvw,1.3rem)] py-[2%]  items-center font-serif72  flex-row">
              <div className="w-2 rotate-45 shrink-0 h-2 bg-[#C8AA6E]" />{" "}
              <span>EXPLORER</span>
            </div>

            <div className="justify-center gap-[2svh] text-[#403E37] flex flex-col items-center w-[90%] h-auto">
              <div className="uppercase text-[clamp(1rem,3dvw,1.2rem)] font-semibold w-[90%]">
                Catégories
              </div>
              <div className="w-[80%] flex flex-col gap-[0.8rem]">
                <button
                  onClick={() => {
                    setSelectedCategory("Toutes");
                    setSelectedTopic("Tous");
                    setShowAll(false);
                  }}
                  className={`w-full cursor-pointer flex flex-row items-center gap-2 ${
                    selectedCategory === "Toutes"
                      ? "text-[#A47B27] font-semibold"
                      : ""
                  }`}
                >
                  <div className="w-1 rotate-45 shrink-0 h-1 bg-[#C8AA6E]" />

                  <span className="border-b leading-none">
                    Toutes les actualités
                  </span>
                </button>

                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setShowAll(false);
                    }}
                    className={`w-full flex flex-row cursor-pointer items-center gap-2 ${
                      selectedCategory === category
                        ? "text-[#A47B27] font-semibold"
                        : ""
                    }`}
                  >
                    {" "}
                    <div className="w-1 rotate-45 shrink-0 h-1 bg-[#C8AA6E]" />{" "}
                    <span className="border-b leading-none">{category}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/*SUJETS */}
          <div className="justify-center gap-[2svh] items-center flex-col flex   ">
            <div className="flex gap-[4%] border-b border-[#C8AA6E] text-[#A47B27] w-9/10 font-semibold text-[clamp(1rem,3dvw,1.3rem)] py-[2%]  items-center font-serif72  flex-row">
              <div className="w-2 rotate-45 shrink-0 h-2 bg-[#C8AA6E]" />{" "}
              <span>SUJET</span>
            </div>

            <div className="justify-center gap-[2svh] text-[#403E37] flex flex-col items-center w-[90%] h-auto">
              <div className="w-[80%] flex flex-col gap-[0.8rem]">
                <button
                  onClick={() => {
                    setSelectedTopic("Tous");
                    setShowAll(false);
                  }}
                  className={`w-full cursor-pointer flex flex-row items-center gap-2 ${
                    selectedTopic === "Tous"
                      ? "text-[#A47B27] font-semibold"
                      : "text-[#C8AA6E]"
                  }`}
                >
                  <span className="border-b leading-none">
                    .# Toutes les sujets
                  </span>
                </button>
                {topics.map((topic) => (
                  <button
                    key={topic}
                    onClick={() => {
                      setSelectedTopic(topic);
                      setShowAll(false);
                    }}
                    className={`w-full flex flex-row cursor-pointer items-center gap-2 ${
                      selectedTopic === topic
                        ? "text-[#A47B27] font-semibold"
                        : "text-[#C8AA6E]"
                    }`}
                  >
                    <span className="border-b leading-none">.#{topic}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
