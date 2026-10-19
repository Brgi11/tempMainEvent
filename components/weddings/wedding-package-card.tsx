"use client";

import type { WeddingPackage } from "@/lib/weddings/types";
import {
  t,
  weddingPackageCardVariant,
  type WeddingPackageCardVariant,
} from "@/lib/weddings/types";
import type { Lang } from "@/lib/i18n/language";
import Link from "next/link";

type Props = {
  pkg: WeddingPackage;
  lang: Lang;
  variant?: WeddingPackageCardVariant;
};

function CardArrow({ lang }: { lang: Lang }) {
  const isHr = lang === "hr";
  return (
    <span className="wedding-package-card-cta" aria-hidden>
      <span className="wedding-package-card-cta-text">
        {isHr ? "Pogledaj" : "View"}
      </span>
      <span className="wedding-package-card-cta-arrow">→</span>
    </span>
  );
}

export function WeddingPackageCard({ pkg, lang, variant }: Props) {
  const resolvedVariant = variant ?? weddingPackageCardVariant(pkg);
  const isHr = lang === "hr";
  const name = t(pkg.name, lang);
  const cardText = t(pkg.cardDescription, lang);
  const price = t(pkg.priceLabel, lang);
  const bestFor = pkg.bestFor ? t(pkg.bestFor, lang) : null;
  const addonText = pkg.addonText ? t(pkg.addonText, lang) : null;

  const className = [
    "wedding-package-card",
    `wedding-package-card--${resolvedVariant}`,
  ].join(" ");

  return (
    <Link href={`/weddings/${pkg.slug}`} className={className} scroll>
      {resolvedVariant === "special" || resolvedVariant === "compact" ? (
        <div className="wedding-package-card-image-wrap">
          <img
            src={pkg.imageUrl}
            alt=""
            className="wedding-package-card-image"
          />
        </div>
      ) : null}

      <div className="wedding-package-card-body">
        {resolvedVariant === "addon" ? (
          <p className="wedding-package-card-addon-label">
            {isHr ? "Dodatak dostupan" : "Add-on available"}
          </p>
        ) : null}

        {resolvedVariant !== "addon" ? (
          <p className="wedding-package-card-price">{price}</p>
        ) : null}

        <h3 className="wedding-package-card-title">{name}</h3>
        <p className="wedding-package-card-description">{cardText}</p>

        {addonText && resolvedVariant === "addon" ? (
          <p className="wedding-package-card-addon-note">{addonText}</p>
        ) : null}

        {bestFor && resolvedVariant !== "compact" ? (
          <p className="wedding-package-card-best-for">
            <span className="wedding-package-card-label">
              {isHr ? "Najbolje za:" : "Best for:"}
            </span>{" "}
            {bestFor}
          </p>
        ) : null}

        {resolvedVariant === "dj" || resolvedVariant === "addon" ? (
          <p className="wedding-package-card-price wedding-package-card-price--inline">
            {price}
          </p>
        ) : null}

        <CardArrow lang={lang} />
      </div>
    </Link>
  );
}
