import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

function ProjectCard({ title, description, tech, github, live, image, index }) {
  const isReversed = index % 2 === 1;

  return (
    <article
      className={`group grid min-h-[70vh] items-center gap-10 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 p-5 md:grid-cols-2 md:p-10 lg:gap-20 ${
        isReversed ? "md:[&>*:first-child]:order-2" : ""
      }`}
      data-aos="fade-up"
    >
      <div className="relative flex min-h-[20rem] items-center justify-center overflow-hidden rounded-xl border border-slate-700 bg-slate-800 md:min-h-[30rem]">
        {image ? (
          <>
            <img
              src={image}
              alt={`${title} project screenshot`}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              onError={(event) => {
                event.currentTarget.hidden = true;
                event.currentTarget.nextElementSibling.hidden = false;
              }}
            />
            <div hidden className="text-center text-slate-500">
              <span className="mb-3 block text-6xl font-semibold text-slate-700">
                {title.charAt(0)}
              </span>
              <span className="text-sm">Add a project screenshot</span>
            </div>
          </>
        ) : (
          <div className="text-center text-slate-500">
            <span className="mb-3 block text-6xl font-semibold text-slate-700">
              {title.charAt(0)}
            </span>
            <span className="text-sm">Project screenshot</span>
          </div>
        )}
      </div>

      <div className="max-w-xl py-4">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
          0{index + 1} / Featured project
        </p>
        <h3 className="mb-5 text-3xl font-semibold text-white md:text-4xl">
          {title}
        </h3>
        <p className="mb-8 text-base leading-relaxed text-slate-400 md:text-lg">
          {description}
        </p>

        <div className="mb-9 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span key={item} className="rounded-full bg-slate-800 px-3 py-1.5 text-sm text-slate-300">
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-5">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-blue-400">
              <FaGithub size={20} /> GitHub
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-blue-400">
              <FiExternalLink size={19} /> Live site
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
