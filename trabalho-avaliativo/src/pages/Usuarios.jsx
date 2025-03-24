import React from "react";

const usuariosMock = [
  { id: 1, nome: "João Silva", email: "joao@email.com" },
  { id: 2, nome: "Maria Oliveira", email: "maria@email.com" }
];

function Usuarios() {
  return (
    <div className="container mt-5">
      <h2>Lista de Usuários</h2>
      <ul className="list-group">
        {usuariosMock.map((user) => (
          <li key={user.id} className="list-group-item">{user.nome} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default Usuarios;