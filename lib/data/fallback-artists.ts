import type { ArtistCardModel } from "@/lib/wp/types";

/** Static cards from legacy `artists.html` when GraphQL is offline or misconfigured. */
export const FALLBACK_HOME_ARTISTS: ArtistCardModel[] = [
  {
    slug: "mirko-from-fjok",
    name: "Mirko",
    typeLabel: "DJ",
    tagLabel: "",
    eventType: ["dj"],
    vibe: [],
    imageUrl: "/artists/mirko.jpg",
    hoverText:
      "Open-format DJ delivering a wide musical range and confident crowd reading.",
  },
  {
    slug: "jerry-dollan",
    name: "Jerry Dollan",
    typeLabel: "DJ",
    tagLabel: "",
    eventType: ["dj"],
    vibe: [],
    imageUrl: "/artists/jerry.jpg",
    hoverText:
      "Technically creative DJ with a sharp ear for detail and presentation.",
  },
  {
    slug: "jelena",
    name: "Jelena",
    typeLabel: "Pianist",
    tagLabel: "",
    eventType: ["pianist"],
    vibe: [],
    imageUrl: "/artists/jelena.jpg",
    hoverText:
      "Classically trained pianist for ceremonies and elegant dinner settings.",
  },
  {
    slug: "vice",
    name: "Vice",
    typeLabel: "Saxophonist",
    tagLabel: "",
    eventType: ["saxophonist"],
    vibe: [],
    imageUrl: "/artists/vice.jpg",
    hoverText:
      "Seasoned saxophonist with a natural feel for atmosphere and crowd enjoyment.",
  },
  {
    slug: "luka",
    name: "Luka",
    typeLabel: "Saxophonist",
    tagLabel: "",
    eventType: ["saxophonist"],
    vibe: [],
    imageUrl:
      "https://eiz.hr/mainevent/wp-content/uploads/2026/02/Vice-1.jpeg",
    hoverText:
      "Classically trained saxophonist for solo sets and DJ combinations.",
  },
  {
    slug: "angelo",
    name: "Angelo",
    typeLabel: "Trumpet",
    tagLabel: "Trumpet",
    eventType: ["trumpet player"],
    vibe: [],
    imageUrl:
      "https://eiz.hr/mainevent/wp-content/uploads/2026/02/Andelo-1.jpeg",
    hoverText: "High-impact trumpet player for peak party moments.",
  },
];
