import { useEffect, useState } from "react";
import Search from "../search/search";

const Weather = () => {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [weatherData, setWeatherData] = useState("");

  const fetchApi = async (param) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=d81b90bf7e2e81e64fb9d0eb670f190d`
      );
      setLoading(false);
      const data = await response.json();

      if (data) {
        setLoading(false);
        setWeatherData(data);
      }
      console.log(weatherData);
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };

  const handleSummit = () => {
    fetchApi(search);
  };

  const getCurrentDate = () => {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  useEffect(() => {
    fetchApi("Dodoma");
  }, []);

  return (
    <div>
      <Search handleSummit={handleSummit} setSearch={setSearch} />
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        <div>
          <div className="city-name">
            <h2>
              {weatherData?.name},{" "}
              <span>
                {weatherData?.sys?.country === "TZ"
                  ? "Tanzania"
                  : weatherData?.sys?.country}
              </span>
            </h2>
          </div>
          <div className="date">
            <span>{getCurrentDate()}</span>
          </div>
          <div className="temp">{`${Math.floor(
            weatherData?.main?.temp - 273.15
          )}°C`}</div>
          <p className="description">
            {weatherData && weatherData.weather && weatherData.weather[0]
              ? weatherData.weather[0].description
              : ""}
          </p>
          <div className="weather-info">
            <div className="column">
              <div>
                <p className="wind">{weatherData?.wind?.speed}</p>
                <p>Wind Speed</p>
              </div>
            </div>
            <div className="column">
              <div>
                <p className="humidity">{weatherData?.main?.humidity}%</p>
                <p>Humidity</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
