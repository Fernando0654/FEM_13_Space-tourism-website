import React, { useEffect, useState } from "react";
// COMPONENT
import SliderComponent from "./technology.slider";
// ICON
import loadingIcon from "../assets/shared/loading.png";

const TechComponent = ({ data }) => {
  const [technology, setTechnology] = useState(null);
  const [currentItem, setcurrentItem] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const setItem = (i) => {
    const current = technology.filter((item, index) => index === i);
    setcurrentItem(current);
    setCurrentIndex(i);
  };
  useEffect(() => {
    setData();
  }, []);
  const setData = async () =>
    data.then((res) => {
      const current = res.technology.filter((item, index) => index === 0);
      setcurrentItem(current);
      setTechnology(res.technology);
    });
  return (
    <>
      {currentItem ? (
        <SliderComponent
          current={currentItem}
          index={currentIndex}
          setItem={setItem}
        />
      ) : (
        <span className="loading"><img src={loadingIcon} alt="" /></span>
      )}
    </>
  );
};

export default TechComponent;
