import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Contact />
      <Home />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
