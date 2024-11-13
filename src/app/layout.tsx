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
        <svg width="0" height="0" viewBox="0 0 600 200">
          <defs>
            <filter id="dropshadow">
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
            <filter id="gradient-overlay">
              <feImage
                href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxsaW5lYXJHcmFkaWVudCBpZD0iZyIgeDI9IjEiPjxzdG9wIHN0b3AtY29sb3I9InZhcigtLWx1bXBoYW1tZXItbWFyay1jb2xvci0xKSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0idmFyKC0tbHVtcGhhbW1lci1tYXJrLWNvbG9yLTIpIi8+PC9saW5lYXJHcmFkaWVudD48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2cpIi8+PC9zdmc+"
                x="0"
                y="0"
                width="100%"
                height="100%"
                preserveAspectRatio="none"
                result="gradient"
              />
              <feBlend
                mode="overlay"
                in="SourceGraphic"
                in2="gradient"
                result="gradientOverlay"
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
