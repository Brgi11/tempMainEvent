import { acfImageUrl } from "@/lib/wp/acf-media";
import { postHasArtistCategory } from "@/lib/wp/artist-category";
import { applyArtistOverrides, isHiddenArtist } from "@/lib/data/artist-overrides";
import { appendLocalArtists, getLocalArtistPost } from "@/lib/data/local-artists";
import staticArtistPosts from "@/lib/data/static-artist-posts.json";
import type { ArtistCardModel, WpArtistPostNode } from "@/lib/wp/types";
import { stripExcerpt } from "@/lib/wp/types";

/** Snapshot of the live artist posts, so this preview does not call WordPress. */
const STATIC_ARTIST_POSTS = staticArtistPosts as WpArtistPostNode[];

/** Archive load state kept for the existing page UI. */
export type ArtistsArchiveStatus =
  | "ok"
  | "no_endpoint"
  | "fetch_error"
  | "empty";

export type ArtistsArchiveResult = {
  artists: ArtistCardModel[];
  status: ArtistsArchiveStatus;
  errorDetail?: string;
};

function staticArtistCards(): ArtistCardModel[] {
  return STATIC_ARTIST_POSTS.map(mapPostToArtistCard)
    .filter((artist): artist is ArtistCardModel => artist !== null)
    .sort((a, b) =>
      a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
    );
}

function isArtistPost(post: WpArtistPostNode | null | undefined): boolean {
  if (!post?.slug) return false;
  if (postHasArtistCategory(post.categories)) return true;
  const a = post.artists;
  if (!a) return false;
  return !!(
    (typeof a.artistName === "string" && a.artistName.trim()) ||
    acfImageUrl(a.image1) ||
    (typeof a.bioEn === "string" && a.bioEn.trim()) ||
    (typeof a.bioHr === "string" && a.bioHr.trim())
  );
}

function trimMaybe(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function normalizeStringArrayLower(value: unknown): string[] {
  const arr: unknown[] = Array.isArray(value) ? value : typeof value === "string" ? [value] : [];
  return arr
    .filter((x): x is string => typeof x === "string")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
}

function normalizeStringArrayRaw(value: unknown): string[] {
  const arr: unknown[] = Array.isArray(value) ? value : typeof value === "string" ? [value] : [];
  return arr
    .filter((x): x is string => typeof x === "string")
    .map((s) => s.trim())
    .filter(Boolean);
}

function mapPostToArtistCard(node: WpArtistPostNode): ArtistCardModel | null {
  if (isHiddenArtist(node.slug, node.artists?.artistName ?? node.title)) {
    return null;
  }
  const overridden = applyArtistOverrides(node);
  const slug = overridden.slug?.trim();
  if (!slug) return null;
  const acf = overridden.artists;
  const name = trimMaybe(acf?.artistName) || trimMaybe(overridden.title) || slug;
  const tagLabel =
    (overridden.tags?.nodes?.find((t) => typeof t?.name === "string" && t.name.trim())
      ?.name ?? "")
      .trim();
  const eventTypeRaw = normalizeStringArrayRaw(acf?.eventType);
  const vibeRaw = normalizeStringArrayRaw(acf?.vibe);

  const eventType = normalizeStringArrayLower(acf?.eventType);
  const vibe = normalizeStringArrayLower(acf?.vibe);

  const typeLabel = (eventTypeRaw[0] || vibeRaw[0] || "").trim();
  const imageUrl = acfImageUrl(acf?.image1);
  const hoverRaw = trimMaybe(acf?.hoverPreviewEn) || trimMaybe(acf?.hoverPreviewHr) || "";
  const hoverText = hoverRaw
    ? stripExcerpt(hoverRaw)
    : typeLabel || name;
  return {
    slug,
    name,
    typeLabel,
    tagLabel,
    eventType,
    vibe,
    imageUrl,
    hoverText,
  };
}

export function getArtistDisplayName(post: WpArtistPostNode): string {
  const overridden = applyArtistOverrides(post);
  return (
    trimMaybe(overridden.artists?.artistName) ||
    trimMaybe(overridden.title) ||
    trimMaybe(overridden.slug) ||
    "Artist"
  );
}

function artistsThroughVice(artists: ArtistCardModel[]): ArtistCardModel[] {
  const viceIndex = artists.findIndex(
    (artist) =>
      artist.slug.toLowerCase() === "vice" ||
      artist.name.trim().toLowerCase() === "vice"
  );
  if (viceIndex < 0) return artists;
  return artists.slice(0, viceIndex + 1);
}

export async function getArtistsForHome(
  limit = 12
): Promise<ArtistCardModel[]> {
  return artistsThroughVice(staticArtistCards()).slice(0, limit);
}

/**
 * Artists archive for this preview. Uses the saved WordPress snapshot,
 * then appends local-only cards.
 */
export async function getArtistsArchiveFromWordPress(options?: {
  maxArtists?: number;
}): Promise<ArtistsArchiveResult> {
  const maxTotal = options?.maxArtists ?? 500;
  const artists = appendLocalArtists(staticArtistCards()).slice(0, maxTotal);

  if (artists.length === 0) {
    return { artists: [], status: "empty" };
  }

  return { artists, status: "ok" };
}

export async function getArtistPost(slug: string) {
  if (isHiddenArtist(slug)) return null;
  const local = getLocalArtistPost(slug);
  if (local) return applyArtistOverrides(local);
  const post =
    STATIC_ARTIST_POSTS.find(
      (artist) => artist.slug?.toLowerCase() === slug.trim().toLowerCase()
    ) ?? null;
  if (!post?.slug) return null;
  if (isHiddenArtist(post.slug, post.artists?.artistName ?? post.title)) return null;
  if (!isArtistPost(post)) return null;
  return applyArtistOverrides(post);
}
