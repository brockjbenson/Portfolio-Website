import "./App.css";
import "../About/About.css";
import "../Nav/Nav.css";
import "../LandingMessage/LandingMessage.css";

import { useRef } from "react";

function App() {
  const ref = useRef(null);
  const home = useRef(null);

  const handleClickAbout = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClickHome = () => {
    home.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClickContact = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClickProjects = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="App">
      <nav className="nav">
        <header className="nav-header">
          <h2>Brock Benson</h2>
        </header>

        <ul className="nav-links">
          <li onClick={handleClickHome}>Home</li>
          <li onClick={handleClickAbout}>About</li>
          <li onClick={handleClickProjects}>Projects</li>
        </ul>
        <div className="nav-btns">
          <button className="contact-btn">Contact Me</button>
        </div>
      </nav>
      <div ref={home} className="landing-container">
        <div className="landing-items">
          <header className="name-section">
            <h1>Hi, I'm Brock</h1>
          </header>
          <section className="summary">
            <p>
              I am a developer, designer, and leader pursing a career in tech.
            </p>
          </section>

          <button onClick={handleClickAbout} className="learn-more-btn">
            Learn More
          </button>
        </div>
      </div>
      <div ref={ref} className="about-container">
        <header className="about-header">
          <h1>About Me</h1>
        </header>
        <div className="about-cards">
          <div className="first-about-card">
            <div className="about-card-header">
              <h1>Who am I?</h1>
            </div>
            <div className="about-card-body">
              <p>
                My name is Brock Benson. I am a software developer with graphic
                design skills, leadership skills, and a passion for technology
              </p>
            </div>
          </div>
          <div className="second-about-card">
            <div className="about-card-header"></div>
            <div className="about-card-body"></div>
          </div>
          <div className="third-about-card">
            <div className="about-card-header"></div>
            <div className="about-card-body"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
