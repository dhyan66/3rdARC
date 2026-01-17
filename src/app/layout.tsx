import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const displayFont = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const metadataBase = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
);

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "Arc Gallery Studio",
    template: "%s · Arc Gallery Studio",
  },
  description:
    "Editorial photography portfolios, quiet studies, and immersive workshops led by Arc Gallery Studio.",
  openGraph: {
    title: "Arc Gallery Studio",
    description:
      "Editorial photography portfolios, quiet studies, and immersive workshops led by Arc Gallery Studio.",
    type: "website",
    url: metadataBase,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${displayFont.variable} ${bodyFont.variable} antialiased`}
      >
        <div className="min-h-screen">
          <Header />
          <main className="px-6 pb-24 pt-28 sm:px-10 lg:px-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
