import "./LandingMessage.css";

export default function LandingMessage({ handleClickScroll }) {
  return (
    <>
      <div className="landing-container">
        <div className="landing-items">
          <header className="name-section">
            <h1>Hi, I'm Brock</h1>
          </header>
          <section className="summary">
            <p>
              I am a developer, designer, and leader pursing a career in tech.
            </p>
          </section>

          <button onClick={handleClickScroll} className="learn-more-btn">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
}
