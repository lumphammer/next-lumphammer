import styles from "./projects.module.scss";

export default function Portfolio() {
  return (
    <main className="container">
      <h1>Projects</h1>

      <div className={styles.grid}>
        <article>
          <h2>
            <mark>GUMSHOE for Foundry VTT</mark>
          </h2>
          <p>
            <a href="https://github.com/lumphammer/gumshoe-fvtt">Website</a>
          </p>
          <p>
            <strong>
              The Official GUMSHOE system for Foundry Virtual Tabletop.
            </strong>
            Features character sheets, skill tests, and resource tracking.
          </p>
        </article>
        <article>
          <h2>
            <mark>Trail of Cthulhu 2nd Edition for Foundry VTT</mark>
          </h2>
          <p>
            A system implementation of the Trail of Cthulhu 2nd Edition
            roleplaying game system for the Foundry Virtual Tabletop platform.
            Features character sheets, skill tests, and resource tracking.
          </p>
        </article>
        <article>
          <h2>
            <mark>This Website?</mark>
          </h2>
          <p>
            A static website built with Next.js and PicoCSS. Features a
            portfolio, and contact form.
          </p>
        </article>
        <article>
          <h2>
            <mark>Pub Crusade for Foundry VTT</mark>
          </h2>
          <p>
            A system implementation of the Pub Crusade roleplaying game system
            for the Foundry Virtual Tabletop platform. Features character
            sheets, skill tests, and resource tracking.
          </p>
        </article>
      </div>
    </main>
  );
}
