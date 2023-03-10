import LandingMessage from "../LandingMessage/LandingMessage";
import Nav from "../Nav/Nav";
import "./App.css";
import About from "../About/About";

function App() {
  const handleClickScroll = () => {
    const element = document.getElementById("about-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="App">
      <Nav />
      <LandingMessage handleClickScroll={handleClickScroll} />
      <About id="about-section" />
    </div>
  );
}

export default App;
