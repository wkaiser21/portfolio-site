import { Link } from "react-router-dom";

function ProjectCard({ title, description, tech, github, slug }) {
  return (
    <Link to={`/projects/${slug}`}>
      <div className="relative bg-slate-800 rounded-xl p-6 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-400/40 transition-all duration-300 cursor-pointer">
        {/* Github Button */}
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 text-gray-400 hover:text-blue-400"
          onClick={(e) => e.stopPropagation()}
        >
          GitHub
        </a>

        {/* Project Title */}
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-4">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 text-xs text-blue-400">
          {tech.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
