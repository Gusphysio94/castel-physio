import type { Condition } from "./types";
import { cervicalgie } from "./cervicalgie";
import { douleurEpaule } from "./douleur-epaule";
import { douleurGenou } from "./douleur-genou";
import { tendinopathie } from "./tendinopathie";
import { blessuresCourseAPied } from "./blessures-course-a-pied";
import { entorseCheville } from "./entorse-cheville";
import { lombalgie } from "./lombalgie";
import { reeducationLca } from "./reeducation-lca";
import { reeducationPostOperatoire } from "./reeducation-post-operatoire";

export type { Condition } from "./types";

/** Pathologies, dans l'ordre d'affichage de la page /kinesitherapie */
export const conditions: Condition[] = [
  tendinopathie,
  blessuresCourseAPied,
  reeducationLca,
  entorseCheville,
  douleurEpaule,
  douleurGenou,
  reeducationPostOperatoire,
  lombalgie,
  cervicalgie,
];

/** Page locale : n'est pas une pathologie, donc absente de la liste ci-dessus */
export const localPage: Condition = {
  slug: "woluwe-saint-lambert",
  label: "Kiné à Woluwe-Saint-Lambert",
  title: "Kiné du sport à Woluwe-Saint-Lambert (1200 Bruxelles)",
  description:
    "Cabinet de kiné du sport au Centre ASPIS, Avenue Jacques Brel 34, 1200 Woluwe-Saint-Lambert. Rendez-vous en ligne ou par téléphone, téléconsultation possible.",
  h1: "Kinésithérapeute du sport à Woluwe-Saint-Lambert",
  lead:
    "Je reçois mes patients au Centre ASPIS, à Woluwe-Saint-Lambert (Woluwe, Sint-Lambrechts-Woluwe en néerlandais), aux portes de Woluwe-Saint-Pierre, pour des soins de kinésithérapie du sport : blessures du sportif, douleurs musculo-squelettiques et rééducation après opération.",
  subtypeGroups: [
    {
      heading: "Ce que je prends en charge",
      items: conditions.map((c) => ({
        name: c.label,
        href: `/kinesitherapie/${c.slug}`,
      })),
    },
  ],
  sections: [
    {
      heading: "Le cabinet",
      paragraphs: [
        "Centre ASPIS, Avenue Jacques Brel 34, 1200 Bruxelles, à Woluwe-Saint-Lambert. Que vous habitiez ou travailliez à Woluwe-Saint-Lambert, à Woluwe-Saint-Pierre ou dans les communes voisines (Etterbeek, Auderghem, Schaerbeek, Evere), le cabinet est facile à rejoindre.",
      ],
    },
    {
      heading: "Comment venir",
      paragraphs: [
        "Le cabinet est à environ 5 minutes à pied de la station de métro Roodebeek.",
      ],
      list: [
        "En métro : ligne 1, arrêt Roodebeek",
        "En tram : ligne 8, arrêt Roodebeek",
        "En bus : lignes 29, 42 et 45, arrêts Charmille ou Roodebeek",
      ],
    },
    {
      heading: "Pour qui ?",
      paragraphs: [
        "Pour les sportifs de tous niveaux, coureurs, joueurs de sports collectifs, pratiquants de loisir, mais aussi pour toute personne qui souffre du dos, d'une articulation ou d'un tendon et souhaite une prise en charge active, basée sur les preuves scientifiques.",
      ],
    },
    {
      heading: "Prendre rendez-vous",
      paragraphs: [
        "Vous pouvez réserver en ligne via la plateforme Q-Top, ou me joindre par téléphone au +32 497 23 38 58. Pour que les séances soient remboursées par votre mutuelle, une prescription médicale est requise, et une attestation de soins vous est remise à chaque séance.",
        "Si vous ne pouvez pas vous déplacer, ou pour un suivi entre deux séances, la téléconsultation est possible.",
      ],
    },
  ],
  myths: [],
  care: [],
  faq: [
    {
      q: "Où se trouve votre cabinet et comment y aller ?",
      a: [
        "Au Centre ASPIS, Avenue Jacques Brel 34, 1200 Bruxelles, à Woluwe-Saint-Lambert, à environ 5 minutes à pied de la station de métro Roodebeek.",
        "En transports en commun : métro ligne 1 et tram 8 (arrêt Roodebeek), bus 29, 42 et 45 (arrêts Charmille ou Roodebeek).",
      ],
    },
    { q: "Faut-il une prescription pour consulter ?", a: ["Pour un remboursement par la mutuelle, oui, une prescription médicale est requise."] },
    { q: "Comment prendre rendez-vous ?", a: ["En ligne via Q-Top depuis le site, ou par téléphone au +32 497 23 38 58."] },
    { q: "Proposez-vous la téléconsultation ?", a: ["Oui, pour les bilans de progression, l'ajustement du programme et le suivi entre deux séances au cabinet."] },
  ],
  related: [],
  references: [],
};

export const allPages: Condition[] = [...conditions, localPage];

export function getCondition(slug: string): Condition | undefined {
  return allPages.find((c) => c.slug === slug);
}
