import { FaGithub } from "react-icons/fa6";
import styles from "./topLinks.module.scss";

export function TopLinks() {
  return (
    <div className={styles.topLinks}>
      <a
        href="https://github.com/lumphammer"
        target="_blank"
        style={{ marginLeft: "1em" }}
      >
        <FaGithub />
      </a>
    </div>
  );
}
