import "./Nav.css";

export default function Nav() {
  return (
    <>
      <div className="nav">
        <header className="nav-header">Brock Benson</header>

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

          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}
