import type { Metadata } from "next";

export const SITE_URL = "https://castel-physio.com";
export const SITE_NAME = "Castel Physio";

// Image générée par src/app/opengraph-image.tsx
const OG_IMAGE = { url: "/opengraph-image", width: 1200, height: 630, alt: "Castel Physio — Augustin Castel, kinésithérapeute du sport à Bruxelles" };

type PageMetadataInput = {
  title: string;
  description: string;
  /** Chemin de la page, ex. "/formations" (le root est "/") */
  path: string;
  /** Titre OG/Twitter si différent du <title> (le template du layout n'y est pas appliqué) */
  socialTitle?: string;
  type?: "website" | "article";
  publishedTime?: string;
};

// Les objets `openGraph` et `twitter` d'une page remplacent ceux du layout
// (fusion superficielle) : on redéclare donc les champs communs ici.
export function pageMetadata({
  title,
  description,
  path,
  socialTitle,
  type = "website",
  publishedTime,
}: PageMetadataInput): Metadata {
  const ogTitle = socialTitle ?? `${title} | ${SITE_NAME}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: "fr_BE",
      url: path,
      siteName: SITE_NAME,
      title: ogTitle,
      description,
      images: [OG_IMAGE],
      ...(type === "article" && publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

/** Description meta : premier paragraphe, coupé à ~155 caractères sur une limite de mot. */
export function excerpt(text: string, max = 155): string {
  const first = text.split("\n\n")[0].trim();
  if (first.length <= max) return first;
  return first.slice(0, max).replace(/\s+\S*$/, "") + "…";
}
