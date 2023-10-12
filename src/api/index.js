import axios from "axios";

export const getLocations = async (value) => {
  try {
    const reponse = await axios.get(
      `http://localhost:5000/location/get?name=${value}`
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
      `http://localhost:5000/air-quality/get?latitude=${latitude}&longitude=${longitude}&hourly=${hourly}&start_date=${startDate}&end_date=${endDate}`
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
        ? `http://localhost:5000/forecast/get?latitude=${latitude}&longitude=${longitude}&hourly=${hourly}&daily=${daily}`
        : `http://localhost:5000/forecast/get?latitude=${latitude}&longitude=${longitude}&hourly=${hourly}`
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
        ? `http://localhost:5000/historical/get?latitude=${latitude}&longitude=${longitude}&startDate=${startDate}&endDate=${endDate}&hourly=${hourly}&daily=${daily}`
        : `http://localhost:5000/historical/get?latitude=${latitude}&longitude=${longitude}&startDate=${startDate}&endDate=${endDate}&hourly=${hourly}`
    );
    return reponse.data;
  } catch (err) {
    console.error(err);
  }
};
