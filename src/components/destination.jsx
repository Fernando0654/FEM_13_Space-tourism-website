import React from "react";

const DestinationComponent = ({ data }) => {
  const destinations = data.destinations;
  return (
    <div className="destination wrapper">
      <div className="title-img">
        <h1>01 Pick Your Destination</h1>
      </div>
      <div className="wrapper-slider">
        <div className="header-slider">
          {destinations.map((item) => (
            <button>{item.name}</button>
          ))}
        </div>
        {destinations.map((item) => (
          <div className="slider" key={item.name}>
            <div className="content-slider">
              <h1>{item.name}</h1>
              <p>{item.description}</p>
              <hr />
              <div className="info-slider">
                <div className="info-box">
                  <h2>distance</h2>
                  <span>{item.distance}</span>
                </div>
                <div className="info-box">
                  <h2>travel time</h2>
                  <span>{item.travel}</span>
                </div>
                <img src={item.images.png} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationComponent;
