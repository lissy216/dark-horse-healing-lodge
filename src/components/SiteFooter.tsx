import Link from "next/link";

const CONTACT_EMAIL = "hello@darkhorsehealinglodge.com";
const ADDRESS_LINE_1 = "2206 Upper Dwyer Hill Road";
const ADDRESS_LINE_2 = "Carp, ON K0A 1L0";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-light border-t border-gold/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* Brand block */}
          <div>
            <div className="flex flex-col leading-none mb-4">
              <span className="font-serif text-gold text-xl font-bold tracking-[0.15em] uppercase">
                Dark Horse
              </span>
              <span className="font-script text-cream text-xl -mt-1 pl-8">
                Healing Lodge
              </span>
            </div>
            <p className="font-serif text-gold uppercase tracking-[0.2em] text-sm mb-2">
              Heal. Restore. Renew.
            </p>
            <p className="text-cream/70 text-sm leading-relaxed max-w-xs">
              A welcoming space for healing work of every tradition, nestled on
              19 acres of countryside just west of Ottawa.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-serif text-gold uppercase tracking-[0.15em] text-sm mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-cream/80 text-sm">
              <li>
                <Link href="/about" className="hover:text-gold transition-colors">
                  About the Space
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-gold transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/book" className="hover:text-gold transition-colors">
                  Book / Rental Info
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-gold transition-colors">
                  Events &amp; Calendar
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Visit */}
          <div>
            <h4 className="font-serif text-gold uppercase tracking-[0.15em] text-sm mb-4">
              Visit
            </h4>
            <address className="not-italic text-cream/80 text-sm space-y-1 leading-relaxed">
              <p>{ADDRESS_LINE_1}</p>
              <p>{ADDRESS_LINE_2}</p>
              <p className="pt-3">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="hover:text-gold transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
              <p className="text-cream/50 text-xs pt-3 italic">
                Available by booking only.
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gold/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-cream/50 text-xs">
            &copy; {year} Dark Horse Healing Lodge. All rights reserved.
          </p>
          <p className="text-cream/40 text-xs italic">
            Carp, Ontario &mdash; 30 minutes west of downtown Ottawa.
          </p>
        </div>
      </div>
    </footer>
  );
}
