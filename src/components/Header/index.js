import React from "react";

import "./styles.css";

const Header = () => (
  <header id="header">
    <div className="row mt-5">
      <div className="col-sm">
        <h1 className="font-weight-bold">Thiago Seixas</h1>
      </div>
    </div>

    <div className="row">
      <div className="col-sm">
        <h3>Desenvolvedor de software</h3>
      </div>
    </div>

    <div className="row mt-3">
      <div className="col-sm">
        <p>
          Desenvolvedor Fullstack com 8+ anos de experiência, atuando em
          diversos projetos e utilizando diversas tecnologias.
          <br />
          Proativo, e sempre disposto a ajudar e encontrar a melhor forma de
          solução.
        </p>
      </div>
    </div>
  </header>
);

export default Header;
