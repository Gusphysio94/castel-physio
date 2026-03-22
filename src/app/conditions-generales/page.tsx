import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions générales",
  description: "Conditions générales d'utilisation du site et des services de Castel Physio.",
};

export default function ConditionsGenerales() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy-950 to-navy-900 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Conditions générales</h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-navy-600 leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">1. Objet</h2>
            <p>
              Les présentes conditions générales régissent l&apos;utilisation du site web
              castel-physio.com et les services de kinésithérapie proposés par Augustin Castel,
              kinésithérapeute du sport, exerçant au Centre Aspis, Avenue Jacques Brel 34,
              1200 Bruxelles (BCE : 0732.662.180).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">2. Services proposés</h2>
            <p>Les services proposés comprennent :</p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Consultations de kinésithérapie au cabinet</li>
              <li>Téléconsultations</li>
              <li>Coaching sportif individualisé</li>
              <li>Formations en ligne pour professionnels de santé</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">3. Rendez-vous</h2>
            <h3 className="text-lg font-semibold text-navy-800 mb-2">Prise de rendez-vous</h3>
            <p>
              Les rendez-vous sont pris en ligne via la plateforme Q-Top ou par téléphone
              au +32 497 233 858.
            </p>

            <h3 className="text-lg font-semibold text-navy-800 mb-2 mt-6">Annulation et report</h3>
            <p>
              Toute annulation ou modification de rendez-vous doit être effectuée au minimum
              24 heures à l&apos;avance. En cas d&apos;absence non prévenue ou d&apos;annulation
              tardive (moins de 24h), la séance pourra être facturée.
            </p>

            <h3 className="text-lg font-semibold text-navy-800 mb-2 mt-6">Retard</h3>
            <p>
              En cas de retard du patient, la durée de la séance sera réduite en conséquence
              afin de respecter le planning des patients suivants. La séance sera facturée au
              tarif normal.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">4. Tarifs et paiement</h2>
            <p>
              Les tarifs appliqués sont conformes à la nomenclature INAMI en vigueur. Les
              honoraires sont payables à la fin de chaque séance. Les moyens de paiement
              acceptés sont : espèces, virement bancaire et paiement mobile.
            </p>
            <p className="mt-4">
              Une attestation de soins vous sera remise à chaque séance pour le remboursement
              par votre mutuelle.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">5. Téléconsultation</h2>
            <p>
              Les téléconsultations se déroulent via un outil de visioconférence sécurisé. Le
              patient s&apos;engage à disposer d&apos;une connexion internet stable et d&apos;un
              environnement calme et confidentiel. Les conditions d&apos;annulation sont identiques
              à celles des consultations au cabinet.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">6. Formations en ligne</h2>
            <p>
              Les formations en ligne sont hébergées sur la plateforme FullPhysio. Les conditions
              d&apos;inscription, d&apos;accès et de remboursement sont régies par les conditions
              générales de la plateforme FullPhysio. L&apos;accès aux formations est personnel et
              non transférable.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">7. Secret professionnel</h2>
            <p>
              En tant que professionnel de santé, Augustin Castel est tenu au secret professionnel
              conformément à l&apos;article 458 du Code pénal belge. Toutes les informations
              communiquées dans le cadre de la prise en charge sont strictement confidentielles.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">8. Responsabilité</h2>
            <p>
              Le kinésithérapeute s&apos;engage à fournir des soins conformes aux données actuelles
              de la science et aux règles de bonne pratique clinique. Il est couvert par une
              assurance responsabilité civile professionnelle.
            </p>
            <p className="mt-4">
              Les informations présentes sur ce site sont fournies à titre informatif et ne
              constituent en aucun cas un avis médical. Elles ne remplacent pas une consultation
              avec un professionnel de santé.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">9. Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble du contenu du site (textes, images, vidéos, logos) est protégé par
              le droit d&apos;auteur. Toute reproduction ou utilisation sans autorisation écrite
              préalable est interdite.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">10. Droit applicable et litiges</h2>
            <p>
              Les présentes conditions générales sont soumises au droit belge. En cas de litige,
              les parties s&apos;efforceront de trouver une solution amiable. À défaut, les
              tribunaux de l&apos;arrondissement judiciaire de Bruxelles seront seuls compétents.
            </p>
            <p className="mt-4">
              Conformément aux règlements européens, vous pouvez également recourir à la plateforme
              de Résolution des Litiges en Ligne (RLL) de la Commission européenne :
              ec.europa.eu/consumers/odr
            </p>
          </div>

          <div>
            <p className="text-sm text-navy-400">
              Dernière mise à jour : mars 2026
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
