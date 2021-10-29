import React from "react";
import { Link, useLocation } from "react-router-dom";

const HomeComponent = () => {
  return (
    <div className="home">
      <div className="title-home">
        <h1>
          <span>So you want to travel to</span>
          Space
        </h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="button-explore">
        <Link to="/explore">Explore</Link>
      </div>
    </div>
  );
};

export default HomeComponent;
