import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";

/**
 * POST /api/checkout
 * Creates a Stripe Checkout Session for a given eventId.
 *
 * Expected body: { eventId: string }
 *
 * Event → Stripe Price mapping lives in env vars prefixed STRIPE_PRICE_EVENT_<id>
 * or in a server-side lookup once event management is wired up (Phase 2).
 */
export async function POST(req: Request) {
  const stripe = getStripe();
  if (!stripe) {
    return NextResponse.json(
      { error: "Checkout is not yet configured. Please contact us to book." },
      { status: 503 }
    );
  }

  let body: { eventId?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const eventId = body.eventId?.trim();
  if (!eventId) {
    return NextResponse.json({ error: "Missing eventId." }, { status: 400 });
  }

  const priceId = process.env[`STRIPE_PRICE_EVENT_${eventId.toUpperCase()}`];
  if (!priceId) {
    return NextResponse.json(
      { error: "This event is not available for online checkout yet." },
      { status: 404 }
    );
  }

  const origin = req.headers.get("origin") ?? "https://darkhorsehealinglodge.com";

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${origin}/events?session_id={CHECKOUT_SESSION_ID}&status=success`,
    cancel_url: `${origin}/events?status=canceled`,
    automatic_tax: { enabled: true },
    metadata: { eventId },
  });

  if (!session.url) {
    return NextResponse.json(
      { error: "Could not create checkout session." },
      { status: 500 }
    );
  }

  return NextResponse.json({ url: session.url });
}
