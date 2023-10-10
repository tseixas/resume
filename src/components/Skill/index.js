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
          <strong>Backend:</strong>
        </span>
      </div>
      <div className="col-8">
        Python, NodeJS, PHP e C#
      </div>
    </div>

    <div className="row mt-3">
      <div className="col-4">
        <span>
          <strong>Frontend:</strong>
        </span>
      </div>
      <div className="col-8">ReactJS, Angular, VueJS</div>
    </div>

    <div className="row mt-3">
      <div className="col-4">
        <span>
          <strong>Outros:</strong>
        </span>
      </div>
      <div className="col-8">Docker, Git, Testes unitários</div>
    </div>
  </div>
);

export default Skill;
