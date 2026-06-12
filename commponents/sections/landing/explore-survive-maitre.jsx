import Image from "next/image";

import Link from "next/link";

const parts = [
  {
    title: "explorer",
    description:
      "Aventurez-vous dans des zones où deux mondes entrent en collision. Découvrez des paysages anciens fusionnant avec la Terre moderne",
    bg: "/home/Explore-card.png",
  },
  {
    title: "survive",
    description:
      "Affrontez des créatures d'un autre royaume. Adaptez-vous, évoluez et maîtrisez le pouvoir du mana.",
    bg: "/home/Survive-cards.png",
  },
  {
    title: "MAÎTRE ARTISAN",
    description:
      "Récoltez, forgez, distillez et commercez. Créez l'impossible en fusionnant les ressources de deux mondes et révélez le véritable pouvoir de l'artisanat",
    bg: "/home/Artisan-cards.png",
  },
];

export default function ESM() {
  return (
    <div className="flex flex-col md:py-0 py-[20vh]  gap-[20vh] md:gap-0 overflow-hidden  bg-no-repeat bg-cover bg-center relative   w-screen h-auto items-start   justify-center ">
      <div className=" w-[150%] brightness-40  md:w-full h-full z-10  top-0 left-1/2 -translate-x-1/2 absolute">
        <Image
          fill
          className="object-fill object-center scale-100"
          src={"/home/apercu-bg.jpg"}
          alt=""
        />
      </div>

      <div className="h-full bg-black/0 z-10 w-full absolute top-0 left-0 " />

      {parts.map((p, index) => (
        <div
          key={p.title}
          className={`h-auto md:h-screen w-screen  gap-[5vh] md:gap-0  relative justify-center items-center flex ${index % 2 === 0 ? "md:flex-row-reverse  flex-col-reverse" : "md:flex-row flex-col-reverse"}`}
        >
          {/*content */}
          <div
            className={`w-[85%] md:w-[60%]   z-20 flex justify-center flex-col items-center h-full `}
          >
            <span className=" uppercase 3xl:text-[clamp(1rem,10vw,7rem)]!  text-[clamp(1rem,10vw,10rem)] md:text-[clamp(1rem,5vw,5rem)] font-light font-serif72 text-white ">
              {p.title}
            </span>
            <span className=" w-[95%] md:w-[85%] 3xl:text-[clamp(1rem,10vw,2.6rem)]! text-center text-[clamp(1rem,5vw,1.8rem)] font-light  text-white ">
              {p.description}
            </span>
          </div>

          {/*image icon */}
          <div className=" w-[80%]  md:w-[40%] h-[40%] flex justify-center items-center">
            <div className="h-[60vh] w-[40vh] z-20  relative">
              <div className="bg-primary blur-[100px] opacity-35 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[120%] h-[120%] " />
              <Image className="" alt="dda" fill src={p.bg} />{" "}
            </div>
          </div>
        </div>
      ))}

      <Link
        href={"/histoire"}
        className=" absolute  z-20  bottom-[1%] right-[5%] "
      >
        <span className="3xl:text-[clamp(1rem,10vw,2rem)]! font-extralight border-b text-[clamp(1rem,10vw,1.2rem)] md:text-[clamp(1rem,5vw,1.5rem)]">
          En Savoir Plus{" "}
        </span>
      </Link>
    </div>
  );
}
