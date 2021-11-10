import React from "react";
import { useParams, Link } from "react-router-dom";
import { members } from "../../components/MembersArr";

const Customer = () => {
  const { id } = useParams();
  const cliente = members.find((e) => e.id === id);

  return (
    <div>
      <h1>Detalhes do cliente</h1>

      <p>Nome: {cliente && cliente.name}</p>

      <Link to="/">Voltar</Link>
    </div>
  );
};

export default Customer;
