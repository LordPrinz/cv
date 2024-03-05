import type { Metadata } from "next";

import "./globals.css";
import React from "react";

import { GeistSans } from "geist/font/sans";
import { RESUME_DATA } from "@/data/resume-data";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
  authors: [
    {
      name: "Oskar Płaziński",
      url: "https://github.com/LordPrinz",
    },
  ],
  keywords: [
    "Oskar Płaziński",
    "LordPrinz",
    "Full Stack Developer",
    "Software Technician",
    "Gliwice",
    "Poland",
    "Łany",
    "Łany, Poland",
    "ZSTI",
    "Zespół Szkół Techniczno-Informatycznych",
    "Gliwicki Laur Nauki",
    "Silesian CYBERhackathon",
    "Motorola Science Cup",
    "Dzajlopment",
    "Dzajde",
    "Dzajco",
  ],
  openGraph: {
    siteName: "Oskar Płaziński | Full Stack Developer",
    description: RESUME_DATA.summary,
    type: "profile",
    images: "/open-graph.png",
  },
  creator: "Oskar Płaziński",
  publisher: "Oskar Płaziński",
  metadataBase: new URL("https://cv.dzaj.de"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>{children}</body>
    </html>
  );
}
