import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "MoneyPrinter.md | Turn 14 days of AI work into one money route";
const description =
  "With permission, MoneyPrinter tells your AI host to scan accessible sessions, ask for one confirmation, and work the strongest cash-first route.";
const socialImageAlt =
  "MoneyPrinter.md: with permission, scan the last 14 days of detected and accessible AI sessions, get to work, then rerank from receipts.";

function metadataBaseFromHost(hostHeader: string | null): URL {
  const host = hostHeader?.trim() ?? "";
  const validHost =
    host.length <= 253 &&
    !host.includes("..") &&
    /^(?:localhost|[a-z0-9](?:[a-z0-9.-]*[a-z0-9])?)(?::\d{1,5})?$/i.test(
      host,
    );

  if (!validHost) {
    return new URL("http://localhost");
  }

  const hostname = host.replace(/:\d{1,5}$/, "").toLowerCase();
  const protocol =
    hostname === "localhost" || hostname === "127.0.0.1" ? "http" : "https";

  try {
    return new URL(`${protocol}://${host}`);
  } catch {
    return new URL("http://localhost");
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const metadataBase = metadataBaseFromHost(requestHeaders.get("host"));

  return {
    metadataBase,
    title,
    description,
    alternates: { canonical: "/" },
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: {
      type: "website",
      url: "/",
      title,
      description,
      siteName: "MoneyPrinter.md",
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: socialImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: "/og.png", alt: socialImageAlt }],
    },
  };
}

export const viewport: Viewport = { themeColor: "#10120f", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
