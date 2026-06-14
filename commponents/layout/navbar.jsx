"use client";
import { Globe, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useMainContext } from "@/context/main.context";
import SideBar from "@/commponents/layout/sideBare";

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

export default function NavBar() {
  const {
    currentNav,
    setCurrentNav,
    isOpen,
    setIsOpen,
    currentSubNav,
    setCurrentSubNav,
  } = useMainContext();

  const [showSubNav, setShowSubNav] = useState(false);

  const navsRef = useRef([]);
  const navMaineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) return; // ✅ already there, good

      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      if (navMaineRef.current) {
        if (scrollPercent > 5) {
          navMaineRef.current.classList.add("bg-[#403E37]");
          navMaineRef.current.classList.remove("bg-transparent");
        } else {
          navMaineRef.current.classList.add("bg-transparent");
          navMaineRef.current.classList.remove("bg-[#403E37]");
        }
      }
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const scrollY = window.scrollY;
    const body = document.body;

    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";

    return () => {
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";

      window.scrollTo(0, scrollY); // ← restores exact position
    };
  }, [isOpen]);

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    checkScreenSize(); // initial check

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  useEffect(() => {
    console.log(currentSubNav);
  }, [currentSubNav]);

  return (
    <div
      ref={navMaineRef}
      className={`flex flex-row fixed z-50 duration-500 transition-colors h-[10vh] top-0 w-full items-center justify-center    ${isOpen ? "bg-[#403E37]" : "bg-transparent"}`}
    >
      <span
        className=" ml-[5vw] bg-[linear-gradient(90deg,#F3D69C_0%,#B39D72_34%,#D9BF8C_68%,#E5CA95_91%)]
    bg-clip-text
    text-transparent font-serif6 text-2xl   3xl:text-[clamp(1rem,5vw,2.5rem)]!"
      >
        Ascendia Rise
      </span>

      <div className="w-auto hidden  md:flex relative gap-[1vw] lg:gap-[3vw] justify-center mx-auto font-semibold font-sans items-center flex-row h-full ">
        {nav.map((navi) => (
          <div
            ref={(el, index) => {
              navsRef.current[index] = el;
            }}
            key={navi.name}
            className={`cursor-pointer relative hover:bg-white/20 md:text-[clamp(0.6rem,5vw,0.8rem)] lg:text-[clamp(0.6rem,5vw,0.95rem)]  3xl:text-[clamp(1rem,5vw,2rem)]! transition-colors duration-200 flex flex-row gap-1 justify-between text-center items-center  py-1 px-3 3xl:px-6! 3xl:py-0! rounded-full ${currentNav == navi.name && "bg-white/40  hover:bg-white/40"}`}
          >
            <Link
              href={navi.direction}
              onClick={() => {
                setCurrentNav(navi.name);
              }}
            >
              {navi.name}
            </Link>

            {navi.subNav && (
              <button
                onClick={() => {
                  setShowSubNav(!showSubNav);
                }}
                className={` text-white  w-5 h-5 cursor-pointer text-[clamp(0.4rem,5vw,0.6rem)] 3xl:text-[clamp(1rem,5vw,1.2rem)]! duration-300 transition-all ml-auto ${showSubNav ? "rotate-180" : "rotate-0"}`}
              >
                ▼
              </button>
            )}

            {navi.subNav && showSubNav && (
              <div className="absolute top-[120%] w-[100%]  text-[clamp(0.7rem,5vw,0.9rem)] 3xl:text-[clamp(1rem,5vw,1.8rem)]! font-light bg-[#403E37] flex p-1.5 items-center text-start justify-evenly flex-col border-t-6 rounded-t-lg border-primary w-[10vw] left-0 h-[20vh]">
                {navi.subNav.map((sn) => (
                  <Link
                    onClick={() => {
                      if (currentSubNav === sn.name) {
                        return;
                      } else {
                        setCurrentSubNav(sn.name);
                      }
                      setCurrentNav(sn.name);
                      setShowSubNav(false);
                    }}
                    key={sn.direction}
                    className={`${currentSubNav === sn.name ? "border-b" : "border-0"} duration-100 transition-all w-[90%]`}
                    href={sn.direction}
                  >
                    {sn.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="md:flex gap-3.5 mr-[5vw] hidden justify-between w-1/8  items-center flex-row h-full ">
        <button className=" cursor-pointer relative h-7 w-7 3xl:w-14!  3xl:h-14!">
          <Image alt="globe" fill src={"/globe.svg"} className="text-white" />
        </button>

        <button className=" flex justify-center items-center  cursor-pointer relative h-10 3xl:h-22!  p-2  3xl:p-5! border hover:bg-gray-300/100 duration-300 transition-all border-gray-500 text-[clamp(0.8cqw,2vw,1cqw)]  lg:text-[clamp(0.8cqw,2vw,1.1cqw)]  3xl:text-[clamp(0.8cqw,2vw,1.2cqw)] font-sans outline-3 outline-gray-300/85 w-full text-black bg-gray-300/85 ">
          Pre-inscription
        </button>
      </div>

      <button
        onClick={() => {
          setIsOpen(true);
        }}
        className={`ml-auto flex md:hidden mr-[5vw] ${isOpen ? "hidden" : "flex"}`}
      >
        <Menu className={``} />
      </button>
      <button
        onClick={() => {
          setIsOpen(false);
        }}
        className={`ml-auto flex md:hidden mr-[5vw] ${isOpen ? "flex" : "hidden"}`}
      >
        <X />
      </button>

      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
