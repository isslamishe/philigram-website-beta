"use client";

import { div } from "framer-motion/client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Content from "@/commponents/sections/blogs/blog/content";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Layers3, CalendarDays, Timer } from "lucide-react";
export default function Page() {
  const firstRef = useRef(null);
  const [firstHeight, setFirstHeight] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Toutes");

  const pathname = usePathname();

  const article = {
    id: 1,

    // Basic information
    title: "Pré-inscriptions ouvertes",
    subTitle: "L’aventure commence maintenant.",

    description:
      "LES PRÉ-INSCRIPTIONS POUR ASCENDIA RISE SONT OFFICIELLEMENT OUVERTES. REJOIGNEZ LES PREMIERS AVENTURIERS ET PRÉPAREZ-VOUS À DÉCOUVRIR UN MONDE OÙ CHAQUE DÉPLACEMENT PEUT DEVENIR UNE NOUVELLE AVENTURE.",

    category: "Annonce",
    topic: ["Exploration", "Actualités"],

    createdAt: "2026-08-20T14:30:00.000Z",

    // Images
    image: "/inscerption/Bg.png",

    // Article metadata
    author: {
      name: "Ascendia Rise",
      avatar: "/logo.png",
    },

    readingTime: "4 min",

    // Content of the article
    content: [
      {
        type: "paragraph",
        text: "L’aventure d’Ascendia Rise commence officiellement aujourd’hui. Les pré-inscriptions sont désormais ouvertes à tous ceux qui souhaitent faire partie des premiers aventuriers à découvrir cet univers.",
      },

      {
        type: "paragraph",
        text: "Ascendia Rise propose une nouvelle manière d’explorer le monde. Ici, vos déplacements ne sont pas simplement une façon de vous rendre d’un endroit à un autre : ils deviennent une véritable partie de votre aventure.",
      },

      {
        type: "heading",
        text: "REJOIGNEZ LES PREMIERS AVENTURIERS",
      },

      {
        type: "paragraph",
        text: "En vous pré-inscrivant dès maintenant, vous rejoignez la communauté des premiers joueurs et vous vous préparez à découvrir les premières fonctionnalités d’Ascendia Rise.",
      },

      {
        type: "paragraph",
        text: "Votre environnement devient progressivement un terrain d’exploration. Chaque déplacement peut vous permettre de découvrir de nouveaux lieux, de rencontrer d’autres aventuriers et de trouver des ressources inattendues.",
      },

      {
        type: "image",
        src: "/inscerption/Bg.png",
        alt: "Le monde d'Ascendia Rise",
      },

      {
        type: "heading",
        text: "UNE AVENTURE QUI COMMENCE AVEC VOUS",
      },

      {
        type: "paragraph",
        text: "Ascendia Rise est pensé autour d’une idée simple : transformer le monde qui vous entoure en terrain d’aventure. Votre progression dépendra de vos découvertes, de vos déplacements et des choix que vous ferez au cours de votre parcours.",
      },

      {
        type: "paragraph",
        text: "Les pré-inscriptions représentent la première étape de ce voyage. C’est l’occasion de rejoindre l’aventure avant son lancement et de suivre l’évolution du projet.",
      },

      {
        type: "heading",
        text: "PRÉPAREZ-VOUS À EXPLORER",
      },

      {
        type: "paragraph",
        text: "Le monde d’Ascendia vous attend. De nouvelles découvertes, de nouvelles rencontres et de nombreuses aventures restent encore à écrire.",
      },

      {
        type: "quote",
        text: "Chaque déplacement peut devenir une nouvelle aventure.",
      },

      {
        type: "paragraph",
        text: "Inscrivez-vous dès maintenant et préparez-vous à entrer dans Ascendia Rise.",
      },
    ],

    // Main CTA
    cta: {
      text: "DÉCOUVRIR ASCENDIA RISE",
      link: "/pre-inscriptions",
    },

    // SEO
    seo: {
      title: "Pré-inscriptions ouvertes | Ascendia Rise",
      description:
        "Les pré-inscriptions pour Ascendia Rise sont officiellement ouvertes. Rejoignez les premiers aventuriers.",
      keywords: [
        "Ascendia Rise",
        "pré-inscription",
        "exploration",
        "aventure",
        "gameplay",
      ],
    },
  };

  const breadBarNav = [
    { name: "Actualités", path: "/" },
    { name: "Annonces", path: "/blog" },
    { name: article.title, path: `/blog/${article.id}` },
  ];

  return (
    <div className="relative w-full py-[0svh] gap-[5svh] flex items-center flex-col h-auto min-h-[90svh] mt-[10svh] bg-white">
      {/*bar  */}

      <div className=" w-[95%] flex flex-row text-[clamp(0.4rem,4svw,0.5rem)] md:text-[clamp(0.6rem,4svw,0.7rem)]  lg:text-[clamp(0.6rem,4svw,0.9rem)] gap-0 justify-start items-center h-[7svh] ">
        <Link href={"/"} className=" w-4 md:w-6 relative aspect-square">
          <Image src={"/blog/Home.svg"} fill alt="" />
        </Link>
        {breadBarNav.map((nav, idx) => (
          <Link
            key={nav.path}
            href={nav.path}
            className=" items-center flex justify-center text-center gap-1 text-[#C8AA6E]"
          >
            <div className=" w-5 relative aspect-square">
              <Image src={"/blog/Forward.svg"} fill alt="" />
            </div>
            <span
              className={`  ${idx + 1 == breadBarNav.length ? "text-black" : "text-[#C8AA6E]"}`}
            >
              {nav.name}
            </span>
          </Link>
        ))}
      </div>

      {/*skiliton loader  */}
      {!article && (
        <>
          {" "}
          {/*titel and subtitel  */}
          <div className="w-[95%] gap-2.5 flex flex-col min-h-[10svh] ">
            <div className=" w-full a min-h-[7svh] animate-shimmer  "></div>
            <div className="  min-w-1/2 w-1/2 min-h-[7svh] animate-shimmer  "></div>
          </div>
          {/* artical skiliton loader Image  */}
          <div className="w-[95%] gap-2.5 flex flex-col min-h-[50svh] animate-shimmer  "></div>
          {/*artical skiliton loader metadata */}
          <div className="w-[95%] gap-2.5 flex flex-row min-h-[10svh] ">
            <div className=" min-w-[15svw] flex self-start min-h-[5svh] animate-shimmer  "></div>
            <div className="  min-w-[15svw] flex self-start   min-h-[5svh] animate-shimmer  "></div>
            <div className="  min-w-[15svw] flex self-start   min-h-[5svh] animate-shimmer  "></div>
          </div>
          {/*artical skiliton loader content   */}
          <div className="w-[95%] relative gap-2.5  min-h-[10svh] ">
            {/*catigory  sidebar  */}
            <div className="float-left w-auto min-h-[70svh] ">
              {" "}
              <div className="justify-center border-r border-[#A4A4A4] gap-[2svh] text-[#403E37] flex flex-col w-[20svw] mr-[5svw] items-center h-[70svh] mb-[5svh]">
                <div className="uppercase text-[clamp(1rem,3dvw,1.2rem)] font-semibold w-[90%]">
                  Les Titres
                </div>
                <div className="w-[80%] flex flex-col gap-[0.8rem]">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                      }}
                      className={`w-full flex flex-row h-[5svh] animate-shimmer  lowercase text-start cursor-pointer items-center gap-2 ${
                        selectedCategory === category
                          ? "text-[#A47B27] font-semibold"
                          : ""
                      }`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>

            {/*content    */}
            <div className="w-[100%]  text-black  min-h-full">
              {[, 1, 1, 1, , 1, 1, 1, 1, 4, 2, 1, 1, 1, 1].map((_, idx) => (
                <div
                  key={idx}
                  className="  min-w-[15svw] flex self-start my-5  min-h-[5svh] animate-shimmer  "
                />
              ))}
            </div>
          </div>
        </>
      )}

      {/*article data */}
      {article && (
        <>
          {" "}
          {/*titel and subtitel  */}
          <div className="w-[95%] gap-2.5 flex text-background flex-col min-h-[10svh] ">
            <span className=" w-full a  text-[clamp(1.5rem,5svw,2.5rem)] leading-none font-serif72 font-semibold ">
              {" "}
              {article.title}
            </span>
            <span className="  min-w-1/2 w-full md:w-1/2 text-[clamp(1rem,4svw,1.2rem)] font-serif72 leading-none ">
              {article.subTitle}
            </span>
          </div>
          {/* artical  Image  */}
          <div className="w-[95%] gap-2.5 flex flex-col min-h-[50svh]  relative ">
            {" "}
            <Image
              src={article.image}
              alt=""
              className="object-top object-cover"
              fill
            />
          </div>
          {/*artical metadata */}
          <div className="w-[95%] gap-[5%] lg:gap-0 flex flex-row text-[#A47B27] min-h-[10svh]">
            <div className="min-w-[10svw] flex self-start justify-center items-center min-h-[5svh] gap-2">
              <Layers3 size={18} strokeWidth={1.8} />
              {article.category}
            </div>

            <div className="min-w-[10svw] flex self-start justify-center items-center min-h-[5svh] gap-2">
              <CalendarDays size={18} strokeWidth={1.8} />
              {new Date(article.createdAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </div>

            <div className="min-w-[10svw] flex self-start justify-center items-center min-h-[5svh] gap-2">
              <Timer size={18} strokeWidth={1.8} />
              Time: {article.readingTime}
            </div>
          </div>
          {/*artical content  */}
          <Content article={article} />
        </>
      )}
    </div>
  );
}

/*<div className="float-left w-1/2 h-[50svh] bg-amber-500">Left</div>

      <div className="w-[100%] bg-red-400 min-h-full"></div> */
