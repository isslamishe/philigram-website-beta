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
        <span className=" text-[clamp(1rem,10vw,2rem)] md:text-[clamp(1rem,3vw,3rem)] font-serif72 font-bold md:font-light">
          RÉSERVEZ VOTRE PLACE
        </span>

        <span className=" mt-0 md:mt-[4vh] w-[90%] md:text-start text-center text-[clamp(1rem,2vw,1.5rem)]">
          Pré-inscrivez-vous maintenant pour recevoir des récompenses exclusives
          et rejoindre la communauté qui façonne le développement d'Ascendia.
        </span>

        <Link
          className="bg-primary mt-0 md:text-[#403E37]/90 text-white md:mt-[7vh] text-[clamp(1rem,2vw,1.3rem)] border border-white/30 outline-[0.5vw] outline-primary font-semibold flex justify-center text-center items-center px-[10vw] py-[2.5vh] md:px-[1.7vw] md:py-[1.2vw]"
          href={"/"}
        >
          PRÉ-INSCRIPTION
        </Link>
      </div>
    </div>
  );
}
