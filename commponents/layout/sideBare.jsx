"use client";
import { Globe, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useMainContext } from "@/lib/context/main.context";
import { t } from "@/lib/i18n/translation";

export default function SideBar({ isOpen, setIsOpen }) {
  const {
    currentNav,
    setCurrentNav,
    currentSubNav,
    setCurrentSubNav,
    language,
  } = useMainContext();

  const isRTL = language === "ar";

  const nav = [
    { id: "accueil", name: t("nav.links.accueil", language), direction: "/" },
    {
      id: "histoire",
      name: t("nav.links.histoire", language),
      direction: "/histoire",
    },
    {
      id: "races",
      name: t("nav.links.races", language),
      subNav: [
        {
          id: "luminels",
          name: t("nav.races.luminels", language),
          direction: "/races/Luminels",
        },
        {
          id: "varkhans",
          name: t("nav.races.varkhans", language),
          direction: "/races/Varkhans",
        },
        {
          id: "sylverides",
          name: t("nav.races.sylverides", language),
          direction: "/races/Sylvérides",
        },
        {
          id: "aetherins",
          name: t("nav.races.aetherins", language),
          direction: "/races/Aetherïns",
        },
        {
          id: "brumecrocs",
          name: t("nav.races.brumecrocs", language),
          direction: "/races/Brumecrocs",
        },
      ],
      direction: "/races",
    },
    {
      id: "gameplay",
      name: t("nav.links.gameplay", language),
      direction: "/gameplay",
    },
  ];

  const [showSubNav, setShowSubNav] = useState(false);
  const navsRef = useRef([]);
  const navMaineRef = useRef(null);

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className={`flex md:hidden flex-col fixed z-55 h-[90vh] bg-[#403E37] transition-all duration-300 top-[10vh] w-full    items-center justify-center    ${
        isOpen
          ? "left-0 rtl:left-auto rtl:right-0"
          : "-left-full rtl:left-auto rtl:-right-full"
      }`}
    >
      <div className="w-full   flex relative gap-[5vw]   justify-start font-semibold  items-start flex-col h-full ">
        {nav.map((navi) => (
          <div
            key={navi.id}
            className="w-full   flex relative gap-[1vw] lg:gap-[3vw] justify-start  font-semibold font-sans items-center flex-col  "
          >
            <div
              className={`w-[90%] flex h-auto relative transition-colors duration-200 rounded-full ${currentNav == navi.id && "bg-[#31302B]/90  hover:bg-[#31302B]/90"}`}
            >
              <Link
                href={navi.direction}
                ref={(el, index) => {
                  navsRef.current[index] = el;
                }}
                onClick={() => {
                  setCurrentNav(navi.id);
                  setIsOpen(false);
                }}
                className={`cursor-pointer h-[80%] relative text-[clamp(1rem,5vw,1.8rem)] w-full  hover:bg-white/20   py-1 px-3 rounded-full `}
              >
                {navi.name}
              </Link>
              {navi.subNav && (
                <button
                  onClick={() => {
                    setShowSubNav(!showSubNav);
                  }}
                  className={`end-[5%]  top-1/2 -translate-y-1/2 text-[clamp(0.8rem,5vw,1rem)] duration-300 transition-all absolute ms-auto ${showSubNav === navi.id ? "rotate-180" : "rotate-0"}`}
                >
                  ▼
                </button>
              )}
            </div>
            <div
              className={`flex flex-col w-[75%] overflow-hidden duration-300 transition-h ${showSubNav && navi.subNav ? "h-[30vh]" : "h-0"} `}
            >
              {navi.subNav &&
                navi?.subNav?.map((s) => (
                  <Link
                    key={navi.id + s.id}
                    href={s.direction}
                    className={`w-[80%] text-white/70 ${currentSubNav === s.id ? "border-b" : "border-0"} text-[clamp(0.8rem,5vw,1.1rem)] gap-1 h-auto`}
                    onClick={() => {
                      setCurrentSubNav(s.id);
                      setIsOpen(false);
                    }}
                  >
                    {s.name}
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex    justify-between w-[90%]  items-center flex-row h-auto ">
        <Link
          onClick={() => {
            setCurrentSubNav("inscerption");
            setIsOpen(false);
          }}
          href={"/inscription"}
          className="  mt-auto mb-[5vh] flex justify-center items-center w-full cursor-pointer relative h-10 p-2 border border-gray-500 text-[clamp(0.8rem,5vw,2rem)] font-sans outline-3 outline-gray-300/85  text-black bg-gray-300/85 "
        >
          {t("nav.preRegisterBtn", language)}
        </Link>
      </div>
    </div>
  );
}
