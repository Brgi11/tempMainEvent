"use client";

import { useLang } from "@/components/i18n/LanguageProvider";
import { getHomeFeaturedWeddingPackages } from "@/lib/weddings/packages";
import { t, weddingCategoryLabel } from "@/lib/weddings/types";
import Link from "next/link";

const FEATURED_PACKAGES = getHomeFeaturedWeddingPackages();

export function WeddingsHomeSection() {
  const { lang } = useLang();
  const isHr = lang === "hr";

  if (FEATURED_PACKAGES.length === 0) return null;

  return (
    <section id="weddings" className="wh-section" aria-labelledby="wh-heading">
      <div className="wh-container">
        <div className="wh-header">
          <div className="wh-header-copy">
            <h2 id="wh-heading" className="wh-title">
              {isHr ? "vjenčanja." : "weddings."}
            </h2>
            <p className="wh-subtitle">
              {isHr
                ? "Otkrijte naše vjenčane pakete koji pokrivaju svaki dio vašeg dana — od ceremonije i cocktail sata do večere i recepcije."
                : "Discover our wedding packages, covering every part of your day. From the ceremony and cocktail hour to dinner and the reception."}
            </p>
          </div>
          <Link href="/weddings" className="wh-explore">
            {isHr ? "Svi paketi" : "All packages"}
            <span className="wh-explore-arrow" aria-hidden>
              →
            </span>
          </Link>
        </div>

        <div className="wh-scroll">
          <div className="wh-grid">
            {FEATURED_PACKAGES.map((pkg) => {
              const name = t(pkg.name, lang);
              const price = t(pkg.priceLabel, lang);
              const description = t(pkg.cardDescription, lang);
              const category = weddingCategoryLabel(pkg.sectionId, lang);
              return (
                <Link
                  key={pkg.slug}
                  href={`/weddings/${pkg.slug}`}
                  className="wh-card"
                  scroll
                >
                  <div className="wh-card-polaroid">
                    <div className="wh-card-frame">
                      <img
                        src={pkg.imageUrl}
                        alt={name}
                        className="wh-card-img"
                      />
                      <span className="wh-card-price">{price}</span>
                    </div>
                  </div>
                  <div className="wh-card-body">
                    <span className="wh-card-category">{category}</span>
                    <h3 className="wh-card-name">{name}</h3>
                    <p className="wh-card-desc">{description}</p>
                    <span className="wh-card-link">
                      {isHr ? "Pogledaj paket" : "View package"}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
