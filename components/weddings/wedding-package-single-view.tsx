"use client";

import { useLang } from "@/components/i18n/LanguageProvider";
import type { WeddingPackage } from "@/lib/weddings/types";
import { t, tList, weddingCategoryLabel } from "@/lib/weddings/types";
import Link from "next/link";
import { WeddingPackageSocialLinks } from "./wedding-package-social-links";

type Props = { pkg: WeddingPackage };

export function WeddingPackageSingleView({ pkg }: Props) {
  const { lang } = useLang();
  const isHr = lang === "hr";
  const name = t(pkg.name, lang);
  const category = weddingCategoryLabel(pkg.sectionId, lang);
  const addonText = pkg.addonText ? t(pkg.addonText, lang) : null;
  const showChapterNumbers = pkg.detail.blocks.length > 1;

  return (
    <article id="wedding-package-single" className="wv">
      <div className="wv-wrap">
        <div className="wv-bar">
          <Link
            href={`/weddings#${pkg.sectionId}`}
            className="wv-return"
            scroll
          >
            {isHr ? "Natrag na pakete" : "All packages"}
          </Link>
        </div>

        <div className="wv-opening">
          <div className="wv-opening-copy">
            <p className="wv-label">{category}</p>
            <h1 className="wv-title">{name}</h1>
            <p className="wv-narrative">{t(pkg.detail.intro, lang)}</p>

            {pkg.isAddon && addonText ? (
              <p className="wv-addon" role="note">
                {addonText}
              </p>
            ) : null}

            {pkg.socialLinks ? (
              <div className="wv-social-row">
                <WeddingPackageSocialLinks
                  links={pkg.socialLinks}
                  linkClassName="wv-social"
                />
              </div>
            ) : null}
          </div>

          <div className="wv-opening-photo">
            <img src={pkg.imageUrl} alt={name} />
          </div>
        </div>

        {pkg.bestFor ? (
          <blockquote className="wv-pullquote">
            <span className="wv-pullquote-label">
              {isHr ? "Najbolje za" : "Best for"}
            </span>
            <p className="wv-pullquote-text">{t(pkg.bestFor, lang)}</p>
          </blockquote>
        ) : null}

        <div className="wv-chapters">
          {pkg.detail.extraParagraphs?.map((para, i) => (
            <p key={`extra-${i}`} className="wv-prose">
              {t(para, lang)}
            </p>
          ))}

          {pkg.detail.blocks.map((block, i) => {
            const blockTitle = t(block.title, lang);
            const isIncludedPerformance =
              blockTitle.toLowerCase() === "included performance" ||
              blockTitle.toLowerCase() === "uključena izvedba";
            return (
            <div
              key={i}
              className={`wv-chapter${showChapterNumbers ? "" : " wv-chapter--solo"}${isIncludedPerformance ? " wv-chapter--included" : ""}`}
            >
              {showChapterNumbers ? (
                <span className="wv-chapter-num" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </span>
              ) : null}
              <div className="wv-chapter-body">
                <h2 className="wv-chapter-title">{blockTitle}</h2>
                <ul className="wv-chapter-list">
                  {tList(block.items, lang).map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
          })}
        </div>
      </div>

      <div className="wv-closer">
        <div className="wv-closer-inner">
          <p className="wv-closer-lead">
            {isHr
              ? "Započnimo planiranje vašeg savršenog dana."
              : "Let us help shape your perfect day."}
          </p>
          <div className="wv-closer-actions">
            <Link href="/#contact" className="wv-action wv-action--fill" scroll>
              {isHr ? "Pošaljite upit" : "Send inquiry"}
            </Link>
            <Link
              href={`/weddings#${pkg.sectionId}`}
              className="wv-action wv-action--line"
              scroll
            >
              {isHr ? "Pregled paketa" : "View all packages"}
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
