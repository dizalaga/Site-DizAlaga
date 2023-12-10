import React from "react";
import "./index.css";
import alaguinho from "./imagem-cadastro/alaguinho.png";
import logoDizAlaga from "./imagem-cadastro/logoDizAlaga.png";
import googleIcon from "./imagem-cadastro/google-icon.png";
import facebookIcon from "./imagem-cadastro/facebook-icon.png";
import { Link } from "react-router-dom";

function CadastroForm() {
  return (
    <div className="container">
      <div className="left-section">
        <img src={alaguinho} alt="alaguinho" />
        <p className="top-phrase">Junta-se a nós para um impacto </p>
        <p className="bottom-text">positivo em tempos difíceis!</p>
      </div>

      <div className="right-section">
        <div className="CadastroForm">
          <img src={logoDizAlaga} alt="logo" />
          <h2>Cadastro</h2>
          <form>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Nome de usuário"
            />

            <input type="email" id="email" name="email" placeholder="E-mail" />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Senha"
            />

            <input
              type="text"
              id="cpfCnpj"
              name="cpfCnpj"
              placeholder="CPF ou CNPJ"
            />

            <div className="already-have-account">
              <p>
                Já tem conta? <a href="/login">Faça login aqui</a>
              </p>
            </div>

            

           
          </form>
          <Link to="/usuario" >
              <button typeof="submit" className="cadastro">Cadastrar</button>
            </Link> 
            
            {/* <div className="social-buttons">
              <Link to="" className="cadastroGoogle">
                <img src={googleIcon} alt="Google" />
                Cadastrar com Google
              </Link>
              <Link to="" className="cadastroFacebook">
                <img src={facebookIcon} alt="Facebook" />
                Cadastrar com Facebook
              </Link>
            </div> */}
        </div>
      </div>
    </div>
  );
}

export default CadastroForm;
