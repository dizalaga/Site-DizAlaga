import React from "react";
import "./usuario.css";
import fotoUser from "./imagens-usuario/imagemTemporaria.png";

function Usuario() {
  const infoAtualizadas = () => {
    alert("Informações atualizadas");
  };

  return (
    <div className="usuario">
      <a href="/">
      <button className="botaoVoltar">{"<"}</button>
</a>
      <div className="container">
        <div className="profile-left">
          <img src={fotoUser} alt="Profile Picture" className="imagemUser" />
          <button className="botaoTrocarFoto">Trocar foto</button>
          <button className="botaoApagarFoto">Apagar foto</button>
          <div className="caixa-mensagem">
            A foto deve possuir um tamanho máximo de 5MB
          </div>
          <p style={{ color: "white" }}>Data de cadastro: 11/12/2023</p>
        </div>
        <div className="profile-right">
          <h2 className="tituloEditarPerfil">Editar perfil</h2>
          <form>
            <div className="input-group">
              <div className="input-group-item">
                <label style={{ color: "white" }} className="nomeInput">
                  Usuário:{" "}
                </label>
                <input type="text" />
              </div>
              <div className="input-group-item">
                <label style={{ color: "white" }}>Confirmar senha: </label>
                <input type="password" />
              </div>
            </div>
            <div className="input-group">
              <div className="input-group-item">
                <label style={{ color: "white" }}>E-Mail: </label>
                <input type="email" />
              </div>
              <div className="input-group-item">
                <label style={{ color: "white" }}>Senha: </label>
                <input type="password" />
              </div>
            </div>
            <div className="input-group">
              <div className="input-group-item">
                <label style={{ color: "white" }}>Telefone: </label>
                <input type="tel" />
              </div>
            </div>
            <div className="botaosConfirmarApagar">
              <button
                type="submit"
                onClick={infoAtualizadas}
                className="confirmarInfo"
              >
                Confirmar alterações
              </button>
              <button type="button" className="botaoApagarConta">
                Apagar conta
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Usuario;
