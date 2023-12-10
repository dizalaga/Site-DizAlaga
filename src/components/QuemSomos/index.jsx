import React from "react";
import "./index.css";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/index";
import fotogrupo from "../QuemSomos/imagens-quemsomos/foto grupo.jpg";
import ester from "../QuemSomos/imagens-quemsomos/ESTER.jpg";
import arthur from "../QuemSomos/imagens-quemsomos/ARTHUR.jpg";
import thais from "../QuemSomos/imagens-quemsomos/THAIS.jpg";
import gabriel from "../QuemSomos/imagens-quemsomos/GABRIEL.jpg";
import kusuki from "../QuemSomos/imagens-quemsomos/KUSUKI.jpg";
import luiz from "../QuemSomos/imagens-quemsomos/LUIZ.jpg";
import laura from "../QuemSomos/imagens-quemsomos/LAURA.jpg";
import defesaCivil from "../QuemSomos/imagens-quemsomos/logo defesa civil.jpeg";
import proa from "../QuemSomos/imagens-quemsomos/logo proa.jpeg";
import senac from "../QuemSomos/imagens-quemsomos/logo senac.jpeg";


const QuemSomos = () => {
  return (
    <div>
      <span className="navvv">
        <Navbar></Navbar>
      </span>

      <div className="quem">
        <h2>Quem somos?</h2>
        <div className="quemSomos">
          <div className="texto">
            <p>
              DizAlaga é uma startup criada por 7 jovens entusiastas da
              tecnologia que estudam programação no Projeto PROPROFISSÃO do
              Instituto PROA.
            </p>
            A DizAlaga visa alertar a população sobre as zonas de perigo, seja
            alagamento e/ou deslizamentos em dias chuvosos.
            <p>
              Além disso, instruir o que fazer em situações de risco eminente,
              indicando rotas seguras e abrigos mais próximos.
            </p>
            <p>
              A plataforma serve também como link de denúncia para que os
              usuários entrem em contato com os órgãos responsáveis, fazendo com
              que eles tenham acesso mais rápido aos pontos que precisam de
              atenção.
            </p>
          </div>
          <div className="fotoGrupo">
            <img src={fotogrupo} alt="Foto do Grupo" />
          </div>
        </div>
      </div>
      <div className="timejunto">
        <h1>Equipe</h1>
        <div className="time">
          <div className="fotoTime">
            <img src={ester} />
            <p>Ester Reis</p>
            <p>Lider do projeto</p>
          </div>
          <div className="fotoTime">
            <img src={gabriel} />
            <p>Gabriel Aguiar</p>
            <p>Fullstack</p>
          </div>
          <div className="fotoTime">
            <img src={arthur} />
            <p>Arthur Vinicius</p>
            <p>Back-end</p>
          </div>
          <div className="fotoTime">
            <img src={luiz} />
            <p>Luiz Neto</p>
            <p>Banco de dados</p>
          </div>
        </div>

        <div className="time">
          <div className="fotoTime">
            <img src={laura} />
            <p>Laura Leite</p>
            <p>Front-end</p>
          </div>
          <div className="fotoTime">
            <img src={thais} />
            <p>
              Thais Victoria
              <p>Front-end</p>
            </p>
          </div>
          <div className="fotoTime">
            <img src={kusuki} />
            <p>Victoria Kusuki</p>
            <p>Front-end</p>
          </div>
        </div>
      </div>
      <div className="colorParceiros">
        <h3 className="tituloParceiros">Parceiros</h3>
        <div className="parceiros">
          <div className="fotoParceiros">
            <img src={proa} width="100px" height="120px" />
          </div>
          <div className="fotoParceiros">
            <img src={defesaCivil} width="100px" height="120px" />
          </div>
          <div className="fotoParceiros">
            <img src={senac} width="100px" height="120px" />
          </div>
        </div>
      </div>
      <span classeName="footer">
        <Footer></Footer>
      </span>
    </div>
  );
};

export default QuemSomos;
