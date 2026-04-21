import Image from "next/image";
import Link from "next/link";
import { LinkButton } from "@/components/Button";
import { FeatherIcon, HorseshoeIcon, SunIcon } from "@/components/PillarIcons";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[85vh] min-h-[560px] max-h-[880px] w-full overflow-hidden">
        <Image
          src="/images/hero-banner.jpg"
          alt="Dark horse running in an open field at dusk with the Dark Horse Healing Lodge title"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 overlay-warm" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <p className="font-script text-gold-light text-3xl sm:text-5xl mb-6 drop-shadow-lg">
            A place to heal in nature&rsquo;s embrace.
          </p>
          <h1 className="font-serif text-cream text-4xl sm:text-6xl md:text-7xl uppercase tracking-[0.15em] drop-shadow-2xl">
            Heal. Restore. Renew.
          </h1>
          <p className="max-w-2xl text-cream/85 text-base sm:text-lg mt-8 leading-relaxed">
            A welcoming space for yoga, energy healing, breathwork, sound baths,
            cacao ceremonies, kirtan, meditation, and all events rooted in
            healing and consciousness &mdash; nestled on 19 acres of countryside
            just west of Ottawa.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <LinkButton href="/about" variant="primary">
              Explore the Space
            </LinkButton>
            <LinkButton href="/book" variant="ghost">
              Book Your Event
            </LinkButton>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <div className="w-24 h-px bg-gold mx-auto mb-8" />
        <p className="text-cream/90 text-lg md:text-xl leading-[1.85] font-light mb-8">
          Dark Horse Healing Lodge sits on 19 acres of private land in Carp,
          Ontario &mdash; a barn that wanted to be more, to hold more, to do
          more. Finished in reclaimed wood and built around open space, natural
          light, and a quiet rural setting far from the noise of the city, the
          lodge was reimagined from the ground up for the kind of work that
          needs room to breathe.
        </p>
        <p className="text-cream/75 text-base md:text-lg leading-[1.85] font-light">
          Whether you teach yoga, lead sound healing circles, facilitate
          breathwork, host kirtan, pour cacao ceremony, or run multi-day
          training programs, this is the space you have been looking for. All
          practitioners and traditions rooted in healing and consciousness are
          welcome here.
        </p>
        <div className="w-24 h-px bg-gold mx-auto mt-8" />
      </section>

      {/* THREE PILLARS */}
      <section className="bg-charcoal-light border-y border-gold/15 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            <Pillar
              icon={<HorseshoeIcon className="w-16 h-16" />}
              title="Heal"
              body="A space built for healing work. Wide-open studio floors, warm ambient lighting, and the kind of quiet that lets people drop in and do real work."
            />
            <Pillar
              icon={<FeatherIcon className="w-16 h-16" />}
              title="Restore"
              body="Step out of the city and into nature. The lodge sits on 19 private acres with mature pines, open lawn, and two sacred fire pits for land-based ceremony and outdoor practice."
            />
            <Pillar
              icon={<SunIcon className="w-16 h-16" />}
              title="Renew"
              body="Start something new here. Whether it is your first workshop or your hundredth retreat, the lodge gives you a clean, beautiful canvas to build on."
            />
          </div>
        </div>
      </section>

      {/* FEATURED SPACES */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="font-script text-gold text-3xl sm:text-4xl mb-3">
            A closer look
          </p>
          <h2 className="font-serif text-cream text-3xl sm:text-4xl uppercase tracking-[0.15em]">
            Featured Spaces
          </h2>
          <div className="w-24 h-px bg-gold mx-auto mt-6" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeaturedCard
            href="/about"
            src="/images/studio-main.jpg"
            alt="The studio interior with wall sconces, windows, meditation cushions, and singing bowls"
            title="The Studio"
            body="Just over 912 square feet of open floor with warm wood-grain laminate, natural light, and wall-mounted sconces. Room for 25 to 30 mats, or up to 40 seated."
          />
          <FeaturedCard
            href="/about"
            src="/images/grounds-lawn.jpg"
            alt="Open lawn surrounded by mature trees on the 19-acre Dark Horse Healing Lodge property"
            title="The Grounds"
            body="Nineteen acres of private land surrounded by mature trees. A pine grove walkway, open lawn, and two sacred fire pits for land-based healing and ceremony."
          />
          <FeaturedCard
            href="/about"
            src="/images/entry-red-door.jpg"
            alt="The lodge entry with vaulted wood ceiling, signature red door, and wood-paneled walls"
            title="The Welcome Area"
            body="A warm entry with vaulted wood ceilings, a signature red door, boot room, and gathering space. Sets the tone the moment your guests walk in."
          />
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/images/horse-portrait.jpg"
          alt=""
          fill
          className="object-cover object-center opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/90 to-charcoal" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <p className="font-script text-gold text-3xl sm:text-5xl mb-4">
            Come see it for yourself.
          </p>
          <h2 className="font-serif text-cream text-2xl sm:text-3xl uppercase tracking-[0.15em] mb-6">
            Ready to see the space?
          </h2>
          <p className="text-cream/80 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            We would love to show you around. Book a tour, ask a question, or
            check availability for your next event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LinkButton href="/contact" variant="primary">
              Contact Us
            </LinkButton>
            <LinkButton href="/events" variant="secondary">
              View Availability
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}

function Pillar({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="text-center flex flex-col items-center">
      <div className="text-gold mb-6">{icon}</div>
      <h3 className="font-serif text-cream text-2xl uppercase tracking-[0.2em] mb-4">
        {title}
      </h3>
      <p className="text-cream/75 text-sm leading-relaxed max-w-xs">{body}</p>
    </div>
  );
}

function FeaturedCard({
  href,
  src,
  alt,
  title,
  body,
}: {
  href: string;
  src: string;
  alt: string;
  title: string;
  body: string;
}) {
  return (
    <Link href={href} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden mb-5 border border-gold/20 group-hover:border-gold transition-colors">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(min-width: 768px) 33vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
      </div>
      <h3 className="font-serif text-cream text-xl uppercase tracking-[0.15em] mb-2 group-hover:text-gold transition-colors">
        {title}
      </h3>
      <p className="text-cream/70 text-sm leading-relaxed">{body}</p>
    </Link>
  );
}
