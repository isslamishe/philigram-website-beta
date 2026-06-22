"use client";
import Image from "next/image";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Reservez() {
  return (
    <div className="flex flex-col-reverse md:flex-row bg-white  overflow-hidden gap-0   bg-no-repeat bg-cover bg-center relative   w-screen h-[90vh]  items-center   justify-center ">
      <div className=" w-full md:w-1/2  relative  h-[50%]">
        <div className="w-full z-10 scale-220 md:scale-250 absolute left-[-30%] md:left-0 top-[20%] md:top-[10%] h-full">
          <Image
            fill
            alt="dada"
            className="object-center  object-contain"
            src={"/home/CTA-bg.png"}
          />
        </div>
      </div>
      <div className=" w-[90%] md:w-1/2  h-full z-20  text-[#403E37]/90 gap-4 justify-center items-center md:items-start flex flex-col">
        <span className="  text-center text-[clamp(1rem,10vw,2rem)] md:text-[clamp(1rem,3vw,3rem)] font-serif72 font-bold md:font-bold">
          RÉSERVEZ VOTRE PLACE
        </span>

        <span className=" mt-0 md:mt-[4vh] w-[90%] md:text-start text-center text-[clamp(1rem,2vw,1.5rem)]">
          Pré-inscrivez-vous maintenant pour recevoir des récompenses exclusives
          et rejoindre la communauté qui façonne le développement d'Ascendia.
        </span>

        <Link
          href={"/inscription"}
          className="relative border border-primary-dark outline-2 outline-primary cursor-pointer overflow-hidden p-5 bg-primary"
        >
          <span className="absolute inset-0 opacity-0 transition-opacity duration-500 hover:opacity-90 outline-2 outline-primary-light bg-[linear-gradient(90deg,#B39D72_0%,#F3D69C_44%,#D9BF8C_68%,#E5CA95_91%)]"></span>

          <span className="relative z-10 pointer-events-none text-[#403E37] font-bold">
            PRÉ-INSCRIPTION
          </span>
        </Link>
      </div>
    </div>
  );
}
