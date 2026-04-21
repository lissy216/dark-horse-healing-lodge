import Stripe from "stripe";

let cached: Stripe | null = null;

/**
 * Returns a Stripe client if STRIPE_SECRET_KEY is configured.
 * Returns null during build or when keys are missing so pages don't fail.
 */
export function getStripe(): Stripe | null {
  if (cached) return cached;
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  cached = new Stripe(key);
  return cached;
}
