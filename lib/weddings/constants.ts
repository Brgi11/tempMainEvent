/** Hero watermark (local asset). */
export const WEDDINGS_HERO_IMAGE = "/assets/NMP%200551.jpg";

/** Local wedding package images under public/assets (URL-encoded for spaces/special chars). */
export function weddingAssetPath(filename: string): string {
  return `/assets/${encodeURIComponent(filename)}`;
}

export const WEDDING_PACKAGE_IMAGES = {
  dueRicce: weddingAssetPath("Due Ricce.jpg"),
  soloInstrumentalist: weddingAssetPath("Solo Instrumentalist.jpg"),
  fjokCollective: weddingAssetPath("FJOK Collective.jpg"),
  blknExcess: weddingAssetPath("BLKN EXCESS.jpg"),
  essential: weddingAssetPath("Essential Package.jpg"),
  signature: weddingAssetPath("Signature Package.jpg"),
  premium: weddingAssetPath("Premium Package.jpg"),
  addOnInstrumentalist: weddingAssetPath("AddOnInstrumentalist.jpg"),
} as const;
