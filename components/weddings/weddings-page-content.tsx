"use client";

import { useLang } from "@/components/i18n/LanguageProvider";
import { WEDDINGS_HERO_IMAGE } from "@/lib/weddings/constants";
import {
  getMainWeddingPackagesBySection,
  getWeddingAddonPackages,
} from "@/lib/weddings/packages";
import { WEDDING_SECTIONS } from "@/lib/weddings/sections";
import type { WeddingPackageSectionId } from "@/lib/weddings/types";
import { t } from "@/lib/weddings/types";
import Link from "next/link";
import type { CSSProperties } from "react";
import { useEffect } from "react";
import { WeddingPackageCard } from "./wedding-package-card";

function scrollToWeddingsHash() {
  const hash = window.location.hash.slice(1);
  if (!hash) return;
  const el = document.getElementById(hash);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function SectionGrid({
  sectionId,
  lang,
}: {
  sectionId: WeddingPackageSectionId;
  lang: "en" | "hr";
}) {
  const mainPackages = getMainWeddingPackagesBySection(sectionId);
  const addons = getWeddingAddonPackages(sectionId);

  if (mainPackages.length === 0 && addons.length === 0) return null;

  if (sectionId === "special-packages" || sectionId === "ceremony-cocktail-music") {
    return (
      <div className="weddings-scroll-wrapper">
        <div className="weddings-packages-grid weddings-packages-grid--special weddings-packages-track">
          {mainPackages.map((pkg) => (
            <WeddingPackageCard key={pkg.slug} pkg={pkg} lang={lang} variant="special" />
          ))}
        </div>
      </div>
    );
  }

  if (sectionId === "dj-wedding-packages") {
    return (
      <div className="weddings-scroll-wrapper">
        <div className="weddings-packages-grid weddings-packages-grid--dj weddings-packages-track weddings-packages-track--dj">
          {mainPackages.map((pkg) => (
            <WeddingPackageCard key={pkg.slug} pkg={pkg} lang={lang} variant="dj" />
          ))}
          {addons.map((pkg) => (
            <WeddingPackageCard
              key={pkg.slug}
              pkg={pkg}
              lang={lang}
              variant="addon"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="weddings-scroll-wrapper">
      <div
        className={`weddings-packages-grid weddings-packages-grid--compact weddings-packages-track weddings-packages-track--${sectionId}`}
      >
        {mainPackages.map((pkg) => (
          <WeddingPackageCard key={pkg.slug} pkg={pkg} lang={lang} variant="compact" />
        ))}
      </div>
    </div>
  );
}

export function WeddingsPageContent() {
  const { lang } = useLang();
  const isHr = lang === "hr";

  useEffect(() => {
    scrollToWeddingsHash();
    window.addEventListener("hashchange", scrollToWeddingsHash);
    return () => window.removeEventListener("hashchange", scrollToWeddingsHash);
  }, []);

  return (
    <>
      <section
        className="weddings-hero"
        style={
          {
            "--weddings-hero-bg": `url("${WEDDINGS_HERO_IMAGE}")`,
          } as CSSProperties
        }
        aria-labelledby="weddings-hero-heading"
      >
        <div className="weddings-hero-inner">
          <h1 id="weddings-hero-heading" className="weddings-hero-title">
            {isHr
              ? "Premium zabava za vjenčanja u Hrvatskoj"
              : "Premium Wedding Entertainment in Croatia"}
          </h1>
          <p className="weddings-hero-description weddings-hero-description--full">
            {isHr
              ? "Otkrijte naše vjenčane pakete koji pokrivaju svaki dio vašeg dana — od ceremonije i cocktail sata do večere i recepcije."
              : "Discover our wedding packages, thoughtfully designed to bring every part of your day together, from the ceremony and cocktail hour to dinner and the party."}
          </p>
          <p className="weddings-hero-description weddings-hero-description--short">
            {isHr
              ? "Otkrijte naše vjenčane pakete koji pokrivaju svaki dio vašeg dana — od ceremonije i cocktail sata do večere i recepcije."
              : "Discover our wedding packages, thoughtfully designed to bring every part of your day together, from the ceremony and cocktail hour to dinner and the party."}
          </p>
          <Link href="#weddings-packages" className="weddings-hero-cta" scroll>
            {isHr ? "ISTRAŽITE PAKETE" : "EXPLORE PACKAGES"}
          </Link>
        </div>
      </section>

      <section
        id="weddings-packages"
        className="artists-page-section weddings-packages-section"
      >
        <div className="artists-page-container">
          {WEDDING_SECTIONS.map((section, index) => {
            const mainPackages = getMainWeddingPackagesBySection(section.id);
            const addons = getWeddingAddonPackages(section.id);
            if (mainPackages.length === 0 && addons.length === 0) return null;

            return (
              <div
                key={section.id}
                id={section.id}
                className={`weddings-package-section${index > 0 ? " weddings-package-section--divider" : ""}`}
              >
                <div className="weddings-section-header">
                  <h2 className="weddings-section-title">
                    {t(section.title, lang)}
                  </h2>
                </div>
                <SectionGrid sectionId={section.id} lang={lang} />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
