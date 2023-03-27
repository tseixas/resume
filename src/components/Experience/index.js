import React from "react";

import "./styles.css";

const Experience = () => (
  <div id="experience">
    <h4>
      <span className="badge badge-pill badge-dark">
        <i className="material-icons">business_center</i>
      </span>
      Experiência
    </h4>
    <hr />

    <div className="row">
      <div className="col-3">
        <span>
          <strong>08/2022 - Atualmente</strong>
        </span>
      </div>
      <div className="col-9">
        <span>
          <strong>Desenvolvedor de Software</strong>
        </span>
        <br />
        <span>
          <i> CITS - Centro Internacional de Tecnologia de Software  </i>
        </span>
        <br />
        <div className="mt-3">
          <p>
            Desenvolvimento de solução de aplicações de tecnologia educacional, integração de sistemas.
          </p>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-3">
        <span>
          <strong>06/2022 - 08/2022</strong>
        </span>
      </div>
      <div className="col-9">
        <span>
          <strong>Desenvolvedor de Software</strong>
        </span>
        <br />
        <span>
          <i> Instruct </i>
        </span>
        <br />
        <div className="mt-3">
          <p>
          Atuação do desenvolvimento de automatização e gestão de infraestrutura de data centers e clouds.
          </p>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-3">
        <span>
          <strong>07/2020 - 05/2022</strong>
        </span>
      </div>
      <div className="col-9">
        <span>
          <strong>Desenvolvedor de Software</strong>
        </span>
        <br />
        <span>
          <i> Sidia - Instituto de Tecnologia </i>
        </span>
        <br />
        <div className="mt-3">
          <p>
            Desenvolvimento de sistema web para gestāo de procedimento administrativos.
          </p>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-3">
        <span>
          <strong>07/2019 - 08/2020</strong>
        </span>
      </div>
      <div className="col-9">
        <span>
          <strong>Desenvolvedor de Software</strong>
        </span>
        <br />
        <span>
          <i> Riosoft Instituto de Tecnologia </i>
        </span>
        <br />
        <div className="mt-3">
          <p>
            Desenvolvimento de sistema web para gestāo de documentos fiscais e
            monitoramento de dispositivos. Utilizando Python(Flask), VueJS,
            Vuetify e PostgreSQL.
          </p>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-3">
        <span>
          <strong>09/2018 - 06/2019</strong>
        </span>
      </div>
      <div className="col-9">
        <span>
          <strong>Desenvolvedor de Software</strong>
        </span>
        <br />
        <span>
          <i> CTIS Tecnologia </i>
        </span>
        <br />
        <div className="mt-3">
          <p>
            Desenvolvimento de sistema para controle e gerenciamento de Ingresso
            de Mercadoria Nacional para a Zona Franca de Manaus. Neste projeto
            foram utilizadas as seguintes tecnologias: Angular 4, Bootstrap 3,
            C# e SQLServer.
          </p>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-3">
        <span>
          <strong>05/2017 - 09/2018</strong>
        </span>
      </div>
      <div className="col-9">
        <span>
          <strong>Desenvolvedor I</strong>
        </span>
        <br />
        <span>
          <i> Instituto de Desenvolvimento Tecnológico - INDT </i>
        </span>
        <br />
        <div className="mt-3">
          <p>
            Desenvolvimento de sistema para meios de pagamentos via terminal POS
            utilizando as seguintes tecnologias AngularJS, Node.JS, Python,
            Bootstrap.
          </p>

          <p>
            Desenvolvimento e manutenção de sistema de compra de terminais
            POS(maquininhas de cartão) utilizando PHP com o framework PrestaShop
            e Python.
          </p>

          <p>
            Desenvolvimento de sistema web para integração de produtos em
            Marketplaces, utilizando HTML, CSS, Bootstrap, Javascript, Jquery,
            PHP(Laravel), MySQL e MongoDB. SCRUM como metodologia ágil.
          </p>
        </div>
      </div>
    </div>

    <div className="row mt-3">
      <div className="col-3">
        <span>
          <strong>03/2017 - 05/2017</strong>
        </span>
      </div>
      <div className="col-9">
        <span>
          <strong>Desenvolvedor Web Pleno I</strong>
        </span>
        <br />
        <span>
          <i> Transire Eletrônicos </i>
        </span>
        <br />
        <p className="mt-3">
          Desenvolvimento de sistema para construção de websites com AngularJS e
          Node.js. Manutenção em sistema e-commerce em PHP usando o framework
          PrestaShop.
        </p>
      </div>
    </div>

    <div className="row mt-3">
      <div className="col-3">
        <span>
          <strong>12/2014 - 04/2016</strong>
        </span>
      </div>
      <div className="col-9">
        <span>
          <strong>Desenvolvedor Web</strong>
        </span>
        <br />
        <span>
          <i> Vórtice Tecnologia em projetos eletrônicos – VTINOVA </i>
        </span>
        <br />
        <p className="mt-3">
          Desenvolvimento do sistema de Gerenciamento e controle de energia
          elétrica para concessionárias de energia utilizando Python(Django),
          HTML, Bootstrap, Javascript, AngularJS. Além de SCRUM como metodologia
          ágil.
        </p>
      </div>
    </div>

    <div className="row mt-3">
      <div className="col-3">
        <span>
          <strong>10/2013 - 03/2014</strong>
        </span>
      </div>
      <div className="col-9">
        <span>
          <strong>Estagiário Desenvolvedor Web</strong>
        </span>
        <br />
        <span>
          <i>
            {" "}
            Conselho Regional de Engenharia e Agronomia do Amazonas - CREA – AM{" "}
          </i>
        </span>
        <br />
        <p className="mt-3">
          Auxílio no desenvolvimento do sistema de controle e gerenciamento de
          fiscalizações e inspetorias utilizando PHP e banco de dados MySQL.
        </p>
      </div>
    </div>
  </div>
);

export default Experience;
