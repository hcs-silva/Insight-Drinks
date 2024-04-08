import "./App.css";
import { useState } from 'react';

function App() {

  const [pages, setPages] = useState("home");

  const nomes = [
    { id: 1, name: "home" },
    { id: 2, name: "world" },
    { id: 3, name: "company" },
    { id: 4, name: "serviços" },
    { id: 5, name: "team" },
  ];

  const handleClick = () => {};

  return (
    <div className="App">
      <header className="top">
        <img src="./world.jpeg" alt="" className="logo" />
      </header>
      <div className="center">
        <label className="label-container" onClick={handleClick}>
          <img src="./insight.jpeg" alt="" className="card" />
          <span>Insight Drinks World</span>
        </label>
        <label className="label-container">
          <img src="./world.jpeg" alt="" className="card" />
          <span>A Nossa Empresa</span>
        </label>
        <label className="label-container">
          <img src="./Serviços.jpeg" alt="" className="card" />
          <span>Os Nossos Serviços</span>
        </label>
        <label className="label-container">
          <img src="./Team.jpeg" alt="" className="card" />
          <span>A Nossa Equipa</span>
        </label>
        {/*<label className="label-container">
          <img src="./home.jpeg" alt="" className="card" />
          <span>home</span>
  </label>*/}
      </div>
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
