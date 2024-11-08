// import Image from "next/image";
// import styles from "./page.module.css";
// import Link from "next/link";

import { Counter } from "@/components/Counter";

export default function Home() {
  return (
    <div>
      <main className="container">
        <p>
          I&apos;m a tech senior developer/tech lead now humbly offering my
          services to the TTRPG community.
        </p>
        <p>
          <Counter />
        </p>
      </main>
      <footer className="container"></footer>
    </div>
  );
}
