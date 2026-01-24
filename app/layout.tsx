import "@/styles/globals.css";
import { Fraunces, Manrope } from "next/font/google";
import type { Metadata } from "next";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import { site } from "@/src/content/site";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "600"]
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"]
});

export const metadata: Metadata = {
  title: site.name,
  description: site.tagline ?? "Photographer portfolio"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-body antialiased">
        <div className="min-h-screen">
          <Header />
          <main className="px-6 md:px-12">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
