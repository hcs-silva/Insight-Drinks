//imports
import React from "react";
import "./App.css";
import World from "./components/World";
import Company from "./components/Company";
import Servicos from "./components/Servicos";
import Team from "./components/Team";

function App() {
  return (
    <div className="App">
      <header className="top">
        <img src="./world.jpeg" alt="" className="logo" />
      </header>
      <div className="center">
        <World />
        <Company />
        <Servicos />
        <Team />
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
