import Image from "next/image";
import neil_and_romi from "./neil_and_romi.jpg";
import jadeSunset from "./Jade_Sunset.webp";
import styles from "./about.module.scss";
import theCats from "./The_Cats.jpg";

export default function About() {
  return (
    <>
      <main className="container">
        <h1>About Us</h1>
        <section className={styles.aboutSection}>
          <div>
            <h2>
              <mark>Neil</mark>
            </h2>
            <p>
              Neil got roped into a red-box D&D game one rainy lunchtime at
              school in the 1980s and never quite got over it. TTRPGs have been
              a constant in his life ever since.
            </p>
            <p>
              <em>But</em> it turns out he had more than one nerdish obsession,
              and the other one, computers, offered better pay. So he bounced
              around bunch of roles (sysadmin, tech writer, graphic designer)
              before becoming a full-time developer in the mid-noughties.
            </p>
            <p>
              He&apos;s been a professional developer ever since, working with
              startups and established companies alike, and has never stopped
              playing TTRPGs.
            </p>
            <p>Neil lives with his wife Jade, and two cats.</p>
          </div>

          <Image
            src={neil_and_romi}
            alt="A photo of a man (Neil) wearing glasses and a t-shirt, with a cat on his lap."
          />
        </section>

        <hr />
        <section className={styles.aboutSection}>
          <div>
            <h2>
              <mark>Jade</mark>
            </h2>
            <p>
              Jade has never played a single TTRPG in her entire life, but she
              has many useful skills, including putting up with Neil,
              proofreading, and admin.
            </p>
            <p>Jade lives with her husband Neil, and two cats.</p>
          </div>
          <Image
            src={jadeSunset}
            alt="A photo of Jade with a sunset in the background."
            className="about-image"
          />
        </section>
        <hr />
        <section className={styles.aboutSection}>
          <div>
            <h2>
              <mark>The animals, Grigio and Romana</mark>
            </h2>
            <p>
              Grigio (left, fluffy, one braincell) and Romana (right, shorthair,
              too smart) are both rescues from UAE. Grigio was dumped in a car
              park and Romana was abandoned in the lobby of an apartment block
              for days.
            </p>
            <p>
              Romana and Grigio now live with each other and two human servants.
            </p>
            <p>
              If you&apos;re curious about adopting a cat from UAE, check out
              the{" "}
              <a
                target="_blank"
                href="https://www.instagram.com/fur_family11.11?igsh=NzRiOGQzdGMzNDd1"
              >
                Fur Family
              </a>{" "}
              Instagram page or the{" "}
              <a
                target="_blank"
                href="https://www.instagram.com/pawsomexlove?igsh=YWxyYzNsc3ZraHNw"
              >
                Pawsome Love
              </a>{" "}
              Instagram page.
            </p>
          </div>
          <Image
            src={theCats}
            alt="A photo of Jade with a sunset in the background."
            className="about-image"
          />
        </section>
      </main>
    </>
  );
}
