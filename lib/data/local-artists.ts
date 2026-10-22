import type { ArtistCardModel, WpArtistPostNode } from "@/lib/wp/types";

/**
 * Artists that exist only in this frontend until WordPress posts exist.
 * Appended after the WordPress list (not alphabetically mixed in).
 */
export const LOCAL_DISPLAY_ARTISTS: ArtistCardModel[] = [
  {
    slug: "marjan",
    name: "Marjan",
    typeLabel: "DJ",
    tagLabel: "DJ",
    eventType: [],
    vibe: [],
    imageUrl: "/artists/marjan.jpg",
    hoverText: "",
  },
  {
    slug: "ante",
    name: "Ante",
    typeLabel: "Saxophonist",
    tagLabel: "Saxophonist",
    eventType: [],
    vibe: [],
    imageUrl: "/artists/ante.jpg",
    hoverText: "",
  },
  {
    slug: "david",
    name: "David",
    typeLabel: "DJ Assistant",
    tagLabel: "DJ Assistant",
    eventType: [],
    vibe: [],
    imageUrl: "/artists/david.jpg",
    hoverText: "",
  },
  {
    slug: "luka-dj-assistant",
    name: "Luka",
    typeLabel: "DJ Assistant",
    tagLabel: "DJ Assistant",
    eventType: [],
    vibe: [],
    imageUrl: "/artists/luka-dj-assistant.jpg",
    hoverText: "",
  },
];

export function appendLocalArtists(
  artists: ArtistCardModel[]
): ArtistCardModel[] {
  const seen = new Set(artists.map((artist) => artist.slug.toLowerCase()));
  return [
    ...artists,
    ...LOCAL_DISPLAY_ARTISTS.filter((artist) => !seen.has(artist.slug.toLowerCase())),
  ];
}

export function getLocalArtistPost(slug: string): WpArtistPostNode | null {
  const card = LOCAL_DISPLAY_ARTISTS.find(
    (artist) => artist.slug.toLowerCase() === slug.trim().toLowerCase()
  );
  if (!card) return null;
  return {
    slug: card.slug,
    title: card.name,
    tags: {
      nodes: card.tagLabel ? [{ name: card.tagLabel }] : [],
    },
    artists: {
      artistName: card.name,
      image1: card.imageUrl,
      image2: null,
      image3: null,
      extraGallery: null,
      eventType: null,
      vibe: null,
      bioEn: null,
      bioHr: null,
      hoverPreviewEn: null,
      hoverPreviewHr: null,
    },
  };
}
