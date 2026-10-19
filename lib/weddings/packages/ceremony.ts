import { WEDDING_PACKAGE_IMAGES } from "../constants";
import type { WeddingPackage } from "../types";

export const CEREMONY_WEDDING_PACKAGES: WeddingPackage[] = [
  {
    id: "ceremony-due-ricce",
    slug: "ceremony-due-ricce",
    sectionId: "ceremony-music",
    name: { en: "DUE RICCE", hr: "DUE RICCE" },
    cardDescription: {
      en: "Timeless live music for your wedding ceremony performed by Due Ricce.",
      hr: "Bezvremenska live glazba za ceremoniju u izvedbi Due Ricce.",
    },
    priceLabel: { en: "From €650", hr: "Od €650" },
    imageUrl: WEDDING_PACKAGE_IMAGES.dueRicce,
    detail: {
      intro: {
        en: "Timeless live music for your wedding ceremony performed by Due Ricce, an elegant piano and violin duo dedicated to creating a truly emotional and refined atmosphere. Their live performance is carefully designed to accompany each part of your ceremony. With a repertoire tailored to your preferences, Due Ricce brings warmth, sophistication, and a cinematic quality to the most meaningful moments of your day.",
        hr: "Bezvremenska live glazba za vašu vjenčanu ceremoniju u izvedbi Due Ricce, elegantnog dueta klavira i violine posvećenog stvaranju emotivne i profinjene atmosfere. Njihova izvedba pažljivo prati svaki dio ceremonije, a repertoar se prilagođava vašim željama.",
      },
      blocks: [
        {
          title: { en: "Included Performance", hr: "Uključena izvedba" },
          items: {
            en: [
              "30-minute live performance",
              "Violin & piano duo",
              "Personalized song selection available",
            ],
            hr: [
              "30-minutna live izvedba",
              "Violina i klavir duo",
              "Moguć personalizirani odabir pjesama",
            ],
          },
        },
      ],
    },
  },
  {
    id: "ceremony-vocal-piano",
    slug: "ceremony-vocal-piano",
    sectionId: "ceremony-music",
    name: { en: "VOCAL + GUITAR", hr: "VOCAL + GITARA" },
    cardDescription: {
      en: "Live vocal and guitar performance for your ceremony.",
      hr: "Live izvedba vokala i gitare za ceremoniju.",
    },
    priceLabel: { en: "From €650", hr: "Od €650" },
    imageUrl: WEDDING_PACKAGE_IMAGES.vocalGuitar,
    detail: {
      intro: {
        en: "A live vocal and guitar performance created to bring warmth, emotion, and elegance to your wedding ceremony. Carefully designed to accompany each part of your ceremony, the live performance follows the flow of your special moments. With a repertoire tailored to your preferences, it enhances the most meaningful part of your day.",
        hr: "Live izvedba vokala i gitare stvorena kako bi vašoj ceremoniji donijela toplinu, emociju i eleganciju. Pažljivo osmišljena da prati svaki dio ceremonije, uz repertoar prilagođen vašim željama.",
      },
      blocks: [
        {
          title: { en: "Included Performance", hr: "Uključena izvedba" },
          items: {
            en: [
              "30-minute live performance",
              "Vocal & guitar duo",
              "Personalized song selection available",
            ],
            hr: [
              "30-minutna live izvedba",
              "Vokal i gitara duo",
              "Moguć personalizirani odabir pjesama",
            ],
          },
        },
      ],
    },
  },
  {
    id: "ceremony-kapa-luse",
    slug: "ceremony-kapa-luse",
    sectionId: "ceremony-music",
    name: { en: "A CAPELLA GROUP LUŠE", hr: "A CAPELLA GROUP LUŠE" },
    cardDescription: {
      en: "Traditional female Dalmatian klapa performance.",
      hr: "Tradicionalna ženska dalmatinska klapa.",
    },
    priceLabel: { en: "From €1100", hr: "Od €1100" },
    imageUrl: WEDDING_PACKAGE_IMAGES.groupLuse,
    detail: {
      intro: {
        en: "A traditional female Dalmatian klapa performance designed to bring authentic Mediterranean emotion and vocal harmony to your wedding ceremony. Carefully performed to accompany each part of your ceremony, it adds warmth, tradition, and emotional depth to your most meaningful moments.",
        hr: "Tradicionalna ženska dalmatinska klapa koja ceremoniji donosi autentičnu mediteransku emociju i vokalnu harmoniju, uz pažljivo vođenu izvedbu kroz svaki dio ceremonije.",
      },
      blocks: [
        {
          title: { en: "Included Performance", hr: "Uključena izvedba" },
          items: {
            en: [
              "30-minute live performance",
              "Female Dalmatian klapa ensemble",
              "Traditional & contemporary repertoire",
            ],
            hr: [
              "30-minutna live izvedba",
              "Ženski dalmatinski klapa ansambl",
              "Tradicionalni i suvremeni repertoar",
            ],
          },
        },
      ],
    },
  },
  {
    id: "ceremony-solo-instrumentalist",
    slug: "ceremony-solo-instrumentalist",
    sectionId: "ceremony-music",
    name: {
      en: "SOLO INSTRUMENTALIST (SAX, VIOLIN, GUITAR, PIANO)",
      hr: "SOLO INSTRUMENTALIST (SAKS, VIOLINA, GITARA, KLAVIR)",
    },
    cardDescription: {
      en: "Solo instrumental performance for your ceremony.",
      hr: "Solo instrumentalna izvedba za ceremoniju.",
    },
    priceLabel: { en: "From €500", hr: "Od €500" },
    imageUrl: WEDDING_PACKAGE_IMAGES.soloInstrumentalist,
    detail: {
      intro: {
        en: "Solo instrumental performance (sax, violin, guitar, or piano) designed to enhance the atmosphere of your wedding ceremony with subtle emotion and refined simplicity. Each performance is carefully shaped to follow the flow of your ceremony. With a selection of pieces tailored to your preferences, it adds depth, elegance, and a personal touch to your most meaningful moments.",
        hr: "Solo instrumentalna izvedba (saksofon, violina, gitara ili klavir) koja ceremoniji donosi suptilnu emociju i profinjenu jednostavnost, uz repertoar prilagođen vašim željama.",
      },
      blocks: [
        {
          title: { en: "Included Performance", hr: "Uključena izvedba" },
          items: {
            en: [
              "30-minute live performance",
              "Choice of saxophone, violin, guitar or piano",
              "Personalized song selection available",
            ],
            hr: [
              "30-minutna live izvedba",
              "Izbor saksofona, violine, gitare ili klavira",
              "Moguć personalizirani odabir pjesama",
            ],
          },
        },
      ],
    },
  },
];
