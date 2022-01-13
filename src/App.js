import "./App.scss";
import About from "./components/about";
// import Marquees from "./components/marquee";

function App() {
  return (
    <div  className="App">
      {/* <div className="noise"></div> */}
      <header className="App-header container">
        <h1>Hello!</h1>
        <p>
          I'm Eric. Currently I am a designer on the digital experience team at
          Funko.
        </p>  
      </header>
      <About />
      {/* <Marquees /> */}
    </div>
  );
}

console.log(
  "background photo credit https://crosscut.com/2019/09/neon-symbol-seattles-past-what-will-illuminate-its-future"
);
export default App;
