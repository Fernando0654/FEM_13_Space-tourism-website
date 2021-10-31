import React, { useEffect } from "react";
// GLIDE
import "@glidejs/glide/src/assets/sass/glide.core.scss";
import "@glidejs/glide/src/assets/sass/glide.theme.scss";
import Glide from "@glidejs/glide";
// IMG's
import img_0 from "../assets/destination/image-moon.png";
import img_1 from "../assets/destination/image-mars.png";
import img_2 from "../assets/destination/image-europa.png";
import img_3 from "../assets/destination/image-titan.png";

const DestinationComponent = ({ data }) => {
  const destinations = data.destinations;
  let glide;
  useEffect(() => {
    glide = new Glide(".glide", {
      perView: 1,
      type: "carousel",
    }).mount();
  }, []);
  const imgIndex = (index) => {
    switch (index) {
      case 0:
        return img_0;
      case 1:
        return img_1;
      case 2:
        return img_2;
      case 3:
        return img_3;
      default:
        return false;
    }
  };
  return (
    <div className="destination wrapper">
      <div className="glide">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {destinations.map((item, index) => (
              <li className="glide__slide" key={index}>
                <div className="destin">
                  <div className="title-img">
                    <h1>
                      <span>0 1 </span> P I C K&nbsp;&nbsp;&nbsp;Y O U
                      R&nbsp;&nbsp;&nbsp;D E S T I N A T I O N
                    </h1>
                    <img src={imgIndex(index)} alt={item.name} />
                  </div>
                  <div className="wrapper-slider">
                    <div className="header-slider">
                      <button
                        style={
                          index === 0
                            ? { borderBottom: "2px solid #fff" }
                            : { border: "2px solid transparent" }
                        }
                        onClick={() => glide.go("=0")}
                      >
                        M O O N
                      </button>
                      <button
                        style={
                          index === 1
                            ? { borderBottom: "2px solid #fff" }
                            : { border: "2px solid transparent" }
                        }
                        onClick={() => glide.go("=1")}
                      >
                        M A R S
                      </button>
                      <button
                        style={
                          index === 2
                            ? { borderBottom: "2px solid #fff" }
                            : { border: "2px solid transparent" }
                        }
                        onClick={() => glide.go("=2")}
                      >
                        E U R O P A
                      </button>
                      <button
                        style={
                          index === 3
                            ? { borderBottom: "2px solid #fff" }
                            : { border: "2px solid transparent" }
                        }
                        onClick={() => glide.go("=3")}
                      >
                        T I T A N
                      </button>
                    </div>
                    <div className="slider">
                      <div className="content-slider">
                        <h1>{item.name.toUpperCase()}</h1>
                        <p>{item.description}</p>
                        <hr />
                        <div className="info-slider">
                          <div className="info-box">
                            <h2>AVG. DISTANCE</h2>
                            <span>{item.distance.toUpperCase()}</span>
                          </div>
                          <div className="info-box">
                            <h2>EST. TRAVEL TIME</h2>
                            <span>{item.travel.toUpperCase()}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DestinationComponent;
