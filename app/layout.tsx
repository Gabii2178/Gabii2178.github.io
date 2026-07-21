import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nchung Gabriel | Backend Engineer, Automation Engineer & Business Strategist",
  description:
    "Premium portfolio for Nchung Gabriel, showcasing backend engineering, automation systems, AI integrations, and strategic business solutions.",
  keywords: [
    "backend engineer",
    "automation engineer",
    "business strategist",
    "Laravel",
    "Node.js",
    "Python",
    "Solana",
    "Rust",
    "Anchor",
  ],
  metadataBase: new URL("https://gabii2178.github.io"),
  alternates: {
    canonical: "https://gabii2178.github.io",
  },
  openGraph: {
    title: "Nchung Gabriel | Backend Engineer, Automation Engineer & Business Strategist",
    description:
      "Building scalable software, intelligent automations, and business solutions that create real impact.",
    type: "website",
    url: "https://gabii2178.github.io",
    siteName: "Nchung Gabriel",
    images: [{ url: "/images/gabi1.png", width: 1200, height: 1600, alt: "Nchung Gabriel" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nchung Gabriel | Backend Engineer, Automation Engineer & Business Strategist",
    description:
      "Building scalable software, intelligent automations, and business solutions that create real impact.",
    images: ["/images/gabi1.png"],
    site: "@gabii2178",
    creator: "@gabii2178",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/favicon.svg" }],
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
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
