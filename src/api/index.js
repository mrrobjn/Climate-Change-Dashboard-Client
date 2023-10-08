import axios from "axios";

export const getLocations = async (value) => {
  try {
    const reponse = await axios.get(
      `http://localhost:5000/location?name=${value}`
    );
    return reponse.data;
  } catch (err) {
    console.error(err);
  }
};
export const getAirQuality = async (
  latitude,
  longitude,
  hourly,
  startDate,
  endDate
) => {
  try {
    const reponse = await axios.get(
      `http://localhost:5000/airquality?latitude=${latitude}&longitude=${longitude}&hourly=${hourly}&startDate=${startDate}&endDate=${endDate}`
    );
    return reponse.data;
  } catch (err) {
    console.error(err);
  }
};
export const getWeatherForCast = async (latitude, longitude, hourly, daily) => {
  try {
    const reponse = await axios.get(
      daily !== ""
        ? `http://localhost:5000/weatherforecast?latitude=${latitude}&longitude=${longitude}&hourly=${hourly}&daily=${daily}`
        : `http://localhost:5000/weatherforecast?latitude=${latitude}&longitude=${longitude}&hourly=${hourly}`
    );
    return reponse.data;
  } catch (err) {
    console.error(err);
  }
};
export const getHistoricalWeather = async (
  latitude,
  longitude,
  startDate,
  endDate,
  hourly,
  daily
) => {
  try {
    const reponse = await axios.get(
      daily !== ""
        ? `http://localhost:5000/historicalweather?latitude=${latitude}&longitude=${longitude}&startDate=${startDate}&endDate=${endDate}&hourly=${hourly}&daily=${daily}`
        : `http://localhost:5000/historicalweather?latitude=${latitude}&longitude=${longitude}&startDate=${startDate}&endDate=${endDate}&hourly=${hourly}`
    );
    return reponse.data;
  } catch (err) {
    console.error(err);
  }
};
