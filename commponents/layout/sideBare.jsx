"use client";
import { Globe, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useMainContext } from "@/context/main.context";

const nav = [
  { name: "Accueil", direction: "/" },
  { name: "L'Histoire", direction: "/histoire" },
  {
    name: "Les Races",
    subNav: [
      { name: "Luminels", direction: "/races/Luminels" },
      { name: "Varkhans", direction: "/races/Varkhans" },
      { name: "Sylvérides", direction: "/races/Sylvérides" },
      { name: "Aetherïns", direction: "/races/Aetherïns" },
      { name: "Brumecrocs", direction: "/races/Brumecrocs" },
    ],
    direction: "/races",
  },
  { name: "Gameplay", direction: "/" },
];

export default function SideBar({ isOpen, setIsOpen }) {
  const { currentNav, setCurrentNav } = useMainContext();

  const [chowSubNav, setChowSubNav] = useState(false);
  const navsRef = useRef([]);
  const navMaineRef = useRef(null);

  return (
    <div
      className={`flex md:hidden flex-col fixed z-55 h-[90vh] bg-[#403E37] transition-all duration-300 top-[10vh] w-full    items-center justify-center    ${isOpen ? "left-0" : "-left-full"}`}
    >
      <div className="w-full   flex relative gap-[5vw]   justify-start font-semibold  items-start flex-col h-full ">
        {nav.map((navi) => (
          <div
            key={navi.name}
            className="w-full   flex relative gap-[1vw] lg:gap-[3vw] justify-start  font-semibold font-sans items-center flex-col  "
          >
            <div
              className={`w-[90%] flex h-auto relative transition-colors duration-200 rounded-full ${currentNav == navi.name && "bg-[#31302B]/90  hover:bg-[#31302B]/90"}`}
            >
              <Link
                href={navi.direction}
                ref={(el, index) => {
                  navsRef.current[index] = el;
                }}
                onClick={() => {
                  setCurrentNav(navi.name);
                  setIsOpen(false);
                }}
                className={`cursor-pointer h-[80%] relative text-[clamp(1rem,5vw,1.8rem)] w-full  hover:bg-white/20   py-1 px-3 rounded-full `}
              >
                {navi.name}
              </Link>
              {navi.subNav && (
                <button
                  onClick={() => {
                    if (chowSubNav === navi.name) {
                      setChowSubNav("");
                    } else {
                      setChowSubNav(true);
                    }
                  }}
                  className={`right-[5%]  top-1/2 -translate-y-1/2 text-[clamp(0.8rem,5vw,1rem)] duration-300 transition-all absolute ml-auto ${chowSubNav === navi.name ? "rotate-180" : "rotate-0"}`}
                >
                  ▼
                </button>
              )}
            </div>
            <div
              className={`flex flex-col w-[75%] overflow-hidden duration-300 transition-h ${chowSubNav === navi.name ? "h-[30vh]" : "h-0"} `}
            >
              {navi.subNav &&
                navi?.subNav?.map((s) => (
                  <Link
                    key={navi.name + s.name}
                    href={s.direction}
                    className="w-[80%] text-white/70 gap-1 h-[5vh]"
                    onClick={() => {
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
        <button className="  mt-auto mb-[5vh] flex justify-center items-center w-full cursor-pointer relative h-10 p-2 border border-gray-500 text-[clamp(0.8rem,5vw,2rem)] font-sans outline-3 outline-gray-300/85  text-black bg-gray-300/85 ">
          Pre-inscription
        </button>
      </div>
    </div>
  );
}
