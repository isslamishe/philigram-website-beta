import Image from "next/image";

export default function HeroBg() {
  return (
    <div className="flex pointer-events-none brightness-75 bg-fixed bg-[url('/home/section-1-bg.svg')] bg-no-repeat bg-cover bg-center z-0 flex-col absolute top-0 flex-1 overflow-hidden  w-screen h-screen items-center   justify-center ">
      <div className="bg-gradient-to-b z-30 absolute opacity-100 h-full w-full from-transparent to-[#101F3F]" />
    </div>
  );
}
