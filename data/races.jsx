// ============================================================
// @/data/races.js  (translated version)
//
// IMPORTANT CHANGES from the original file:
// 1. 'races' (a static array) is now 'getRaces(language)' — a FUNCTION
//    that returns the array, because the text now depends on the
//    current language. Any component importing { races } needs to
//    switch to importing { getRaces } and calling getRaces(language).
// 2. Added a stable 'id' field per race (e.g. "luminels") since the
//    original used race.name (translated text) as a React key and
//    inside .split("Les")[1]) logic in races.showcase.jsx — both
//    would break once name is translated. Use race.id for keys.
// ============================================================

import { t } from "@/lib/i18n/translation";

export function getRaces(language) {
  return [
    {
      id: "luminels",
      bg: "/races/reces-banners/Luminels.webp",
      name: t("races.data.luminels.name", language),
      diraction: "/races/luminels",
      image: "/races/races-icons/Luminels.png",
      describtion: t("races.data.luminels.description", language),
      subDescribtion: t("races.data.luminels.subDescription", language),
      content: [
        {
          title: t("races.data.luminels.content.0.title", language),
          paragraphs: [
            t("races.data.luminels.content.0.paragraphs.0", language),
            t("races.data.luminels.content.0.paragraphs.1", language),
            t("races.data.luminels.content.0.paragraphs.2", language),
            t("races.data.luminels.content.0.paragraphs.3", language),
          ],
        },
        {
          title: t("races.data.luminels.content.1.title", language),
          paragraphs: [
            t("races.data.luminels.content.1.paragraphs.0", language),
            t("races.data.luminels.content.1.paragraphs.1", language),
            t("races.data.luminels.content.1.paragraphs.2", language),
            t("races.data.luminels.content.1.paragraphs.3", language),
            t("races.data.luminels.content.1.paragraphs.4", language),
            t("races.data.luminels.content.1.paragraphs.5", language),
            t("races.data.luminels.content.1.paragraphs.6", language),
            t("races.data.luminels.content.1.paragraphs.7", language),
            t("races.data.luminels.content.1.paragraphs.8", language),
          ],
        },
        {
          title: t("races.data.luminels.content.2.title", language),
          paragraphs: [
            t("races.data.luminels.content.2.paragraphs.0", language),
            t("races.data.luminels.content.2.paragraphs.1", language),
            t("races.data.luminels.content.2.paragraphs.2", language),
            t("races.data.luminels.content.2.paragraphs.3", language),
            t("races.data.luminels.content.2.paragraphs.4", language),
          ],
        },
        {
          title: t("races.data.luminels.content.3.title", language),
          sections: [
            {
              subtitle: t(
                "races.data.luminels.content.3.sections.0.subtitle",
                language,
              ),
              paragraphs: [
                t(
                  "races.data.luminels.content.3.sections.0.paragraphs.0",
                  language,
                ),
                t(
                  "races.data.luminels.content.3.sections.0.paragraphs.1",
                  language,
                ),
                t(
                  "races.data.luminels.content.3.sections.0.paragraphs.2",
                  language,
                ),
              ],
            },
            {
              subtitle: t(
                "races.data.luminels.content.3.sections.1.subtitle",
                language,
              ),
              paragraphs: [
                t(
                  "races.data.luminels.content.3.sections.1.paragraphs.0",
                  language,
                ),
                t(
                  "races.data.luminels.content.3.sections.1.paragraphs.1",
                  language,
                ),
              ],
            },
            {
              subtitle: t(
                "races.data.luminels.content.3.sections.2.subtitle",
                language,
              ),
              paragraphs: [
                t(
                  "races.data.luminels.content.3.sections.2.paragraphs.0",
                  language,
                ),
                t(
                  "races.data.luminels.content.3.sections.2.paragraphs.1",
                  language,
                ),
                t(
                  "races.data.luminels.content.3.sections.2.paragraphs.2",
                  language,
                ),
                t(
                  "races.data.luminels.content.3.sections.2.paragraphs.3",
                  language,
                ),
              ],
            },
          ],
        },
        {
          title: t("races.data.luminels.content.4.title", language),
          paragraphs: [
            t("races.data.luminels.content.4.paragraphs.0", language),
            t("races.data.luminels.content.4.paragraphs.1", language),
            t("races.data.luminels.content.4.paragraphs.2", language),
            t("races.data.luminels.content.4.paragraphs.3", language),
            t("races.data.luminels.content.4.paragraphs.4", language),
            t("races.data.luminels.content.4.paragraphs.5", language),
            t("races.data.luminels.content.4.paragraphs.6", language),
          ],
        },
        {
          title: t("races.data.luminels.content.5.title", language),
          paragraphs: [
            t("races.data.luminels.content.5.paragraphs.0", language),
            t("races.data.luminels.content.5.paragraphs.1", language),
            t("races.data.luminels.content.5.paragraphs.2", language),
            t("races.data.luminels.content.5.paragraphs.3", language),
            t("races.data.luminels.content.5.paragraphs.4", language),
            t("races.data.luminels.content.5.paragraphs.5", language),
          ],
        },
      ],
    },
    {
      id: "varkhans",
      bg: "/races/reces-banners/varkhans.webp",
      name: t("races.data.varkhans.name", language),
      diraction: "/races/varkhans",
      image: "/races/races-icons/Varkhans.png",
      describtion: t("races.data.varkhans.description", language),
      subDescribtion: t("races.data.varkhans.subDescription", language),
      content: [
        {
          title: t("races.data.varkhans.content.0.title", language),
          paragraphs: [
            t("races.data.varkhans.content.0.paragraphs.0", language),
            t("races.data.varkhans.content.0.paragraphs.1", language),
            t("races.data.varkhans.content.0.paragraphs.2", language),
            t("races.data.varkhans.content.0.paragraphs.3", language),
            t("races.data.varkhans.content.0.paragraphs.4", language),
          ],
        },
        {
          title: t("races.data.varkhans.content.1.title", language),
          paragraphs: [
            t("races.data.varkhans.content.1.paragraphs.0", language),
            t("races.data.varkhans.content.1.paragraphs.1", language),
            t("races.data.varkhans.content.1.paragraphs.2", language),
            t("races.data.varkhans.content.1.paragraphs.3", language),
            t("races.data.varkhans.content.1.paragraphs.4", language),
          ],
        },
        {
          title: t("races.data.varkhans.content.2.title", language),
          paragraphs: [
            t("races.data.varkhans.content.2.paragraphs.0", language),
            t("races.data.varkhans.content.2.paragraphs.1", language),
            t("races.data.varkhans.content.2.paragraphs.2", language),
            t("races.data.varkhans.content.2.paragraphs.3", language),
          ],
        },
        {
          title: t("races.data.varkhans.content.3.title", language),
          paragraphs: [
            t("races.data.varkhans.content.3.paragraphs.0", language),
            t("races.data.varkhans.content.3.paragraphs.1", language),
            t("races.data.varkhans.content.3.paragraphs.2", language),
            t("races.data.varkhans.content.3.paragraphs.3", language),
            t("races.data.varkhans.content.3.paragraphs.4", language),
          ],
        },
        {
          title: t("races.data.varkhans.content.4.title", language),
          sections: [
            {
              subtitle: t(
                "races.data.varkhans.content.4.sections.0.subtitle",
                language,
              ),
              paragraphs: [
                t(
                  "races.data.varkhans.content.4.sections.0.paragraphs.0",
                  language,
                ),
                t(
                  "races.data.varkhans.content.4.sections.0.paragraphs.1",
                  language,
                ),
                t(
                  "races.data.varkhans.content.4.sections.0.paragraphs.2",
                  language,
                ),
                t(
                  "races.data.varkhans.content.4.sections.0.paragraphs.3",
                  language,
                ),
              ],
            },
            {
              subtitle: t(
                "races.data.varkhans.content.4.sections.1.subtitle",
                language,
              ),
              paragraphs: [
                t(
                  "races.data.varkhans.content.4.sections.1.paragraphs.0",
                  language,
                ),
                t(
                  "races.data.varkhans.content.4.sections.1.paragraphs.1",
                  language,
                ),
                t(
                  "races.data.varkhans.content.4.sections.1.paragraphs.2",
                  language,
                ),
                t(
                  "races.data.varkhans.content.4.sections.1.paragraphs.3",
                  language,
                ),
              ],
            },
            {
              subtitle: t(
                "races.data.varkhans.content.4.sections.2.subtitle",
                language,
              ),
              paragraphs: [
                t(
                  "races.data.varkhans.content.4.sections.2.paragraphs.0",
                  language,
                ),
                t(
                  "races.data.varkhans.content.4.sections.2.paragraphs.1",
                  language,
                ),
                t(
                  "races.data.varkhans.content.4.sections.2.paragraphs.2",
                  language,
                ),
                t(
                  "races.data.varkhans.content.4.sections.2.paragraphs.3",
                  language,
                ),
              ],
            },
          ],
        },
        {
          title: t("races.data.varkhans.content.5.title", language),
          paragraphs: [
            t("races.data.varkhans.content.5.paragraphs.0", language),
            t("races.data.varkhans.content.5.paragraphs.1", language),
            t("races.data.varkhans.content.5.paragraphs.2", language),
            t("races.data.varkhans.content.5.paragraphs.3", language),
            t("races.data.varkhans.content.5.paragraphs.4", language),
          ],
        },
        {
          title: t("races.data.varkhans.content.6.title", language),
          sections_type2: [
            {
              subtitle: "",
              paragraphs: [],
              paragraphs_type2: [
                t(
                  "races.data.varkhans.content.6.sections_type2.0.paragraphs_type2.0",
                  language,
                ),
                t(
                  "races.data.varkhans.content.6.sections_type2.0.paragraphs_type2.1",
                  language,
                ),
              ],
            },
            {
              subtitle: t(
                "races.data.varkhans.content.6.sections_type2.1.subtitle",
                language,
              ),
              paragraphs: [
                t(
                  "races.data.varkhans.content.6.sections_type2.1.paragraphs.0",
                  language,
                ),
              ],
            },
            {
              subtitle: t(
                "races.data.varkhans.content.6.sections_type2.2.subtitle",
                language,
              ),
              paragraphs: [
                t(
                  "races.data.varkhans.content.6.sections_type2.2.paragraphs.0",
                  language,
                ),
              ],
            },
          ],
        },
      ],
    },
    {
      id: "sylvérides",
      bg: "/races/reces-banners/Sylvérides.webp",
      name: t("races.data.sylverides.name", language),
      diraction: "/races/sylvérides",
      image: "/races/races-icons/Sylvérides.png",
      describtion: t("races.data.sylverides.description", language),
      subDescribtion: t("races.data.sylverides.subDescription", language),
      content: [
        {
          title: t("races.data.sylverides.content.0.title", language),
          paragraphs: [
            t("races.data.sylverides.content.0.paragraphs.0", language),
            t("races.data.sylverides.content.0.paragraphs.1", language),
            t("races.data.sylverides.content.0.paragraphs.2", language),
            t("races.data.sylverides.content.0.paragraphs.3", language),
            t("races.data.sylverides.content.0.paragraphs.4", language),
            t("races.data.sylverides.content.0.paragraphs.5", language),
            t("races.data.sylverides.content.0.paragraphs.6", language),
            t("races.data.sylverides.content.0.paragraphs.7", language),
          ],
        },
        {
          title: t("races.data.sylverides.content.1.title", language),
          paragraphs: [
            t("races.data.sylverides.content.1.paragraphs.0", language),
            t("races.data.sylverides.content.1.paragraphs.1", language),
            t("races.data.sylverides.content.1.paragraphs.2", language),
            t("races.data.sylverides.content.1.paragraphs.3", language),
            t("races.data.sylverides.content.1.paragraphs.4", language),
          ],
        },
        {
          title: t("races.data.sylverides.content.2.title", language),
          sections: [
            {
              subtitle: "",
              paragraphs: [
                t(
                  "races.data.sylverides.content.2.sections.0.paragraphs.0",
                  language,
                ),
              ],
            },
            {
              subtitle: "",
              paragraphs: [
                t(
                  "races.data.sylverides.content.2.sections.1.paragraphs.0",
                  language,
                ),
              ],
            },
            {
              subtitle: t(
                "races.data.sylverides.content.2.sections.2.subtitle",
                language,
              ),
              paragraphs: [
                t(
                  "races.data.sylverides.content.2.sections.2.paragraphs.0",
                  language,
                ),
              ],
            },
            {
              subtitle: t(
                "races.data.sylverides.content.2.sections.3.subtitle",
                language,
              ),
              paragraphs: [
                t(
                  "races.data.sylverides.content.2.sections.3.paragraphs.0",
                  language,
                ),
              ],
            },
            {
              subtitle: t(
                "races.data.sylverides.content.2.sections.4.subtitle",
                language,
              ),
              paragraphs: [
                t(
                  "races.data.sylverides.content.2.sections.4.paragraphs.0",
                  language,
                ),
              ],
            },
            {
              subtitle: t(
                "races.data.sylverides.content.2.sections.5.subtitle",
                language,
              ),
              paragraphs: [
                t(
                  "races.data.sylverides.content.2.sections.5.paragraphs.0",
                  language,
                ),
              ],
            },
            {
              subtitle: "",
              paragraphs: [
                t(
                  "races.data.sylverides.content.2.sections.6.paragraphs.0",
                  language,
                ),
              ],
            },
          ],
        },
        {
          title: t("races.data.sylverides.content.3.title", language),
          sections: [
            {
              subtitle: "",
              paragraphs: [
                t(
                  "races.data.sylverides.content.3.sections.0.paragraphs.0",
                  language,
                ),
                t(
                  "races.data.sylverides.content.3.sections.0.paragraphs.1",
                  language,
                ),
              ],
            },
            {
              subtitle: t(
                "races.data.sylverides.content.3.sections.1.subtitle",
                language,
              ),
              paragraphs: [
                t(
                  "races.data.sylverides.content.3.sections.1.paragraphs.0",
                  language,
                ),
              ],
            },
          ],
        },
        {
          title: t("races.data.sylverides.content.4.title", language),
          sections: [
            {
              subtitle: t(
                "races.data.sylverides.content.4.sections.0.subtitle",
                language,
              ),
              paragraphs: [
                t(
                  "races.data.sylverides.content.4.sections.0.paragraphs.0",
                  language,
                ),
              ],
            },
            {
              subtitle: t(
                "races.data.sylverides.content.4.sections.1.subtitle",
                language,
              ),
              paragraphs: [
                t(
                  "races.data.sylverides.content.4.sections.1.paragraphs.0",
                  language,
                ),
              ],
            },
            {
              subtitle: t(
                "races.data.sylverides.content.4.sections.2.subtitle",
                language,
              ),
              paragraphs: [
                t(
                  "races.data.sylverides.content.4.sections.2.paragraphs.0",
                  language,
                ),
                t(
                  "races.data.sylverides.content.4.sections.2.paragraphs.1",
                  language,
                ),
              ],
            },
          ],
        },
        {
          title: t("races.data.sylverides.content.5.title", language),
          paragraphs: [
            t("races.data.sylverides.content.5.paragraphs.0", language),
            t("races.data.sylverides.content.5.paragraphs.1", language),
            t("races.data.sylverides.content.5.paragraphs.2", language),
            t("races.data.sylverides.content.5.paragraphs.3", language),
            t("races.data.sylverides.content.5.paragraphs.4", language),
          ],
        },
        {
          title: t("races.data.sylverides.content.6.title", language),
          paragraphs: [
            t("races.data.sylverides.content.6.paragraphs.0", language),
            t("races.data.sylverides.content.6.paragraphs.1", language),
            t("races.data.sylverides.content.6.paragraphs.2", language),
          ],
        },
        {
          title: t("races.data.sylverides.content.7.title", language),
          paragraphs: [
            t("races.data.sylverides.content.7.paragraphs.0", language),
            t("races.data.sylverides.content.7.paragraphs.1", language),
            t("races.data.sylverides.content.7.paragraphs.2", language),
            t("races.data.sylverides.content.7.paragraphs.4", language),
            t("races.data.sylverides.content.7.paragraphs.6", language),
            t("races.data.sylverides.content.7.paragraphs.7", language),
          ],
        },
      ],
    },
    {
      id: "aetherïns",
      bg: "/races/reces-banners/Aetherïns.webp",
      name: t("races.data.aetherins.name", language),
      diraction: "/races/aetherïns",
      image: "/races/races-icons/Aetherïns.png",
      describtion: t("races.data.aetherins.description", language),
      subDescribtion: t("races.data.aetherins.subDescription", language),
      content: [
        {
          title: t("races.data.aetherins.content.0.title", language),
          paragraphs: [
            t("races.data.aetherins.content.0.paragraphs.0", language),
            t("races.data.aetherins.content.0.paragraphs.1", language),
            t("races.data.aetherins.content.0.paragraphs.2", language),
            t("races.data.aetherins.content.0.paragraphs.3", language),
            t("races.data.aetherins.content.0.paragraphs.4", language),
          ],
        },
        {
          title: t("races.data.aetherins.content.1.title", language),
          paragraphs: [
            t("races.data.aetherins.content.1.paragraphs.0", language),
            t("races.data.aetherins.content.1.paragraphs.1", language),
            t("races.data.aetherins.content.1.paragraphs.2", language),
            t("races.data.aetherins.content.1.paragraphs.3", language),
            t("races.data.aetherins.content.1.paragraphs.4", language),
            t("races.data.aetherins.content.1.paragraphs.5", language),
          ],
        },
        {
          title: t("races.data.aetherins.content.2.title", language),
          sections: [
            {
              subtitle: "",
              paragraphs: [
                t(
                  "races.data.aetherins.content.2.sections.0.paragraphs.0",
                  language,
                ),
              ],
            },
            {
              subtitle: "",
              paragraphs: [
                t(
                  "races.data.aetherins.content.2.sections.1.paragraphs.0",
                  language,
                ),
              ],
            },
            {
              subtitle: t(
                "races.data.aetherins.content.2.sections.2.subtitle",
                language,
              ),
              paragraphs: [
                t(
                  "races.data.aetherins.content.2.sections.2.paragraphs.0",
                  language,
                ),
              ],
            },
            {
              subtitle: t(
                "races.data.aetherins.content.2.sections.3.subtitle",
                language,
              ),
              paragraphs: [
                t(
                  "races.data.aetherins.content.2.sections.3.paragraphs.0",
                  language,
                ),
              ],
            },
            {
              subtitle: t(
                "races.data.aetherins.content.2.sections.4.subtitle",
                language,
              ),
              paragraphs: [
                t(
                  "races.data.aetherins.content.2.sections.4.paragraphs.0",
                  language,
                ),
              ],
            },
            {
              subtitle: t(
                "races.data.aetherins.content.2.sections.5.subtitle",
                language,
              ),
              paragraphs: [
                t(
                  "races.data.aetherins.content.2.sections.5.paragraphs.0",
                  language,
                ),
              ],
            },
          ],
        },
        {
          title: t("races.data.aetherins.content.3.title", language),
          sections: [
            {
              subtitle: "",
              paragraphs: [
                t(
                  "races.data.aetherins.content.3.sections.0.paragraphs.0",
                  language,
                ),
              ],
            },
            {
              subtitle: "",
              paragraphs: [
                t(
                  "races.data.aetherins.content.3.sections.1.paragraphs.0",
                  language,
                ),
              ],
            },
            {
              subtitle: t(
                "races.data.aetherins.content.3.sections.2.subtitle",
                language,
              ),
              paragraphs: [
                t(
                  "races.data.aetherins.content.3.sections.2.paragraphs.0",
                  language,
                ),
              ],
            },
            {
              subtitle: "",
              paragraphs: [
                t(
                  "races.data.aetherins.content.3.sections.3.paragraphs.0",
                  language,
                ),
              ],
            },
          ],
        },
        {
          title: t("races.data.aetherins.content.4.title", language),
          sections: [
            {
              subtitle: t(
                "races.data.aetherins.content.4.sections.0.subtitle",
                language,
              ),
              paragraphs: [
                t(
                  "races.data.aetherins.content.4.sections.0.paragraphs.0",
                  language,
                ),
              ],
            },
            {
              subtitle: t(
                "races.data.aetherins.content.4.sections.1.subtitle",
                language,
              ),
              paragraphs: [
                t(
                  "races.data.aetherins.content.4.sections.1.paragraphs.0",
                  language,
                ),
              ],
            },
            {
              subtitle: t(
                "races.data.aetherins.content.4.sections.2.subtitle",
                language,
              ),
              paragraphs: [
                t(
                  "races.data.aetherins.content.4.sections.2.paragraphs.0",
                  language,
                ),
              ],
            },
          ],
        },
        {
          title: t("races.data.aetherins.content.5.title", language),
          paragraphs: [
            t("races.data.aetherins.content.5.paragraphs.0", language),
            t("races.data.aetherins.content.5.paragraphs.1", language),
            t("races.data.aetherins.content.5.paragraphs.2", language),
            t("races.data.aetherins.content.5.paragraphs.3", language),
            t("races.data.aetherins.content.5.paragraphs.4", language),
          ],
        },
        {
          title: t("races.data.aetherins.content.6.title", language),
          paragraphs: [
            t("races.data.aetherins.content.6.paragraphs.0", language),
            t("races.data.aetherins.content.6.paragraphs.1", language),
            t("races.data.aetherins.content.6.paragraphs.2", language),
            t("races.data.aetherins.content.6.paragraphs.3", language),
          ],
        },
        {
          title: t("races.data.aetherins.content.7.title", language),
          paragraphs: [
            t("races.data.aetherins.content.7.paragraphs.0", language),
            t("races.data.aetherins.content.7.paragraphs.1", language),
            t("races.data.aetherins.content.7.paragraphs.2", language),
            t("races.data.aetherins.content.7.paragraphs.3", language),
            t("races.data.aetherins.content.7.paragraphs.4", language),
          ],
        },
      ],
    },
    {
      id: "brumecrocs",
      bg: "/races/reces-banners/Brumecrocs.webp",
      name: t("races.data.brumecrocs.name", language),
      diraction: "/races/brumecrocs",
      image: "/races/races-icons/Brumecrocs.png",
      describtion: t("races.data.brumecrocs.description", language),
      subDescribtion: t("races.data.brumecrocs.subDescription", language),
      content: [
        {
          title: t("races.data.brumecrocs.content.0.title", language),
          paragraphs: [
            t("races.data.brumecrocs.content.0.paragraphs.0", language),
            t("races.data.brumecrocs.content.0.paragraphs.1", language),
            t("races.data.brumecrocs.content.0.paragraphs.2", language),
            t("races.data.brumecrocs.content.0.paragraphs.3", language),
            t("races.data.brumecrocs.content.0.paragraphs.4", language),
            t("races.data.brumecrocs.content.0.paragraphs.5", language),
            t("races.data.brumecrocs.content.0.paragraphs.6", language),
          ],
        },
        {
          title: t("races.data.brumecrocs.content.1.title", language),
          paragraphs: [
            t("races.data.brumecrocs.content.1.paragraphs.0", language),
            t("races.data.brumecrocs.content.1.paragraphs.1", language),
            t("races.data.brumecrocs.content.1.paragraphs.2", language),
            t("races.data.brumecrocs.content.1.paragraphs.3", language),
          ],
        },
        {
          title: t("races.data.brumecrocs.content.2.title", language),
          paragraphs: [
            t("races.data.brumecrocs.content.2.paragraphs.0", language),
            t("races.data.brumecrocs.content.2.paragraphs.1", language),
          ],
        },
        {
          title: t("races.data.brumecrocs.content.3.title", language),
          paragraphs: [
            t("races.data.brumecrocs.content.3.paragraphs.0", language),
            t("races.data.brumecrocs.content.3.paragraphs.1", language),
            t("races.data.brumecrocs.content.3.paragraphs.2", language),
          ],
        },
        {
          title: t("races.data.brumecrocs.content.4.title", language),
          sections: [
            {
              subtitle: t(
                "races.data.brumecrocs.content.4.sections.0.subtitle",
                language,
              ),
              paragraphs: [
                t(
                  "races.data.brumecrocs.content.4.sections.0.paragraphs.0",
                  language,
                ),
              ],
            },
            {
              subtitle: t(
                "races.data.brumecrocs.content.4.sections.1.subtitle",
                language,
              ),
              paragraphs: [
                t(
                  "races.data.brumecrocs.content.4.sections.1.paragraphs.0",
                  language,
                ),
              ],
            },
            {
              subtitle: t(
                "races.data.brumecrocs.content.4.sections.2.subtitle",
                language,
              ),
              paragraphs: [
                t(
                  "races.data.brumecrocs.content.4.sections.2.paragraphs.0",
                  language,
                ),
              ],
            },
          ],
        },
        {
          title: t("races.data.brumecrocs.content.5.title", language),
          paragraphs: [
            t("races.data.brumecrocs.content.5.paragraphs.0", language),
            t("races.data.brumecrocs.content.5.paragraphs.1", language),
            t("races.data.brumecrocs.content.5.paragraphs.2", language),
            t("races.data.brumecrocs.content.5.paragraphs.3", language),
          ],
        },
        {
          title: t("races.data.brumecrocs.content.6.title", language),
          paragraphs: [
            t("races.data.brumecrocs.content.6.paragraphs.0", language),
            t("races.data.brumecrocs.content.6.paragraphs.1", language),
            t("races.data.brumecrocs.content.6.paragraphs.2", language),
          ],
        },
        {
          title: t("races.data.brumecrocs.content.7.title", language),
          paragraphs: [
            t("races.data.brumecrocs.content.7.paragraphs.0", language),
            t("races.data.brumecrocs.content.7.paragraphs.1", language),
            t("races.data.brumecrocs.content.7.paragraphs.2", language),
            t("races.data.brumecrocs.content.7.paragraphs.3", language),
          ],
        },
      ],
    },
  ];
}
