import Script from "next/script";

// Mesure d'audience Umami : sans cookie, sans donnée personnelle, et inactive tant que
// NEXT_PUBLIC_UMAMI_WEBSITE_ID n'est pas défini (aucun script n'est alors chargé).
export default function Analytics() {
  const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  if (!websiteId) return null;

  return (
    <Script
      src="https://cloud.umami.is/script.js"
      data-website-id={websiteId}
      data-domains="castel-physio.com"
      data-do-not-track="true"
      strategy="afterInteractive"
    />
  );
}
