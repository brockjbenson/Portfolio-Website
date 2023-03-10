import "./About.css";

export default function About() {
  return (
    <>
      <div className="about-container">
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
    </>
  );
}
