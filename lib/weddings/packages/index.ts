import { CEREMONY_COCKTAIL_WEDDING_PACKAGES } from "./ceremony-cocktail";
import { DJ_WEDDING_PACKAGES } from "./dj";
import { SPECIAL_WEDDING_PACKAGES } from "./special";
import type { WeddingPackage, WeddingPackageSectionId } from "../types";

export const ALL_WEDDING_PACKAGES: WeddingPackage[] = [
  ...SPECIAL_WEDDING_PACKAGES,
  ...DJ_WEDDING_PACKAGES,
  ...CEREMONY_COCKTAIL_WEDDING_PACKAGES,
];

export function getWeddingPackageBySlug(
  slug: string
): WeddingPackage | undefined {
  return ALL_WEDDING_PACKAGES.find((p) => p.slug === slug);
}

export function getWeddingPackagesBySection(
  sectionId: WeddingPackageSectionId
): WeddingPackage[] {
  return ALL_WEDDING_PACKAGES.filter((p) => p.sectionId === sectionId);
}

export function getMainWeddingPackagesBySection(
  sectionId: WeddingPackageSectionId
): WeddingPackage[] {
  return getWeddingPackagesBySection(sectionId).filter((p) => !p.isAddon);
}

export function getWeddingAddonPackages(
  sectionId: WeddingPackageSectionId
): WeddingPackage[] {
  return getWeddingPackagesBySection(sectionId).filter((p) => p.isAddon);
}

export function getAllWeddingPackageSlugs(): string[] {
  return ALL_WEDDING_PACKAGES.map((p) => p.slug);
}

/** Curated highlights for the home page weddings strip. */
const HOME_FEATURED_WEDDING_SLUGS = [
  "fjok-collective",
  "blkn-excess",
  "signature-package",
  "premium-package",
  "due-ricce",
  "solo-instrumentalist",
] as const;

export function getHomeFeaturedWeddingPackages(): WeddingPackage[] {
  return HOME_FEATURED_WEDDING_SLUGS.map((slug) =>
    getWeddingPackageBySlug(slug)
  ).filter((p): p is WeddingPackage => p != null);
}
