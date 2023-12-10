import React, { useState, useRef } from "react";
import Navbar from "../navbar/index";
import "./FormPost.css";
import galerryIcon from "./imagens-formpost/icons8-fotografia-48.png";
import Footer from "../Footer/Footer";
import user from "../FormPost/imagens-formpost/user.png";

const FormPost = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const hiddenFileInput = useRef(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleFileChange = (event) => {
    const fileUploaded = event.target.files[0];
    setImage(fileUploaded);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // try {
    //   // Simulação do envio do post para um servidor
    //   const formData = new FormData();
    //   formData.append("text", text);
    //   formData.append("image", image);

      // const response = await fetch("URL_DO_SEU_SERVIDOR", {
      //   method: "POST",
      //   body: formData,
      // });

  //     if (response.ok) {
  //       console.log("Post enviado com sucesso!");
  //       // Limpar o formulário após o envio (se desejado)
  //       setText("");
  //       setImage(null);
  //     } else {
  //       console.error("Erro ao enviar o post.");
  //     }
  //   } catch (error) {
  //     console.error("Erro ao enviar o post:", error);
  //   }
   };

  return (
    <div>
      <span className="navvv">
        <Navbar></Navbar>
      </span>

      <form className="post-form" onSubmit={handleSubmit}>
        <div className="user-info">
          <img src={user} alt="user" className="user" />
          <p>User</p>
        </div>
        <textarea
          placeholder="Escreva o que está pensando..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="fileUpload">
          <input
            type="file"
            ref={hiddenFileInput}
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
          <button type="button" onClick={handleClick}>
            <img src={galerryIcon} alt="galeria" className="galeria" />
          </button>
        </div>
        <button type="submit">Postar</button>
      </form>
      <span className="footer">
        <Footer></Footer>
      </span>
    </div>
  );
};

export default FormPost;
