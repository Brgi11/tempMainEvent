import { WEDDING_PACKAGE_IMAGES } from "../constants";
import type { WeddingPackage } from "../types";

export const COCKTAIL_WEDDING_PACKAGES: WeddingPackage[] = [
  {
    id: "cocktail-due-ricce",
    slug: "cocktail-due-ricce",
    sectionId: "cocktail-music",
    name: { en: "DUE RICCE", hr: "DUE RICCE" },
    cardDescription: {
      en: "Live piano and violin duo for your cocktail hour.",
      hr: "Live duo klavira i violine za cocktail sat.",
    },
    priceLabel: { en: "From €750", hr: "Od €750" },
    imageUrl: WEDDING_PACKAGE_IMAGES.dueRicce,
    detail: {
      intro: {
        en: "A live piano and violin duo performance designed to elevate the atmosphere of your cocktail hour with elegant and refined live music. Carefully performed to create a smooth and relaxed ambiance, it allows guests to enjoy conversation while experiencing beautifully arranged pieces tailored to your preferences. It brings warmth, sophistication, and a graceful start to your celebration.",
        hr: "Live duo klavira i violine osmišljen je kako bi cocktail sat podigao elegantnom i profinjenom glazbom, uz opuštenu atmosferu i repertoar prilagođen vašim željama.",
      },
      blocks: [
        {
          title: { en: "Included Performance", hr: "Uključena izvedba" },
          items: {
            en: [
              "1-hour live performance",
              "Violin & piano duo",
              "Professional sound setup",
              "Curated cocktail hour atmosphere",
            ],
            hr: [
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
    id: "cocktail-vocal-piano",
    slug: "cocktail-vocal-piano",
    sectionId: "cocktail-music",
    name: { en: "VOCAL + GUITAR", hr: "VOCAL + GITARA" },
    cardDescription: {
      en: "Live female vocals and guitar for cocktail hour.",
      hr: "Live ženski vokal i gitara za cocktail sat.",
    },
    priceLabel: { en: "From €750", hr: "Od €750" },
    imageUrl: WEDDING_PACKAGE_IMAGES.vocalGuitar,
    detail: {
      intro: {
        en: "Live female vocals accompanied by guitar creates a refined and expressive cocktail hour experience, featuring carefully selected songs performed with elegance and emotional depth. The combination of guitar and female vocal brings a natural warmth and musical flow to the beginning of your celebration, delivering a stylish live performance with a personal and engaging touch.",
        hr: "Live ženski vokal uz gitaru stvara profinjeno i emotivno iskustvo cocktail sata, s pažljivo odabranim pjesmama i prirodnom glazbenom toplinom.",
      },
      blocks: [
        {
          title: { en: "Included Performance", hr: "Uključena izvedba" },
          items: {
            en: [
              "1-hour live performance",
              "Female vocal & guitar",
              "Full sound setup",
              "Curated song selection",
            ],
            hr: [
              "1 sat live izvedbe",
              "Ženski vokal i gitara",
              "Kompletan sound setup",
              "Kurirani odabir pjesama",
            ],
          },
        },
      ],
    },
  },
  {
    id: "cocktail-kapa-luse",
    slug: "cocktail-kapa-luse",
    sectionId: "cocktail-music",
    name: { en: "A CAPELLA GROUP LUŠE", hr: "A CAPELLA GROUP LUŠE" },
    cardDescription: {
      en: "Authentic Dalmatian a cappella for cocktail hour.",
      hr: "Autentična dalmatinska a cappella za cocktail sat.",
    },
    priceLabel: { en: "From €1350", hr: "Od €1350" },
    imageUrl: WEDDING_PACKAGE_IMAGES.groupLuse,
    detail: {
      intro: {
        en: "A live a cappella performance by Luše brings authentic Dalmatian vocal tradition to your cocktail hour through rich harmonies and expressive interpretations. Their carefully selected repertoire combines traditional and contemporary arrangements, creating a distinctive musical experience that adds character, authenticity, and Mediterranean charm to the beginning of your celebration.",
        hr: "Live a cappella izvedba Luše donosi autentičnu dalmatinsku vokalnu tradiciju cocktail satu kroz bogate harmonije i pažljivo odabran tradicionalni i suvremeni repertoar.",
      },
      blocks: [
        {
          title: { en: "Included Performance", hr: "Uključena izvedba" },
          items: {
            en: [
              "1-hour live performance",
              "Female klapa ensemble",
              "Unplugged performance",
            ],
            hr: [
              "1 sat live izvedbe",
              "Ženski klapa ansambl",
              "Unplugged izvedba",
            ],
          },
        },
      ],
    },
  },
  {
    id: "cocktail-solo-instrumentalist",
    slug: "cocktail-solo-instrumentalist",
    sectionId: "cocktail-music",
    name: {
      en: "SOLO INSTRUMENTALIST (SAX, VIOLIN, GUITAR, PIANO)",
      hr: "SOLO INSTRUMENTALIST (SAKS, VIOLINA, GITARA, KLAVIR)",
    },
    cardDescription: {
      en: "Solo instrumental performance for cocktail hour.",
      hr: "Solo instrumentalna izvedba za cocktail sat.",
    },
    priceLabel: { en: "From €500", hr: "Od €500" },
    imageUrl: WEDDING_PACKAGE_IMAGES.soloInstrumentalist,
    detail: {
      intro: {
        en: "A live solo instrumental performance by your choice of saxophone, violin, guitar, or piano adds elegance and personality to your cocktail hour. Each musician delivers a carefully selected repertoire tailored to the atmosphere of your celebration, creating a sophisticated live music experience that complements the style of your wedding and sets the perfect tone for the reception ahead.",
        hr: "Live solo instrumentalna izvedba po izboru (saksofon, violina, gitara ili klavir) cocktail satu donosi eleganciju i osobni pečat, uz repertoar prilagođen atmosferi vaše proslave.",
      },
      blocks: [
        {
          title: { en: "Included Performance", hr: "Uključena izvedba" },
          items: {
            en: [
              "1-hour live performance",
              "Choice of saxophone, violin, guitar or piano",
              "Professional sound setup",
              "Curated cocktail hour atmosphere",
            ],
            hr: [
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
