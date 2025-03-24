import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cadastro() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmacaoSenha: "",
  });
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nome || !form.email || !form.senha || !form.confirmacaoSenha) {
      setErro("Todos os campos são obrigatórios.");
      return;
    }
    if (form.senha !== form.confirmacaoSenha) {
      setErro("As senhas não coincidem.");
      return;
    }
    navigate("/sucesso");
  };

  return (
    <div className="container mt-5">
      <h2>Cadastro de Usuário</h2>
      {erro && <p className="text-danger">{erro}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          className="form-control mb-2"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          className="form-control mb-2"
          onChange={handleChange}
        />
        <input
          type="password"
          name="senha"
          placeholder="Senha"
          className="form-control mb-2"
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirmacaoSenha"
          placeholder="Confirme a senha"
          className="form-control mb-2"
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-success">
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default Cadastro;
