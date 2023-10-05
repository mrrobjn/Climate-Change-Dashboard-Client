import axios from "axios";

export const getLocations = async (value) => {
  try {
    const reponse = await axios.get(
      `http://localhost:5000/location?name=${value}`
    );
    return reponse.data.results;
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
export const getWeatherForCast = async (
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
