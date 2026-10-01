/**
 * Schéma simplifié « charge et capacité » : la capacité des tissus progresse lentement ;
 * une charge qui monte plus vite qu'elle (« trop vite, trop fort ») entre dans la zone à risque.
 * Illustration pédagogique, pas des données mesurées.
 */
export default function LoadCapacityDiagram() {
  return (
    <figure className="my-10 rounded-3xl border border-navy-100 bg-white p-5 md:p-8">
      <svg
        viewBox="0 0 760 320"
        role="img"
        aria-label="Schéma simplifié : la capacité des tissus augmente lentement avec les semaines. Une charge d'entraînement progressive reste sous cette capacité, alors qu'une charge qui augmente brutalement la dépasse et entre dans la zone à risque de blessure."
        className="w-full h-auto"
      >
        {/* Axes */}
        <line x1="50" y1="40" x2="50" y2="268" className="stroke-navy-300" strokeWidth="1.5" />
        <line x1="50" y1="268" x2="620" y2="268" className="stroke-navy-300" strokeWidth="1.5" />
        <text x="50" y="26" className="fill-navy-500" fontSize="13" fontWeight="600">Stress mécanique</text>
        <text x="620" y="292" textAnchor="end" className="fill-navy-500" fontSize="13" fontWeight="600">Semaines →</text>

        {/* Zone à risque : là où la charge dépasse la capacité */}
        <polygon
          points="310,176 360,110 440,95 520,92 600,92 600,125 520,140 400,162"
          className="fill-amber-500/20"
        />

        {/* Capacité des tissus */}
        <polyline
          points="50,200 160,193 280,180 400,162 520,140 600,125"
          fill="none"
          className="stroke-navy-700"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Charge progressive */}
        <polyline
          points="50,222 160,214 280,200 400,182 520,160 600,146"
          fill="none"
          className="stroke-navy-400"
          strokeWidth="3"
          strokeDasharray="7 6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Charge qui monte trop vite */}
        <polyline
          points="50,222 160,214 280,200 310,176 360,110 440,95 520,92 600,92"
          fill="none"
          className="stroke-amber-500"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Point de bascule */}
        <circle cx="310" cy="176" r="6" className="fill-white stroke-amber-500" strokeWidth="3" />

        {/* Étiquettes */}
        <text x="612" y="97" className="fill-amber-700" fontSize="14" fontWeight="600">Trop vite, trop fort</text>
        <text x="612" y="130" className="fill-navy-800" fontSize="14" fontWeight="600">Capacité des tissus</text>
        <text x="612" y="151" className="fill-navy-500" fontSize="14" fontWeight="600">Charge progressive</text>
        <text x="448" y="122" textAnchor="middle" className="fill-amber-700" fontSize="12" fontWeight="600">Zone à risque</text>
        <text x="290" y="150" textAnchor="middle" className="fill-navy-500" fontSize="12">Hausse brutale</text>
        <line x1="296" y1="156" x2="308" y2="172" className="stroke-navy-300" strokeWidth="1.5" />
      </svg>

      <figcaption className="mt-4 text-sm text-navy-500 leading-relaxed text-left">
        Schéma simplifié. Les tissus (os, tendons, muscles) s&apos;adaptent lentement à ce qu&apos;on leur demande. Tant que la
        charge d&apos;entraînement reste en dessous de ce qu&apos;ils savent supporter, ils se renforcent ; quand elle dépasse cette
        capacité, le risque de blessure augmente.
      </figcaption>
    </figure>
  );
}
