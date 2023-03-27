import React from "react";

import "./styles.css";

const Skill = () => (
  <div id="skills" className="mt-5">
    <h4>
      <span className="badge badge-pill badge-dark">
        <i className="material-icons">extension</i>
      </span>
      Competências
    </h4>
    <hr />

    <div className="row">
      <div className="col-4">
        <span>
          <strong>Proficiente:</strong>
        </span>
      </div>
      <div className="col-8">
        HTML, CSS, Javascript ES5 ES6, AngularJS, Angular 2+, PHP, Python,
        Node.js
      </div>
    </div>

    <div className="row mt-3">
      <div className="col-4">
        <span>
          <strong>Intermediário:</strong>
        </span>
      </div>
      <div className="col-8">ReactJS, Git</div>
    </div>

    <div className="row mt-3">
      <div className="col-4">
        <span>
          <strong>Inicante:</strong>
        </span>
      </div>
      <div className="col-8">Docker, Java, C#</div>
    </div>
  </div>
);

export default Skill;
