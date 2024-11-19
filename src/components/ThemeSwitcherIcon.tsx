"use client";

import { FaSun, FaMoon, FaDesktop } from "react-icons/fa6";
import styles from "./themeSwitcher.module.scss";
import useCycleBrowserTheme from "./useBrowserTheme";

export function ThemeSwitcherIcon() {
  const { handleCycleTheme } = useCycleBrowserTheme();

  return (
    <a
      href="#"
      className={styles.themeSwitcher}
      onMouseDown={handleCycleTheme}
      onClick={(e) => e.preventDefault()}
      tabIndex={0}
    >
      <FaSun className={styles.sun} aria-label="Toggle light theme" />
      <FaMoon className={styles.moon} aria-label="Toggle dark theme" />
      <FaDesktop className={styles.system} aria-label="Toggle system theme" />
    </a>
  );
}
