import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Outfit } from "next/font/google";
import NavBar from "@/commponents/layout/navbar";
import Footer from "@/commponents/layout/footer";
import { UserProvider } from "@/context/main.context";
import { Toaster } from "react-hot-toast";
import type { Metadata, Viewport } from "next";

// ============================================================
// 1) VIEWPORT — controls mobile rendering & browser UI color
//    (separate export required since Next.js 14)
// ============================================================
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // JOB: prevents/allows pinch-zoom
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ], // JOB: colors the browser address bar / status bar
  colorScheme: "light dark", // JOB: tells browser which native UI theme to render
};

// ============================================================
// 2) METADATA — SEO, social sharing, PWA, search console, etc.
// ============================================================
export const metadata: Metadata = {
  // --- Core SEO ---
  metadataBase: new URL("https://philigram-website-beta.vercel.app/"),
  // JOB: base URL so relative og:image / canonical paths resolve correctly in production

  title: {
    default: "Ascendia Rise",
    template: "%s | Ascendia Rise",
  },
  // JOB: default title="Your App Name"; template used on inner pages e.g. page.tsx
  // can export title: "Pricing" -> becomes "Pricing | Your App Name"

  description:
    "Rejoignez les premiers explorateurs d'Ascendia Rise. Préinscrivez-vous pour découvrir un RPG géolocalisé mêlant monde réel, fantasy médiévale, exploration, quêtes, alchimie et récompenses exclusives au lancement.",
  // JOB: shown under the title in Google search results

  keywords: [
    "Ascendia Rise",
    "Ascendia",
    "RPG géolocalisé",
    "jeu de rôle géolocalisé",
    "jeu mobile fantasy",
    "fantasy RPG",
    "location-based RPG",
    "jeu GPS",
    "exploration du monde réel",
    "jeu d'exploration",
    "jeu d'aventure",
    "monde ouvert",
    "fantasy médiévale",
    "mana",
    "quêtes",
    "monstres",
    "créatures fantastiques",
    "alchimie",
    "forge",
    "artisanat",
    "inventaire",
    "ressources",
    "potions",
    "monde magique",
    "fusion des mondes",
    "Terre et Ascendia",
    "jeu mobile RPG",
    "Android",
    "iOS",
    "préinscription",
    "jeu en développement",
    "real world RPG",
    "real world exploration",
    "GPS RPG",
    "location-based game",
    "mobile fantasy game",
    "medieval fantasy",
    "open world RPG",
    "crafting",
    "exploration",
    "fantasy adventure",
  ],
  // JOB: minor/legacy SEO signal, mostly ignored by Google now but harmless

  authors: [
    {
      name: "Damien Wissenbach",
      url: "https://philigram-website-beta.vercel.app/",
    },
  ],
  // JOB: attributes content authorship (used by some search & sharing tools)

  creator: "Philigram",
  publisher: "Philigram Company",
  // JOB: metadata credit fields, shown in some crawlers/aggregators

  applicationName: "Ascendia Rise",
  // JOB: used by browsers/PWA installers as the app's display name

  generator: "Next.js",
  // JOB: informational tag, shows what generated the page

  category: "technology",
  // JOB: content classification, used by some directories/aggregators

  referrer: "origin-when-cross-origin",
  // JOB: controls how much referrer info is sent to external sites you link to

  // --- Canonical & language alternates ---
  alternates: {
    canonical: "/",
    // JOB: prevents duplicate-content SEO penalties (points to the "real" URL)
    languages: {
      "en-US": "/en-US",
      "ar-DZ": "/ar-DZ",
    },
    // JOB: tells Google which URL serves which language/region (hreflang)
  },

  // --- Social sharing: Facebook/LinkedIn/WhatsApp preview ---
  openGraph: {
    title: "Ascendia Rise",
    description:
      "Rejoignez les premiers explorateurs d'Ascendia Rise. Préinscrivez-vous pour découvrir un RPG géolocalisé mêlant monde réel, fantasy médiévale, exploration, quêtes, alchimie et récompenses exclusives au lancement.",
    url: "https://philigram-website-beta.vercel.app/",
    siteName: "Ascendia Rise",
    images: [
      {
        url: "/home/Gallery.png", // ideally 1200x630
        width: 1200,
        height: 630,
        alt: "Ascendia Rise",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // JOB: controls the rich preview card shown when your link is shared on
  // Facebook, LinkedIn, WhatsApp, Discord, iMessage, Slack, etc.

  // --- Social sharing: Twitter/X preview ---
  twitter: {
    card: "summary_large_image",
    title: "Ascendia Rise",
    description:
      "Rejoignez les premiers explorateurs d'Ascendia Rise. Préinscrivez-vous pour découvrir un RPG géolocalisé mêlant monde réel, fantasy médiévale, exploration, quêtes, alchimie et récompenses exclusives au lancement.",
    images: ["/home/Gallery.png"],
    creator: "@yourhandle",
  },
  // JOB: controls the preview card specifically on Twitter/X

  // --- Search engine crawling rules ---
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // JOB: tells search engines whether to index/crawl this page & how much
  // preview content they're allowed to show (set index:false to hide from Google)

  // --- PWA manifest ---
  manifest: "/manifest.json",
  // JOB: links to manifest.json (app name, icons, colors for installable PWA)

  // --- iOS web-app behavior ---
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Ascendia Rise",
  },
  // JOB: makes the site behave like a native app when saved to iOS home screen

  // --- Disable auto-linking of detected data ---
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  // JOB: stops mobile browsers from auto-turning phone numbers/emails into links

  // --- Search console / site ownership verification ---
  verification: {
    google: "your-google-site-verification-code",
    yandex: "your-yandex-code",
    other: {
      me: ["your-personal-domain-or-email"],
    },
  },
  // JOB: proves domain ownership to Google Search Console / Yandex Webmaster etc.
};

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className={`${outfit.className} min-h-full bg-black overflow-x-hidden flex flex-col`}
      >
        <UserProvider>
          <NavBar />
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: "#1b1b1b",
                color: "#fff",
                border: "1px solid #B39D72",
              },
            }}
          />
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}
