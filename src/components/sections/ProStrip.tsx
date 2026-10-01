import Link from "next/link";

export default function ProStrip() {
  return (
    <section className="bg-navy-950 border-t border-navy-800/60 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <p className="text-navy-300 text-sm">
          <span className="font-semibold text-white">Vous êtes kinésithérapeute ?</span> Je forme aussi des
          professionnels de santé, avec des formations en ligne basées sur les preuves.
        </p>
        <Link
          href="/formations"
          className="shrink-0 text-sm font-semibold text-amber-400 hover:text-amber-300 underline underline-offset-4"
        >
          Découvrir les formations →
        </Link>
      </div>
    </section>
  );
}
