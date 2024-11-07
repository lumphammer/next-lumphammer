export default function Portfolio() {
  return (
    <main className="container">
      <h1>Portfolio</h1>

      <div className="grid">
        {projects.map((project) => (
          <div key={project.title}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div>
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

const projects = [
  {
    title: "Project One",
    description:
      "A brief description of your first project and what it accomplishes.",
    technologies: ["React", "TypeScript", "Node.js"],
  },
  {
    title: "Project Two",
    description: "Description of another project showcasing different skills.",
    technologies: ["Next.js", "Tailwind", "PostgreSQL"],
  },
  // Add more projects as needed
];
