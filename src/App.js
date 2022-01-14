import "./App.scss";
import About from "./components/about";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="App">
      {/* <div className="noise"></div> */}
      <header className="App-header container">
        <h1>Hello!</h1>
        <p>
          I'm Eric. Currently I am a designer on the digital experience team at
          Funko.
        </p>
        <div className="social-icons">
         <a href="https://instagram.com/eric_flatt" target="blank"> <FontAwesomeIcon icon={faInstagram} size="lg" /> </a>
         <a href="https://twitter.com/__flatt" target="blank"> <FontAwesomeIcon icon={faTwitter} size="lg" /> </a>
         <a href="https://linkedin.com/in/ericbflatt" target="blank"> <FontAwesomeIcon icon={faLinkedinIn} size="lg" /> </a>
        </div>
      </header>

      <About />
    </div>
  );
}

console.log(
  "background photo credit https://crosscut.com/2019/09/neon-symbol-seattles-past-what-will-illuminate-its-future"
);
export default App;
