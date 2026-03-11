import Contact from "./Contact";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/*Left Side*/}
        <div className="flex items-center gap-8">
          <h1 className="font-semibold text-lg">Wyatt Kaiser</h1>
          <a href="#home" className="hover:text-blue-400 transition">
            Home
          </a>
          <a href="#about" className="hover:text-blue-400 transition">
            About
          </a>
          <a href="#experience" className="hover:text-blue-400 transition">
            Experience
          </a>
          <a href="#projects" className="hover:text-blue-400 transition">
            Projects
          </a>
        </div>

        {/*Right Side*/}
        <Contact />
      </div>
    </nav>
  );
}

export default Navbar;
