import type { Metadata } from "next";
import { Playfair_Display, Great_Vibes, Lato } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-playfair",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great-vibes",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://darkhorsehealinglodge.com"),
  title: {
    default: "Dark Horse Healing Lodge — Healing & wellness event space in Carp, Ontario",
    template: "%s | Dark Horse Healing Lodge",
  },
  description:
    "A 19-acre healing and wellness event venue near Ottawa. Book the studio, gather around sacred fire, host retreats and ceremonies in a barn-to-lodge space finished in reclaimed wood.",
  keywords: [
    "healing lodge",
    "event space Ottawa",
    "yoga studio Carp",
    "retreat venue Ontario",
    "Reiki space rental",
    "breathwork venue",
    "sound healing space",
    "ceremony venue Ottawa",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://darkhorsehealinglodge.com",
    siteName: "Dark Horse Healing Lodge",
    title: "Dark Horse Healing Lodge",
    description:
      "A 19-acre healing and wellness event venue near Ottawa. Heal. Restore. Renew.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dark Horse Healing Lodge",
    description:
      "A 19-acre healing and wellness event venue near Ottawa. Heal. Restore. Renew.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${greatVibes.variable} ${lato.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
