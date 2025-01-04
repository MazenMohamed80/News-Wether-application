import { ThemeContext } from "../../context/ThemeContext";
import { fetchWeather } from "../../util/fetchFunctions";
import { useContext, useEffect, useRef, useState } from "react";
function CardWeather() {
  const { theme } = useContext(ThemeContext);
  const inputVal = useRef();
  const [weather, toggleWeather] = useState(null);
  useEffect(() => {
    fetchWeather(toggleWeather, "London");
  }, []);
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{ height: "90vh" }}
    >
      <div
        className={
          theme == "dark"
            ? `card text-center bg-${theme} text-light border-0 rounded`
            : `card text-center bg-${theme} text-dark border-0 rounded`
        }
      >
        <div className="card-header">
          <div className="d-flex flex-column justify-content-around align-items-center">
            <div className="card-title">
              {weather
                ? `Temperature of the region: ${weather.temperature}`
                : "0"}
            </div>
            <div className="card-title">
              {weather
                ? `Name of the region: ${weather.country}`
                : "Unknown Country"}
            </div>
            <div className="card-title">
              {weather
                ? `Humidity Ratio for the region: ${weather.humidity}`
                : "Unknown value"}
            </div>
            <div className="card-title">
              {weather
                ? `Wind Speed of the region: ${weather.windSpeed}`
                : "Unknown value"}
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="city" className="form-label">
              Enter the city you need to know its temperature:
            </label>
            <input
              type="text"
              className="form-control"
              name="city"
              id="city"
              aria-describedby="region"
              placeholder="City"
              ref={inputVal}
            />
            <small id="region" className={theme == 'dark'? "form-text text-light" : "form-text text-dark"}>
              Put the city name
            </small>
          </div>

          <button
            className="btn btn-success"
            onClick={() => {
              fetchWeather(toggleWeather, inputVal.current.value);
            }}
          >
            {weather
              ? "Get the city Temperature"
              : "Resubmit the name of the city"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardWeather;
