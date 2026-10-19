/** Hero watermark (local asset). */
export const WEDDINGS_HERO_IMAGE = "/assets/NMP%200551.jpg";

/** Local wedding package images under public/assets (URL-encoded for spaces/special chars). */
export function weddingAssetPath(filename: string): string {
  return `/assets/${encodeURIComponent(filename)}`;
}

export const WEDDING_PACKAGE_IMAGES = {
  dueRicce: weddingAssetPath("Due Ricce.jpg"),
  vocalGuitar: weddingAssetPath("Vocal+Guitar.jpeg"),
  groupLuse: weddingAssetPath("Group Luše.JPG"),
  soloInstrumentalist: weddingAssetPath("Solo Instrumentalist.jpg"),
  blknExcess: weddingAssetPath("BLKN EXCESS.jpg"),
  essential: weddingAssetPath("Essential Package.jpg"),
  signature: weddingAssetPath("Signature Package.jpg"),
  premium: weddingAssetPath("Premium Package.jpg"),
  addOnInstrumentalist: weddingAssetPath("AddOnInstrumentalist.jpg"),
} as const;

/** Fallback when no local image is assigned (e.g. FJOK Collective). */
export const WEDDING_PACKAGE_PLACEHOLDER_IMAGE =
  "https://eiz.hr/mainevent/wp-content/uploads/2026/02/FJOK-Collective-1-scaled-e1778154294741.jpg";
