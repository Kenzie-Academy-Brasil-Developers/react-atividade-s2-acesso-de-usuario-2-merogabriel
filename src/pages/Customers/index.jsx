import React from "react";
import { members } from "../../components/MembersArr";

const Customers = () => {
  const pessoas = members.filter((e) => e.type === "pf");
  return (
    <ul>
      {pessoas.map((member) => (
        <li key={member.id}>{member.name}</li>
      ))}
    </ul>
  );
};

export default Customers;
