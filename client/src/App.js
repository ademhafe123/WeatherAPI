import React, { useState } from "react";
import axios from "axios";

import Header from "./components/Header";
import WeatherData from "./components/WeatherData";
import IconImg from "./components/IconImg";
import BadRequest from "./components/BadRequest";
import SearchForm from "./SearchForm";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [badRequest, setBadRequest] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [weather, setWeather] = useState();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (city === "") {
      setBadRequest(true);
      setErrorMessage("Please enter a city");
    } else {
      try {
        const response = await axios.post("http://localhost:7000/weather", {
          city,
        });
        setBadRequest(false);
        setCity("");
        const weatherData = response.data;
        setWeather(weatherData);
      } catch (err) {
        setBadRequest(true);
        setCity("");
        if (err.response && err.response.status === 404) {
          setErrorMessage("City not found!");
        } else {
          setErrorMessage("Something went wrong!");
        }
      }
    }
  };
  return (
    <div className="App">
      <Header />
      <SearchForm value={city} setValue={setCity} onSubmit={onSubmitHandler} />
      <BadRequest badRequest={badRequest} errorMessage={errorMessage} />

      {weather && !badRequest && (
        <div className="weather-container">
          <WeatherData
            city={weather.city}
            description={weather.description}
            temp={weather.temp}
            wind={weather.wind}
          />
          <IconImg icon={weather.icon} />
        </div>
      )}
    </div>
  );
}

export default App;
