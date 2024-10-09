import "./App.css";
import logoTK from "./img/TKlogo.svg";
import Testimonio from "./components/Testimonio";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="app">
        <img src={logoTK} className="logo tk" alt="logo" />
      <div className="main__container">
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Testimonio />
      </div>
    </div>
  );
}

export default App;
