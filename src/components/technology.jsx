import React, { useEffect, useState } from "react";
// IMG'S
import img_0 from "../assets/technology/image-launch-vehicle-portrait.jpg";
import img_1 from "../assets/technology/image-space-capsule-portrait.jpg";
import img_2 from "../assets/technology/image-spaceport-portrait.jpg";

const TechComponent = ({ data }) => {
  const [technology, setTechnology] = useState(null);
  const [currentItem, setcurrentItem] = useState(null);
  const setItem = (i) => {
    const current = technology.filter((item, index) => index === i);
    setcurrentItem(current);
  };
  const setData = async () =>
    data.then(
      (res) => setTechnology(res.technology),
      console.log(res.technology)
    );
  useEffect(() => {
    setData();
  }, []);
  const imgIndex = (index) => {
    switch (index) {
      case 0:
        return img_0;
      case 1:
        return img_1;
      case 2:
        return img_2;
      default:
        return false;
    }
  };
  return (
    <>
      {currentItem ? (
        <div className="technology-wrapper">
          <div className="technology-header">
            <h1>
              <span>0 3 </span> S P A C E &nbsp;&nbsp;&nbsp;L A U N C H
              &nbsp;&nbsp;&nbsp;1 0 1
            </h1>
          </div>
          <div className="technology-body">
            <div className="control-slider">
              <button onClick={() => setItem(0)}>1</button>
              <button onClick={() => setItem(1)}>2</button>
              <button onClick={() => setItem(2)}>3</button>
            </div>
            <div className="technology-slider">
              {currentItem.map((item, index) => (
                <div className="technology-slider_body" key={index}>
                  <div className="tech-info">
                    <span>
                      T H E&nbsp;&nbsp;&nbsp;T E R M I N O L O G Y . . .
                    </span>
                    <h1>{item.name.toUpperCase()}</h1>
                    <p>{item.description}</p>
                  </div>
                  <div className="tech-img">
                    <img src={imgIndex(index)} alt={item.name} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default TechComponent;
