function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-24"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl font-semibold mb-12">About Me</h2>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              I'm a recent Drexel University graduate with a Bachelor's degree
              in Computer Science. My passion lies in front-end and full-stack
              development, where I enjoy creating engaging websites and mobile
              applications. I'm always eager to learn new technologies and solve
              problems!
            </p>
            <p className="text-gray-400 mb-6">Technologies I've worked with:</p>
            {/* Technology List */}
            <ul className="grid grid-cols-2 gap-3 text-gray-400">
              <li>▹ JavaScript</li>
              <li>▹ TypeScript</li>
              <li>▹ Java</li>
              <li>▹ React.js</li>
              <li>▹ SQL</li>
              <li>▹ REST APIs</li>
            </ul>
          </div>

          {/* Right Side Image */}
          <div className="flex justify-center">
            <img
              src="/94586140.jpg"
              alt="Wyatt"
              className="w-72 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
