import React from 'react';

const WeatherCard = (props) => {
  console.log(props);
  const displayData = props.cityInformation;
  return (
    <div>
      <div className="w-2/4 bg-white rounded-xl">
        <div className="border-b-2"></div>
        {/* Using frunction from callback for sending data to parent component */}
        <button onClick={() => props.change()}> Weather App</button>
        <h4>{displayData.main.temp}</h4>
        <h5>{displayData.weather[0].main}</h5>
        <h6>{displayData.name}</h6>
        <h6>{displayData.sys.country}</h6>
        <h6>{displayData.main.feels_like}</h6>
        <h6>{displayData.main.humidity}</h6>
      </div>
    </div>
  );
};

export default WeatherCard;
