import Image from "next/image";
import Link from "next/link";
import { t } from "@/lib/i18n/translation"; // adjust path to your json file
import { useMainContext } from "@/lib/context/main.context";

export default function Section2() {
  const { language } = useMainContext(); // replace with your actual languageuage source

  return (
    <div className="flex flex-col bg-white text-[#403E37] overflow-hidden gap-0  relative   w-screen h-[90vh] items-center   justify-center ">
      {/* bg images  */}

      <div className="h-full absolute left-[-25%]  md:left-0 z-10 min-w-[20rem] w-[35vw]">
        <Image src={"/home/histoire-bg-rogne.png"} alt="" fill />
      </div>
      <div className="h-[80%] absolute bottom-0 z-10 min-w-[12rem] right-[-6%] md:right-0  w-[20vw]">
        <Image src={"/home/Histoire-bg2.png"} alt="" fill />
      </div>

      {/* content  */}

      <span className=" font-serif72 z-20 3xl:text-[clamp(1rem,10vw,5rem)]!  md:text-[clamp(1rem,5vw,4rem)]  text-[clamp(1rem,5vw,4rem)] ">
        {t("landing.histoire.title", language)}
      </span>
      <span className=" sm:w-[80%] md:w-[55%] mt-4 text-[#403E37]/90 z-20 text-center 3xl:text-[clamp(1rem,10vw,2.5rem)]! text-[clamp(1rem,2vw,1.3rem)]">
        {t("landing.histoire.paragraph1", language)}
      </span>

      <span className=" sm:w-[80%] md:w-[55%]  mt-7 text-[#403E37] z-20 text-center font-light 3xl:text-[clamp(1rem,10vw,2.3rem)]! text-[clamp(1rem,2vw,1.7rem)]">
        {t("landing.histoire.paragraph2", language)}
      </span>
      <span className=" sm:w-[80%] md:w-[55%] text-[#403E37] z-20 text-center font-light 3xl:text-[clamp(1rem,10vw,2.3rem)]! text-[clamp(1rem,2vw,1.7rem)]">
        {t("landing.histoire.paragraph3", language)}
      </span>

      <Link
        className="text-[#403E37]/60 3xl:text-[clamp(1rem,10vw,2rem)]! border-b z-30 border-[#403E37]/60 mt-7"
        href={"/histoire"}
      >
        {t("landing.histoire.readMoreLink", language)}
      </Link>
    </div>
  );
}
