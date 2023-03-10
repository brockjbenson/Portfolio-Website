import "../Css/App.css";
import "../Css/About.css";
import "../Css/LandingMessage.css";
import "../Css/Nav.css";
import "../Css/Skills.css";
import "../Css/Projects.css";
import { useRef } from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { BsGit } from "react-icons/bs";
import { SiPostgresql, SiJavascript, SiVisualstudiocode } from "react-icons/si";

function App() {
  const about = useRef(null);
  const home = useRef(null);
  const contact = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);

  const handleClickAbout = () => {
    about.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClickHome = () => {
    home.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClickContact = () => {
    contact.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClickProjects = () => {
    projects.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClickSkills = () => {
    skills.current?.scrollIntoView({ behavior: "smooth" });
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
          <li onClick={handleClickSkills}>Skills</li>
          <li onClick={handleClickProjects}>Projects</li>
        </ul>
        <div className="nav-btns">
          <button onClick={handleClickContact} className="contact-btn">
            Contact Me
          </button>
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
      <div ref={about} className="about-container">
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
                design skills, leadership skills, and a passion for technology.
              </p>
            </div>
          </div>
          <div className="second-about-card">
            <div className="about-card-header">
              <h1>Why Development?</h1>
            </div>
            <div className="about-card-body">
              <p>
                I have always loved technology and being creative. The two pair
                perfectly together which is what led me to web development.
              </p>
            </div>
          </div>
          <div className="third-about-card">
            <div className="about-card-header">
              <h1>Education and Training?</h1>
            </div>
            <div className="about-card-body">
              <p>
                I trained and studied at
                <span>
                  {" "}
                  <a target="_blank" href="https://emergingacademy.org/">
                    Emerging Digital Academy
                  </a>
                </span>
                . Here I gained the skills to become a fullstack developer.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div ref={skills} className="skills-container">
        <div className="skills-text">
          <header className="skills-header">
            <h1>Skills and Technologies</h1>
          </header>
          <div className="skills-body">
            <p>
              I am proficient in all of these languages and technologies. My
              strong suit is frontend development but I am more than capable
              with backend development as well.
            </p>
          </div>
        </div>
        <div className="skills-icons">
          <div className="row r1">
            <FaReact className="icon" />
          </div>
          <div className="row r2">
            <FaHtml5 className="icon" />
            <FaCss3Alt className="icon" />
          </div>
          <div className="row r3">
            <FaNodeJs className="icon" />
            <SiVisualstudiocode className="icon" />
            <TbBrandRedux className="icon" />
          </div>
          <div className="row r4">
            <SiPostgresql className="icon" />
            <SiJavascript className="icon" />
          </div>
          <div className="row r5">
            <BsGit className="icon" />
          </div>
        </div>
      </div>
      <div ref={projects} className="projects-container">
        <header className="projects-header">
          <h1>My Work</h1>
        </header>
        <div className="projects">
          <div className="project"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
