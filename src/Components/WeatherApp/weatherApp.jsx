import React from 'react'
import './weatherapp.css'
import search_icon from '../Assets/search.png';
import Clear_icon from '../Assets/clear.png';
import Cloud_icon from '../Assets/cloud.png';
import drizzle_icon from '../Assets/drizzle.png';
import rain_icon from '../Assets/rain.png';
import snow_icon from '../Assets/snow.png';
import wind_icon from '../Assets/wind.png';
import humidity_icon from '../Assets/humidity.png';


export const WeatherApp = () => {
    let api_key = "e474d44f4ecdb39274a72eabce5ecbeb";
  return (
    <div className='container'>
      <div className='top-bar'>
        <input type="text" className='cityInput' placeholder='Search '  />
        <div className='search-icon'>
            <img src={search_icon} alt="Search Icon" />
        </div>
      </div>
      <div className="weather-image">
        <img src={Cloud_icon} alt="Cloud Icon" />
      </div>
      <div className="weather-temp">24°c</div>
      <div className="weather-location">Dhaka</div>
      <div className="data-container">
    <div className="element">
            <img src={humidity_icon} alt="" className='icon' />
            <div className="data">
             <div className="humidity-percentent">64%</div>      
            </div>    
    </div>
    <div className="element">
            <img src={wind_icon} alt="" className='icon' />
            <div className="data">
                <div className="humidity-percent">18k/h</div>
                <div className="text">Wind Speed</div>      
            </div>
    </div>
    </div>
    </div>
  )
}

