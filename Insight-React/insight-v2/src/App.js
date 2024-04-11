import "./App.css";
import { useState } from "react";
import World from "./components/World";
import Company from "./components/Company";
import Servicos from "./components/Servicos";
import Team from "./components/Team"

function App() {
  const [show, setShow] = useState(false);
  const [component, setComponent] = useState(null);

  const toggleComponent = (comp) => {
    if (component && component.type === comp.type) {
      setShow(!show);
    } else {
      setShow(true);
      setComponent(comp);
    }
  };

  const handleClick = (comp) => {
    toggleComponent(comp);
  };

  return (
    <div className="App">
      <header className="top">
        <img src="./world.jpeg" alt="" className="logo" />
      </header>
      <div className="center">
        <label
          className="label-container"
          onClick={() => handleClick(<World />)}
        >
          <img src="./insight.jpeg" alt="" className="card" />
          <span>Insight Drinks World</span>
        </label>
        <label className="label-container" onClick={() => handleClick(<Company />)}>
          <img src="./world.jpeg" alt="" className="card" />
          <span>A Nossa Empresa</span>
        </label>
        <label className="label-container" onClick={() => handleClick(<Servicos />)}>
          <img src="./Serviços.jpeg" alt="" className="card" />
          <span>Os Nossos Serviços</span>
        </label>
        <label className="label-container" onClick={() => handleClick(<Team />)}>
          <img src="./Team.jpeg" alt="" className="card" />
          <span>A Nossa Equipa</span>
        </label>
        {/*<label className="label-container" onClick={() => handleClick(<Home />)}>
          <img src="./home.jpeg" alt="" className="card" />
          <span>home</span>
  </label>*/}
      </div>
      {show && component}

      <footer className="footer">
        <img src="./world.jpeg" alt="" className="footer-logo" />
        <p className="text-footer">
          Planeie Connosco o seu evento!
          <br />
          Email: insightdrinksw@gmail.com
          <br />
          Telefone: 911098114
          <br />
          Instagram: @insightdrinks
          <br />© 2024 - Todos os direitos reservados
        </p>
      </footer>
    </div>
  );
}

export default App;
