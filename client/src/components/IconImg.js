import React from "react";

const IconImg = (props) => {
  return (
    <div className="icon-img-container">
      <img
        src={`http://openweathermap.org/img/w/${props.icon}.png`}
        alt="Icon"
        className="icon-img"
      />
    </div>
  );
};

export default IconImg;
