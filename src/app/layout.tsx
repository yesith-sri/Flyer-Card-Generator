import type { Metadata } from "next";
import { Bebas_Neue, Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const barlowCondensed = Barlow_Condensed({ weight: ["700", "800", "900"], subsets: ["latin"] });
const inter = Inter({ weight: ["600", "700", "800"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flyer Generator - Create Your Event Flyer",
  description:
    "Professional flyer generator for event registrations. Create beautiful flyers with your team name, photo, and member details.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
