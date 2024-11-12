import styles from "./projects.module.scss";

export default function Portfolio() {
  return (
    <main className="container">
      <h1>Projects</h1>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <article key={index}>
            <h2>
              <mark>{project.title}</mark>
            </h2>
            <p>{project.description}</p>
            <ul>
              {project.technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </main>
  );
}

const projects = [
  {
    title: "GUMSHOE for Foundry VTT",
    description:
      "A system implementation of the GUMSHOE investigative roleplaying game system for the Foundry Virtual Tabletop platform. Features character sheets, skill tests, and resource tracking.",
    technologies: ["Foundry VTT", "React", "TypeScript"],
  },
  {
    title: "Trail of Cthulhu 2nd Edition for Foundry VTT",
    description:
      "A system implementation of the Trail of Cthulhu 2nd Edition roleplaying game system for the Foundry Virtual Tabletop platform. Features character sheets, skill tests, and resource tracking.",
    technologies: ["Foundry VTT", "React", "TypeScript"],
  },
  {
    title: "This Website?",
    description:
      "A static website built with Next.js and PicoCSS. Features a portfolio, and contact form.",
    technologies: ["Next.js", "PicoCSS"],
  },
  {
    title: "Pub Crusade for Foundry VTT",
    description:
      "A system implementation of the Pub Crusade roleplaying game system for the Foundry Virtual Tabletop platform. Features character sheets, skill tests, and resource tracking.",
    technologies: ["Foundry VTT", "React", "TypeScript"],
  },
  // Add more projects as needed
];
