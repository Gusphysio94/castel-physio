"use client";

import { useState } from "react";
import type { FormEvent } from "react";

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Adresse",
    value: "Centre Aspis, Avenue Jacques Brel 34, 1200 Bruxelles",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "castelphysio94@gmail.com",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Horaires",
    value: "Lundi — Vendredi : 8h — 19h",
    detail: "Sur rendez-vous uniquement",
  },
];

const FORMSPREE_ID = "xykbggko";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-950 to-navy-900 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prenons contact
          </h1>
          <p className="text-lg text-navy-200 max-w-2xl">
            Une question, une demande de rendez-vous ou envie de discuter d&apos;une formation ?
            N&apos;hésitez pas à me contacter.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Contact form */}
            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-6">Envoyez-moi un message</h2>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-green-800 font-semibold text-lg">Message envoyé !</p>
                  <p className="text-green-700 mt-2">Je vous répondrai dans les plus brefs délais.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-navy-700 mb-1">
                        Prénom
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition-all text-navy-900"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-navy-700 mb-1">
                        Nom
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition-all text-navy-900"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition-all text-navy-900"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-navy-700 mb-1">
                      Sujet
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition-all text-navy-900 bg-white"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="rdv">Prise de rendez-vous</option>
                      <option value="teleconsultation">Téléconsultation</option>
                      <option value="coaching">Coaching sportif</option>
                      <option value="formation">Formations</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition-all text-navy-900 resize-vertical"
                    />
                  </div>
                  {error && (
                    <p className="text-red-600 text-sm">
                      Une erreur est survenue. Veuillez réessayer ou envoyer un email directement à castelphysio94@gmail.com.
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-6 py-3 bg-amber-500 text-navy-950 font-semibold rounded-lg hover:bg-amber-400 transition-colors shadow-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Envoi en cours..." : "Envoyer le message"}
                  </button>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-6">Informations</h2>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex gap-4">
                    <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-navy-900">{info.label}</p>
                      <p className="text-navy-600">{info.value}</p>
                      {info.detail && (
                        <p className="text-sm text-navy-400 mt-1">{info.detail}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Google Maps */}
              <div className="mt-10 aspect-[4/3] rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2518.5!2d4.4!3d50.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c4a4e5a3e8a1%3A0x0!2sAvenue+Jacques+Brel+34%2C+1200+Woluwe-Saint-Lambert!5e0!3m2!1sfr!2sbe!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Centre Aspis - Avenue Jacques Brel 34, 1200 Bruxelles"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
