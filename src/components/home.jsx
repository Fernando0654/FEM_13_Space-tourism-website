import React from "react";
import { Link } from "react-router-dom";

const HomeComponent = () => {
  return (
    <div className="home wrapper">
      <div className="title-home">
        <h1>
          <span className="title">
            S O, Y O U&nbsp;&nbsp;W A N T&nbsp;&nbsp;T O&nbsp;&nbsp;T R A V E
            L&nbsp;&nbsp;T O
          </span>
          <span className="subtitle">SPACE</span>
        </h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="button-explore">
        <Link to="/destination">
          <div className="btn">
            <span>E X P L O R E</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomeComponent;
