"use client";
import { icons } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function Footer() {
  const navs = [
    { name: "À Propos", direction: "/" },
    { name: "Blog & Actualités", direction: "/" },
    { name: "Projets & Jeux", direction: "/" },
    { name: "Kit Presse", direction: "/" },
    { name: "Contact & Support", direction: "/" },
  ];

  const contacts = [
    { name: "LinkedIn", icon: "/contacts/LinkedIn.svg", direction: "/" },
    { name: "X", icon: "/contacts/X.svg", direction: "/" },
    { name: "Instagram", icon: "/contacts/Instagram.svg", direction: "/" },
    { name: "Facebook", icon: "/contacts/Facebook.svg", direction: "/" },
  ];

  const pathname = usePathname();
  const isInscription = pathname.includes("/inscription");

  if (isInscription) return;

  return (
    <div className="flex flex-col bg-[#262522]   gap-0   bg-no-repeat bg-cover bg-center relative overflow-hidden  w-full h-[50vh]  items-start   justify-start ">
      <div className="hidden md:flex bg-[#403E37] flex-row justify-evenly w-full h-[11vh]">
        {navs.map((n) => (
          <Link
            className="h-full flex text-[clamp(1rem,2vw,1.3rem)] justify-center items-center"
            key={n.name}
            href={n.direction}
          >
            {n.name}
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-2 md:hidden bg-[#262522] flex-row justify-evenly w-full h-[60%]">
        {navs.map((n, index) => (
          <Link
            key={n.name}
            href={n.direction}
            className={`h-full flex justify-center items-center text-[clamp(1rem,2vw,1.3rem)]
      ${index === navs.length - 1 ? "col-span-2" : ""}`}
          >
            {n.name}
          </Link>
        ))}
      </div>

      <div className="flex  flex-row gap-[3%] justify-center items-center w-full h-[60%]">
        {contacts.map((n) => (
          <Link
            className={`${n.name === "LinkedIn" ? "h-10 w-10" : "h-8 w-8"} flex relative opacity-80  text-[clamp(1rem,2vw,1.3rem)] justify-center items-center`}
            key={n.name}
            href={n.direction}
          >
            <Image
              fill
              className="object-center object-cover"
              src={n.icon}
              alt={n.name}
            />
          </Link>
        ))}
      </div>

      <span className="absolute bottom-[2%] left-1/2 font-light -translate-x-1/2">
        ©2026 PHILIGRAM
      </span>
    </div>
  );
}
