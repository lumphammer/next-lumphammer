import type { Metadata } from "next";
// import localFont from "next/font/local";
import "@/app/globals.css";
import "@/app/pico.scss";
import "@/app/main.scss";
import { Navigation } from "@/components/Navigation";
import { Logotype } from "@/components/Logotype";
import styles from "./layout.module.scss";
import SvgFilters from "@/components/SvgFilters";
import { CSPostHogProvider } from "./providers";

export const metadata: Metadata = {
  title: "Lumphammer",
  description: "Bespoke software development for the TTRPG industry",
};

function setThemeBeforePageDraws() {
  const storedTheme = localStorage.getItem("theme");
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  document.documentElement.setAttribute("data-system-theme", systemTheme);
  if (storedTheme === "light" || storedTheme === "dark") {
    console.log("setting theme", storedTheme);
    document.documentElement.setAttribute("data-theme", storedTheme);
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning is used to prevent a warning about the theme differing between server and client
    // https://legacy.reactjs.org/docs/dom-elements.html#suppresshydrationwarning:~:text=It%20only%20works%20one%20level%20deep
    <html lang="en" suppressHydrationWarning>
      <CSPostHogProvider>
        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: `(${setThemeBeforePageDraws.toString()})();`,
            }}
          />
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
      </CSPostHogProvider>
    </html>
  );
}
