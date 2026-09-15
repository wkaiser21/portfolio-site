import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      title: "Senior Capstone",
      image: "/project-images/senior-capstone.png",
      description:
        "Mobile application designed to scan and grade trading cards",
      tech: ["React Native", "JavaScript", "PostgreSQL", "Firebase"],
      github: "https://github.com/NizomDjuraev/CardScanAndGrade",
    },
    {
      title: "Concert Connect",
      image: "/project-images/concert-connect.png",
      description:
        "One stop shop for concert goers to find concerts, buy tickers, and book hotels",
      tech: ["React.js", "TypeScript", "Node.js", "SQLite", "REST API"],
      github: "https://github.com/LukeMatheson/ConcertConnect",
    },
    {
      title: "Crypto Hub",
      image: "/project-images/crypto-hub.png",
      description:
        "Website to track your crypto investments and view historical data",
      tech: ["JavaScript", "HTML/CSS", "SQL"],
      github: "https://github.com/wkaiser21/CryptoHub",
    },
    {
      title: "Conway's Game of Life",
      image: "/project-images/game-of-life.png",
      description: "Game of Life simulation made in JavaScript",
      tech: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/wkaiser21/GameOfLife",
      live: "https://wkaiser21.github.io/GameOfLife/",
    },
    {
      title: "Rate My Route",
      image: "/project-images/rate-my-route.png",
      description:
        "Figma prototype project of an app to rate and review travel routes for Philadelphia commuters",
      tech: ["Figma"],
      live: "https://www.figma.com/proto/oP85PlOTYUVbfwKaT0GD8U/High-Fidelity-Prototype?node-id=2-2&starting-point-node-id=2%3A2",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-slate-950 py-24 text-white"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-blue-400 mb-3">
              Selected work
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold">Projects</h2>
          </div>
          <p className="hidden md:block max-w-xs text-right text-sm leading-relaxed text-slate-400">
            A closer look at the products, experiments, and interfaces I have
            built.
          </p>
        </div>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
