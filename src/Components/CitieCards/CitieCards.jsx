import { useEffect } from "react";
import "./CitieCards.css";

function renderCities(cities) {
  console.log(cities);

  const renderCities = cities.map((citie) => (
    <li key={citie.Key} className="citie">
      <h2 className="citie-name">
        <span>{citie.EnglishName}</span>
        <sup>{citie.Country.ID}</sup>
      </h2>

      <div className="citie-temp">
        {Math.round(citie.Temperature.Metric.Value)}
        <sup>°C</sup>
      </div>
      <div className="citie-icon">{citie.WeatherText}</div>
    </li>
  ));

  return renderCities;
}

function CitieCards({ choicedCities }) {
  return (
    <div className="container">
      <ul className="cities">{renderCities(choicedCities)}</ul>
    </div>
  );
}

export default CitieCards;
