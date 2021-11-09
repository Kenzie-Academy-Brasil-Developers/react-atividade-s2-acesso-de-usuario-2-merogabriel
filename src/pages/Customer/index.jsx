import React from "react";
import { useParams, Link } from "react-router-dom";
import { members } from "../../components/MembersArr";

const Customer = () => {
  const params = useParams();
  const member = members.find((e) => e.id === params);
  return (
    <div>
      <h1>Detalhes do cliente</h1>

      <p>Nome: {member && member.name}</p>

      <Link to="/">Voltar</Link>
    </div>
  );
};

export default Customer;
