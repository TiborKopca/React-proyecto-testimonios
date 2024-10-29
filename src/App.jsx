import "./App.css";
import logoTK from "./img/TKlogo.svg";
import Testimonio from "./components/Testimonio";
import testimoniosData from "./data/TestimoniosDataExternal";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="app">
      <img src={logoTK} className="logo tk" alt="logo" />
      <div className="main__container">
        <h1>Here is what our alumni say about freeCodeCamp:</h1>

        {testimoniosData.map((testimonio, index) => (
          <Testimonio
            key={index}
            nombre={testimonio.nombre}
            pais={testimonio.pais}
            imagen={testimonio.imagen}
            imgAlt={testimonio.imgAlt}
            empresa={testimonio.empresa}
            cargo={testimonio.cargo}
            testimonio={testimonio.text}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
