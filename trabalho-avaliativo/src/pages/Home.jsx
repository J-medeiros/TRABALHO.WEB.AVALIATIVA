import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container text-center mt-5">
      <h1>Bem-vindo ao Sistema</h1>
      <Link to="/cadastro" className="btn btn-primary m-2">
        Cadastro
      </Link>
      <Link to="/usuarios" className="btn btn-secondary m-2">
        Lista de Usuários
      </Link>
    </div>
  );
}
export default Home;
