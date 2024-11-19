"use client";

import styles from "./themeSwitcher.module.scss";
import useCycleBrowserTheme from "./useBrowserTheme";

export function ThemeSwitcherLink() {
  const { handleCycleTheme } = useCycleBrowserTheme();

  return (
    <a
      href="#"
      className={`${styles.themeSwitcherLink}`}
      onMouseDown={handleCycleTheme}
      onClick={(e) => e.preventDefault()}
      tabIndex={0}
    >
      <span className={styles.switchLight}>Switch to light mode</span>
      <span className={styles.switchDark}>Switch to dark mode</span>
      <span className={styles.switchSystem}>
        Switch to system theme{" "}
        <span className={styles.switchSystemDark}>(dark)</span>
        <span className={styles.switchSystemLight}>(light)</span>
      </span>
    </a>
  );
}
