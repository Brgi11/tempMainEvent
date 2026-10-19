import {
  WEDDING_PACKAGE_IMAGES,
  WEDDING_PACKAGE_PLACEHOLDER_IMAGE,
} from "../constants";
import type { WeddingPackage } from "../types";

export const SPECIAL_WEDDING_PACKAGES: WeddingPackage[] = [
  {
    id: "fjok-collective",
    slug: "fjok-collective",
    sectionId: "special-packages",
    name: { en: "FJOK Collective", hr: "FJOK Collective" },
    cardDescription: {
      en: "Charismatic trio of 2 DJs and a saxophonist built on disco and house foundations.",
      hr: "Karizmatičan trio od 2 DJ-a i saksofonista s disco i house temeljima.",
    },
    bestFor: {
      en: "House, disco, pop, urban styled Croatian and international weddings.",
      hr: "House, disco, pop i urban stilizirana hrvatska i međunarodna vjenčanja.",
    },
    priceLabel: { en: "Start from €3750", hr: "Od €3750" },
    imageUrl: WEDDING_PACKAGE_PLACEHOLDER_IMAGE,
    socialLinks: {
      instagram: "https://www.instagram.com/fjok_collective/?hl=en",
    },
    detail: {
      intro: {
        en: "FJOK Collective brings together DJ Jerry Dollan, DJ Mirko Katic, and saxophonist Vice Pavlov in a dynamic wedding performance combining live instrumentation with a signature blend of funky grooves, house, disco and carefully selected party classics. The performance is designed to create elegant yet high-energy moments throughout the wedding day.",
        hr: "FJOK Collective okuplja DJ Jerry Dollana, DJ Mirka Katića i saksofonista Vice Pavlova u dinamičnoj vjenčanoj izvedbi koja spaja live instrumentaciju s prepoznatljivim spojem funky grooveova, housea, disca i pažljivo odabranih party klasika. Izvedba je osmišljena kako bi stvarala elegantne, ali energične trenutke tijekom cijelog vjenčanog dana.",
      },
      blocks: [
        {
          title: { en: "Included Performance", hr: "Uključena izvedba" },
          items: {
            en: [
              "Up to 5 hours of two-DJ party performance",
              "1 hour of lounge / cocktail DJ performance",
              "Ceremony music support",
              "Live saxophone performance during cocktail hour and key party moments",
            ],
            hr: [
              "Do 5 sati party izvedbe s dva DJ-a",
              "1 sat lounge / cocktail DJ izvedbe",
              "Glazbena podrška za ceremoniju",
              "Live saksofon tijekom cocktail sata i ključnih party trenutaka",
            ],
          },
        },
        {
          title: {
            en: "Experience & Performance Style",
            hr: "Iskustvo i stil izvedbe",
          },
          items: {
            en: [
              "2 DJs + Sax package with a signature style of FJOK Collective",
              "Seamless flow between lounge, dinner, and party atmosphere",
              "Customized playlist preparation with the FJOK Collective team",
              "Two 30-minute preparation calls with the couple",
            ],
            hr: [
              "Paket 2 DJ-a + saksofon u prepoznatljivom stilu FJOK Collective",
              "Besprijekoran prijelaz između lounge, večere i party atmosfere",
              "Prilagođena priprema playliste s timom FJOK Collective",
              "Dva 30-minutna poziva za pripremu s parom",
            ],
          },
        },
        {
          title: {
            en: "Equipment included with FJOK Collective",
            hr: "Oprema uključena u FJOK Collective",
          },
          items: {
            en: [
              "2x DJ booths, controllers, and required DJ equipment, ideal for separate cocktail and party locations",
              "1x Party sound system for up to 150 guests and 2x wireless microphones",
              "1x Lounge sound system for Ceremony or Cocktail",
            ],
            hr: [
              "2x DJ kabine, kontroleri i potrebna DJ oprema, idealno za odvojene cocktail i party lokacije",
              "1x Party sound sustav za do 150 gostiju i 2x bežična mikrofona",
              "1x Lounge sound sustav za ceremoniju ili cocktail",
            ],
          },
        },
      ],
    },
  },
  {
    id: "blkn-excess",
    slug: "blkn-excess",
    sectionId: "special-packages",
    name: { en: "BLKN Excess", hr: "BLKN Excess" },
    cardDescription: {
      en: "Energetic DJ & Trumpet duo combining Balkan sounds with dance music.",
      hr: "Energičan DJ i truba duo koji spaja balkanske zvukove s dance glazbom.",
    },
    bestFor: {
      en: "Weddings with a mix of Balkans and international music.",
      hr: "Vjenčanja s miksom balkanske i međunarodne glazbe.",
    },
    priceLabel: { en: "Start from €3000", hr: "Od €3000" },
    imageUrl: WEDDING_PACKAGE_IMAGES.blknExcess,
    socialLinks: {
      instagram: "https://www.instagram.com/blkn_excess/?hl=en",
    },
    detail: {
      intro: {
        en: "BLKN EXCESS combines renowned club DJ Anthony with an energetic academy trumpet player Angelo. Their music direction blends Balkan hits, international party music, commercial club tracks, and timeless singalong favorites, all carefully adapted to weddings and diverse audiences, while always maintaining the Balkan brass accents with dancefloor oriented remixes.",
        hr: "BLKN EXCESS kombinira renomiranog klupskog DJ-a Anthonyja s energičnim akademskim trubačem Angelom. Njihov glazbeni smjer spaja balkanske hitove, međunarodnu party glazbu, komercijalne klupske trake i bezvremenske singalong favorite, sve pažljivo prilagođeno vjenčanjima i raznolikoj publici, uz zadržavanje balkanskih brass akcenata i remixeva orijentiranih na plesni podij.",
      },
      blocks: [
        {
          title: { en: "Included Performance", hr: "Uključena izvedba" },
          items: {
            en: [
              "Up to 5 hours of party performance",
              "1 hour of lounge / cocktail DJ performance",
              "Ceremony music support",
              "Live trumpet performance during key party moments",
            ],
            hr: [
              "Do 5 sati party izvedbe",
              "1 sat lounge / cocktail DJ izvedbe",
              "Glazbena podrška za ceremoniju",
              "Live truba tijekom ključnih party trenutaka",
            ],
          },
        },
        {
          title: {
            en: "Experience & Performance Style",
            hr: "Iskustvo i stil izvedbe",
          },
          items: {
            en: [
              "Dedicated MC and technical support throughout the event",
              "High-energy, club-inspired atmosphere adapted for weddings",
              "Customized playlist preparation with the BLKN EXCESS team",
              "Two 30-minute preparation calls with the couple",
            ],
            hr: [
              "Posvećeni MC i tehnička podrška tijekom cijelog događaja",
              "Visokoenergetska, klupska atmosfera prilagođena vjenčanjima",
              "Prilagođena priprema playliste s timom BLKN EXCESS",
              "Dva 30-minutna poziva za pripremu s parom",
            ],
          },
        },
        {
          title: {
            en: "Equipment included with BLKN EXCESS",
            hr: "Oprema uključena u BLKN EXCESS",
          },
          items: {
            en: [
              "2x DJ booths, controllers, and required DJ equipment, ideal for separate cocktail and party locations",
              "1x Party sound system for up to 150 guests and 2x wireless microphones",
              "1x Lounge sound system for Ceremony or Cocktail",
            ],
            hr: [
              "2x DJ kabine, kontroleri i potrebna DJ oprema, idealno za odvojene cocktail i party lokacije",
              "1x Party sound sustav za do 150 gostiju i 2x bežična mikrofona",
              "1x Lounge sound sustav za ceremoniju ili cocktail",
            ],
          },
        },
      ],
    },
  },
];
