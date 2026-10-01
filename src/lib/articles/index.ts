import type { Article } from "./types";
import { entorseChevillePremiersJours } from "./entorse-cheville-premiers-jours";
import { ruptureLcaOperationOuNon } from "./rupture-lca-operation-ou-non";
import { tendinopathieAchilleDuree } from "./tendinopathie-achille-duree";
import { courirAvecDouleurGenou } from "./courir-avec-douleur-genou";
import { courirAWoluweSansSeBlesser } from "./courir-a-woluwe-sans-se-blesser";
import { lumbagoPremiersJours } from "./lumbago-premiers-jours";
import { douleurEpauleIrmOuNon } from "./douleur-epaule-irm-ou-non";
import { torticolisDureeQueFaire } from "./torticolis-duree-que-faire";
import { protheseDeGenouPremieresSemaines } from "./prothese-de-genou-premieres-semaines";
import { reprendreLeSportApresUneBlessure } from "./reprendre-le-sport-apres-une-blessure";
import { retourSportApresLca } from "./retour-sport-apres-lca";
import { exerciceTherapeutiqueTendinopathie } from "./exercice-therapeutique-tendinopathie";
import { approcheBiopsychosociale } from "./approche-biopsychosociale-kinesitherapie";

import { malDeDosHernieDiscale } from "./mal-de-dos-hernie-discale";
import { vertebreDeplaceeRemettreEnPlace } from "./vertebre-deplacee-remettre-en-place";
import { malDeDosReposAuLit } from "./mal-de-dos-repos-au-lit";
import { douleurEgaleDegats } from "./douleur-egale-degats";
import { cartilageUseArthroseCourse } from "./cartilage-use-arthrose-course";
import { tendiniteInflammationRepos } from "./tendinite-inflammation-repos";
import { irmDechirureOperation } from "./irm-dechirure-operation";
import { mauvaisePostureMalDeDos } from "./mauvaise-posture-mal-de-dos";
import { etirementsEviterBlessures } from "./etirements-eviter-blessures";
import { souleverLourdDosRond } from "./soulever-lourd-dos-rond";

export type { Article } from "./types";

// Ordre d'affichage à date égale : les mini-articles « mythe ou réalité » d'abord, puis les guides.
const all: Article[] = [
  malDeDosHernieDiscale,
  vertebreDeplaceeRemettreEnPlace,
  malDeDosReposAuLit,
  douleurEgaleDegats,
  cartilageUseArthroseCourse,
  tendiniteInflammationRepos,
  irmDechirureOperation,
  mauvaisePostureMalDeDos,
  etirementsEviterBlessures,
  souleverLourdDosRond,
  entorseChevillePremiersJours,
  ruptureLcaOperationOuNon,
  tendinopathieAchilleDuree,
  courirAvecDouleurGenou,
  courirAWoluweSansSeBlesser,
  lumbagoPremiersJours,
  douleurEpauleIrmOuNon,
  torticolisDureeQueFaire,
  protheseDeGenouPremieresSemaines,
  reprendreLeSportApresUneBlessure,
  retourSportApresLca,
  exerciceTherapeutiqueTendinopathie,
  approcheBiopsychosociale,
];

export const articles: Article[] = [...all].sort((a, b) => b.isoDate.localeCompare(a.isoDate));

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
