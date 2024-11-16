import type { Metadata } from "next";
// import localFont from "next/font/local";
import "@/app/globals.css";
import "@/app/pico.scss";
import "@/app/main.scss";
import { Navigation } from "@/components/Navigation";
import { Logotype } from "@/components/Logotype";
import styles from "./layout.module.scss";
import SvgFilters from "@/components/SvgFilters";

export const metadata: Metadata = {
  title: "Lumphammer",
  description: "Bespoke software development for the TTRPG industry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SvgFilters />
        <header>
          <div className="container">
            <Logotype />
            <div className={styles.links}>
              <Navigation />
            </div>
          </div>
        </header>
        {children}
        <footer className="container"></footer>
      </body>
    </html>
  );
}
