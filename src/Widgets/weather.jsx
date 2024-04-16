import React, { useState, useEffect } from 'react';
import './weather.css';

import cloud from '../assets/cloud.png';
import wind from '../assets/wind.png';
import humidity from '../assets/humidity.png';
import location from '../assets/location.png';
import search from '../assets/search.png';

const Weather = () => {
    const [currentTab, setCurrentTab] = useState('userweather');
    const [loading, setLoading] = useState(false);
    const [weatherInfo, setWeatherInfo] = useState(null);
    const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";

    useEffect(() => {
        getLocation();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const switchTab = (tab) => {
        setCurrentTab(tab);
        if (tab === 'searchweather') {
            setWeatherInfo(null);
        }
    };

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            console.log('No Geo-Location Support');
        }
    };

    const showPosition = (position) => {
        const userCoordinates = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
        }
        fetchUserWeatherInfo(userCoordinates);
    };

    const fetchUserWeatherInfo = async (coordinates) => {
        setLoading(true);
        try {
            const { latitude, longitude } = coordinates;
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
            const data = await response.json();
            setWeatherInfo(data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log("Error : ", error);
        }
    };

    const fetchSearchWeatherInfo = async (city) => {
        setLoading(true);
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
            const data = await response.json();
            setWeatherInfo(data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log("Error : ", error);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        const cityName = e.target.elements.searchinput.value;
        if (cityName === "") return;
        fetchSearchWeatherInfo(cityName);
    };

    return (
        <div className="wrapper">
            <h1>Weather App</h1>
            <div className="tab-container">
                <p className={`tab ${currentTab === 'userweather' ? 'current-tab' : ''}`} onClick={() => switchTab('userweather')} data-userweather>Your Weather</p>
                <p className={`tab ${currentTab === 'searchweather' ? 'current-tab' : ''}`} onClick={() => switchTab('searchweather')} data-searchweather>Search Weather</p>
            </div>
            <div className="weather-container">
                {currentTab === 'userweather' ? (
                    <>
                        {loading ? (
                            <div className="sub-container loading-container">
                                <img src={loading} alt="Loading" width="150" height="150" />
                                <p>Loading</p>
                            </div>
                        ) : (
                            <>
                                {weatherInfo && (
                                    <div className="sub-container user-info-container active">
                                        <div className="name">
                                            <p data-cityname>{weatherInfo.name}</p>
                                            <img data-countryicon alt="Country Icon" src={`https://flagcdn.com/144x108/${weatherInfo.sys.country.toLowerCase()}.png`} />
                                        </div>
                                        <p data-weatherdesc>{weatherInfo.weather[0].description}</p>
                                        <img data-weathericon alt="Weather Icon" src={`https://openweathermap.org/img/w/${weatherInfo.weather[0].icon}.png`} />
                                        <p data-temp>{weatherInfo.main.temp} °C</p>
                                        <div className="parameter-container">
                                            <div className="parameter">
                                                <img src={wind} alt="Wind Icon" />
                                                <p>windspeed</p>
                                                <p data-windspeed>{weatherInfo.wind.speed} m/s</p>
                                            </div>
                                            <div className="parameter">
                                                <img src={humidity} alt="Humidity Icon" />
                                                <p>humidity</p>
                                                <p data-humidity>{weatherInfo.main.humidity} %</p>
                                            </div>
                                            <div className="parameter">
                                                <img src={cloud} alt="Cloud Icon" />
                                                <p>Clouds</p>
                                                <p data-cloudiness>{weatherInfo.clouds.all} %</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {!weatherInfo && (
                                    <div className="sub-container grant-location-container active">
                                        <img src={location} alt="Location" height="80" width="80" />
                                        <p>Grant Location Access</p>
                                        <p>Allow access to get Weather Information</p>
                                        <button className="btn" data-grantaccess onClick={getLocation}>Grant Access</button>
                                    </div>
                                )}
                            </>
                        )}
                    </>
                ) : (
                    <form className="form-container" data-searchform onSubmit={handleSearch}>
                        <input type="text" placeholder="Search for city..." name="searchinput" />
                        <button className="btn" type="submit">
                            <img src={search} alt="Search" width="20" height="20" />
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default Weather;