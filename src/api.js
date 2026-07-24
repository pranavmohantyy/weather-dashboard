const API_URL = 'https://api.open-meteo.com/v1';

export const getCoords = async (city) => {
  const response = await fetch(`${API_URL}/geocoding?name=${city}`);
  return response.json();
};

export const getWeather = async (lat, lon) => {
  const response = await fetch(`${API_URL}/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
  return response.json();
};