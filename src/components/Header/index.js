import React from "react";

import "./styles.css";

const Header = () => (
  <header id="header">
    <div className="row mt-5">
      <div className="col-sm">
        <h1 className="font-weight-bold">Paulo Thiago Seixas Serrão</h1>
      </div>
    </div>

    <div className="row">
      <div className="col-sm">
        <h3>Desenvolvedor</h3>
      </div>
    </div>

    <div className="row mt-3">
      <div className="col-sm">
        <p>
          Experiência em desenvolvimento web trabalhando com as seguintes
          tecnologias:
          <br />
          Backend: Python(Django Rest, Flask) , Node.js(Loopback.io, ExpressJS){" "}
          <br />
          Frontend: HTML , CSS , Bootstrap , Material UI , Quasar , Javascript ,
          Typescript , AngularJS , Angular 2+ , VueJS , ReactJS <br />
          Banco de dados: MySQL , SQLServer , Postgresql , MongoDB <br />
          Metodologia ágil: Scrum , Kanban
        </p>
      </div>
    </div>
  </header>
);

export default Header;
