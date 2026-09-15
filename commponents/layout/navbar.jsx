"use client";
import { Globe, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useMainContext } from "@/lib/context/main.context";
import SideBar from "@/commponents/layout/sideBare";
import { t } from "@/lib/i18n/translation";
import { translations } from "@/lib/i18n/translation";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const {
    currentNav,
    setCurrentNav,
    isOpen,
    setIsOpen,
    currentSubNav,
    setCurrentSubNav,
    language,
    setLanguage,
  } = useMainContext();

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
  const [showLanguages, setShowLanguages] = useState(false);
  const navsRef = useRef([]);
  const navMaineRef = useRef(null);
  const subNav = useRef([]);
  const PagesNeedColoredNav = ["/about"];
  const LanguageButton = useRef(null);
  const langages = Object.keys(translations);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) return; // ✅ already there, good

      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      if (navMaineRef.current) {
        console.log(pathname);
        if (
          scrollPercent > 5 ||
          PagesNeedColoredNav.includes(pathname) ||
          pathname.startsWith("/blog/")
        ) {
          navMaineRef.current.classList.add("bg-[#403E37]");
          navMaineRef.current.classList.remove("bg-transparent");
        } else {
          navMaineRef.current.classList.add("bg-transparent");
          navMaineRef.current.classList.remove("bg-[#403E37]");
        }
      }
    };
    console.log(pathname);
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen, pathname]);

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
    function handleClickOutside(event) {
      if (!showSubNav) return;

      const clickedInside = subNav.current.some(
        (ref) => ref && ref.contains(event.target),
      );

      if (!clickedInside) {
        setShowSubNav(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSubNav]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (!showLanguages) return;

      const clickedInside = LanguageButton.current.contains(event.target);

      if (!clickedInside) {
        setShowLanguages(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showLanguages]);

  const handleChangeLanguage = (lang) => {
    setLanguage(lang.toString());
    localStorage.setItem("language", lang.toString());
    setShowLanguages(false);
  };

  return (
    <div
      ref={navMaineRef}
      className={`flex flex-row fixed z-50 duration-500 transition-colors h-[10vh] top-0 w-full items-center justify-center    ${isOpen ? "bg-[#403E37]" : "bg-transparent"}`}
    >
      <Link
        href={"/"}
        className=" ml-[5vw] bg-[linear-gradient(90deg,#F3D69C_0%,#B39D72_34%,#D9BF8C_68%,#E5CA95_91%)]
    bg-clip-text
    text-transparent font-serif6 text-2xl   3xl:text-[clamp(1rem,5vw,2.5rem)]!"
      >
        {t("nav.brand", language)}
      </Link>

      <div className="w-auto hidden  md:flex relative gap-[1vw] lg:gap-[3vw] justify-center mx-auto font-semibold font-sans items-center flex-row h-full ">
        {nav.map((navi) => (
          <div
            ref={(el, index) => {
              navsRef.current[index] = el;
            }}
            key={navi.id}
            className={`cursor-pointer relative hover:bg-white/20 md:text-[clamp(0.6rem,5vw,0.8rem)] lg:text-[clamp(0.6rem,5vw,0.95rem)]  3xl:text-[clamp(1rem,5vw,2rem)]! transition-colors duration-200 flex flex-row gap-1 justify-between text-center items-center  py-1 px-3 3xl:px-6! 3xl:py-0! rounded-full ${currentNav == navi.id && "bg-white/40  hover:bg-white/40"}`}
          >
            <Link
              href={navi.direction}
              onClick={() => {
                setCurrentNav(navi.id);
              }}
            >
              {navi.name}
            </Link>

            {navi.subNav && (
              <button
                ref={(el) => (subNav.current[0] = el)}
                onClick={() => {
                  setShowSubNav(!showSubNav);
                }}
                className={` text-white  w-5 h-5 cursor-pointer text-[clamp(0.4rem,5vw,0.6rem)] 3xl:text-[clamp(1rem,5vw,1.2rem)]! duration-300 transition-all ml-auto ${showSubNav ? "rotate-180" : "rotate-0"}`}
              >
                ▼
              </button>
            )}

            {navi.subNav && showSubNav && (
              <div
                ref={(el) => (subNav.current[1] = el)}
                className="absolute top-[120%] w-[100%]  text-[clamp(0.7rem,5vw,0.9rem)] 3xl:text-[clamp(1rem,5vw,1.8rem)]! font-light bg-[#403E37] flex p-1.5 items-center text-start justify-evenly flex-col border-t-6 rounded-t-lg border-primary w-[10vw] left-0 h-[20vh]"
              >
                {navi.subNav.map((sn) => (
                  <Link
                    onClick={() => {
                      if (currentSubNav === sn.id) {
                        return;
                      } else {
                        setCurrentSubNav(sn.id);
                      }
                      setCurrentNav(sn.id);
                      setShowSubNav(false);
                    }}
                    key={sn.id}
                    className={`${currentSubNav === sn.id ? "border-b" : "border-0"} duration-100 transition-all w-[90%]`}
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
        <button
          ref={LanguageButton}
          className=" cursor-pointer relative h-10 w-10  3xl:w-14!  3xl:h-14!"
        >
          <Image
            onClick={() => {
              setShowLanguages(!showLanguages);
            }}
            alt="globe"
            fill
            src={"/globe.svg"}
            className=" z-20 text-white"
          />
          <div
            className={`absolute top-0 flex justify-end z-10 w-full bg-[#403E37] overflow-hidden ${
              showLanguages ? "h-[20dvh] opacity-100" : "h-[5dvh] opacity-0"
            }`}
            style={{
              transition: `
      height 700ms ease 50ms,
      ${showLanguages ? "opacity 100ms ease 0ms" : "opacity 200ms ease 500ms"}
    `,
            }}
          >
            <div className="h-auto overflow-hidden shrink-0 flex flex-col justify-end  w-full mt-[6dvh]">
              {" "}
              {langages.map((lang) => (
                <span
                  onClick={() => {
                    handleChangeLanguage(lang.toString());
                  }}
                  className={`w-full shrink-0 h-[4dvh] flex justify-center items-center ${lang.toString() === language.toString() ? "bg-white/20" : "bg-transparent"}`}
                  key={lang}
                >
                  {lang.toString().toUpperCase()}
                </span>
              ))}
            </div>
          </div>
        </button>

        <Link
          href={"/inscription"}
          className=" flex  justify-center items-center font-semibold cursor-pointer relative h-10 md:h-8 lg:h-10 3xl:h-22!  p-2  3xl:p-5! border hover:bg-gray-300/100 duration-300 transition-all border-gray-500 md:text-[clamp(0.8cqw,2vw,0.8cqw)] text-[clamp(0.8cqw,2vw,1cqw)]  lg:text-[clamp(0.8cqw,2vw,1.1cqw)]  3xl:text-[clamp(0.8cqw,2vw,1.2cqw)] font-sans outline-3 outline-gray-300/85 w-full text-[#403E37] bg-gray-300/85 "
        >
          {t("nav.preRegisterBtn", language)}
        </Link>
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
