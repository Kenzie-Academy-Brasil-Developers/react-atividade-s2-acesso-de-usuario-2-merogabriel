import React from "react";
import { useParams, Link } from "react-router-dom";
import { members } from "../../components/MembersArr";

const Company = () => {
  const { id } = useParams();
  const empresa = members.find((e) => e.id === id);
  return (
    <div>
      <h1>Detalhes da Empresa</h1>

      <p>Nome da empresa: {empresa && empresa.name}</p>

      <Link to="/">Voltar</Link>
    </div>
  );
};

export default Company;
