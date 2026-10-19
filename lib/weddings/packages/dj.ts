import { WEDDING_PACKAGE_IMAGES } from "../constants";
import type { WeddingPackage } from "../types";

export const DJ_WEDDING_PACKAGES: WeddingPackage[] = [
  {
    id: "essential-package",
    slug: "essential-package",
    sectionId: "dj-wedding-packages",
    name: { en: "Essential Package", hr: "Essential paket" },
    cardDescription: {
      en: "Party-only package with a single DJ.",
      hr: "Paket samo za party segment s jednim DJ-em.",
    },
    bestFor: {
      en: "Wedding after parties, combination with a live band.",
      hr: "After party vjenčanja, kombinacija s live bendom.",
    },
    priceLabel: { en: "From €1500", hr: "Od €1500" },
    imageUrl: WEDDING_PACKAGE_IMAGES.essential,
    detail: {
      intro: {
        en: "Essential wedding party package designed for couples who need a professional DJ experience focused exclusively on the party segment of the wedding.",
        hr: "Essential paket za vjenčanje osmišljen je za parove kojima treba profesionalno DJ iskustvo usmjereno isključivo na party segment vjenčanja.",
      },
      blocks: [
        {
          title: { en: "Included Performance", hr: "Uključena izvedba" },
          items: {
            en: [
              "Up to 4 hours of party DJ performance",
              "Additional hour available with surcharge",
            ],
            hr: [
              "Do 4 sata party DJ izvedbe",
              "Dodatni sat dostupan uz doplatu",
            ],
          },
        },
        {
          title: { en: "Performance Style", hr: "Stil izvedbe" },
          items: {
            en: [
              "Professional open-format wedding DJ performance",
              "Party atmosphere tailored to the crowd",
              "Smooth transitions and dynamic music flow",
              "Personalized music direction based on the couple’s preferences",
            ],
            hr: [
              "Profesionalna open-format vjenčana DJ izvedba",
              "Party atmosfera prilagođena publici",
              "Glatki prijelazi i dinamičan glazbeni tijek",
              "Personalizirani glazbeni smjer prema željama para",
            ],
          },
        },
        {
          title: { en: "Equipment included", hr: "Uključena oprema" },
          items: {
            en: [
              "DJ booth, controller, and all necessary DJ equipment",
              "1 wireless microphone",
              "1x Party sound system for up to 150 guests",
            ],
            hr: [
              "DJ kabina, kontroler i sva potrebna DJ oprema",
              "1 bežični mikrofon",
              "1x Party sound sustav za do 150 gostiju",
            ],
          },
        },
      ],
    },
  },
  {
    id: "signature-package",
    slug: "signature-package",
    sectionId: "dj-wedding-packages",
    name: { en: "Signature Package", hr: "Signature paket" },
    cardDescription: {
      en: "Full-day wedding package including 1 lead DJ and an assistant DJ, open-format repertoire.",
      hr: "Cjelodnevni vjenčani paket s 1 glavnim DJ-em i asistent DJ-em, open-format repertoar.",
    },
    bestFor: {
      en: "All types of weddings.",
      hr: "Sve vrste vjenčanja.",
    },
    priceLabel: { en: "Start from €2200", hr: "Od €2200" },
    imageUrl: WEDDING_PACKAGE_IMAGES.signature,
    detail: {
      intro: {
        en: "Signature wedding entertainment package featuring a lead wedding DJ joined by a supporting DJ to ensure a smooth, energetic, and professionally coordinated event experience.",
        hr: "Signature paket vjenčane zabave s glavnim vjenčanim DJ-em i podržavajućim DJ-em za glatko, energično i profesionalno koordinirano iskustvo događaja.",
      },
      blocks: [
        {
          title: { en: "Included Performance", hr: "Uključena izvedba" },
          items: {
            en: [
              "Up to 5 hours of party performance",
              "1 hour of lounge / cocktail DJ performance",
              "Ceremony music support",
              "Dinner background music & speech assistance",
            ],
            hr: [
              "Do 5 sati party izvedbe",
              "1 sat lounge / cocktail DJ izvedbe",
              "Glazbena podrška za ceremoniju",
              "Pozadinska glazba za večeru i pomoć pri govorima",
            ],
          },
        },
        {
          title: { en: "Performance Style", hr: "Stil izvedbe" },
          items: {
            en: [
              "Lead DJ focused on music flow, crowd energy, and party atmosphere",
              "DJ assistant handling MC support, speech coordination and technical flow",
              "Customized playlist preparation with 1 experienced wedding DJ",
              "Two 30-minute preparation video calls",
            ],
            hr: [
              "Glavni DJ fokusiran na glazbeni tijek, energiju publike i party atmosferu",
              "DJ asistent za MC podršku, koordinaciju govora i tehnički tijek",
              "Prilagođena priprema playliste s 1 iskusnim vjenčanim DJ-em",
              "Dva 30-minutna video poziva za pripremu",
            ],
          },
        },
        {
          title: { en: "Equipment included", hr: "Uključena oprema" },
          items: {
            en: [
              "2x DJ booths, controllers, and required DJ equipment, ideal for separate cocktail and party locations",
              "1x Party sound system for up to 150 guests",
              "2x wireless microphones",
              "1x Lounge sound system for Ceremony or Cocktail",
            ],
            hr: [
              "2x DJ kabine, kontroleri i potrebna DJ oprema, idealno za odvojene cocktail i party lokacije",
              "1x Party sound sustav za do 150 gostiju",
              "2x bežična mikrofona",
              "1x Lounge sound sustav za ceremoniju ili cocktail",
            ],
          },
        },
      ],
    },
  },
  {
    id: "premium-package",
    slug: "premium-package",
    sectionId: "dj-wedding-packages",
    name: { en: "Premium Package", hr: "Premium paket" },
    cardDescription: {
      en: "Full-day wedding package including 2 lead DJs who perform back 2 back for a more show-like experience.",
      hr: "Cjelodnevni paket s 2 glavna DJ-a u back2back izvedbi za show-like iskustvo.",
    },
    bestFor: {
      en: "Weddings who want a festival party experience.",
      hr: "Vjenčanja koja žele festival party iskustvo.",
    },
    priceLabel: { en: "From €2500", hr: "Od €2500" },
    imageUrl: WEDDING_PACKAGE_IMAGES.premium,
    detail: {
      intro: {
        en: "Premium wedding entertainment package featuring two experienced wedding DJs performing together throughout the party segment for a high-energy, seamless experience.",
        hr: "Premium paket s dva iskusna vjenčana DJ-a koji nastupaju zajedno tijekom party segmenta za visokoenergetično, besprijekorno iskustvo.",
      },
      extraParagraphs: [
        {
          en: "Includes everything from the Signature Package with the following extras:",
          hr: "Uključuje sve iz Signature paketa uz sljedeće dodatke:",
        },
      ],
      blocks: [
        {
          title: { en: "Additional highlights", hr: "Dodatni highlights" },
          items: {
            en: [
              "More dynamic transitions with a Back2Back set prepared and performed live by 2 DJs",
              "Up to 2 custom remixes produced based on the couple’s preferences",
              "Enhanced crowd interaction with a more immersive and high-energy dancefloor atmosphere",
              "Music preparation curated collaboratively by two experienced wedding DJs with different genre expertise instead of 1",
            ],
            hr: [
              "Dinamičniji prijelazi s Back2Back setom koji pripremaju i izvode 2 DJ-a uživo",
              "Do 2 custom remiksa produciranih prema željama para",
              "Jača interakcija s publikom i immersivnija, visokoenergetična plesna atmosfera",
              "Glazbena priprema u suradnji dva iskusna vjenčana DJ-a s različitom žanrovskom ekspertizom umjesto jednog",
            ],
          },
        },
        {
          title: { en: "Equipment included", hr: "Uključena oprema" },
          items: {
            en: [
              "2x DJ booths, controllers, and required DJ equipment, ideal for separate cocktail and party locations",
              "1x Party sound system for up to 150 guests",
              "2x wireless microphones",
              "1x Lounge sound system for Ceremony or Cocktail",
            ],
            hr: [
              "2x DJ kabine, kontroleri i potrebna DJ oprema, idealno za odvojene cocktail i party lokacije",
              "1x Party sound sustav za do 150 gostiju",
              "2x bežična mikrofona",
              "1x Lounge sound sustav za ceremoniju ili cocktail",
            ],
          },
        },
      ],
    },
  },
  {
    id: "add-on-instrumentalist",
    slug: "add-on-instrumentalist",
    sectionId: "dj-wedding-packages",
    isAddon: true,
    name: { en: "Add-on Instrumentalist", hr: "Dodatak – instrumentalist" },
    cardDescription: {
      en: "Add a live sax or trumpet performance to any DJ Wedding Package.",
      hr: "Dodajte live saksofon ili trubu bilo kojem DJ paketu za vjenčanje.",
    },
    addonText: {
      en: "Available as an add-on to any DJ Wedding Package.",
      hr: "Dostupno kao dodatak bilo kojem DJ paketu za vjenčanje.",
    },
    bestFor: {
      en: "Weddings who want a live instrument performance.",
      hr: "Vjenčanja koja žele live instrumentalnu izvedbu.",
    },
    priceLabel: { en: "Start from €900", hr: "Od €900" },
    imageUrl: WEDDING_PACKAGE_IMAGES.addOnInstrumentalist,
    detail: {
      intro: {
        en: "Enhance your wedding entertainment with a live saxophonist or trumpet performing alongside your DJ. A live instrument adds energy, elegance, and an unforgettable atmosphere, whether during the cocktail hour or on the dance floor. Available for Party Only or Cocktail Hour + Party performances.",
        hr: "Obogatite vjenčanu zabavu live saksofonistom ili trubačem uz vašeg DJ-a. Live instrument donosi energiju, eleganciju i nezaboravnu atmosferu — tijekom cocktail sata ili na plesnom podiju. Dostupno za samo party ili kombinaciju cocktail sata + party.",
      },
      blocks: [
        {
          title: { en: "Add-on details", hr: "Detalji dodatka" },
          items: {
            en: [
              "Saxophone or trumpet performance",
              "Can be added to Essential, Signature, or Premium DJ packages",
              "Available for party segment or cocktail hour + party combination",
            ],
            hr: [
              "Izvedba na saksofonu ili trubi",
              "Može se dodati Essential, Signature ili Premium DJ paketu",
              "Dostupno za party segment ili kombinaciju cocktail sata + party",
            ],
          },
        },
      ],
    },
  },
];
