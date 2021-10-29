import React from "react";
import { Route, useLocation } from "react-router-dom";
// Components
import NavbarComponent from "./navbar";
import HomeComponent from "./home";
import DestinationComponent from "./destination";
import CrewComponent from "./crew";
import TechComponent from "./technology";
// Styles
import "../scss/index.scss";

const AppComponent = () => {
  const location = useLocation().pathname;
  const newClass = location.split("/")[1];
  return (
    <div className={"main " + newClass}>
      <NavbarComponent />
      <Route exact path="/" component={HomeComponent} />
      <Route path="/destination" component={DestinationComponent} />
      <Route path="/crew" component={CrewComponent} />
      <Route path="/technology" component={TechComponent} />
    </div>
  );
};

export default AppComponent;
