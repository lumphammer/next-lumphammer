import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./main.scss";
// import Link from "next/link";
import Nav from "@/components/Nav";

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
            <div>Lumphammer</div>
            <Nav />
          </div>
        </header>
        {children}
        <footer className="container"></footer>
      </body>
    </html>
  );
}
