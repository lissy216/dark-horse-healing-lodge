"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export type GalleryImage = {
  src: string;
  alt: string;
};

export type GallerySection = {
  id: string;
  title: string;
  description?: string;
  images: GalleryImage[];
};

export function GalleryGrid({ sections }: { sections: GallerySection[] }) {
  const allImages = sections.flatMap((s) => s.images);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openAt = useCallback((src: string) => {
    const idx = allImages.findIndex((img) => img.src === src);
    if (idx >= 0) setLightboxIndex(idx);
  }, [allImages]);

  const close = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(
    () =>
      setLightboxIndex((i) =>
        i === null ? null : (i - 1 + allImages.length) % allImages.length
      ),
    [allImages.length]
  );
  const next = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i + 1) % allImages.length)),
    [allImages.length]
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, close, prev, next]);

  return (
    <>
      {sections.map((section) => (
        <section key={section.id} className="max-w-7xl mx-auto px-6 py-16">
          <div className="mb-10">
            <h2 className="font-serif text-cream text-3xl sm:text-4xl uppercase tracking-[0.15em] mb-3">
              {section.title}
            </h2>
            {section.description && (
              <p className="text-cream/70 max-w-2xl">{section.description}</p>
            )}
            <div className="w-24 h-px bg-gold mt-5" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {section.images.map((img) => (
              <button
                key={img.src}
                type="button"
                onClick={() => openAt(img.src)}
                className="group relative aspect-square overflow-hidden border border-gold/15 hover:border-gold transition-colors focus:outline-none focus-visible:border-gold"
                aria-label={`Open ${img.alt} in lightbox`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                />
                <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/0 transition-colors" />
              </button>
            ))}
          </div>
        </section>
      ))}

      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery viewer"
          className="fixed inset-0 z-[100] bg-charcoal/97 flex items-center justify-center p-4 sm:p-8"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-cream hover:text-gold text-4xl leading-none p-2 z-10"
            aria-label="Close lightbox"
          >
            &times;
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-cream hover:text-gold text-5xl p-4 leading-none z-10"
            aria-label="Previous image"
          >
            &#8249;
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-cream hover:text-gold text-5xl p-4 leading-none z-10"
            aria-label="Next image"
          >
            &#8250;
          </button>
          <div
            className="relative w-full h-full max-w-6xl max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={allImages[lightboxIndex].src}
              alt={allImages[lightboxIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
          <p className="absolute bottom-4 left-0 right-0 text-center text-cream/70 text-sm px-6">
            {allImages[lightboxIndex].alt}
            <span className="block text-cream/40 text-xs mt-1">
              {lightboxIndex + 1} / {allImages.length}
            </span>
          </p>
        </div>
      )}
    </>
  );
}
