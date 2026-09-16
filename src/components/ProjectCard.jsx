import { FaGithub } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight, FiExternalLink } from "react-icons/fi";
import { useState } from "react";

function ProjectCard({ title, category, description, tech, github, live, image, images = [], index }) {
  const projectImages = images.length > 0 ? images : image ? [image] : [];
  const [activeImage, setActiveImage] = useState(0);
  const [slideDirection, setSlideDirection] = useState("next");
  const isReversed = index % 2 === 1;
  const hasMultipleImages = projectImages.length > 1;

  const showPreviousImage = () => {
    setSlideDirection("previous");
    setActiveImage((currentImage) =>
      currentImage === 0 ? projectImages.length - 1 : currentImage - 1,
    );
  };

  const showNextImage = () => {
    setSlideDirection("next");
    setActiveImage((currentImage) =>
      currentImage === projectImages.length - 1 ? 0 : currentImage + 1,
    );
  };

  return (
    <article
      className={`group grid min-h-[70vh] items-center gap-10 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 p-5 md:grid-cols-2 md:p-10 lg:gap-20 ${
        isReversed ? "md:[&>*:first-child]:order-2" : ""
      }`}
      data-aos="fade-up"
    >
      <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-xl border border-slate-700 bg-slate-800 p-4">
        {projectImages.length > 0 ? (
          <>
            <img
              key={projectImages[activeImage]}
              src={projectImages[activeImage]}
              alt={`${title} project screenshot ${activeImage + 1}`}
              className={`h-full w-full object-contain transition duration-500 group-hover:scale-[1.03] project-image-slide-${slideDirection}`}
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
            {hasMultipleImages && (
              <>
                <button
                  type="button"
                  onClick={showPreviousImage}
                  aria-label={`Show previous ${title} screenshot`}
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-slate-950/80 p-2 text-white transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <FiChevronLeft size={24} />
                </button>
                <button
                  type="button"
                  onClick={showNextImage}
                  aria-label={`Show next ${title} screenshot`}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-slate-950/80 p-2 text-white transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <FiChevronRight size={24} />
                </button>
                <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-slate-950/75 px-3 py-2">
                  {projectImages.map((projectImage, imageIndex) => (
                    <button
                      key={projectImage}
                      type="button"
                      onClick={() => {
                        setSlideDirection(imageIndex > activeImage ? "next" : "previous");
                        setActiveImage(imageIndex);
                      }}
                      aria-label={`Show screenshot ${imageIndex + 1}`}
                      className={`h-2 w-2 rounded-full transition ${
                        imageIndex === activeImage ? "bg-blue-400" : "bg-slate-500"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
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
          0{index + 1} / {category}
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
