import React from "react";
import "./index.css";

import alaguinho from "./imagens-login/alaguinho.png";
import logoDizAlaga from "./imagens-login/logoDizAlaga.png";
import googleIcon from "./imagens-login/google-icon.png";
import facebookIcon from "./imagens-login/facebook-icon.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container">
      <div className="left-section">
        <img src={alaguinho} alt="alaguinho"></img>
        <p className="top-phrase">A chuva não avisa quando vai cair,</p>
        <p className="bottom-text">mas nós ajudamos como se prevenir.</p>
      </div>

      <div className="right-section">
        <div className="LoginForm">
          <img src={logoDizAlaga} alt="logo"></img>
          <h2>Login</h2>
          <form>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Nome de usuário ou email"
              required
            ></input>

            <input
              type="password"
              id="password"
              name="password"
              placeholder="Senha"
              required
            ></input>

            <div className="already-have-account">
              <p>
                Não tem conta? <a href="/cadastro">Cadastrar</a>
              </p>
            </div>

            <Link to="/">
              <button typeof="submit" className="login">
                Entrar
              </button>
            </Link>
            {/* <div className="social-buttons">
              <button type="submit">
                <Link to="">
                  <img src={googleIcon} alt="Google"></img>
                  Entrar com Google
                </Link>
              </button>
              <button type="button">
                <img src={facebookIcon} alt="Facebook"></img>
                Entrar com Facebook
              </button>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
