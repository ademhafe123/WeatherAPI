const express = require("express");
const axios = require("axios");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

const API_KEY = process.env.API_KEY;

app.post("/weather", async (req, res) => {
  const cityName = req.body.city;
  const Url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
  try {
    const response = await axios.get(Url);
    const weatherData = response.data;
    const weather = {
      city: weatherData.name,
      description: weatherData.weather[0].description,
      icon: weatherData.weather[0].icon,
      temp: weatherData.main.temp,
      wind: weatherData.wind.speed,
    };
    res.send(weather);
  } catch (err) {
    if (err.response && err.response.status === 404) {
      res.status(404).send("City not found!");
    } else {
      res.send("Something went wrong! Try again.");
    }
  }
});

app.listen("7000", () => {
  console.log(`Server is up and running on port 7000`);
});
