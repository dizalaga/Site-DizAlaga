import "./components/navbar/style.css";
import "./components/Login/index.css";
// import "./components/Home/index.css";
import "./components/Cadastro/index.css";
import "./components/PontosDoacao/index.css";
import "./components/QuemSomos/index.css";
import "./components/FormPost/FormPost.css";
import "./components/FormPost/PostList.css";
import "./components/Footer/Footer.css";
import "./components/Usuario/usuario.css";
import "./components/AreaRiscos/areaRiscos.css"

import Navbar from "./components/navbar/index";
// import Home from "./components/Home/index";
import Login from "./components/Login/index";
import CadastroForm from "./components/Cadastro/index";
import PontosDoacao from "./components/PontosDoacao/index";
import QuemSomos from "./components/QuemSomos/index";
import FormPost from "./components/FormPost/FormPost";
import PostList from "./components/FormPost/PostList";
import Footer from "./components/Footer/Footer";
import AreaRiscos from "./components/AreaRiscos/areaRiscos";
import Usuario from "./components/Usuario/usuario";
import Marketplace from "./components/Marketplace/marketplace";
import MapaSVG from "./components/Mapa/MapaSvg";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AreaRiscos />} />
        <Route path="/denuncias" element={<FormPost username="User" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/postlist" element={<PostList />} />
        <Route path="/cadastro" element={<CadastroForm />} />
        {/* <Route path="/areas-de-risco" element={<AreaRiscos />} /> */}
        <Route path="/pontos-de-doacao" element={<PontosDoacao />} />
        <Route path="/quemsomos" element={<QuemSomos />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/marketplace" element={<Marketplace/>}/>
        <Route path="/mapa" element={<MapaSVG/>}/>
      </Routes>
    </Router>
  );
}

export default App;
