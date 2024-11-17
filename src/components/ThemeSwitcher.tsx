"use client";

import { FaSun, FaMoon, FaDesktop } from "react-icons/fa6";
import styles from "./themeSwitcher.module.scss";
import { useCallback, useEffect } from "react";

export function ThemeSwitcher() {
  const handleMouseDown = useCallback(() => {
    const storedTheme = document.documentElement.getAttribute("data-theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";

    let newTheme;
    if (!storedTheme) {
      newTheme = systemTheme === "dark" ? "light" : "dark";
    } else if (storedTheme === "dark") {
      newTheme = systemTheme === "dark" ? "system" : "light";
    } else {
      newTheme = systemTheme === "dark" ? "dark" : "system";
    }

    if (newTheme === "system") {
      document.documentElement.removeAttribute("data-theme");
      try {
        localStorage.removeItem("theme");
      } catch (e) {
        console.error("Failed to save theme preference:", e);
      }
    } else {
      document.documentElement.setAttribute("data-theme", newTheme);
      try {
        localStorage.setItem("theme", newTheme);
      } catch (e) {
        console.error("Failed to save theme preference:", e);
      }
    }
  }, []);

  // Initialize theme on mount
  useEffect(() => {
    setTimeout(() => {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme && savedTheme !== "system") {
        document.documentElement.setAttribute("data-theme", savedTheme);
      }
    }, 100);
  }, []);

  return (
    <a
      href="#"
      className={styles.themeSwitcher}
      onMouseDown={handleMouseDown}
      onClick={(e) => e.preventDefault()}
      tabIndex={0}
    >
      <FaSun className={styles.sun} aria-label="Toggle light theme" />
      <FaMoon className={styles.moon} aria-label="Toggle dark theme" />
      <FaDesktop className={styles.system} aria-label="Toggle system theme" />
    </a>
  );
}
