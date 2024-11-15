import styles from "./projects.module.scss";
import Image from "next/image";
import investigatorImageFull from "./investigator.webp";
import investigatorThumbnail from "./investigator_thumbnail.webp";
import toc2eQuickstartImageFull from "./toc-2e-quickstart.webp";

export default function Portfolio() {
  return (
    <main className="container">
      <h1>Projects</h1>

      <div className={styles.grid}>
        <article>
          <h2>
            <mark>GUMSHOE</mark> for Foundry VTT
          </h2>
          <p>
            <a href={investigatorImageFull.src} target="_blank">
              <Image
                src={investigatorThumbnail}
                alt="Screenshot of GUMSHOE for Foundry VTT"
              />
            </a>
          </p>
          <p>
            <a href="https://github.com/lumphammer/gumshoe-fvtt">Website</a>
          </p>
          <p>
            <strong>
              The Official GUMSHOE system for Foundry Virtual Tabletop.
            </strong>
          </p>
          <p>
            This projects was started as personal/fan project in 2021. Pelgrane
            Press has since blessed it as the official GUMSHOE system for
            Foundry Virtual Tabletop.
          </p>
          <p>
            It&apos;s almost a meta-system - a toolbox that can be used to
            support anything using the core GUMSHOE engine. But it also ships
            with one-click support for all the main GUMSHOE games, like Trail of
            Cthulhu, Night&apos;s Black Agents, and Mutant City Blues.
          </p>
        </article>
        <article>
          <h2>
            <mark>Trail of Cthulhu 2nd Edition Quickstart</mark> for Foundry VTT
          </h2>
          <p>
            <a href={toc2eQuickstartImageFull.src} target="_blank">
              <Image
                src={toc2eQuickstartImageFull}
                alt="Screenshot of GUMSHOE for Foundry VTT"
              />
            </a>
          </p>

          <p>
            To support their{" "}
            <a href="https://www.backerkit.com/c/projects/pelgrane-press/trail-of-cthulhu-2nd-edition">
              2024 crowdfunding campaign
            </a>{" "}
            for Trail of Cthulhu 2<sup>nd</sup> Edition, Pelgrane Press asked me
            to create a Foundry module adaptation of the Quickstart rules. This
            includes:
          </p>
          <ul>
            <li>
              A new character sheet theme, built to match the &quot;trade
              dress&quot; of the official print character sheet.
            </li>
            <li>
              The text and artwork of the Quickstart PDF, converted into a
              Foundry Journal will full internal hyperlinking.
            </li>
            <li>
              A hyperlinked version of the Quickstart adventure, &quot;Stranger
              Shores&quot;.
            </li>
            <li>A roster of pre-generated player characters, ready to play.</li>
            <li>Thematic scene map made from freely-available materials.</li>
          </ul>
        </article>
        <article>
          <h2>
            This very <mark>Website</mark> right here
          </h2>
          <div className={styles.recursionError}>
            <p>
              <strong>Existential Recursion Error</strong>
            </p>
            <p>
              The screenshot of this website cannot be taken until the website
              is finished, but the website cannot be finished until the
              screenshot is taken.
            </p>
            <details>
              <summary>More info</summary>
              <p>
                To simulate the existence of this screenshot, please look at the
                website you are currently looking at.
              </p>
            </details>
          </div>
          <p>
            Neil is a very elder millennial who remembers the good old days of
            the internet when &ldquo;writing a website&rdquo; meant cranking out
            HTML by hand, so of course he built this website himself.
          </p>
        </article>
        <article>
          <h2>
            <mark>Pub Crusade</mark> for Foundry VTT
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
