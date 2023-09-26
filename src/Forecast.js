import React, { useState, useEffect } from "react";
import axios from "axios";
import "./forecast.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastWeather, setForecastWeather] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let longitude = props.coordination.lon;
    let latitude = props.coordination.lat;
    const apiKey = "1d038ee28ef2727a9f0310860ac10ae9";
    let apiLink = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios
      .get(apiLink)
      .then((response) => {
        // Slice the forecast data to get only the next 5 days
        setForecastWeather(response.data.daily.slice(1, 7));
        setLoaded(true);
      })
      .catch((error) => {
        setError(error);
        setLoaded(true);
      });
  }, [props.coordination]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!loaded) {
    return <div>Loading...</div>;
  } else {
    console.log(forecastWeather);

    return (
      <div className="container">
        <div className="row mt-4">
          {forecastWeather.map((day, index) => (
            <div className="col-2" key={index}>
              <div>{getDayOfWeek(index)}</div>
              <div>
                <img
                  src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                  alt={day.weather[0].description}
                  className="img-icon img-fluid"
                />
              </div>
              <div>
                <strong>{Math.round(day.temp.max)}°</strong>{" "}
                {Math.round(day.temp.min)}°
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

function getDayOfWeek(index) {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const currentDate = new Date();
  const currentDayIndex = currentDate.getDay();
  const displayDayIndex = (currentDayIndex + index) % 7;
  return daysOfWeek[displayDayIndex];
}
