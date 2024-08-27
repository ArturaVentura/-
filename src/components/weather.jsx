import React from "react";
import "../App.css";

const Weather = ({ city, country, temp, sunrise, sunset, error }) => (
  <div className="infoWeath">
    {city ? (
      <div>
        <p>Местоположение: {city}, {country}</p>
        <p>Температура: {temp}°C</p>
        <p>Восход солнца: {sunrise}</p>
        <p>Заход солнца: {sunset}</p>
      </div>
    ) : (
      error && <p className="error">{error}</p>
    )}
  </div>
);

export default Weather;
