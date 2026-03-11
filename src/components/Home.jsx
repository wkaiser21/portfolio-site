function Home() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-900 text-white flex items-center"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side Image*/}
        <div className="flex justify-center">
          <img
            src="/94586140.jpg"
            alt="Wyatt"
            className="w-64 h-64 object-cover rounded-full border-4 border-blue-400"
          />
        </div>

        {/* Right Side Text */}
        <div>
          <h1 className="text-4l md:text-5xl font-bold mb-4">Hi, I'm Wyatt!</h1>
          <p className="text-gray-400 mb-6 leading-relaxed">
            I am a recent Drexel CS graduate who is primarily interested in
            front-end and full-stack development. I've enjoyed making websites
            and mobile applications while developing new skills along the way.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
