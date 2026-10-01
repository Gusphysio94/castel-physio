import { BOOKING_URL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

export default function MobileBookingBar() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-navy-100/60 bg-white/95 backdrop-blur-xl px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <div className="grid grid-cols-[auto_1fr] gap-3">
        <a
          href={`tel:${PHONE_TEL}`}
          aria-label={`Appeler le ${PHONE_DISPLAY}`}
          data-umami-event="tel-click"
          data-umami-event-source="mobile-bar"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-navy-200 px-4 py-3 text-sm font-semibold text-navy-800"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Appeler
        </a>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-umami-event="rdv-click"
          data-umami-event-source="mobile-bar"
          className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 px-4 py-3 text-sm font-bold text-navy-950 shadow-[0_4px_20px_rgba(245,158,11,0.3)]"
        >
          Prendre rendez-vous
        </a>
      </div>
    </div>
  );
}
