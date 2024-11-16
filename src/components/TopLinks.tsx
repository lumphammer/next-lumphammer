import { FaGithub } from "react-icons/fa6";
import styles from "./topLinks.module.scss";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function TopLinks() {
  return (
    <div className={styles.topLinks}>
      <a
        href="https://github.com/lumphammer"
        target="_blank"
        style={{ display: "inline" }}
      >
        <FaGithub />
      </a>
      <ThemeSwitcher />
    </div>
  );
}
