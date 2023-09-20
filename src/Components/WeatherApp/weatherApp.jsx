import React, { useState } from 'react';
import './weatherapp.css';
import search_icon from '../Assets/search.png';
import clear_icon from '../Assets/clear.png';
import Cloud_icon from '../Assets/cloud.png';
import drizzle_icon from '../Assets/drizzle.png';
import rain_icon from '../Assets/rain.png';
import snow_icon from '../Assets/snow.png';
import wind_icon from '../Assets/wind.png';
import humidity_icon from '../Assets/humidity.png';

export const WeatherApp = () => {
  let api_key = "e474d44f4ecdb39274a72eabce5ecbeb";
  const [wicon, setWicon] = useState(null); // Initialize with null

  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    let response = await fetch(url);
    let data = await response.json();

    // Update weather icon based on data
    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setWicon(clear_icon);
    } else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {
      setWicon(Cloud_icon);
    } else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {
      setWicon(drizzle_icon);
    } else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
      setWicon(drizzle_icon);
    } else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
      setWicon(rain_icon);
    } else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
      setWicon(rain_icon);
    } else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
      setWicon(snow_icon);
    } else {
      setWicon(clear_icon);
    }

    // Update other DOM elements with weather data
    const humidity = document.getElementsByClassName("humidity-percentent");
    const wind = document.getElementsByClassName("wind-rate");
    const temparature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");

    humidity[0].innerHTML = data.main.humidity + " %";
    wind[0].innerHTML = data.wind.speed + " km/h";
    temparature[0].innerHTML = Math.floor(data.main.temp) + " °c";
    location[0].innerHTML = data.name;
  };

  return (
    <div className='container'>
      <div className='top-bar'>
        <input type="text" className='cityInput' placeholder='Search ' />
        <div className='search-icon'>
          <img src={search_icon} alt="Search Icon" onClick={() => { search() }} />
        </div>
      </div>
      <div className="weather-image">
        <img src={wicon} alt="Weather Icon" />
      </div>
      <div className="weather-temp">24°c</div>
      <div className="weather-location">Dhaka</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className='icon' />
          <div className="data">
            <div className="humidity-percentent">32</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className='icon' />
          <div className="data">
            <div className="wind-rate">18k/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};
