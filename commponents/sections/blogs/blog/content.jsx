"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { t } from "@/lib/i18n/translation"; // adjust path to your json file
import Link from "next/link";
export default function BlogContent({ article }) {
  const [selectedCategory, setSelectedCategory] = useState("Toutes");

  if (!article.content) return;

  const categories = [
    ...new Set(
      article.content
        .filter((article) => article.type === "heading")
        .map((p) => p.text),
    ),
  ];
  return (
    <div className="w-[95%] relative gap-2.5  min-h-[10svh] ">
      {/*catigory  sidebar  */}
      <div className="float-left w-full md:w-auto min-h-[30svh] md:min-h-[50svh] lg:min-h-[70svh] ">
        {" "}
        <div className="justify-center border-r border-[#A4A4A4] gap-[2svh] text-[#403E37] flex flex-col w-full md:w-[35svw] lg:w-[20svw] mr-[5svw] items-center h-[10svh] md:h-[70svh] mb-[5svh]">
          <div className="uppercase text-[clamp(1rem,7dvw,1.7rem)] md:text-[clamp(1rem,3dvw,1.2rem)] font-semibold w-[90%]">
            Les Titres
          </div>
          <div className="w-[80%] flex flex-col gap-[0.8rem]">
            {categories.map((category) => (
              <Link
                key={category}
                href={`#${category}`}
                className={`w-full flex flex-row md:text-[clamp(0.7rem,3dvw,0.9rem)] lg:text-[clamp(0.8rem,3dvw,1rem)] lowercase text-start cursor-pointer items-center gap-2 ${
                  selectedCategory === category
                    ? "text-[#A47B27] font-semibold"
                    : ""
                }`}
              >
                {" "}
                <div className="w-1 rotate-45 shrink-0 h-1 bg-[#C8AA6E]" />{" "}
                <span className="border-b leading-none">{category}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/*content    */}
      <div className="w-[100%]  text-black  min-h-full">
        {article.content.map((block, index) => {
          switch (block.type) {
            case "paragraph":
              return (
                <p key={index} className="mb-6 text-lg leading-8">
                  {" "}
                  {block.text}{" "}
                </p>
              );
            case "heading":
              return (
                <h2
                  id={block.text}
                  key={index}
                  className="mb-6 mt-14 scroll-mt-24  font-bold text-[clamp(1rem,5svw,1.5rem)] tracking-wide md:text-3xl"
                >
                  {" "}
                  {block.text}{" "}
                </h2>
              );
            case "image":
              return (
                <figure
                  key={index}
                  className="my-12  flex justify-center flex-col items-center overflow-hidden rounded-2xl"
                >
                  {" "}
                  <Image
                    src={block.src}
                    alt={block.alt || ""}
                    width={600}
                    height={335}
                    className="h-auto rounded-2xl object-cover"
                  />{" "}
                  {block.alt && (
                    <figcaption className="mt-3 text-center text-sm text-zinc-500">
                      {" "}
                      {block.alt}{" "}
                    </figcaption>
                  )}{" "}
                </figure>
              );
            case "quote":
              return (
                <blockquote
                  key={index}
                  className="my-12 border-l-4 border-black/30 bg-white/5 px-6 py-5 text-xl italic leading-8  md:text-2xl"
                >
                  {" "}
                  “{block.text}”{" "}
                </blockquote>
              );
            default:
              return null;
          }
        })}{" "}
      </div>
    </div>
  );
}
