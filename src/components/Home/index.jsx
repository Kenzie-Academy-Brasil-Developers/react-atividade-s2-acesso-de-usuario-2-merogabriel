import React from "react";
import { Link } from "react-router-dom";

const Home = ({ members }) => {
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
