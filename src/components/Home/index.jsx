import React from "react";
import { Link } from "react-router-dom";
import { members } from "../MembersArr";

const Home = () => {
  return (
    <div>
      {members.map((member) => (
        <Link
          to={
            member.type === "pj"
              ? `/company/${member.id}`
              : `/customer/${member.id}`
          }
        ></Link>
      ))}
    </div>
  );
};

export default Home;
