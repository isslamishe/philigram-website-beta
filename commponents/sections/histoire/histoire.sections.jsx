"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Decouvrir from "@/commponents/layout/dcouvrir.jsx";

import { useMainContext } from "@/context/main.context";

export default function Races() {
  const { setCurrentNav } = useMainContext();

  useEffect(() => {
    setCurrentNav("Les Races");
  }, []);

  const epsodes = [
    {
      titel: "L'Ascension de l'Arbre-Monde",
      description: [
        `On racontait qu'Ascendia était un monde inépuisable : des vallées saturées de mana, des cités suspendues aux veines d'éther, des forêts où les saisons changeaient au rythme des chants, et des routes gardées par des créatures dont l'intelligence rivalisait avec celle des plus grands sages.
Puis vint l'Innommable Cataclysme.
`,
        `Quelque chose — trop ancien, trop vaste, trop puissant — se dressa contre Ascendia. Personne n'en prononce le nom. Ceux qui l'ont vu n'en parlent qu'avec les yeux vides. En quelques cycles, des continents se fendirent, des océans bouillirent, et le mana lui-même commença à se corrompre, comme si le cœur du monde avait été blessé.`,
      ],
      image: "/history/sections/section1-img.png",
    },
    {
      titel: "Les Derniers Bastions",
      description: [
        `Dans le chaos, les peuples d'Ascendia se rassemblèrent autour de leurs derniers bastions : les Luminels, êtres de lumière pensante, tisseurs de runes et de lois invisibles ; les Varkhans, guerriers-corneilles au langage tranchant, archivistes des batailles et des serments ; les Sylvérides, gardiens des bois profonds, dont les racines portent mémoire ; les Aetherïns, navigateurs des courants de mana, capables de lire l'espace comme une carte vivante ; les Brumecrocs, créatures amphibies des marais, réputées pour leurs poisons et leurs diplomates étonnamment brillants.
`,
        `Mais même unis, ils n'avaient plus assez de force. Le mana se raréfiait là où il aurait dû abonder, et les créatures les plus nobles devenaient instables, comme si leur propre essence se retournait contre elles.`,
      ],
      image: "/history/sections/section2-img.png",
    },
    {
      titel: "Le Dernier Refuge",
      description: [
        `Alors, dans une ultime tentative, ils se tournèrent vers leur plus vieux refuge : l'Arbre-Monde. L'Arbre n'était pas seulement un arbre. C'était une conscience, une mémoire, un pilier entre les plans. Son esprit était vivant. Elle s'appelait Manelle.

`,
        `Lorsqu'on l'implora, Manelle répondit — non pas avec une voix ordinaire, mais avec une certitude gravée dans chaque esprit :
« Je vous ancrerai à un monde voisin. Un monde vivant… mais vide de mana. La Terre. »`,
        `La Terre était l'opposé d'Ascendia : stable, dense, matérielle, sans mana. Et c'est précisément ce manque qui en faisait un refuge possible… à condition que la greffe soit contrôlée.`,
      ],
      image: "/history/sections/section3-img.png",
    },
    {
      titel: "La Greffe",
      description: [
        `La fusion ne fut ni un portail, ni une conquête. Elle fut une greffe.`,
        `Guidée par Manelle, l'Arbre-Monde étendit ses racines au-delà des frontières du réel. Sur la Terre apparurent bientôt des pousses : dans des parcs, des friches, au pied des immeubles, le long des routes — parfois au cœur même des villes. Ces pousses commencèrent à diffuser le mana. Lentement d'abord. Puis de façon de plus en plus dense. Comme si la Terre apprenait à respirer une énergie qui n'avait jamais été la sienne.`,
        ,
      ],
      image: "/history/sections/section4-img.png",
    },
    {
      titel: "La Nuit de Fracture",
      description: [
        `Lorsque la densité de mana atteignit un seuil critique, la Terre révéla sa fragilité. La majorité des bâtiments humains, conçus pour un monde sans magie, furent incapables de supporter cette nouvelle loi. Les structures se fissurèrent. Des quartiers s'effondrèrent. Les routes se déformèrent. Une destruction massive. Fulgurante.
`,
        `Pourtant… les vies furent toutes préservées.
Au moment où la Fracture engloutissait les villes, Manelle déploya une protection impossible : elle enveloppa les êtres vivants, les écarta du chaos, les déplaça, les sauva. Le monde s'écroulait, mais personne ne mourait. Comme si l'esprit de l'Arbre-Monde avait choisi, en un seul geste, de sauver l'essentiel.
`,
        `Le prix fut immense : une civilisation brisée, et un monde qui ne reviendrait pas en arrière.`,
      ],
      image: "/history/sections/section5-img.png",
    },
  ];

  return (
    <div
      className={`flex flex-col   h-auto bg-no-repeat  overflow-hidden  justify-center items-end   gap-0  bg-contain bg-top relative w-screen  `}
    >
      {/*bg image */}
      <div className="absolute opacity-70 brightness-12 top-0 w-full h-full z-5">
        <Image fill alt="" src="/history/main-bg.jpg" className="object-fill" />
      </div>

      {/*bg black filter */}
      <div
        className={`flex z-20 absolute top-0   h-[3vh] w-full flex-col bg-linear-to-b from-black/50  to-transparent  bg-no-repeat   gap-0  bg-cover bg-center     `}
      />

      {/* story sections */}
      {epsodes.map((epsode, idx) => (
        <div
          key={epsode.titel}
          className={`w-screen relative pt-[5vh]  flex justify-start items-center z-10 h-screen ${idx % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
        >
          <div className=" w-[100%] lg:w-[60%] gap-[2vh] flex flex-col justify-start items-center  h-[90%]">
            <div className="relative flex justify-center  flex-col">
              <span className=" font-serif72 text-center text-[clamp(1rem,10vw,1.3rem)] md:text-[clamp(1rem,5vw,2rem)] lg:text-[clamp(1rem,5vw,2.2rem)] 3xl:text-[clamp(1rem,10vw,5rem)]!">
                {epsode.titel}
              </span>

              <div className="relative mx-auto  w-[40vw] md:w-[20vw] h-[2vh] md:h-[1vw]">
                <Image alt="" fill src={"/Title Devider.png"} />
              </div>
            </div>
            <div className=" w-[95%] md:w-[90%] font-light flex  flex-col justify-center gap-[2%] items-center text-center text-[clamp(1rem,5vw,1.2rem)] lg:text-[clamp(1rem,5vw,1.3rem)] 3xl:text-[clamp(1rem,5vw,2.2rem)]!">
              {epsode.description.map((p) => (
                <span key={p} className="  ">
                  {p}
                </span>
              ))}
            </div>
          </div>

          <div
            className={` w-[100%] md:w-[65vw] top-1/2 mt- brightness-50 opacity-70 scale-120 -translate-y-1/2 absolute h-[90vh] md:h-[110vh] ${idx % 2 ? "sm:-left-[10%] left-0 " : " right-0 md:-right-[5%]"}`}
          >
            <Image className="z-10" alt="" fill src={epsode.image} />
          </div>
        </div>
      ))}

      <div
        className={`w-screen relative  mt-[10vh] md:mt-0  flex justify-start items-center z-10 h-screen `}
      >
        <div className="w-full gap-[2vh] flex flex-col justify-start items-center  h-[90%]">
          <div className="relative flex justify-center  flex-col">
            <span className=" font-serif72 text-center text-[clamp(1rem,10vw,1.3rem)] md:text-[clamp(1rem,5vw,2rem)] lg:text-[clamp(1rem,5vw,2.2rem)] 3xl:text-[clamp(1rem,5vw,5rem)]!">
              Un Jour, Un Seul Monde
            </span>

            <div className="relative mx-auto  w-[40vw] md:w-[20vw] h-[2vh] md:h-[1vw]">
              <Image alt="" fill src={"/Title Devider.png"} />
            </div>
          </div>
          <div className="  w-[90%] font-light flex  flex-col justify-center gap-[2%] items-center text-center text-[clamp(1rem,5vw,1.2rem)] lg:text-[clamp(1rem,5vw,1.3rem)] 3xl:text-[clamp(1rem,5vw,2.2rem)]!">
            <span>
              À partir de là, la fusion devint irréversible. Les poches
              d'Ascendia se multiplièrent sur la Terre. Les frontières se
              brouillèrent. Chaque pousse devint un point d'ancrage accélérant
              le processus. Les deux mondes se superposèrent de plus en plus…
              jusqu'à ce qu'un jour, il ne doive plus en rester qu'un. Mais si
              Ascendia a fui quelque chose d'assez puissant pour presque le
              détruire… la greffe n'est peut-être pas seulement une
              échappatoire. Elle pourrait aussi être une trace.
            </span>
          </div>
        </div>

        <div
          className={`w-[80%] left-1/2 -translate-x-1/2 bottom-0 translate-y-[10%] brightness-50 opacity-70 scale-120  absolute h-[90vh]`}
        >
          <Image
            className="z-10"
            alt=""
            fill
            src={"/history/sections/s4.png"}
          />
        </div>
      </div>

      <div
        className={`w-screen relative  flex justify-start items-center z-10 h-auto min-h-screen `}
      >
        <div className="w-full gap-[2vh] flex flex-col justify-start items-center  h-[90%]">
          <div className="relative flex justify-center  flex-col">
            <span className=" font-serif72 text-center text-[clamp(1rem,5vw,2.3rem)] 3xl:text-[clamp(1rem,5vw,5rem)]!">
              Votre Éveil
            </span>

            <div className="relative mx-auto  w-[40vw] md:w-[20vw] h-[2vh] md:h-[1vw]">
              <Image alt="" fill src={"/Title Devider.png"} />
            </div>
          </div>
          <div className="  w-[90%] font-light flex  flex-col justify-center gap-[2%] items-center text-center text-[clamp(1rem,5vw,1.2rem)] lg:text-[clamp(1rem,5vw,1.6rem)] 3xl:text-[clamp(1rem,5vw,2.2rem)]!">
            <span>
              Vous incarnez un humain pris dans la Nuit de Fracture, sauvé —
              comme tous les autres — par la volonté de Manelle. Mais lorsque
              les pousses de l'Arbre-Monde commencent à diffuser le mana, une
              réalité s'impose : les humains n'ont jamais été faits pour vivre
              dans un monde magique… du moins, pas sans aide. Alors, Manelle met
              en place un Système. Invisible. Instinctif. Presque naturel. Ce
              Système guide les humains dans leur adaptation : il reconnaît
              leurs actes, mesure leurs progrès, et transforme leur survie en
              apprentissage. Chaque exploration, chaque affrontement, chaque
              risque pris au contact du mana devient une source d'expérience. Et
              à mesure que vous en accumulez, vous montez en niveau : votre
              corps s'endurcit, vos réflexes s'affinent, votre résistance au
              mana augmente. Guidé par les pousses de l'Arbre-Monde, attiré par
              les zones où la fusion est la plus active, vous comprenez que vous
              n'êtes pas seulement un survivant. Vous faites partie des premiers
              humains capables de grandir dans ce nouveau monde… et peut-être,
              d'influencer ce que deviendra la fusion lorsque la Terre et
              Ascendia ne feront plus qu'un.
            </span>
          </div>
        </div>
      </div>

      <Decouvrir
        className={
          "bg-linear-to-b from-transparent border-white/0 border mb-0 to-black"
        }
      />

      <div className="w-full z-20 bg-black h-[10vh]" />
    </div>
  );
}
