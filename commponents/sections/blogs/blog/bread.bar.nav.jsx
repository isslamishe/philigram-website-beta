"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { t } from "@/lib/i18n/translation"; // adjust path to your json file
import { useMainContext } from "@/lib/context/main.context";
import Link from "next/link";

export default function BlogContent({ article }) {
  const { language } = useMainContext();
  const isRTL = language === "ar";

  if (!article.content) return;

  const breadBarNav = [
    { name: t("blog.breadcrumb.news", language), path: "/" },
    { name: t("blog.breadcrumb.announcements", language), path: "/blog" },
    { name: article.title, path: `/blog/${article.id}` },
  ];

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className=" w-[95%] flex flex-row text-[clamp(0.4rem,4svw,0.5rem)] md:text-[clamp(0.6rem,4svw,0.7rem)]  lg:text-[clamp(0.6rem,4svw,0.9rem)] gap-0 justify-start items-center h-[7svh] "
    >
      <Link href={"/"} className=" w-4 md:w-6 relative aspect-square">
        <Image unoptimized src={"/blog/Home.svg"} fill alt="" />
      </Link>
      {breadBarNav.map((nav, idx) => (
        <Link
          key={nav.path}
          href={nav.path}
          className=" items-center flex justify-center text-center gap-1 text-[#C8AA6E]"
        >
          <div
            className={`w-5 relative aspect-square ${isRTL ? "rotate-180" : ""}`}
          >
            <Image unoptimized src={"/blog/Forward.svg"} fill alt="" />
          </div>
          <span
            className={`  ${idx + 1 == breadBarNav.length ? "text-black" : "text-[#C8AA6E]"}`}
          >
            {nav.name}
          </span>
        </Link>
      ))}
    </div>
  );
}
