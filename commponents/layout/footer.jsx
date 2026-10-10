"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { t } from "@/lib/i18n/translation"; // adjust path to your json file
import { useMainContext } from "@/lib/context/main.context";
import {
  FaLinkedin,
  FaXTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa6";

export default function Footer() {
  const { language } = useMainContext();

  const navs = [
    { id: "about", name: t("footer.nav.about", language), direction: "/about" },
    { id: "blog", name: t("footer.nav.blog", language), direction: "/blog" },
    {
      id: "contact",
      name: t("footer.nav.contact", language),
      direction: "/contact",
    },
  ];

  const contacts = [
    { name: "LinkedIn", icon: FaLinkedin, direction: "/" },
    { name: "X", icon: FaXTwitter, direction: "/" },
    { name: "Instagram", icon: FaInstagram, direction: "/" },
    { name: "Facebook", icon: FaFacebook, direction: "/" },
  ];

  const pathname = usePathname();
  const isInscription = pathname.includes("/inscription");

  if (isInscription) return null;

  return (
    <div
      dir="ltr"
      className="flex flex-col text-white bg-[#262522] z-20 gap-0 bg-no-repeat bg-cover bg-center relative w-full min-h-[50vh] items-start justify-start pb-10"
    >
      <div className="hidden md:flex bg-[#403E37] flex-row justify-center gap-[10%] w-full h-[11vh]">
        {navs.map((n) => (
          <Link
            className="h-full flex text-[clamp(1rem,2vw,1.3rem)] justify-center items-center"
            key={n.id}
            href={n.direction}
          >
            {n.name}
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-2 md:hidden bg-[#262522] w-full flex-1">
        {navs.map((n, index) => (
          <Link
            key={n.id}
            href={n.direction}
            className={`flex justify-center items-center py-6 text-[clamp(1rem,2vw,1.3rem)]
          ${index === navs.length - 1 ? "col-span-2" : ""}`}
          >
            {n.name}
          </Link>
        ))}
      </div>

      <div className="flex flex-row gap-[3%] justify-center items-center w-full flex-1 py-6">
        {contacts.map((n) => {
          const Icon = n.icon;
          return (
            <Link
              className={`w-8 aspect-square flex opacity-80 hover:opacity-100 hover:scale-120 duration-500 transition-all justify-center items-center`}
              key={n.name}
              href={n.direction}
              aria-label={n.name}
            >
              <Icon className="w-full h-full" />
            </Link>
          );
        })}
      </div>

      <span className="w-full text-center font-light py-2">
        {t("footer.copyright", language)}
      </span>
    </div>
  );
}
