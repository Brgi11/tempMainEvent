import type { Lang } from "@/lib/i18n/language";

export type LocalizedText = { en: string; hr: string };

export type LocalizedList = { en: string[]; hr: string[] };

export type WeddingPackageSectionId =
  | "special-packages"
  | "dj-wedding-packages"
  | "ceremony-cocktail-music";

export type WeddingDetailBlock = {
  title: LocalizedText;
  items: LocalizedList;
};

export type WeddingPackageSocialLinks = {
  instagram?: string;
  youtube?: string;
};

export type WeddingPackageCardVariant =
  | "special"
  | "dj"
  | "compact"
  | "addon";

export type WeddingPackage = {
  id: string;
  slug: string;
  sectionId: WeddingPackageSectionId;
  name: LocalizedText;
  cardDescription: LocalizedText;
  bestFor?: LocalizedText;
  imageUrl: string;
  /** Secondary add-on (e.g. instrumentalist) — not a standalone main package card. */
  isAddon?: boolean;
  /** Shown on listing/detail for add-ons. */
  addonText?: LocalizedText;
  /** Shown on detail page for special packages (below title). */
  socialLinks?: WeddingPackageSocialLinks;
  detail: {
    intro: LocalizedText;
    /** Optional paragraphs before structured blocks (e.g. Premium extras). */
    extraParagraphs?: LocalizedText[];
    blocks: WeddingDetailBlock[];
  };
};

export function weddingPackageCardVariant(
  pkg: WeddingPackage
): WeddingPackageCardVariant {
  if (pkg.isAddon) return "addon";
  if (pkg.sectionId === "special-packages") return "special";
  if (pkg.sectionId === "ceremony-cocktail-music") return "special";
  if (pkg.sectionId === "dj-wedding-packages") return "dj";
  return "compact";
}

export function weddingCategoryLabel(
  sectionId: WeddingPackageSectionId,
  lang: Lang
): string {
  const section = WEDDING_SECTION_LABELS[sectionId];
  return lang === "hr" ? section.hr : section.en;
}

const WEDDING_SECTION_LABELS: Record<
  WeddingPackageSectionId,
  { en: string; hr: string }
> = {
  "special-packages": {
    en: "Special Package",
    hr: "Posebni paket",
  },
  "dj-wedding-packages": {
    en: "DJ Wedding Package",
    hr: "DJ paket za vjenčanje",
  },
  "ceremony-cocktail-music": {
    en: "Ceremony and Cocktail Music",
    hr: "Glazba za ceremoniju i koktel",
  },
};

export type WeddingSection = {
  id: WeddingPackageSectionId;
  title: LocalizedText;
};

export function t(text: LocalizedText, lang: Lang): string {
  return lang === "hr" ? text.hr : text.en;
}

export function tList(list: LocalizedList, lang: Lang): string[] {
  return lang === "hr" ? list.hr : list.en;
}
