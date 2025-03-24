import React from "react";
import { Link } from "react-router-dom";

function Sucesso() {
  return (
    <div className="container text-center mt-5">
      <h2>Cadastro realizado com sucesso!</h2>
      <Link to="/" className="btn btn-primary mt-3">
        Voltar para o Início
      </Link>
    </div>
  );
}

export default Sucesso;
