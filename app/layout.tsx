import type { Metadata } from "next";
import "../settings/colors.css";
import "../settings/paddings.css";
import "../settings/spaces.css";
import "../settings/typography.css";
import "../settings/borders.css";
import "../settings/breakpoints.css";
import { plus_jakarta_sans } from "./font";
import "./globals.css";
import Footer from "./components/ui/footer/Footer";
import Header from "./components/ui/header/Header";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Autismo Empleo",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(plus_jakarta_sans.variable, "pt-[159px] md:pt-[162px] ")}
      >
        <Header />
        {children}

        <Footer />
      </body>
    </html>
  );
}
