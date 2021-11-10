import React from "react";
import { members } from "../../components/MembersArr";

const Companies = () => {
  const empresas = members.filter((e) => e.type === "pj");
  return (
    <ul>
      {empresas.map((member) => (
        <li key={member.id}>{member.name}</li>
      ))}
    </ul>
  );
};

export default Companies;
