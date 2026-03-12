import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      title: "Senior Capstone",
      slug: "senior-capstone",
      description:
        "Mobile application designed to scan and grade trading cards",
      tech: ["React Native", "JavaScript", "PostgreSQL", "Firebase"],
      github: "https://github.com/NizomDjuraev/CardScanAndGrade",
    },
    {
      title: "Concert Connect",
      slug: "concert-connect",
      description:
        "One stop shop for concert goers to find concerts, buy tickers, and book hotels",
      tech: ["React.js", "TypeScript", "Node.js", "SQLite", "REST API"],
      github: "https://github.com/LukeMatheson/ConcertConnect",
    },
    {
      title: "Crypto Hub",
      slug: "crypto-hub",
      description:
        "Website to track your crypto investments and view historical data",
      tech: ["JavaScript", "HTML/CSS", "SQL"],
      github: "https://github.com/wkaiser21/CryptoHub",
    },
    {
      title: "Conway's Game of Life",
      slug: "conway-game-of-life",
      description: "Game of Life simulation made in JavaScript",
      tech: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/wkaiser21/GameOfLife",
      live: "https://wkaiser21.github.io/GameOfLife/",
    },
    {
      title: "Rate My Route",
      slug: "rate-my-route",
      description:
        "Figma prototype project of an app to rate and review travel routes for Philadelphia commuters",
      tech: ["Figma"],
      live: "https://www.figma.com/proto/oP85PlOTYUVbfwKaT0GD8U/High-Fidelity-Prototype?node-id=2-2&starting-point-node-id=2%3A2",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-slate-900 py-20 min-h-screen"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl font-semibold text-white">Projects</h2>
          <div className="flex-1 h-px bg-slate-700"></div>
        </div>

        {/* Grid of Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
