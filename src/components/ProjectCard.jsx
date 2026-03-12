import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { FiFolder } from "react-icons/fi";

function ProjectCard({ title, description, tech, github, slug, live }) {
  return (
    <Link to={`/projects/${slug}`}>
      <div className="relative bg-slate-800 rounded-xl p-6 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-400/40 transition-all duration-300 cursor-pointer">
        <FiFolder className="text-blue-400 mb-4" size={30} />
        {/* Icon Container */}
        <div className="absolute top-4 right-4 flex gap-3">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400"
              onClick={(e) => e.stopPropagation()}
            >
              <FaGithub size={24} />
            </a>
          )}

          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400"
              onClick={(e) => e.stopPropagation()}
            >
              <FiExternalLink size={24} />
            </a>
          )}
        </div>

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
