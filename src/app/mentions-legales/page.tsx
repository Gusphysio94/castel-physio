import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site Castel Physio.",
};

export default function MentionsLegales() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy-950 to-navy-900 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Mentions légales</h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-navy-600 leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Éditeur du site</h2>
            <ul className="space-y-2">
              <li><strong>Nom :</strong> Augustin Castel</li>
              <li><strong>Profession :</strong> Kinésithérapeute du sport</li>
              <li><strong>Numéro INAMI :</strong> 5-46938-45-527</li>
              <li><strong>Numéro BCE :</strong> 0732.662.180</li>
              <li><strong>Statut TVA :</strong> Non assujetti (exempté en tant que professionnel de santé)</li>
              <li><strong>Adresse :</strong> Centre Aspis, Avenue Jacques Brel 34, 1200 Bruxelles</li>
              <li><strong>Téléphone :</strong> +32 497 233 858</li>
              <li><strong>Email :</strong> castelphysio94@hotmail.com</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Profession réglementée</h2>
            <p>
              Augustin Castel exerce la profession de kinésithérapeute, profession réglementée par
              la loi coordonnée du 10 mai 2015 relative à l&apos;exercice des professions des soins
              de santé en Belgique. Titre professionnel octroyé en Belgique.
            </p>
            <p className="mt-2">
              Organisme professionnel : Axxon (Association des kinésithérapeutes de Belgique).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Hébergement</h2>
            <ul className="space-y-2">
              <li><strong>Hébergeur :</strong> Vercel Inc.</li>
              <li><strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</li>
              <li><strong>Site web :</strong> vercel.com</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, photographies, logos, vidéos)
              est la propriété exclusive d&apos;Augustin Castel, sauf mention contraire. Toute
              reproduction, représentation, modification, publication ou adaptation de tout ou
              partie des éléments du site est interdite sans autorisation écrite préalable.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Responsabilité</h2>
            <p>
              Les informations fournies sur ce site le sont à titre informatif et ne remplacent
              en aucun cas une consultation professionnelle. Augustin Castel ne saurait être tenu
              responsable de l&apos;utilisation qui pourrait être faite des informations contenues
              sur ce site. Le contenu du site est susceptible d&apos;être modifié sans préavis.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Droit applicable</h2>
            <p>
              Le présent site et ses mentions légales sont régis par le droit belge. En cas de
              litige, les tribunaux de l&apos;arrondissement judiciaire de Bruxelles seront seuls compétents.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
