import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { WiThermometer, WiHumidity } from 'react-icons/wi';
import { MdLocationOn } from 'react-icons/md';

const WeatherCard = (props) => {
  console.log(props);
  const displayData = props.cityInformation;
  return (
    <div className="w-full bg-white rounded shadow-lg m-2 md:max-w-sm md:mx-auto cursor-pointer flex flex-col justify-center items-center text-center border-none">
      <div className="text-md text-xl text-left w-full font-semibold  text-[#42ADFD] p-4 border-b-2 border-b-gray-300 flex items-center gap-2">
        <span onClick={() => props.change()}>
          {/* <BiLeftArrowAlt size={29} /> */}
          <FiArrowLeft />
        </span>
        <span className="uppercase">Weather App</span>
      </div>
      <div className="w-32 h-32 flex items-center justify-center mt-9">
        <img
          className=""
          src={`/images/${props.cityInformation.weather[0].icon}.svg`}
          alt="weather images"
        />
      </div>
      <div className="text-4xl font-semibold text-gray-900 mb-3 mt-4">
        {displayData.main.temp}º C
      </div>
      <p className="text-gray-700 font-semibold capitalize mb-2">
        {displayData.weather[0].main}
      </p>
      <div className="flex items-center justify-center gap-1">
        <MdLocationOn size={25}/>
        <p className="text-gray-700 font-semibold">
          {displayData.name + ', ' + displayData.sys.country}
        </p>
      </div>

      <div className="flex justify-between w-full mt-5 border-t-2 border-gray-300 m-0">
        <div className="flex items-center justify-center gap-1 w-full py-3 text-gray-700 border-r-2 border-gray">
          <WiThermometer color="#42ADFD" size={40} />
          <div className="flex flex-col leading-3">
            <div className="text-left font-semibold">
              {displayData.main.feels_like}
              <sup>º</sup>C
            </div>
            <div className="text-xs font-semibold">Feels like</div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-1 w-full py-3">
          <div className="flex items-center justify-center gap-1 w-full py-3 text-gray-700 border-r-2 border-gray">
            <WiHumidity color="#42ADFD" size={40} />
            <div className="flex flex-col leading-3">
              <div className="text-left font-semibold">
                {displayData.main.humidity}%
              </div>
              <div className="text-xs font-semibold">Humidity</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
