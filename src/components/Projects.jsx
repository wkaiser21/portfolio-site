import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      title: "Senior Capstone Card App",
      category: "Mobile App Development",
      images: ["/project-images/senior/senior-capstone1.jpg", "/project-images/senior/senior-capstone2.jpg", "/project-images/senior/senior-capstone3.jpg", "/project-images/senior/senior-capstone4.jpg"],
      description:
        "Mobile application designed to scan, grade, and store sports trading cards",
      tech: ["React Native", "JavaScript", "PostgreSQL", "Firebase"],
      github: "https://github.com/NizomDjuraev/CardScanAndGrade",
    },
    {
      title: "Concert Connect",
      category: "Web Development",
      images: ["/project-images/concert-connect.png"],
      description:
        "One stop shop for concert goers to find concerts, buy tickets, and book hotels",
      tech: ["React.js", "TypeScript", "Node.js", "SQLite", "REST API"],
      github: "https://github.com/LukeMatheson/ConcertConnect",
    },
    {
      title: "Crypto Hub",
      category: "Web Development",
      images: ["/project-images/cryptohub/ch1.png", "/project-images/cryptohub/ch2.png", "/project-images/cryptohub/ch3.png", "/project-images/cryptohub/ch4.png", "/project-images/cryptohub/ch5.png"],
      description:
        "Website to simulate crypto investments and view historical data",
      tech: ["JavaScript", "HTML/CSS", "PostgreSQL"],
      github: "https://github.com/wkaiser21/CryptoHub",
    },
    {
      title: "Conway's Game of Life",
      category: "Web Development",
      images: ["/project-images/conway/conway-gif.gif"],
      description: "Game of Life simulation made in JavaScript",
      tech: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/wkaiser21/GameOfLife",
      live: "https://wkaiser21.github.io/GameOfLife/",
    },
    {
      title: "Rate My Route",
      category: "UX/UI Design",
      images: ["/project-images/ratemyroute/rmr1.png", "/project-images/ratemyroute/rmr2.png", "/project-images/ratemyroute/rmr3.png", "/project-images/ratemyroute/rmr4.png", "/project-images/ratemyroute/rmr5.png", "/project-images/ratemyroute/rmr6.png"],
      description:
        "Figma prototype project of an app to rate and review travel routes for commuters",
      tech: ["Figma"],
      live: "https://www.figma.com/proto/oP85PlOTYUVbfwKaT0GD8U/High-Fidelity-Prototype?node-id=2-2&starting-point-node-id=2%3A2",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-slate-900 py-24 text-white"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
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

        <footer className="mt-20 border-t border-slate-800 pt-6 text-center text-sm text-slate-400">
          Built by Wyatt Kaiser
        </footer>
      </div>
    </section>
  );
}

export default Projects;
