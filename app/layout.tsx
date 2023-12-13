import type { Metadata } from "next";
import "../settings/colors.css";
import "../settings/paddings.css";
import "../settings/spaces.css";
import "../settings/typography.css";
import "../settings/borders.css";
import "../settings/breakpoints.css";
import { plus_jakarta_sans } from "./font";
import "./globals.css";

export const metadata: Metadata = {
  title: "Autismo Empleo",
  description: "Generated by create next app"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={plus_jakarta_sans.variable}>{children}</body>
    </html>
  );
}
