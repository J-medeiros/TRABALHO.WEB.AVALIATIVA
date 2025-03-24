import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import Sucesso from "./pages/Sucesso.jsx";
import Usuarios from "./pages/Usuarios.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/sucesso" element={<Sucesso />} />
        <Route path="/usuarios" element={<Usuarios />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
