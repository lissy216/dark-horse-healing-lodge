import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Dark Horse Healing Lodge. 2206 Upper Dwyer Hill Road, Carp, Ontario. Available by booking only.",
};

const ADDRESS = "2206 Upper Dwyer Hill Road, Carp, ON K0A 1L0";
const CONTACT_EMAIL = "hello@darkhorsehealinglodge.com";

export default function ContactPage() {
  const mapQuery = encodeURIComponent(ADDRESS);

  return (
    <>
      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-12 text-center">
        <p className="font-script text-gold text-3xl sm:text-5xl mb-4">
          Let&rsquo;s talk.
        </p>
        <h1 className="font-serif text-cream text-4xl sm:text-5xl uppercase tracking-[0.15em] mb-6">
          Get in Touch
        </h1>
        <div className="w-24 h-px bg-gold mx-auto mb-6" />
        <p className="text-cream/80 text-lg leading-relaxed max-w-2xl mx-auto">
          Questions about the space, availability, or booking? We are here to
          help.
        </p>
      </section>

      {/* FORM + DETAILS */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3 bg-charcoal-light border border-gold/20 p-8 sm:p-10">
            <ContactForm />
          </div>

          {/* Details */}
          <aside className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-serif text-gold text-xl uppercase tracking-[0.15em] mb-4 pb-3 border-b border-gold/30">
                Visit
              </h2>
              <address className="not-italic text-cream/85 text-base leading-relaxed">
                2206 Upper Dwyer Hill Road
                <br />
                Carp, Ontario
                <br />
                K0A 1L0
                <br />
                <span className="text-cream/60 text-sm italic">
                  Canada
                </span>
              </address>
            </div>

            <div>
              <h2 className="font-serif text-gold text-xl uppercase tracking-[0.15em] mb-4 pb-3 border-b border-gold/30">
                Email
              </h2>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-cream hover:text-gold transition-colors text-base break-all"
              >
                {CONTACT_EMAIL}
              </a>
            </div>

            <div className="bg-charcoal border border-gold/20 p-6">
              <p className="font-serif text-gold text-sm uppercase tracking-[0.15em] mb-3">
                Available by booking only
              </p>
              <p className="text-cream/75 text-sm leading-relaxed">
                Dark Horse Healing Lodge does not have regular drop-in hours.
                To schedule a tour or visit the space, reach out through the
                form or email us directly.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* MAP */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="mb-6">
          <h2 className="font-serif text-cream text-2xl uppercase tracking-[0.15em]">
            Find Us
          </h2>
          <div className="w-24 h-px bg-gold mt-4" />
        </div>
        <div className="relative aspect-video w-full border border-gold/20 overflow-hidden">
          <iframe
            title="Map to Dark Horse Healing Lodge"
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="absolute inset-0"
          />
        </div>
        <p className="text-cream/60 text-xs italic mt-3">
          About 30 minutes west of downtown Ottawa.
        </p>
      </section>
    </>
  );
}
