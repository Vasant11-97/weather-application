import React, { useState } from 'react';
import WeatherCard from './WeatherCard';

const Weather = () => {
  const [city, setCity] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // Function for fetchin API and calling the function on pressing Enter key

  const liveLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      liveData(position.coords.latitude, position.coords.longitude);
    });
  };

  const cityData = (event) => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=8efc9bde35764adadb634c763c6192fc`;
      const response = await fetch(url);
      const responseJson = await response.json();
      if (responseJson.cod === '404') {
        return setError(responseJson.message);
      } else {
        setData(responseJson);
      }
    };

    if (event.key === 'Enter' && city !== '') {
      setError('Please Enter the city');
      fetchApi();
    }
  };

  // Function for fetching live location data

  const liveData = async (latitude, longitude) => {
    const liveWeatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=8efc9bde35764adadb634c763c6192fc`
    );

    const jsonLiveResponse = await liveWeatherResponse.json();
    setData(jsonLiveResponse);
  };

  // Function of handling state from child to parent component and making it empty string for loading of first page
  function handleState() {
    setData('');
    setCity('');
    setError('');
  }
  return (
    <>
      {!data ? (
        <div className="flex items-center h-screen w-full">
          <div className="w-full bg-white rounded shadow-lg m-2 md:max-w-sm md:mx-auto">
            <h1 className="block bg-white w-full px-4 mt-2 text-2xl mx-[10-px] font-semibold text-[#42ADFD] text-left text-grey-darkest mb-6 border-b-[1px] pb-3 border-gray-200">
              Weather App
            </h1>

            <div className="mb-4  mx-4 md:flex md:flex-wrap md:justify-between bg-white">
              <div className="flex flex-col mb-4 md:w-full">
                <input
                  className="border py-2 px-3 text-grey-darkest placeholder:text-center focus:outline-none"
                  type="text"
                  name="location"
                  placeholder="Enter city name"
                  value={city}
                  onChange={(event) => {
                    setCity(event.target.value);
                  }}
                  onKeyPress={cityData}
                />
                {error && (
                  <p className="text-red-700 text-xl text-center pt-2">
                    {error}
                    <span
                      className="ml-40 cursor-pointer"
                      onClick={handleState}
                    >
                      ❌
                    </span>
                  </p>
                )}
              </div>

              <div className="mt-2 w-full">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center bg-white">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white border-2 border-white  px-2 text-gray-500">
                      Or
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:w-full">
                <button
                  onClick={liveLocation}
                  type="button"
                  className="mx-auto py-3 my-4 text-white font-semibold rounded bg-[#42ADFD] w-[100%]"
                >
                  Get Device Location
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <WeatherCard cityInformation={data} change={handleState} />
      )}
    </>
  );
};

export default Weather;
