"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useMainContext } from "@/lib/context/main.context";
import { t } from "@/lib/i18n/translation";

export default function Equipe() {
  const { language } = useMainContext();

  const isRTL = language === "ar";

  const team = [
    {
      firstname: "Damien",
      lastname: "WISSENBACH",
      image: "/about/team/Damien.svg",
      role: t("about.equipe.team.0.role", language),
      describtion: t("about.equipe.team.0.description", language),
      linkedin: "https://www.linkedin.com/in/damien-wissenbach-02492420b/",
    },
    {
      firstname: "Lokman",
      lastname: "TOUIL",
      image: "/about/team/Lokman.svg",
      role: t("about.equipe.team.1.role", language),
      describtion: t("about.equipe.team.1.description", language),
      linkedin: "https://www.linkedin.com/in/lokman-touil-50ab90261/",
    },
    {
      firstname: "Aymen",
      lastname: "MELOUAH",
      image: "/about/team/Aymen.svg",
      role: t("about.equipe.team.2.role", language),
      describtion: t("about.equipe.team.2.description", language),
      linkedin: "https://www.linkedin.com/in/aymen-melouah/",
    },
    {
      firstname: "Walid",
      lastname: "BELKHIR",
      image: "/about/team/Walid.svg",
      role: t("about.equipe.team.3.role", language),
      describtion: t("about.equipe.team.3.description", language),
      linkedin: "https://www.linkedin.com/in/walid-belkhir-241347290/",
    },
    {
      firstname: "Abderahman",
      lastname: "KARAMAN",
      image: "/about/team/Abderrahmane.svg",
      role: t("about.equipe.team.4.role", language),
      describtion: t("about.equipe.team.4.description", language),
      linkedin: "https://www.linkedin.com/in/abderrahman-karamane-863b122b7/",
    },
  ];

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className="flex flex-col py-[2%] justify-evenly items-center bg-white gap-0  relative w-screen h-auto min-h-[90dvh] "
    >
      <div className="my-5 md:my-0">
        <span className="uppercase  text-[clamp(1rem,3dvw,1.1rem)] md:text-[clamp(1.2rem,3dvw,1.5rem)] text-[#E3C68C] font-serif72 ">
          {t("about.equipe.title", language)}
        </span>
      </div>

      <div className=" max-w-[95%] md:max-w-[90dvw]  text-center gap-1.5 md:gap-5 flex flex-col font-light">
        <span className="font-serif72 font-semibold text-black/90 text-[clamp(1rem,3dvw,1.5rem)]  md:text-[clamp(1.8rem,3dvw,2.2rem)]">
          {t("about.equipe.heading", language)}
        </span>
        <span className="  text-[clamp(0.8rem,3dvw,1rem)] text-black/90 md:text-[clamp(1.5rem,3dvw,1.6rem)]">
          {t("about.equipe.description", language)}
        </span>
      </div>
      <div className="flex w-full mt-[7dvh] h-auto min-h-[60%] flex-wrap items-center justify-center gap-y-8 gap-x-1">
        {team.map((member, index) => (
          <div
            key={index}
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
              unoptimized
              src={member.image}
              className="object-contain w-full z-10"
              fill
              alt=""
            />

            {/* team member profile image */}
            {/*   <div className="w-7/10 h-7/10 opacity-80 z-20 absolute top-0  ">
              <Image
                unoptimized
                src={member.image}
                fill
                alt=""
                className="object-center object-contain"
              />
            </div> */}

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
                  target="_blank"
                  href={member.linkedin}
                  className="relative w-[17%] text-primary shrink-0 aspect-square"
                >
                  <Image unoptimized src={"/about/LinkedIn.svg"} alt="" fill />
                </Link>
              </div>

              <div className="w-9/10 h-[10%] font-extralight flex text-[clamp(0.5rem,1dvw,0.65rem)] justify-start items-center ">
                <span>{member.role}</span>
              </div>

              {/* the line */}
              <div className="w-8/10 my-2 h-[0px] bg-white/20" />

              <div className="w-[90%] h-auto text-center mt-0.5 leading-[8.5px] xl:leading-3 xl:mt-[3%] mt-[5%] md:mt-0 font-extralight flex xl:text-[clamp(0.4rem,1dvw,0.65rem)]  lg:text-[clamp(0.4rem,1dvw,0.5rem)]  md:text-[clamp(0.4rem,1dvw,0.7rem)]  text-[clamp(0.4rem,5dvw,0.5rem)] justify-start items-start ">
                <span>{member.describtion}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
