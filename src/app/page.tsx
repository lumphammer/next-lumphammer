// import Image from "next/image";
import Link from "next/link";
import styles from "./home.module.scss";
import TripleChevron from "@/components/TripleChevron";
// import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      <div className={styles.hook}>
        <h1>
          <mark>Bespoke software development for the TTRPG industry</mark>
        </h1>
        <p className={styles.intro}>
          Hi! We&apos;re a husband & wife team doing{" "}
          <mark>software development</mark> and <mark>VTT conversions</mark> for
          the TTRPG industry. conversions for the TTRPG industry.
        </p>
        <ul className={styles.links}>
          <li>
            <Link href="/about">
              <TripleChevron />
              Find out all <mark>about us</mark>
              <TripleChevron />
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <TripleChevron />
              See our <mark>previous projects</mark>
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
