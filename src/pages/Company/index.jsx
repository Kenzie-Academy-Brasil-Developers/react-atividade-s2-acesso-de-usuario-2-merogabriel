import React from "react";
import { useParams, Link } from "react-router-dom";
import { members } from "../../components/MembersArr";

const Company = () => {
  const params = useParams();
  const member = members.find((e) => e.id === params);
  return (
    <div>
      <h1>Detalhes da Empresa</h1>

      <p>Nome da empresa: {member && member.name}</p>

      <Link to="/">Voltar</Link>
    </div>
  );
};

export default Company;
