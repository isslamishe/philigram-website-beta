import Image from "next/image";

import Link from "next/link";

export default function Section2() {
  return (
    <div className="flex flex-col bg-white overflow-hidden gap-5  relative   w-screen h-[90vh] items-center   justify-center ">
      <span className=" text-[clamp(1rem,10vw,1.6rem)] 3xl:text-[clamp(1rem,10vw,4rem)]! lg:text-[clamp(1rem,5vw,2.5rem)] xl:text-[clamp(1rem,5vw,3rem)] md:text-[clamp(1rem,10vw,2rem)] text-center text-[#403E37]/90 font-serif72 font-semibold">
        UNE NOUVELLE RÉALITÉ VOUS ATTEND
      </span>

      <span className=" lg:text-[clamp(1rem,5vw,1.3rem)] xl:text-[clamp(1rem,5vw,1.7rem)] 3xl:text-[clamp(1rem,10vw,2.5rem)]! text-center w-[90%] md:max-w-[70%] text-[#403E37] font-light">
        La fusion a tout changé. Explorez un monde hybride, maîtrisez des
        pouvoirs interdits, et découvrez ce que signifie vraiment survivre quand
        deux réalités ne font plus qu'un.
      </span>
    </div>
  );
}
