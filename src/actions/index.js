import axios from 'axios';

const API_KEY = 'e71f22aa0c1dcc1c6581007d237f23e0';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  let request = axios.get(url);  
  
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}