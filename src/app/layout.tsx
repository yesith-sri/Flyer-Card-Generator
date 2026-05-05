import type { Metadata } from "next";
import "./globals.css";

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
