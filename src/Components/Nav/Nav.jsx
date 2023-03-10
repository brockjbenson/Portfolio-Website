import "./Nav.css";

export default function Nav() {
  return (
    <>
      <div className="nav">
        <header className="nav-header">
          <h2>Brock Benson</h2>
        </header>

        <ul className="nav-links">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
        </ul>
        <div className="nav-btns">
          <button className="contact-btn">Contact Me</button>
        </div>
      </div>
    </>
  );
}
