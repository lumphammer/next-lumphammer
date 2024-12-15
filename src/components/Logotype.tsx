import Logo from "@/assets/Logo.svg";
import styles from "./logotype.module.scss";
import Link from "next/link";

export function Logotype() {
  return (
    <Link href="/" className={styles.logotype}>
      <Logo aria-label="Lumphammer logo" width={50} />
      <div className={styles.text}>Lumphammer</div>
    </Link>
  );
}
