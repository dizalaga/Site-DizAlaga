import React from "react";
import Navbar from "../navbar/index";
import "./index.css";
import Footer from "../Footer/Footer";
import imagemazul from "./imagens-pontodoacao/imagem-azul.jpg";
import "./index.css";

import imagemDonaLindu from "./imagens-pontodoacao/donalindu.jpg";
import imagemGris from "./imagens-pontodoacao/gris.png";
import imagemUfpe from "./imagens-pontodoacao/ufpe.jpg";
import imagemCufa from "./imagens-pontodoacao/0zl9HjNV_400x400.jpg";
import imagemPrefeitura from "./imagens-pontodoacao/prefeitura.jpg";
import imagemOab from "./imagens-pontodoacao/oab.jpg";

function PontosDoacao() {
  const donaLindu = () => {
    // URL da página
    const urlDonaLindu =
      "https://www.google.com/maps/place/Dona+Lindu/@-8.1412917,-34.9041136,15z/data=!4m15!1m8!3m7!1s0x7ab1fbb126b6c8f:0x9428b8c3b9bb5afb!2sDona+Lindu!8m2!3d-8.1412917!4d-34.9041136!10e1!16s%2Fg%2F121wccjd!3m5!1s0x7ab1fbb126b6c8f:0x9428b8c3b9bb5afb!8m2!3d-8.1412917!4d-34.9041136!16s%2Fg%2F121wccjd?entry=ttu";

    // Abre uma nova guia com a URL especificada
    window.open(urlDonaLindu, "_blank");
  };

  const gris = () => {
    const urlGris =
      "https://www.google.com/maps/place/GRIS+-+Espa%C3%A7o+Solid%C3%A1rio/@-8.0427785,-34.9601084,15z/data=!4m6!3m5!1s0x7ab1bb161ce54f5:0xe12a80b29d39c642!8m2!3d-8.0427785!4d-34.9601084!16s%2Fg%2F11grv52jbc?entry=ttu";

    window.open(urlGris, "_blank");
  };

  const ufpe = () => {
    const urlUfpe =
      "https://www.google.com/maps/place/Universidade+Federal+de+Pernambuco/@-8.0507192,-34.9534561,17z/data=!3m1!4b1!4m6!3m5!1s0x7ab1966d409d415:0x497df2e2ee00ea52!8m2!3d-8.0507245!4d-34.9508812!16zL20vMGM0c2R3?entry=ttu";

    window.open(urlUfpe, "_blank");
  };

  const cufa = () => {
    const urlCufa = "https://www.google.com/maps/place/Av.+Norte+Miguel+Arraes+de+Alencar,+5300+-+Morro+da+Concei%C3%A7%C3%A3o,+Recife+-+PE,+52280-090/@-8.0232552,-34.9157474,17z/data=!3m1!4b1!4m6!3m5!1s0x7ab19b1740f98c7:0x2b1e129b575affcb!8m2!3d-8.0232605!4d-34.9131725!16s%2Fg%2F11nnldt4pb?entry=ttu";

    window.open(urlCufa, "_blank");
  }

  const prefeitura = () => {
    const urlPrefeitura = "https://www.google.com/maps/place/Prefeitura+do+Recife/@-8.0542862,-34.872215,15z/data=!4m6!3m5!1s0x7ab1899c7565f81:0x358ca8cf5323840c!8m2!3d-8.0542862!4d-34.872215!16s%2Fg%2F11c6rh1jvm?entry=ttu";

    window.open(urlPrefeitura, "_blank");
  }

  const oab = () => {
    const urlOab =
      "https://www.google.com/maps/place/R.+do+Imperador+Pedro+II,+346+-+Santo+Ant%C3%B4nio,+Recife+-+PE,+50010-240/data=!4m2!3m1!1s0x7ab18bbb6583e57:0xf3c04eb5c8f3aefa?sa=X&ved=2ahUKEwiyk-aQyOyCAxXorZUCHWAWBSwQ8gF6BAgPEAA";

      window.open(urlOab, "_blank")
  }
  return (
    <div className="pontosDoacao">
      <span className="navvv">
        <Navbar></Navbar>
      </span>

      <p className="title">Pontos de doação</p>

      <div className="cards">
        <div className="card">
          <img src={imagemDonaLindu} alt="Dona Lindu" />

          <div className="card-content">
            <p className="title-card">Dona Lindu</p>
            <br></br>
            <p className="lugarDonaLindu">Recife-PE</p>
            <button onClick={donaLindu} class="button">
              ver no mapa
            </button>
          </div>
        </div>

        <div className="card">
          <img src={imagemGris} alt="Gris Espaço Solidário" />

          <div className="card-content">
            <p className="title-card">Gris Espaço Solidário</p>
            <p className="lugarGris">Recife-PE</p>
            <button onClick={gris} class="button">
              ver no mapa
            </button>
          </div>
        </div>

        <div className="card">
          <img src={imagemUfpe} alt="UFPE" />

          <div className="card-content">
            <p className="title-card">Universidade Federal de Pernambuco</p>
            <p className="lugarUfpe">Recife-PE</p>
            <button onClick={ufpe} class="button">
              ver no mapa
            </button>
          </div>
        </div>

        <div className="card">
          <img src={imagemCufa} alt="CUFA" />

          <div className="card-content">
            <p className="title-card">Central Única das Favellas PE</p>
            <p className="lugarCufa">Recife-PE</p>
            <button onClick={cufa} class="button">
              ver no mapa
            </button>
          </div>
        </div>

        <div className="card">
          <img src={imagemPrefeitura} alt="Prefeitura do Recife" />

          <div className="card-content">
            <p className="title-card">Prefeitura do Recife</p>
            <br></br>
            <p className="lugarPrefeitura">Recife-PE</p>
            <button onClick={prefeitura} class="button">
              ver no mapa
            </button>
          </div>
        </div>

        <div className="card">
          <img src={imagemOab} alt="OAB" />

          <div className="card-content">
            <p className="title-card">OAB de Pernambuco</p>
            <br></br>
            <p className="lugarOab">Recife-PE</p>
            <button onClick={oab} class="button">
              ver no mapa
            </button>
          </div>
        </div>
      </div>
      <span className="footer">
        <Footer></Footer>
      </span>
    </div>
  );
}

export default PontosDoacao;
