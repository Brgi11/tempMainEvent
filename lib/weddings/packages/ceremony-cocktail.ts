import { WEDDING_PACKAGE_IMAGES } from "../constants";
import type { WeddingPackage } from "../types";

export const CEREMONY_COCKTAIL_WEDDING_PACKAGES: WeddingPackage[] = [
  {
    id: "due-ricce",
    slug: "due-ricce",
    sectionId: "ceremony-cocktail-music",
    name: { en: "DUE RICCE", hr: "DUE RICCE" },
    cardDescription: {
      en: "Timeless live piano and violin for your ceremony and cocktail hour.",
      hr: "Bezvremenska live izvedba klavira i violine za ceremoniju i cocktail sat.",
    },
    bestFor: {
      en: "Couples who want elegant live strings and piano for ceremony and cocktail hour.",
      hr: "Parovi koji žele elegantan live klavir i violinu za ceremoniju i cocktail sat.",
    },
    priceLabel: { en: "From €650", hr: "Od €650" },
    imageUrl: WEDDING_PACKAGE_IMAGES.dueRicce,
    detail: {
      intro: {
        en: "Timeless live music for your wedding ceremony and cocktail hour, performed by Due Ricce, an elegant piano and violin duo dedicated to creating a truly emotional and refined atmosphere. Their repertoire can be tailored to your preferences, bringing warmth, sophistication, and a cinematic quality to the most meaningful moments of your day.",
        hr: "Bezvremenska live glazba za vašu vjenčanu ceremoniju i cocktail sat u izvedbi Due Ricce, elegantnog dueta klavira i violine posvećenog stvaranju emotivne i profinjene atmosfere. Repertoar se prilagođava vašim željama i donosi toplinu, sofisticiranost i filmsku kvalitetu najvažnijim trenucima dana.",
      },
      blocks: [
        {
          title: { en: "Ceremony", hr: "Ceremonija" },
          items: {
            en: [
              "From €650",
              "30-minute live performance",
              "Violin & piano duo",
              "Personalized song selection available",
            ],
            hr: [
              "Od €650",
              "30-minutna live izvedba",
              "Violina i klavir duo",
              "Moguć personalizirani odabir pjesama",
            ],
          },
        },
        {
          title: { en: "Cocktail hour", hr: "Cocktail sat" },
          items: {
            en: [
              "From €750",
              "1-hour live performance",
              "Violin & piano duo",
              "Professional sound setup",
              "Curated cocktail hour atmosphere",
            ],
            hr: [
              "Od €750",
              "1 sat live izvedbe",
              "Violina i klavir duo",
              "Profesionalni sound setup",
              "Kurirana atmosfera cocktail sata",
            ],
          },
        },
      ],
    },
  },
  {
    id: "solo-instrumentalist",
    slug: "solo-instrumentalist",
    sectionId: "ceremony-cocktail-music",
    name: {
      en: "SOLO INSTRUMENTALIST (SAX, VIOLIN, GUITAR, PIANO)",
      hr: "SOLO INSTRUMENTALIST (SAKS, VIOLINA, GITARA, KLAVIR)",
    },
    cardDescription: {
      en: "Solo instrumental performance for your ceremony and cocktail hour.",
      hr: "Solo instrumentalna izvedba za ceremoniju i cocktail sat.",
    },
    bestFor: {
      en: "Couples who want a refined solo instrument for ceremony or cocktail hour.",
      hr: "Parovi koji žele profinjeni solo instrument za ceremoniju ili cocktail sat.",
    },
    priceLabel: { en: "From €500", hr: "Od €500" },
    imageUrl: WEDDING_PACKAGE_IMAGES.soloInstrumentalist,
    detail: {
      intro: {
        en: "A live solo instrumental performance by your choice of saxophone, violin, guitar, or piano, designed to enhance your wedding ceremony and cocktail hour with subtle emotion and refined simplicity. Each performance is shaped to follow the flow of your celebration, with a selection of pieces tailored to your preferences.",
        hr: "Live solo instrumentalna izvedba po izboru (saksofon, violina, gitara ili klavir) koja ceremoniji i cocktail satu donosi suptilnu emociju i profinjenu jednostavnost, uz repertoar prilagođen vašim željama.",
      },
      blocks: [
        {
          title: { en: "Ceremony", hr: "Ceremonija" },
          items: {
            en: [
              "From €500",
              "30-minute live performance",
              "Choice of saxophone, violin, guitar or piano",
              "Personalized song selection available",
            ],
            hr: [
              "Od €500",
              "30-minutna live izvedba",
              "Izbor saksofona, violine, gitare ili klavira",
              "Moguć personalizirani odabir pjesama",
            ],
          },
        },
        {
          title: { en: "Cocktail hour", hr: "Cocktail sat" },
          items: {
            en: [
              "From €500",
              "1-hour live performance",
              "Choice of saxophone, violin, guitar or piano",
              "Professional sound setup",
              "Curated cocktail hour atmosphere",
            ],
            hr: [
              "Od €500",
              "1 sat live izvedbe",
              "Izbor saksofona, violine, gitare ili klavira",
              "Profesionalni sound setup",
              "Kurirana atmosfera cocktail sata",
            ],
          },
        },
      ],
    },
  },
];
