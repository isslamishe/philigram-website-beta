"use client";

import Image from "next/image";
import { useState } from "react";
import { t } from "@/lib/i18n/translation"; // adjust path to your json file
import { useMainContext } from "@/lib/context/main.context";
import Link from "next/link";
import { motion } from "framer-motion";

const localeMap = {
  fr: "fr-FR",
  en: "en-US",
  ar: "ar",
};

// "game-design" -> "game design"
function prettify(slug) {
  return String(slug ?? "").replace(/[-_]/g, " ");
}

// Use the translation if it exists, otherwise fall back to the raw slug.
function label(key, slug, language) {
  const out = t(key, language);
  return out && out !== key ? out : prettify(slug);
}

export default function BlogsSection({ articles = [] }) {
  const { language } = useMainContext();
  const isRTL = language === "ar";

  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTopic, setSelectedTopic] = useState("all");

  function ShowAll() {
    setShowAll((prev) => !prev);
  }

  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
  );

  const filteredArticles = sortedArticles.filter((article) => {
    const categoryMatch =
      selectedCategory === "all" || article.category === selectedCategory;

    const topicMatch =
      selectedTopic === "all" || (article.topic ?? []).includes(selectedTopic);

    return categoryMatch && topicMatch;
  });

  const displayedArticles = showAll
    ? filteredArticles
    : filteredArticles.slice(0, 3);

  const categoryIds = [
    ...new Set(articles.map((article) => article.category).filter(Boolean)),
  ];
  const topicIds = [
    ...new Set(articles.flatMap((article) => article.topic ?? [])),
  ];

  const arrow = isRTL ? "⟵" : "➜";

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className="flex flex-col-reverse md:flex-row py-[10svh] gap-0 bg-no-repeat justify-center items-center md:items-start bg-cover bg-center relative w-screen h-auto min-h-svh"
    >
      {/*articles highlights */}
      <div className="w-9/10 overflow-hidden md:w-[65%] flex md:items-start items-center flex-col gap-5 h-auto min-h-svh">
        <div className="w-[95%] md:w-full h-auto flex flex-row items-center gap-[2%] text-[#A47B27] md:text-[clamp(1.4rem,5dvw,1.7rem)] lg:text-[clamp(2rem,5dvw,2.1rem)] font-serif72 font-semibold uppercase">
          <div className="w-2 h-2 md:w-3 rotate-45 shrink-0 md:h-3 bg-[#C8AA6E]" />
          <span>{t("blog.section.newBadge", language)}</span>
        </div>

        <div className="min-h-[90svh] gap-[5svh] w-full md:items-start items-center lg:w-9/10 h-auto flex flex-col">
          {displayedArticles.length === 0 && (
            <p className="text-[#403E37]">
              {t("blog.section.noArticles", language) !==
              "blog.section.noArticles"
                ? t("blog.section.noArticles", language)
                : "—"}
            </p>
          )}

          {displayedArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-[100%] md:w-[95%] lg:w-[85%] h-[30svh] md:h-[25svh] gap-5 border-b items-start border-[#C8AA6E] flex flex-row"
            >
              {/*article image */}
              <div className="w-[40svw] md:w-[10svw] aspect-square md:self-start relative shrink-0">
                {article.image && (
                  <Image
                    unoptimized
                    fill
                    alt={article.title ?? ""}
                    src={article.image}
                    className="object-center object-cover"
                  />
                )}
              </div>

              {/*article data */}
              <div className="w-auto p-0 h-9/10 flex flex-col justify-evenly relative flex-1 shrink-0">
                <div className="w-full text-[clamp(0.7rem,4dvw,0.8rem)] md:text-[clamp(0.8rem,4dvw,1rem)] lg:text-[clamp(1rem,4dvw,1.2rem)] text-[#403E37] font-serif72 font-bold">
                  <span>{article.title}</span>
                </div>

                <div className="w-full text-[clamp(0.5rem,2dvw,0.6rem)] md:text-[clamp(0.5rem,2dvw,0.6rem)] lg:text-[clamp(0.6rem,3dvw,0.8rem)] xl:text-[clamp(0.8rem,3dvw,0.9rem)] text-[#403E37]">
                  <span>{article.description}</span>
                </div>

                <div className="w-full text-[clamp(0.4rem,3dvw,0.5rem)] md:text-[clamp(0.4rem,3dvw,0.6rem)] lg:text-[clamp(0.8rem,3dvw,0.9rem)] flex flex-row justify-between text-[#403E37]">
                  <div className="flex items-center justify-evenly gap-0.5 md:gap-2 flex-row">
                    <div className="border border-[#C8AA6E] px-1 py-0.5 md:px-1.5 md:py-1 text-[#C8AA6E] uppercase md:text-[clamp(0.4rem,3dvw,0.6rem)] text-[clamp(0.35rem,3dvw,0.38rem)] lg:text-[clamp(0.7rem,1dvw,0.8rem)]">
                      {label(
                        `blog.categories.${article.category}`,
                        article.category,
                        language,
                      )}
                    </div>

                    <div className="w-0.5 md:w-1 rotate-45 shrink-0 h-0.5 md:h-1 bg-[#C8AA6E]" />
                    <div className="px-1.5 py-1 uppercase md:text-[clamp(0.4rem,3dvw,0.6rem)] text-[clamp(0.4rem,3dvw,0.45rem)] lg:text-[clamp(0.7rem,1dvw,0.8rem)]">
                      {new Date(article.createdAt).toLocaleDateString(
                        localeMap[language] || "fr-FR",
                        {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        },
                      )}
                    </div>
                  </div>

                  <Link
                    href={`/blog/${article.id}`}
                    className="text-[#C8AA6E] border-b border-[#C8AA6E] leading-none text-center justify-center flex items-center p-0"
                  >
                    <span>{t("blog.articles.buttonText", language)}</span>
                    <span>{arrow}</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredArticles.length > 3 && (
          <div className="w-[100%] md:w-[95%] lg:w-[85%] justify-center items-center flex">
            <button
              onClick={ShowAll}
              className="w-8/10 cursor-pointer text-[#C8AA6E] text-center text-[clamp(1rem,5dvw,1.3rem)] md:text-[clamp(1.2rem,5dvw,1.5rem)] uppercase flex justify-center"
            >
              {showAll ? (
                <span className="w-8/10">
                  {t("blog.section.showLess", language)}
                </span>
              ) : (
                <span className="w-8/10 shrink-0">
                  {t("blog.section.showMore", language)}
                </span>
              )}
            </button>
          </div>
        )}
      </div>

      {/*sticky sidebar */}
      <div className="w-9/10 md:w-[25%] min-h-[50svh] top-[20%] flex relative md:sticky border-[#969696]/50">
        <div className="flex flex-col border-s-2 pb-[10svh] gap-[10svh] w-full h-auto min-h-[50svh]">
          {/*categories */}
          <div className="justify-center gap-[2svh] items-center flex-col flex">
            <div className="flex gap-[4%] border-b border-[#C8AA6E] text-[#A47B27] w-9/10 font-semibold text-[clamp(1rem,3dvw,1.3rem)] py-[2%] items-center font-serif72 flex-row">
              <div className="w-2 rotate-45 shrink-0 h-2 bg-[#C8AA6E]" />
              <span>{t("blog.section.exploreLabel", language)}</span>
            </div>

            <div className="justify-center gap-[2svh] text-[#403E37] flex flex-col items-center w-[90%] h-auto">
              <div className="uppercase text-[clamp(1rem,3dvw,1.2rem)] font-semibold w-[90%]">
                {t("blog.section.categoriesLabel", language)}
              </div>
              <div className="w-[80%] flex flex-col gap-[0.8rem]">
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSelectedTopic("all");
                    setShowAll(false);
                  }}
                  className={`w-full cursor-pointer flex flex-row items-center gap-2 ${
                    selectedCategory === "all"
                      ? "text-[#A47B27] font-semibold"
                      : ""
                  }`}
                >
                  <div className="w-1 rotate-45 shrink-0 h-1 bg-[#C8AA6E]" />
                  <span className="border-b leading-none">
                    {t("blog.section.allCategories", language)}
                  </span>
                </button>

                {categoryIds.map((categoryId) => (
                  <button
                    key={categoryId}
                    onClick={() => {
                      setSelectedCategory(categoryId);
                      setShowAll(false);
                    }}
                    className={`w-full flex flex-row cursor-pointer items-center gap-2 ${
                      selectedCategory === categoryId
                        ? "text-[#A47B27] font-semibold"
                        : ""
                    }`}
                  >
                    <div className="w-1 rotate-45 shrink-0 h-1 bg-[#C8AA6E]" />
                    <span className="border-b leading-none">
                      {label(
                        `blog.categories.${categoryId}`,
                        categoryId,
                        language,
                      )}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/*topics */}
          <div className="justify-center gap-[2svh] items-center flex-col flex">
            <div className="flex gap-[4%] border-b border-[#C8AA6E] text-[#A47B27] w-9/10 font-semibold text-[clamp(1rem,3dvw,1.3rem)] py-[2%] items-center font-serif72 flex-row">
              <div className="w-2 rotate-45 shrink-0 h-2 bg-[#C8AA6E]" />
              <span>{t("blog.section.topicLabel", language)}</span>
            </div>

            <div className="justify-center gap-[2svh] text-[#403E37] flex flex-col items-center w-[90%] h-auto">
              <div className="w-[80%] flex flex-col gap-[0.8rem]">
                <button
                  onClick={() => {
                    setSelectedTopic("all");
                    setShowAll(false);
                  }}
                  className={`w-full cursor-pointer flex flex-row items-center gap-2 ${
                    selectedTopic === "all"
                      ? "text-[#A47B27] font-semibold"
                      : "text-[#C8AA6E]"
                  }`}
                >
                  <span className="border-b leading-none">
                    .# {t("blog.section.allTopics", language)}
                  </span>
                </button>

                {topicIds.map((topicId) => (
                  <button
                    key={topicId}
                    onClick={() => {
                      setSelectedTopic(topicId);
                      setShowAll(false);
                    }}
                    className={`w-full flex flex-row cursor-pointer items-center gap-2 ${
                      selectedTopic === topicId
                        ? "text-[#A47B27] font-semibold"
                        : "text-[#C8AA6E]"
                    }`}
                  >
                    <span className="border-b leading-none">
                      .#{label(`blog.topics.${topicId}`, topicId, language)}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
