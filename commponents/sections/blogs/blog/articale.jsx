"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Layers3, CalendarDays, Timer } from "lucide-react";
import Content from "@/commponents/sections/blogs/blog/content";
import { t } from "@/lib/i18n/translation";
import { useMainContext } from "@/lib/context/main.context";
const localeMap = {
  fr: "fr-FR",
  en: "en-US",
  ar: "ar",
};
export default function Articale({ article }) {
  const { language } = useMainContext();
  const isRTL = language === "ar";

  if (!article.content) return;

  return (
    <>
      {" "}
      {/*titel and subtitel  */}
      <div className="w-[95%] gap-2.5 flex text-background flex-col min-h-[10svh] ">
        <span className=" w-full a  text-[clamp(1.5rem,5svw,2.5rem)] leading-none font-serif72 font-semibold ">
          {" "}
          {article.title}
        </span>
        <span className="  min-w-1/2 w-full md:w-1/2 text-[clamp(1rem,4svw,1.2rem)] font-serif72 leading-none ">
          {article.subTitle}
        </span>
      </div>
      {/* artical  Image  */}
      <div className="w-[95%] gap-2.5 flex flex-col min-h-[50svh]  relative ">
        {" "}
        <Image
          unoptimized
          src={article.image}
          alt=""
          className="object-center object-cover"
          fill
        />
      </div>
      {/*artical metadata */}
      <div className="w-[95%] gap-[5%] lg:gap-0 flex flex-row text-[#A47B27] min-h-[10svh]">
        <div className="min-w-[10svw] flex self-start justify-center items-center min-h-[5svh] gap-2">
          <Layers3 size={18} strokeWidth={1.8} />
          {article.category}
        </div>

        <div className="min-w-[10svw] flex self-start justify-center items-center min-h-[5svh] gap-2">
          <CalendarDays size={18} strokeWidth={1.8} />
          {new Date(article.createdAt).toLocaleDateString(
            localeMap[language] || "en-US",
            {
              month: "long",
              day: "numeric",
              year: "numeric",
            },
          )}
        </div>

        <div className="min-w-[10svw] flex self-start justify-center items-center min-h-[5svh] gap-2">
          <Timer size={18} strokeWidth={1.8} />
          {t("blog.article.readingTimeLabel", language)} {article.readingTime}
        </div>
      </div>
      {/*artical content  */}
      <Content article={article} />
    </>
  );
}
