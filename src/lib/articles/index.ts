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

import { articleTopics } from "./topics";

export { articleTopics };

/** Pages de pathologie liées à un article */
export function topicsOf(slug: string): string[] {
  return articleTopics[slug] ?? [];
}

/** Articles rattachés à une page de pathologie (patients d'abord, mythes avant guides) */
export function articlesForCondition(conditionSlug: string, max = 4): Article[] {
  const rank = (a: Article) => (a.audience === "patients" ? 0 : 2) + (a.kind === "mythe" ? 0 : 1);
  return articles
    .filter((a) => topicsOf(a.slug).includes(conditionSlug))
    .sort((a, b) => rank(a) - rank(b))
    .slice(0, max);
}

function hash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) % 9973;
  return h;
}

/**
 * Articles proches d'un article : sujets communs d'abord, puis même thème et même public.
 * À score égal, l'ordre dépend de l'article de départ, pour répartir les liens entre tous les articles.
 */
export function relatedArticles(article: Article, max = 3): Article[] {
  const mine = new Set(topicsOf(article.slug));
  return articles
    .filter((a) => a.slug !== article.slug)
    .map((a) => ({
      a,
      score:
        topicsOf(a.slug).filter((t) => mine.has(t)).length * 10 +
        (a.category === article.category ? 3 : 0) +
        (a.audience === article.audience ? 1 : 0),
    }))
    .sort((x, y) => y.score - x.score || hash(article.slug + x.a.slug) - hash(article.slug + y.a.slug))
    .slice(0, max)
    .map((x) => x.a);
}
