import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et protection des données personnelles du site Castel Physio.",
};

export default function PolitiqueConfidentialite() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy-950 to-navy-900 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Politique de confidentialité</h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-navy-600 leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Responsable du traitement</h2>
            <ul className="space-y-2">
              <li><strong>Nom :</strong> Augustin Castel</li>
              <li><strong>Adresse :</strong> Centre Aspis, Avenue Jacques Brel 34, 1200 Bruxelles</li>
              <li><strong>Numéro BCE :</strong> 0732.662.180</li>
              <li><strong>Email :</strong> castelphysio94@hotmail.com</li>
              <li><strong>Téléphone :</strong> +32 497 233 858</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Base légale et finalités</h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD — Règlement UE 2016/679)
              et à la loi belge du 30 juillet 2018 relative à la protection des personnes physiques à
              l&apos;égard des traitements de données à caractère personnel, nous traitons vos données
              personnelles aux fins suivantes :
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li><strong>Gestion des rendez-vous</strong> — prise, modification et suivi des consultations</li>
              <li><strong>Suivi thérapeutique</strong> — tenue du dossier patient, bilans, programmes de rééducation</li>
              <li><strong>Facturation</strong> — établissement des notes d&apos;honoraires et attestations de soins</li>
              <li><strong>Communication</strong> — réponse à vos messages via le formulaire de contact</li>
              <li><strong>Formations</strong> — gestion des inscriptions aux formations professionnelles</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Données collectées</h2>
            <p>Les catégories de données susceptibles d&apos;être collectées sont :</p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li><strong>Données d&apos;identification :</strong> nom, prénom, date de naissance, adresse</li>
              <li><strong>Données de contact :</strong> email, numéro de téléphone</li>
              <li><strong>Données de santé :</strong> antécédents médicaux, diagnostics, bilans cliniques, programmes de soins (données sensibles au sens du RGPD, traitées avec votre consentement explicite)</li>
              <li><strong>Données de facturation :</strong> numéro de mutuelle, attestations</li>
              <li><strong>Données de navigation :</strong> cookies techniques nécessaires au fonctionnement du site</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Données de santé</h2>
            <p>
              En tant que kinésithérapeute, je suis amené à traiter des données de santé, considérées
              comme des données sensibles au sens de l&apos;article 9 du RGPD. Ces données sont traitées
              sur base de votre consentement explicite et dans le cadre strict de votre prise en charge
              thérapeutique. Elles sont protégées par le secret professionnel conformément à
              l&apos;article 458 du Code pénal belge.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Durée de conservation</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Dossier patient :</strong> 30 ans à compter du dernier contact (obligation légale belge)</li>
              <li><strong>Données de facturation :</strong> 7 ans (obligation comptable)</li>
              <li><strong>Données du formulaire de contact :</strong> 1 an après le dernier échange</li>
              <li><strong>Données de navigation :</strong> 13 mois maximum</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Partage des données</h2>
            <p>
              Vos données personnelles ne sont jamais vendues ni cédées à des tiers à des fins commerciales.
              Elles peuvent être partagées uniquement avec :
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Votre médecin traitant ou spécialiste (dans le cadre du suivi thérapeutique, avec votre accord)</li>
              <li>Les organismes assureurs (mutuelles) pour le remboursement des soins</li>
              <li>L&apos;hébergeur du site (Vercel Inc.) pour les données techniques de navigation</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Vos droits</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li><strong>Droit d&apos;accès :</strong> obtenir une copie de vos données personnelles</li>
              <li><strong>Droit de rectification :</strong> corriger des données inexactes ou incomplètes</li>
              <li><strong>Droit à l&apos;effacement :</strong> demander la suppression de vos données (sous réserve des obligations légales de conservation)</li>
              <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
              <li><strong>Droit d&apos;opposition :</strong> vous opposer au traitement de vos données</li>
              <li><strong>Droit de retirer votre consentement :</strong> à tout moment, sans affecter la licéité du traitement antérieur</li>
            </ul>
            <p className="mt-4">
              Pour exercer ces droits, contactez-moi par email à <strong>castelphysio94@hotmail.com</strong> ou
              par courrier à l&apos;adresse du cabinet.
            </p>
            <p className="mt-4">
              Si vous estimez que le traitement de vos données constitue une violation du RGPD, vous avez
              le droit d&apos;introduire une réclamation auprès de l&apos;Autorité de Protection des Données (APD) :
            </p>
            <ul className="list-none space-y-1 mt-2 ml-4 text-sm">
              <li>Autorité de Protection des Données</li>
              <li>Rue de la Presse, 35 — 1000 Bruxelles</li>
              <li>Tél : +32 2 274 48 00</li>
              <li>contact@apd-gba.be</li>
              <li>www.autoriteprotectiondonnees.be</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Cookies</h2>
            <p>
              Ce site utilise uniquement des cookies techniques strictement nécessaires à son bon
              fonctionnement. Aucun cookie publicitaire ou de traçage n&apos;est utilisé.
              Ces cookies techniques ne nécessitent pas votre consentement préalable conformément
              à la législation belge.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Sécurité</h2>
            <p>
              Des mesures techniques et organisationnelles appropriées sont mises en place pour
              protéger vos données personnelles contre tout accès non autorisé, perte, altération
              ou divulgation. Le site utilise le protocole HTTPS pour sécuriser les échanges de données.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Modification de la politique</h2>
            <p>
              Cette politique de confidentialité peut être mise à jour à tout moment. La date de
              dernière modification est indiquée ci-dessous. Nous vous invitons à la consulter régulièrement.
            </p>
            <p className="mt-4 text-sm text-navy-400">
              Dernière mise à jour : mars 2026
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
