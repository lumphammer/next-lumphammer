import Logo from "@/assets/Logo.svg";
import styles from "./logotype.module.scss";

export function Logotype() {
  return (
    <div className={styles.logotype}>
      <Logo width={50} />
      <div className={styles.text}>Lumphammer</div>
    </div>
  );
}
