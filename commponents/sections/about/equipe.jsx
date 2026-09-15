"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useMainContext } from "@/lib/context/main.context";

export default function Equipe() {
  const team = [
    {
      firstname: "Damien",
      lastname: "WISSENBACH",
      image: "/about/Mask group (2).png",
      role: "CEO - PHILIGRAM",
      describtion:
        "Il assure la direction de PHILIGRAM et supervise la vision globale du projet, son développement et ses orientations stratégiques.",
    },
    {
      firstname: "Lokman",
      lastname: "TOUIL",
      image: "/about/Mask group (2).png",
      role: "Game devaloper",
      describtion: `   Il développe les systèmes et mécaniques qui donnent vie au
                  gameplay d'Ascendia Rise, de l'exploration aux interactions et
                  à la progression du joueur.`,
    },
    {
      firstname: "Aymen",
      lastname: "MELOUAH",
      image: "/about/Mask group (2).png",
      role: "UI/UX Desginer",
      describtion:
        "Il conçoit l'expérience utilisateur et les interfaces du jeu afin de rendre les nombreux systèmes d'Ascendia — carte, quêtes, inventaire, alchimie, forge et progression — intuitifs et cohérents.",
    },
    {
      firstname: "Walid",
      lastname: "BELKHIR",
      image: "/about/Mask group (2).png",
      role: "Rig Artist",
      describtion:
        "Il travaille sur le rigging des personnages et des créatures afin de leur donner des mouvements naturels et de contribuer à donner vie à l'univers d'Ascendia.",
    },
    {
      firstname: "Abderahman",
      lastname: "KARAMAN",
      image: "/about/Mask group (2).png",
      role: "Game devaloper",
      describtion: `Il développe les systèmes et mécaniques qui donnent vie au
                  gameplay d'Ascendia Rise, de l'exploration aux interactions et
                  à la progression du joueur`,
    },
  ];

  return (
    <div className="flex flex-col py-[2%] justify-evenly items-center bg-white gap-0  relative w-screen h-auto min-h-[90dvh] ">
      <div className="my-5 md:my-0">
        <span className="uppercase  text-[clamp(1rem,3dvw,1.1rem)] md:text-[clamp(1.2rem,3dvw,1.5rem)] text-[#E3C68C] font-serif72 ">
          notre équipe
        </span>
      </div>

      <div className=" max-w-[95%] md:max-w-[90dvw]  text-center gap-1.5 md:gap-5 flex flex-col font-light">
        <span className="font-serif72 font-semibold text-black/90 text-[clamp(1rem,3dvw,1.5rem)]  md:text-[clamp(1.8rem,3dvw,2.2rem)]">
          Les créateurs d’Ascendia Rise
        </span>
        <span className="  text-[clamp(0.8rem,3dvw,1rem)] text-black/90 md:text-[clamp(1.5rem,3dvw,1.6rem)]">
          Une équope passionnée aux compétences complémentaires traviaomme
          chaque jour à donner vie à Ascendia.
        </span>
      </div>
      <div className="flex w-full mt-[7dvh] h-auto min-h-[60%] flex-wrap items-center justify-center gap-y-8 gap-x-5">
        {team.map((member) => (
          <div
            key={member.firstname}
            className="
        flex aspect-square w-[90%]
        flex-col items-center  justify-end
        sm:w-[70%]
        md:w-[40%]
        lg:w-[25%]

        
        relative
      "
          >
            {/*frame bg */}
            <Image
              src={"/about/Frame (1).svg"}
              className="object-contain w-full z-10"
              fill
              alt=""
            />

            {/* team member profile image */}
            <div className="w-7/10 h-7/10 opacity-80 z-20 absolute top-0  ">
              <Image
                src={member.image}
                fill
                alt=""
                className="object-center object-contain"
              />
            </div>

            {/*team member info */}

            <div className="w-[75%] z-20 h-[50%]   flex items-center flex-col  ">
              <div className="w-9/10 h-4/10 flex flex-row justify-between items-center  ">
                <div className="w-1/2 h-full text-[#FED481] font-serif72  flex flex-col">
                  <span className="text-[clamp(1.1rem,2dvw,1.2rem)]">
                    {member.firstname}
                  </span>
                  <span className="text-[clamp(1.3rem,2dvw,1.4rem)]">
                    {member.lastname}
                  </span>
                </div>
                <Link
                  href={"/"}
                  className="relative w-[17%] text-primary shrink-0 aspect-square"
                >
                  <Image src={"/about/LinkedIn.svg"} alt="" fill />
                </Link>
              </div>

              <div className="w-9/10 h-[10%] font-extralight flex text-[clamp(0.5rem,1dvw,0.6rem)] justify-start items-center ">
                <span>{member.role}</span>
              </div>

              {/* the line */}
              <div className="w-8/10 my-2 h-[1px] bg-white/20" />

              <div className="w-[85%] h-auto  leading-[8.5px] font-extralight flex text-[clamp(0.4rem,1dvw,0.55rem)] justify-start items-start ">
                <span>{member.describtion}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
