import "./index.css";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <header className="header">
        <h1>Phurba's Portfolio</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="footer">© 2025 Phurba. All rights reserved.</footer>
    </>
  );
}

export default App;
