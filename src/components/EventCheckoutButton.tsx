"use client";

import { useState } from "react";
import { Button } from "./Button";

export function EventCheckoutButton({ eventId }: { eventId: string }) {
  const [loading, setLoading] = useState(false);

  async function onClick() {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ eventId }),
      });
      if (!res.ok) throw new Error("Unable to start checkout.");
      const { url } = (await res.json()) as { url: string };
      window.location.href = url;
    } catch (err) {
      alert(err instanceof Error ? err.message : "Checkout failed.");
      setLoading(false);
    }
  }

  return (
    <Button
      type="button"
      onClick={onClick}
      variant="primary"
      disabled={loading}
      className="text-xs px-5 py-2.5"
    >
      {loading ? "Loading..." : "Book Now"}
    </Button>
  );
}
