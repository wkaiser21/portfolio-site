import { useState } from "react";

const jobs = [
  {
    company: "Drexel College of Medicine",
    role: "Web Developer",
    date: "April 2023 - September 2023",
    points: [
      "Resolved and managed web application support tickets, collaborating with cross-functional teams to maintain system reliability and user satisfaction",
      "Enhanced UI workflows using JavaScript, improving clariity and usability across internal healthcare learning platforms",
      "Developed and maintained interactive learning modules aligned with Agile and SDLC practices",
      "Expanded backend functionality in C# withing a three-tier .NET architecture to support new platform features",
      "Partnered with stakeholders to translate functional requirements into deployable application updates",
    ],
  },
  {
    company: "Drexel University",
    role: "IT Support Specialist",
    date: "September 2022 - April 2023",
    points: [
      "Provided technical support to over 500 students and faculty, resolving hardware and software issues with a 95% satisfaction rate",
      "Managed and maintained computer labs, ensuring all systems were up-to-date and functional for academic use",
      "Conducted training sessions on software applications, improving user proficiency and reducing support requests by 20%",
      "Collaborated with the IT team to implement new technologies, enhancing the overall efficiency of campus IT services",
    ],
  },
];

function Experience() {
  const [selectedJob, setSelectedJob] = useState(0);

  return (
    <section id="experience" className="bg-slate-900 text-white py-24">
      <div className="max-w-6x1 mx-auto px-6">
        {/*Header*/}
        <h2 className="text-3x1 font-semibold mb-12">
          <span className="text-teal-400">Experience</span>
        </h2>
        <div className="grid md:grid-cols-[200px_1fr] gap-10">
          {/* Left side - Company list */}
          <div className="flex md:flex-col">
            {jobs.map((job, index) => (
              <button
                key={index}
                onClick={() => setSelectedJob(index)}
                className={`cursor-pointer text-left px-4 py-3 transition
                  ${
                    selectedJob === index
                      ? "border-l-2 border-teal-400 text-teal-400"
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
              <span className="text-teal-400">
                @ {jobs[selectedJob].company}
              </span>
            </h3>

            <p className="text-gray-400 mb-6">{jobs[selectedJob].date}</p>

            <ul className="space-y-4">
              {jobs[selectedJob].points.map((point, i) => (
                <li key={i} className="flex text-gray-300">
                  <span className="text-teal-400 mr-3">▹</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
