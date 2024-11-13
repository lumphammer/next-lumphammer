import Image from "next/image";
import neil_and_romi from "./neil_and_romi.jpg";
import styles from "./about.module.scss";

export default function About() {
  return (
    <>
      <main className="container">
        <h1>About Us</h1>
        <h2>
          <mark>Neil</mark>
        </h2>
        <section className={styles.aboutSection}>
          <div>
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
            <p>Neil lives alone with his wife Jade, and two cats.</p>
          </div>

          <Image src={neil_and_romi} alt="Neil and Romi" />
        </section>

        <hr />
        <h2>
          <mark>Jade</mark>
        </h2>
        <section className={styles.aboutSection}>
          <div>
            <p>
              Jade has never played a single TTRPG in her entire life, but she
              has many useful skills, including putting up with Neil,
              proofreading, and admin.
            </p>
            <p>Jade lives alone with her husband Neil, and two cats.</p>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
            width={2000}
            height={1333}
            alt="Desk with computer monitors showing code"
            className="about-image"
          />
        </section>
      </main>
    </>
  );
}
