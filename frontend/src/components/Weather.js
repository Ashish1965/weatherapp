import React, { useState } from "react";
import { getWeather } from "../services/api";

const formatDate = (dateString) => {
  const date = new Date(dateString); // Parse the input date string
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("en-GB", options); // Format the date
};

const Weather = () => {
  const [city, setCity] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [weather, setWeather] = useState(null);

  const handleSearch = async () => {
    try {
      const { data } = await getWeather(city);
      setWeather(data);
      setInputDate(data.location.localtime);
      // console.log(weather);
    } catch (err) {
      console.error(err);
    }
  };
  const formattedDate = formatDate(inputDate);

  return (
    <div className="app flex flex-col items-center h-screen bg-gray-800">
      <h1 className="py-4 text-5xl text-gray-400 font-serif">Search Weather</h1>
      <div>
        
        <div class="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
          <div class="relative sm:w-64 w-40 sm:mr-4 mr-2">
            <label
              htmlFor="footer-field"
              className="leading-7 text-sm text-gray-600"
            >
              City Name
            </label>
            <input
              type="text"
              id="footer-field"
              name="footer-field"
              placeholder="Enter City Name"
              className="w-full bg-gray-700 bg-opacity-50 rounded border border-gray-600 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <button
            className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      
      {weather && (
        <div className="h-screen flex items-center justify-center">
          <div className="flex flex-col bg-gray-800 rounded p-4 w-full max-w-xs">
            <div className="font-bold text-xl text-gray-700">{weather.location.name}</div>
            <div className="text-sm text-gray-500">{formattedDate}</div>
            <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
              <img
                className="rounded-full w-full h-full"
                src={weather.current.weather_icons}
                alt=""
              />
            </div>
            <div className="flex flex-row items-center justify-center mt-6">
              <div className="font-medium text-6xl text-gray-700">
                {weather.current.temperature}°C
              </div>
              <div className="flex flex-col items-center ml-6 text-gray-600">
                <div>{weather.current.weather_descriptions[0]}</div>
              </div>
            </div>
            <div className="flex flex-row justify-between mt-6">
              <div className="flex flex-col items-center">
                <div className="font-medium text-sm text-gray-700">wind</div>
                <div className="text-sm text-gray-500">
                  {weather.current.wind_speed}k/h
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="font-medium text-sm text-gray-700">Humidity</div>
                <div className="text-sm text-gray-500">
                  {weather.current.humidity}%
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="font-medium text-sm text-gray-700">Visibility</div>
                <div className="text-sm text-gray-500">
                  {weather.current.visibility}km
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
