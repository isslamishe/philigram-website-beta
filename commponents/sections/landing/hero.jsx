import Image from "next/image";
import HeroBg from "@/commponents/layout/landing-bg";
import Link from "next/link";
export default function hero() {
  return (
    <div className="flex flex-col  overflow-hidden gap-5  relative   w-dvw h-dvh items-center   justify-center ">
      <HeroBg />
      <span
        className=" font-serif6 z-30 font-semibold   bg-[linear-gradient(90deg,#F3D69C_0%,#B39D72_34%,#D9BF8C_68%,#E5CA95_91%)]
    bg-clip-text
    text-transparent  text-[clamp(0.8rem,10vw,5rem)] 3xl:text-[clamp(1rem,10vw,15rem)]! md:text-[clamp(1rem,10vw,5rem)] lg:text-[clamp(1rem,15vw,7rem)]"
      >
        Ascendia Rise
      </span>
      <div className=" flex flex-col gap-2 justify-center items-center grow-0">
        {" "}
        <span className=" font-serif72 z-30 font-light text-center 3xl:text-[clamp(1rem,10vw,3rem)]!  text-white/90 md:text-[clamp(0.8rem,1vw,1rem)] text-[clamp(0.8rem,3vw,1.3rem)]">
          QUAND DEUX MONDES NE FONT QU'UN
        </span>
        <span className=" font-sans z-30 max-w-[75%] text-center 3xl:text-[clamp(1rem,10vw,2rem)]! font-light text-white text-[clamp(0.7rem,5vw,0.9rem)]">
          Le royaume mourant d'Ascendia fusionne avec la Terre. La magie
          s'éveille. La réalité se fracture. Votre survie commence
          maintenant{" "}
        </span>
      </div>

      <button className="relative border border-primary-dark outline-2 outline-primary cursor-pointer overflow-hidden p-5 bg-primary">
        <span className="absolute inset-0 opacity-0 transition-opacity duration-500 hover:opacity-90 outline-2 outline-primary-light bg-[linear-gradient(90deg,#B39D72_0%,#F3D69C_44%,#D9BF8C_68%,#E5CA95_91%)]"></span>

        <span className="relative z-10 pointer-events-none text-[#403E37] font-bold">
          PRÉ-INSCRIPTION
        </span>
      </button>

      <Link
        className="z-30 3xl:text-[clamp(1rem,10vw,1.5rem)]! text-sm border-b"
        href="/histoire"
      >
        {" "}
        DÉCOUVRIR L'HISTOIRE
      </Link>

      <span className="z-30 3xl:text-[clamp(1rem,10vw,1.4rem)]! absolute bottom-[5%] text-[0.6rem]">
        EN DÉVELOPPEMENT | Alpha Bientôt Disponible
      </span>
    </div>
  );
}
