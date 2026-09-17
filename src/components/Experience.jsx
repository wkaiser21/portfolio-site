import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const jobs = [
  {
    company: "Drexel College of Medicine",
    role: "Web Developer/Helpdesk Support Co-Op",
    date: "April 2023 - September 2023",
    images: ["/project-images/cpch/cpch1.png", "/project-images/cpch/cpch2.png", "/project-images/cpch/cpch3.png", "/project-images/cpch/cpch4.png",],
    points: [
      "Resolved and managed web application support tickets, collaborating with cross-functional teams to maintain system reliability and user satisfaction",
      "Enhanced UI workflows using JavaScript, improving clariity and usability in our internal healthcare learning web app platform for students",
      "Developed and maintained 44 interactive learning modules that are used by over 300 institutions, constructed with JavaScript and C# aligned with Agile and SDLC practices",
      "Expanded backend functionality in C# in a three-tier .NET architecture to support new platform features",
      "Communicated with stakeholders to translate functional requirements into deployable application updates",
    ],
  },
];

function ExperienceGallery({ images, company }) {
  const [activeImage, setActiveImage] = useState(0);
  const hasImages = images.length > 0;
  const hasMultipleImages = images.length > 1;

  const showPreviousImage = () => {
    setActiveImage((currentImage) =>
      currentImage === 0 ? images.length - 1 : currentImage - 1,
    );
  };

  const showNextImage = () => {
    setActiveImage((currentImage) =>
      currentImage === images.length - 1 ? 0 : currentImage + 1,
    );
  };

  return (
    <div className="relative mt-10 flex aspect-video items-center justify-center overflow-hidden">
      {hasImages ? (
        <img
          key={images[activeImage]}
          src={images[activeImage]}
          alt={`${company} work screenshot ${activeImage + 1}`}
          className="h-full w-full object-contain experience-image-slide"
        />
      ) : (
        <div className="text-center text-slate-500">
          <span className="mb-3 block text-5xl font-semibold text-slate-700">
            {company.charAt(0)}
          </span>
          <span className="text-sm">Add workplace screenshots</span>
        </div>
      )}

      {hasMultipleImages && (
        <>
          <button
            type="button"
            onClick={showPreviousImage}
            aria-label={`Show previous ${company} screenshot`}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/70 bg-white/90 p-2 text-slate-950 shadow-lg shadow-slate-950/30 backdrop-blur-sm transition hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            type="button"
            onClick={showNextImage}
            aria-label={`Show next ${company} screenshot`}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/70 bg-white/90 p-2 text-slate-950 shadow-lg shadow-slate-950/30 backdrop-blur-sm transition hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <FiChevronRight size={24} />
          </button>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full border border-white/40 bg-slate-950/70 px-3 py-2 shadow-lg backdrop-blur-sm">
            {images.map((image, imageIndex) => (
              <button
                key={image}
                type="button"
                onClick={() => setActiveImage(imageIndex)}
                aria-label={`Show screenshot ${imageIndex + 1}`}
                className={`h-2 w-2 rounded-full transition ${
                  imageIndex === activeImage ? "bg-white" : "bg-slate-400"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function Experience() {
  const [selectedJob, setSelectedJob] = useState(0);

  return (
    <section
      id="experience"
      className="bg-slate-900 text-white py-24 min-h-screen"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/*Header*/}
        <h2 className="text-3xl font-semibold mb-12">
          <span className="text-blue-400">Experience</span>
        </h2>
        <div className="grid md:grid-cols-[200px_1fr] gap-10">
          {/* Left side - Company list */}
          <div className="flex md:flex-col">
            {jobs.map((job, index) => (
              <button
                key={index}
                onClick={() => setSelectedJob(index)}
                className={`cursor-pointer text-left px-4 py-3 transition
                  if (imageIndex === activeImage) return;
                  ${
                    selectedJob === index
                      ? "border-l-2 border-blue-400 text-blue-400"
                      : "text-gray-400"
                  }
                `}
              >
                {job.company}
              </button>
            ))}
          </div>

          {/* Right side - Job details */}
          <div>
            <h3 className="text-xl font-semibold mb-1">
              {jobs[selectedJob].role}{" "}
              <span className="text-blue-400">
                @ {jobs[selectedJob].company}
              </span>
            </h3>

            <p className="text-gray-400 mb-6">{jobs[selectedJob].date}</p>

            <ul className="space-y-4">
              {jobs[selectedJob].points.map((point, i) => (
                <li key={i} className="flex text-gray-300">
                  <span className="text-blue-400 mr-3">▹</span>
                  {point}
                </li>
              ))}
            </ul>

            <ExperienceGallery
              key={selectedJob}
              images={jobs[selectedJob].images}
              company={jobs[selectedJob].company}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
