import React from "react";
import icono from "../assets/shared/logo.svg";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <header>
      <div className="logo">
        <img src={icono} alt="" />
        <hr />
      </div>
      <ul className="navbar">
        <li>
          <Link to="/"><strong>0 0</strong>&nbsp; H O M E</Link>
        </li>
        <li>
          <Link to="/destination"><strong>0 1</strong>&nbsp; D E S T I N A T I O N</Link>
        </li>
        <li>
          <Link to="/crew"><strong>0 2</strong>&nbsp; C R E W</Link>
        </li>
        <li>
          <Link to="/technology"><strong>0 3</strong>&nbsp; T E C H N O L O G Y</Link>
        </li>
      </ul>
    </header>
  );
};

export default NavbarComponent;
