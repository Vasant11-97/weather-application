import React, { useState } from 'react';

const Weather = () => {
  const [city, setCity] = useState(null);
  

  return (
    <>
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
              defaultValue=""
              placeholder="Enter city name"
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
    </>
  );
};

export default Weather;
