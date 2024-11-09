import type { Metadata } from "next";
// import localFont from "next/font/local";
import "@/app/globals.css";
import "@/app/main.scss";
import { Navigation } from "@/components/Navigation";
import Logo from "@/assets/Logo.svg";

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
        <header>
          <div className="container">
            <div className="logotype">
              <Logo width={50} />
              <div className="text">Lumphammer</div>
            </div>
            <Navigation />
          </div>
        </header>
        {children}
        <footer className="container"></footer>
      </body>
    </html>
  );
}
