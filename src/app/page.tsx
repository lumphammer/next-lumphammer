// import Image from "next/image";
import Link from "next/link";
import styles from "./home.module.scss";
import TripleChevron from "@/components/TripleChevron";
import Logo from "@/assets/Logo.svg";

// import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      <div className={styles.hook}>
        <Logo className={styles.logo} />

        <h1>
          <mark>Bespoke software development</mark> for the{" "}
          <mark>TTRPG industry</mark>
        </h1>
        <p className={styles.intro}>
          Hi! <mark>Lumphammer</mark> is a husband & wife team offering{" "}
          <mark>software development</mark> and <mark>VTT conversions</mark> for
          the TTRPG industry.
        </p>
        <ul className={styles.links}>
          <li>
            <Link href="/about">
              <TripleChevron />
              Find out <mark>about us</mark>
              <TripleChevron />
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <TripleChevron />
              See our <mark>projects</mark>
              <TripleChevron />
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <TripleChevron />
              Get in <mark>touch</mark>
              <TripleChevron />
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
