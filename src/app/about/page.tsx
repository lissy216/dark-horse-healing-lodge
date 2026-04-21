import Image from "next/image";
import type { Metadata } from "next";
import { LinkButton } from "@/components/Button";

export const metadata: Metadata = {
  title: "About the Space",
  description:
    "Dark Horse Healing Lodge — a 912 sq ft studio on 19 private acres in Carp, Ontario. Reclaimed wood, sacred fire pits, and a space built for healing work of every tradition.",
};

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        <Image
          src="/images/horse-portrait.jpg"
          alt="Close-up portrait of a dark horse in moody natural light"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/70 to-charcoal/40" />
        <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-6 lg:px-12">
          <p className="font-script text-gold text-3xl sm:text-4xl mb-4">
            Built with intention.
          </p>
          <h1 className="font-serif text-cream text-4xl sm:text-5xl md:text-6xl uppercase tracking-[0.15em] mb-6 max-w-3xl">
            Built for Healing Work
          </h1>
          <p className="text-cream/85 text-lg max-w-2xl leading-relaxed">
            Every detail of Dark Horse Healing Lodge was chosen with
            practitioners and their clients in mind.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="max-w-3xl mx-auto px-6 py-24">
        <div className="w-24 h-px bg-gold mx-auto mb-12" />
        <div className="space-y-8 text-cream/85 text-lg leading-[1.85] font-light">
          <p>
            Dark Horse Healing Lodge started as a barn &mdash; and it wanted to
            be more. It was reimagined and rebuilt as a dedicated space for
            healing, teaching, and gathering, finished in reclaimed wood that
            carries the character of its original life while holding something
            entirely new.
          </p>
          <p>
            The studio features warm wood-grain laminate flooring, reclaimed
            wood accents, wall sconces for ambient light, natural light from
            multiple windows, high ceilings, and a clean open layout that
            adapts to whatever you need it to be. There is no clutter, no
            competing energy. Just space.
          </p>
          <p>
            The property sits on 19 acres of private land in Carp, Ontario
            &mdash; about 30 minutes west of downtown Ottawa. It is surrounded
            by mature trees, open lawn, and the kind of stillness that makes
            people slow down before they even walk through the door.{" "}
            <span className="text-gold italic">
              This is an inclusive space. All practitioners and traditions
              rooted in healing and consciousness are welcome.
            </span>
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-charcoal-light border-y border-gold/15 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-script text-gold text-3xl sm:text-4xl mb-3">
              Everything you need
            </p>
            <h2 className="font-serif text-cream text-3xl sm:text-4xl uppercase tracking-[0.15em]">
              Space Features
            </h2>
            <div className="w-24 h-px bg-gold mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <FeatureBlock
              title="Indoor Studio"
              items={[
                "Just over 912 square feet of open floor space",
                "Warm wood-grain laminate flooring with reclaimed wood accents",
                "Natural light from multiple windows on three walls",
                "Warm wall-mounted sconce lighting for ambient sessions",
                "Ceiling fan for air circulation",
                "High ceilings and a modern metal staircase to upper loft",
                "Rustic barn-door accents",
                "Clean, neutral wall tones that work with any setup",
                "Capacity: ~25–30 mats, or up to 40 seated",
              ]}
            />
            <FeatureBlock
              title="Amenities"
              items={[
                "Kitchenette with sink, fridge, microwave, Keurig, and kettle",
                "Potable water with water coolers",
                "Two private restrooms with stone and reclaimed-wood finishes",
                "Boot room and entryway with hooks and bench seating",
                "Ample on-site parking",
                "High-speed Wi-Fi for hosts",
              ]}
            />
            <FeatureBlock
              title="Outdoor Space"
              items={[
                "19 acres of private land surrounded by mature trees",
                "Pine grove walkway",
                "Two sacred fire pits for ceremony and land-based healing",
                "Open lawn for seasonal outdoor programming",
              ]}
            />
          </div>
        </div>
      </section>

      {/* WHAT THIS SPACE IS FOR */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="font-serif text-cream text-3xl sm:text-4xl uppercase tracking-[0.15em] mb-4">
          What This Space Is For
        </h2>
        <div className="w-24 h-px bg-gold mx-auto mb-10" />
        <p className="text-cream/85 text-lg leading-[1.85] font-light mb-6">
          Dark Horse Healing Lodge is ideal for yoga classes and yoga teacher
          training, Reiki sessions and Reiki certification programs, energy
          healing workshops, breathwork circles, sound baths and sound healing,
          kirtan and devotional music gatherings, cacao ceremonies, meditation
          groups, women&rsquo;s circles and men&rsquo;s circles, drum circles,
          movement and somatic work, multi-day retreats and intensives, private
          healing sessions, community gatherings, and wellness events.
        </p>
        <p className="text-gold italic text-base md:text-lg leading-relaxed">
          This is not an exhaustive list. If your work is rooted in healing and
          consciousness, this space was built for you. All traditions and
          modalities are welcome here.
        </p>
      </section>

      {/* GROUNDS IMAGE STRIP */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="relative aspect-[4/3]">
          <Image
            src="/images/grounds-pine-grove.jpg"
            alt="Pine grove walkway with tall pines and dappled sunlight at Dark Horse Healing Lodge"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
        <div className="relative aspect-[4/3]">
          <Image
            src="/images/studio-main.jpg"
            alt="The main studio at Dark Horse Healing Lodge with wall sconces lit and meditation cushions"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="font-script text-gold text-3xl sm:text-5xl mb-4">
            See it for yourself.
          </p>
          <h2 className="font-serif text-cream text-2xl sm:text-3xl uppercase tracking-[0.15em] mb-6">
            Photos only go so far.
          </h2>
          <p className="text-cream/80 text-base md:text-lg leading-relaxed mb-10">
            Come walk the space, feel the energy, and see how it fits your
            vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LinkButton href="/contact" variant="primary">
              Book a Tour
            </LinkButton>
            <LinkButton href="/events" variant="secondary">
              Check Availability
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}

function FeatureBlock({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div>
      <h3 className="font-serif text-gold text-xl uppercase tracking-[0.15em] mb-5 pb-3 border-b border-gold/30">
        {title}
      </h3>
      <ul className="space-y-2.5 text-cream/80 text-sm leading-relaxed">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3">
            <span className="text-gold mt-1 flex-shrink-0">&bull;</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
