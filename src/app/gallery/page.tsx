import type { Metadata } from "next";
import { GalleryGrid, type GallerySection } from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos of the Dark Horse Healing Lodge studio, welcome area, amenities, and 19-acre grounds in Carp, Ontario.",
};

const sections: GallerySection[] = [
  {
    id: "studio",
    title: "The Studio",
    description:
      "912 square feet of open floor, wall sconces, natural light from multiple windows, and warm wood accents.",
    images: [
      {
        src: "/images/studio-main.jpg",
        alt: "The main studio with wall sconces lit, windows on two walls, and singing bowls arranged in the corner",
      },
      {
        src: "/images/studio-wide-02.jpg",
        alt: "Studio angle showing wall sconces, windows, and meditation cushions center-frame",
      },
      {
        src: "/images/studio-wide-06.jpg",
        alt: "Studio wide shot with wall sconces lit, windows, and singing bowls",
      },
      {
        src: "/images/studio-bowls.jpg",
        alt: "Colored singing bowls arranged on the studio floor under warm sconce lighting",
      },
      {
        src: "/images/studio-staircase.jpg",
        alt: "Studio with barn-door accent wall and modern metal staircase railing",
      },
      {
        src: "/images/studio-wide-03.jpg",
        alt: "Studio angle with wooden cabinet detail and warm sconce lighting",
      },
      {
        src: "/images/studio-wide-04.jpg",
        alt: "Studio corner with staircase, modern metal railing, bench, and window",
      },
      {
        src: "/images/studio-wide-05.jpg",
        alt: "Studio angle showing overhead garage-style door and floor lamp",
      },
      {
        src: "/images/studio-wide-01.jpg",
        alt: "Studio wide shot with ceiling fan and natural light through large windows",
      },
    ],
  },
  {
    id: "welcome",
    title: "Welcome Area & Amenities",
    description:
      "Vaulted wood ceilings, the signature red door, boot room, kitchenette, and two restrooms finished in stone and reclaimed wood.",
    images: [
      {
        src: "/images/entry-red-door.jpg",
        alt: "Entry with vaulted wood ceiling, signature red door, and wood-paneled walls",
      },
      {
        src: "/images/entry-vaulted.jpg",
        alt: "Second angle of the red door entry with vaulted wood ceiling and coat hooks",
      },
      {
        src: "/images/bootroom-detail.jpg",
        alt: "Boot room detail with bench, coat rack, and door with window",
      },
      {
        src: "/images/bathroom-vanity-01.jpg",
        alt: "Bathroom vanity with reclaimed wood cabinets, dark stone backsplash, and vessel sink",
      },
      {
        src: "/images/bathroom-vanity-02.jpg",
        alt: "Bathroom vanity alternate angle with window, reclaimed wood, and stone",
      },
      {
        src: "/images/restroom-01.jpg",
        alt: "Restroom with stone accent wall, clean and modern finishes",
      },
      {
        src: "/images/restroom-02.jpg",
        alt: "Second restroom with matching stone accents",
      },
      {
        src: "/images/restroom-hallway.jpg",
        alt: "Hallway view showing two restroom stalls",
      },
    ],
  },
  {
    id: "grounds",
    title: "The Grounds",
    description:
      "Nineteen private acres of mature trees, open lawn, a pine grove walkway, and two sacred fire pits.",
    images: [
      {
        src: "/images/grounds-lawn.jpg",
        alt: "Open lawn area with green grass, mature deciduous and evergreen trees, blue sky",
      },
      {
        src: "/images/grounds-pine-grove.jpg",
        alt: "Pine grove walkway with tall pines and dappled sunlight filtering through",
      },
    ],
  },
];

export default function GalleryPage() {
  return (
    <>
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-12 text-center">
        <p className="font-script text-gold text-3xl sm:text-5xl mb-4">
          A closer look.
        </p>
        <h1 className="font-serif text-cream text-4xl sm:text-5xl uppercase tracking-[0.15em] mb-6">
          Step Inside
        </h1>
        <div className="w-24 h-px bg-gold mx-auto mb-6" />
        <p className="text-cream/80 text-lg leading-relaxed max-w-2xl mx-auto">
          A look at the studio, the grounds, and the details that make this
          space feel different.
        </p>
      </section>

      <GalleryGrid sections={sections} />
    </>
  );
}
