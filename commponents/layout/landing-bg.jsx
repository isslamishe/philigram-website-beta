import Image from "next/image";

export default function HeroBg() {
  return (
    <div className="flex pointer-events-none brightness-75  fixed bg-no-repeat bg-cover bg-center z-0 flex-col  top-0 flex-1 overflow-hidden min-h-screen w-dvw h-dvh items-center   justify-center ">
      <Image
        unoptimized
        fill
        alt=""
        className="object-top object-cover"
        src={"/home/hero.bg.webp"}
      />
      <div className="bg-gradient-to-b z-30 absolute opacity-100 h-full w-full from-transparent to-[#101F3F]" />
    </div>
  );
}
