import Image from "next/image";

export default function HeroBg() {
  return (
    <div className="flex pointer-events-none brightness-75  fixed bg-no-repeat bg-cover bg-center z-0 flex-col  top-0 flex-1 overflow-hidden  w-dvw h-dvh items-center   justify-center ">
      <Image
        fill
        alt=""
        className="object-center object-cover"
        src={"/home/section-1-bg.svg"}
      />
      <div className="bg-gradient-to-b z-30 absolute opacity-100 h-full w-full from-transparent to-[#101F3F]" />
    </div>
  );
}
