import { WeddingPackageSingleView } from "@/components/weddings/wedding-package-single-view";
import {
  getAllWeddingPackageSlugs,
  getWeddingPackageBySlug,
} from "@/lib/weddings/packages";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "@/styles/wedding-package-single.css";

export const revalidate = 60;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllWeddingPackageSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getWeddingPackageBySlug(slug);
  if (!pkg) return { title: "Wedding Package" };
  return {
    title: pkg.name.en,
    description: pkg.cardDescription.en,
  };
}

export default async function WeddingPackagePage({ params }: Props) {
  const { slug } = await params;
  const pkg = getWeddingPackageBySlug(slug);
  if (!pkg) notFound();
  return <WeddingPackageSingleView pkg={pkg} />;
}
