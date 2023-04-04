import React, { useState } from 'react';
import WeatherCard from './WeatherCard';
// import URL from '../constants/url';
// import KEY from '../constants/key';

const Weather = () => {
  const [city, setCity] = useState('');
  const [data, setData] = useState('');

  // Function for fetchin API and calling the function on pressing Enter key

  const cityData = (event) => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=8efc9bde35764adadb634c763c6192fc`;
      const response = await fetch(url);
      const responseJson = await response.json();
      setData(responseJson);
    };

    if (event.key === 'Enter') {
      fetchApi();
    }
  };

  // Function of handling state from child to parent component and making it empty string for loading of first page
  function handleState() {
    setData('');
    setCity('');
  }
  return (
    <>
      {!data || !city ? (
        <div className="w-2/4 bg-white p-4">
          <div>
            <div className="header">
              <h1>Weather App</h1>
            </div>
            <hr />
            <div>
              <input
                className="w-full"
                type="search"
                value={city}
                placeholder="Enter city name"
                onChange={(event) => {
                  setCity(event.target.value);
                }}
                onKeyPress={cityData}
              ></input>
            </div>
            <div className="flex justify-between items-center">
              <div className="w-2/5 h-0.5 bg-gray-300"></div>
              <div className="w-1/6">or</div>
              <div className="w-2/5 h-0.5 bg-gray-300"></div>
            </div>
          </div>
          <div>
            <button className="w-full h-12 px-6 text-indigo-100 transition-colors duration-150 bg-blue-500 rounded-lg focus:shadow-outline hover:bg-indigo-800">
              Get Device Location
            </button>
          </div>
        </div>
      ) : (
        <WeatherCard cityInformation={data} change={handleState} />
      )}
    </>
  );
};

export default Weather;
