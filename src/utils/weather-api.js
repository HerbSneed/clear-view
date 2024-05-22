var apiId = "c82d8df7a3206dc1d57ce04e07f52165";

export const getWeather = async ( cityN, stateC, countryC ) => {
 return fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${cityN},${stateC},${countryC}&appid=${apiId}&units=imperial`
 );
};

console.log(getWeather);