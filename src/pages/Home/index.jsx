import React from "react";
import { Link } from "react-router-dom";
import { members } from "../../components/MembersArr";

const Home = () => {
  return (
    <div className="home">
      {members.map((member) => (
        <Link
          to={
            member.type === "pj"
              ? `/company/${member.id}`
              : `/customer/${member.id}`
          }
        >
          {member.name}
        </Link>
      ))}
    </div>
  );
};

export default Home;
