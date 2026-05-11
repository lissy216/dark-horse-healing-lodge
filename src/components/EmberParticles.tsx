/**
 * Sparse gold ember particles drifting upward through a hero section.
 * Pure CSS animation, no JS runtime cost. 8 deterministic positions
 * (hardcoded — not random — to avoid hydration mismatch between
 * server and client renders).
 *
 * Drop inside any positioned (relative/absolute) parent — the
 * .ember-field absolutely fills its bounds.
 */

type Ember = {
  left: number; // percent
  size: number; // px
  duration: number; // seconds
  delay: number; // seconds
};

const EMBERS: Ember[] = [
  { left: 8, size: 4, duration: 14, delay: 0 },
  { left: 19, size: 3, duration: 11, delay: 4 },
  { left: 31, size: 5, duration: 16, delay: 1 },
  { left: 44, size: 3, duration: 13, delay: 7 },
  { left: 56, size: 4, duration: 15, delay: 3 },
  { left: 67, size: 5, duration: 12, delay: 6 },
  { left: 79, size: 3, duration: 17, delay: 2 },
  { left: 91, size: 4, duration: 13, delay: 5 },
];

export function EmberParticles() {
  return (
    <div className="ember-field" aria-hidden="true">
      {EMBERS.map((ember, i) => (
        <span
          key={i}
          className="ember"
          style={{
            left: `${ember.left}%`,
            width: `${ember.size}px`,
            height: `${ember.size}px`,
            animationDuration: `${ember.duration}s`,
            animationDelay: `${ember.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
