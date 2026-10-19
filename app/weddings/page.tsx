import type { Metadata } from "next";
import { WeddingsPageContent } from "@/components/weddings/weddings-page-content";
import "@/styles/artists-page.css";
import "@/styles/weddings.css";

export const metadata: Metadata = {
  title: "Weddings",
  description:
    "Premium wedding entertainment in Croatia — curated DJs, live performers and full wedding packages.",
};

export default function WeddingsPage() {
  return <WeddingsPageContent />;
}
