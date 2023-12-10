import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
// import { ThemeProvider } from "style-components";
// import {LightTheme , DarkTheme} from './theme';
// import { Container } from "react-dom";
// import { GlobalStyles } from "./GlobalStyles";


import logo from "./imagens-navbar/dizalaga logo.png";
import user from "./imagens-navbar/user.png";
import tema from "./imagens-navbar/tema.png";

function Navbar() {
  // const[theme, setTheme] = useState("light")

  // const themeToggler = () =>{
  //   theme === "light" ? setTheme('dark') : setTheme('light')
  // }

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    // <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
    //   <GlobalStyles/>
    //   <Container>
    <div className="logo-container">
      <img src={logo} alt="Logo" className="logo" />

      <nav>
        <Link to="/" className="home">
          Página Inicial
        </Link>
        <Link to="/denuncias" className="denuncias">
          Denúncias
        </Link>
        {/* <Link to="/areas-de-risco" className="areaDeRisco">
          Áreas de risco
        </Link> */}
        <Link to="/pontos-de-doacao" className="doacoes">
          Pontos de doações
        </Link>
        <Link to="/marketplace" className="marketplace">
          Marketplace
        </Link>
        <Link to="/quemsomos" className="quemSomos">
          Quem somos?
        </Link>

        <div className="Pesquisar">
          <button className="tema">
            <img src={tema} width="10px" alt="Tema" className="imagemTema" />
          </button>
        </div>

        <div className="user-dropdown">
          <img
            src={user}
            width="50px"
            alt="Usuário"
            className="user"
            onClick={toggleDropdown}
          />
          {isDropdownOpen && (
            <div className="dropdown-content">
              {/* Adicione opções de login e cadastro aqui */}
              <Link to="/login">Fazer Login</Link>
              <Link to="/cadastro">Cadastrar</Link>
            </div>
          )}
        </div>
      </nav>
    </div>
    // </Container>
    // </ThemeProvider>
  );
}

export default Navbar;
