import React from "react";

const WeatherData = (props) => {
  return (
    <div className="weather-data">
      <h2 className="weather-item">{props.city}</h2>
      <h3 className="weather-item">
        Description: <span>{props.description}</span>
      </h3>
      <h3 className="weather-item">
        <i className="fa-solid fa-temperature-half weather-icon"></i>
        <span>{props.temp} °C</span>
      </h3>
      <h3 className="weather-item">
        <i className="fa-solid fa-wind weather-icon"></i>
        <span>{props.wind} km/h</span>
      </h3>
    </div>
  );
};

export default WeatherData;
