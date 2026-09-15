"use client";

import { useMemo } from "react";
import Hero from "@/commponents/sections/races/race commponents/hero.jsx";
import Content from "@/commponents/sections/races/race commponents/content.jsx";
import SwitchButtons from "@/commponents/sections/races/race commponents/switch.buttons.jsx";
import { useMainContext } from "@/lib/context/main.context";
import { getRaces } from "@/data/races.jsx";
import { useParams } from "next/navigation";

export default function Races() {
  const { language } = useMainContext();
  const { id } = useParams();

  const race = useMemo(() => {
    if (!id) return null;

    const decodedId = decodeURIComponent(id).trim().toLowerCase();

    return getRaces(language).find((r) => r.id === decodedId);
  }, [id, language]);

  if (!race) {
    return (
      <div className="flex flex-col overflow-hidden justify-end bg-black gap-0 bg-no-repeat bg-cover bg-center relative w-screen min-h-screen"></div>
    );
  }

  return (
    <div className="flex flex-col overflow-hidden justify-end bg-black gap-0 bg-no-repeat bg-cover bg-center relative w-screen min-h-screen">
      <Hero race={race} />

      <Content content={race.content} />

      <SwitchButtons currentRace={race} races={getRaces(language)} />
    </div>
  );
}
