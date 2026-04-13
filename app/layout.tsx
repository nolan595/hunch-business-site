import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hunch F2P",
  description:
    "Hunch builds free-to-play prediction games inside the Superbet ecosystem. Deeper integration, smarter data, games that feel native.",
  openGraph: {
    title: "Hunch — In-house F2P for Superbet",
    description:
      "Free-to-play prediction games, built from the inside out.",
    type: "website",
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
      className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
    >
      <head />
      <body>
        <a href="#what-we-do" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
