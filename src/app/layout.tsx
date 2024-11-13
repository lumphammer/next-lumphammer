import type { Metadata } from "next";
// import localFont from "next/font/local";
import "@/app/globals.css";
import "@/app/pico.scss";
import "@/app/main.scss";
import { Navigation } from "@/components/Navigation";
import { Logotype } from "@/components/Logotype";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

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
        <svg
          width="0"
          height="0"
          viewBox="0 0 600 200"
          style={{ display: "none" }}
        >
          <defs>
            <filter id="soft-focus">
              <feGaussianBlur
                in="SourceGraphic"
                result="blurOut"
                stdDeviation="18"
              />

              <feComposite
                operator="over"
                in="SourceGraphic"
                in2="blurOut"
                result="final"
              />
            </filter>
          </defs>
        </svg>
        <header>
          <div className="container">
            <Logotype />
            <Navigation />
          </div>
        </header>
        {children}
        <footer className="container"></footer>
      </body>
    </html>
  );
}
