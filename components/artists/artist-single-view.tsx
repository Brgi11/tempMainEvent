"use client";

import { acfImageAlt, acfImageUrl } from "@/lib/wp/acf-media";
import type { WpArtistPostNode } from "@/lib/wp/types";
import { getArtistDisplayName } from "@/lib/data/artists";
import Link from "next/link";
import { ArtistFaqStatic } from "./artist-faq-static";
import { ArtistInquiryForm } from "@/components/artists/artist-inquiry-form";
import { useLang } from "@/components/i18n/LanguageProvider";
import { markArtistsArchiveRestore } from "./archive-scroll";

type Props = { post: WpArtistPostNode };

function toStringArray(value: unknown): string[] {
  if (Array.isArray(value)) return value.filter((v): v is string => typeof v === "string");
  if (typeof value === "string") return [value];
  return [];
}

export function ArtistSingleView({ post }: Props) {
  const { lang } = useLang();
  const isHr = lang === "hr";
  const slug = post.slug ?? "";
  const acf = post.artists;
  const name = getArtistDisplayName(post);
  const eventTypes = toStringArray(acf?.eventType).map((s) => s.trim()).filter(Boolean);
  const vibes = toStringArray(acf?.vibe).map((s) => s.trim()).filter(Boolean);
  const tagNames =
    post.tags?.nodes
      ?.map((t) => (typeof t?.name === "string" ? t.name.trim() : ""))
      .filter(Boolean) ?? [];

  const mainImage = acfImageUrl(acf?.image1);
  const alt = acfImageAlt(acf?.image1, name);
  const bioHtml = isHr
    ? (acf?.bioHr?.trim() || acf?.bioEn?.trim() || "").trim()
    : (acf?.bioEn?.trim() || acf?.bioHr?.trim() || "").trim();

  return (
    <section id="artist-single" className="artist-single-section">
      <div className="artist-single-container">
        <div className="artist-single-topbar">
          <Link
            href="/artists"
            className="artist-single-back"
            scroll={false}
            onClick={() => markArtistsArchiveRestore()}
          >
            ← {isHr ? "Natrag na izvođače" : "Back to artists"}
          </Link>
        </div>
        <div className="artist-landing">
          <div className="artist-main-content">
            <div className="artist-media-column">
              <div className="artist-main-image-wrapper">
                {mainImage ? (
                  <img
                    src={mainImage}
                    alt={alt}
                    className="artist-main-image"
                  />
                ) : null}
              </div>
            </div>
            <div className="artist-info-content">
              <h1 className="artist-single-name">{name}</h1>

              {tagNames.length > 0 ? (
                <p className="artist-single-tags" aria-label="Tags">
                  {tagNames.join(" / ")}
                </p>
              ) : null}

              {eventTypes.length > 0 || vibes.length > 0 ? (
                <div
                  className="artist-single-traits"
                  aria-label={isHr ? "Karakteristike izvođača" : "Artist traits"}
                >
                  {eventTypes.length > 0 ? (
                    <div className="artist-single-trait">
                      <p className="artist-single-trait-label">
                        {isHr ? "Tip događaja" : "Event type"}
                      </p>
                      <p className="artist-single-trait-value">
                        {eventTypes.join(" · ")}
                      </p>
                    </div>
                  ) : null}
                  {vibes.length > 0 ? (
                    <div className="artist-single-trait">
                      <p className="artist-single-trait-label">
                        {isHr ? "Atmosfera" : "Vibe"}
                      </p>
                      <p className="artist-single-trait-value">
                        {vibes.join(" · ")}
                      </p>
                    </div>
                  ) : null}
                </div>
              ) : null}

              {bioHtml ? (
                <div
                  className="artist-single-description wp-content"
                  dangerouslySetInnerHTML={{ __html: bioHtml }}
                />
              ) : null}
              <div className="artist-cta-wrapper">
                <Link href="#contact-form" className="artist-cta-button" scroll>
                  {isHr ? "Pošalji upit" : "Send Inquiry"}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <ArtistFaqStatic />
        <ArtistInquiryForm artistSlug={slug} artistName={name} />
      </div>
    </section>
  );
}
