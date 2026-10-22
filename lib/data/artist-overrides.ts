import type { WpArtistPostNode } from "@/lib/wp/types";

/**
 * Temporary display overrides until these edits are saved in WordPress.
 * Hardcoded photos replace the WordPress main image; extra gallery photos are dropped.
 */
const HIDDEN_ARTIST_KEYS = new Set(["cola", "blazro"]);

type ArtistOverride = {
  name?: string;
  /** Replaces a role tag such as "Trumpet player". */
  tag?: string;
  mainImage?: string;
};

const ARTIST_OVERRIDES: Record<string, ArtistOverride> = {
  "mirko-from-fjok": {
    name: "Mirko",
    mainImage: "/artists/mirko.jpg",
  },
  "jerry-dollan": {
    mainImage: "/artists/jerry.jpg",
  },
  andrej: {
    mainImage: "/artists/andrej.jpg",
  },
  vice: {
    mainImage: "/artists/vice.jpg",
  },
  "fjok-collective": {
    mainImage: "/artists/fjok-collective.jpg",
  },
  jelena: {
    mainImage: "/artists/jelena.jpg",
  },
  anthony: {
    mainImage: "/artists/anthony.jpg",
  },
  angelo: {
    tag: "Trumpet",
  },
};

function artistKey(value: string | null | undefined): string {
  return (value ?? "").trim().toLowerCase();
}

export function isHiddenArtist(
  slug?: string | null,
  name?: string | null
): boolean {
  return (
    HIDDEN_ARTIST_KEYS.has(artistKey(slug)) ||
    HIDDEN_ARTIST_KEYS.has(artistKey(name))
  );
}

export function applyArtistOverrides(post: WpArtistPostNode): WpArtistPostNode {
  const slug = artistKey(post.slug);
  const nameKey = artistKey(post.artists?.artistName ?? post.title);
  const override = ARTIST_OVERRIDES[slug] ?? ARTIST_OVERRIDES[nameKey];
  const artists = { ...(post.artists ?? {}) };
  let tags = post.tags;
  let title = post.title;

  if (override?.name) {
    artists.artistName = override.name;
    title = override.name;
  }

  if (override?.mainImage) {
    artists.image1 = override.mainImage;
  }

  // Keep only the main photo: hardcoded override when present, otherwise WordPress image1.
  artists.image2 = null;
  artists.image3 = null;
  artists.extraGallery = null;

  if (override?.tag) {
    const nodes = (tags?.nodes ?? []).map((term) => {
      if (artistKey(term?.name) === "trumpet player") {
        return { ...term, name: override.tag };
      }
      return term;
    });
    const hasTag = nodes.some((term) => term?.name === override.tag);
    tags = {
      nodes: hasTag ? nodes : [...nodes, { name: override.tag }],
    };
  }

  return {
    ...post,
    title,
    artists,
    tags,
  };
}
