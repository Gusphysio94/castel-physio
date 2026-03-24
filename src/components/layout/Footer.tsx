import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-300 relative overflow-hidden">
      {/* Grain */}
      <div className="absolute inset-0 grain-dark" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand — wider */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 bg-navy-800 rounded-xl flex items-center justify-center">
                <span className="text-amber-400 font-bold text-xl font-display italic">C</span>
              </div>
              <div>
                <span className="font-bold text-white text-lg">Castel</span>
                <span className="font-bold text-amber-400 text-lg"> Physio</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-navy-400 max-w-xs">
              Kinésithérapie du sport &amp; formations pour professionnels.
              Une approche moderne, basée sur les preuves scientifiques.
            </p>

            {/* Social */}
            <div className="flex gap-2 mt-6">
              {[
                { label: "Instagram", href: "https://www.instagram.com/castel_physio/", icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /> },
                { label: "LinkedIn", href: "https://linkedin.com/in/castelphysio/en/?originalSubdomain=be", icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /> },
                { label: "YouTube", href: "https://www.youtube.com/@CastelPhysio", icon: <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /> },
              ].map(({ label, icon, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-navy-800/60 rounded-xl flex items-center justify-center hover:bg-amber-500 hover:text-navy-950 transition-all duration-300 group" aria-label={label}>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">{icon}</svg>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2 md:col-start-6">
            <h4 className="font-semibold text-white text-sm mb-5 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: "/", label: "Accueil" },
                { href: "/kinesitherapie", label: "Kinésithérapie" },
                { href: "/formations", label: "Formations" },
                { href: "/blog", label: "Blog" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-navy-400 hover:text-amber-400 transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Informations */}
          <div className="md:col-span-2">
            <h4 className="font-semibold text-white text-sm mb-5 uppercase tracking-wider">Infos</h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: "/a-propos", label: "À propos" },
                { href: "/contact", label: "Contact" },
                { href: "https://www.q-top.be/online-planner-v2/FR/?root=kq46938", label: "Prendre RDV", external: true },
              ].map(({ href, label, external }) => (
                <li key={label}>
                  {external ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="text-navy-400 hover:text-amber-400 transition-colors duration-200">
                      {label}
                    </a>
                  ) : (
                    <Link href={href} className="text-navy-400 hover:text-amber-400 transition-colors duration-200">
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="font-semibold text-white text-sm mb-5 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-navy-400">Bruxelles, Belgique</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-navy-400">castelphysio94@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-navy-800/60 mt-16 pt-8 text-xs text-navy-500">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <Link href="/mentions-legales" className="hover:text-amber-400 transition-colors">
              Mentions légales
            </Link>
            <span className="text-navy-700">·</span>
            <Link href="/politique-confidentialite" className="hover:text-amber-400 transition-colors">
              Politique de confidentialité
            </Link>
            <span className="text-navy-700">·</span>
            <Link href="/conditions-generales" className="hover:text-amber-400 transition-colors">
              Conditions générales
            </Link>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} Castel Physio — Augustin Castel. Tous droits réservés.</p>
            <p className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400/60" />
              Kinésithérapeute du sport — Bruxelles
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
