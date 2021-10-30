import React, { useEffect, useState } from "react";
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
  const [destination, setDestination] = useState(null);
  const [crew, setCrew] = useState(null);
  const [technology, setTechnology] = useState(null);
  const URL =
    "https://raw.githubusercontent.com/Fernando0654/FEM_1_Tip_Calculator/main/data_fem_13.json";
  useEffect(async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setDestination(data.destinations);
    setCrew(data.crew);
    setTechnology(data.technology);
  }, []);
  const location = useLocation().pathname;
  const newClass = location.split("/")[1];
  return (
    <div className={"main " + newClass}>
      <NavbarComponent currentRoute={newClass} />
      <Route exact path="/">
        <HomeComponent />
      </Route>
      <Route path="/destination">
        <DestinationComponent data={destination} />
      </Route>
      <Route path="/crew">
        <CrewComponent data={crew} />
      </Route>
      <Route path="/technology">
        <TechComponent data={technology} />
      </Route>
    </div>
  );
};

export default AppComponent;
