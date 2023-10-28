import axios from "axios";

export const getLocations = async (value) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/location/get?name=${value}`
    );
    return response.data;
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
    const response = await axios.get(
      `http://localhost:5000/air-quality/get?latitude=${latitude}&longitude=${longitude}&hourly=${hourly}&start_date=${startDate}&end_date=${endDate}`
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
export const downloadAirQuality = async (
  latitude,
  longitude,
  hourly,
  startDate,
  endDate
) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/air-quality/download?latitude=${latitude}&longitude=${longitude}&hourly=${hourly}&start_date=${startDate}&end_date=${endDate}`
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
export const getWeatherForCast = async (latitude, longitude, hourly, daily) => {
  try {
    const response = await axios.get(
      daily !== ""
        ? `http://localhost:5000/forecast/get?latitude=${latitude}&longitude=${longitude}&hourly=${hourly}&daily=${daily}`
        : `http://localhost:5000/forecast/get?latitude=${latitude}&longitude=${longitude}&hourly=${hourly}`
    );
    return response.data;
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
    const response = await axios.get(
      daily !== ""
        ? `http://localhost:5000/historical/get?latitude=${latitude}&longitude=${longitude}&startDate=${startDate}&endDate=${endDate}&hourly=${hourly}&daily=${daily}`
        : `http://localhost:5000/historical/get?latitude=${latitude}&longitude=${longitude}&startDate=${startDate}&endDate=${endDate}&hourly=${hourly}`
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
export const getArticles = async () => {
  try {
    const response = await axios.get("http://localhost:5000/articles/get");
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
export const getSingleArticle = async (article_id) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/articles/find?id=${article_id}`
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
export const getArticleDetail = async (article_id) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/articles/find_detail?id=${article_id}`
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
export const uploadCSV = async (formData) => {
  try {
    const response = await axios.post(
      `http://localhost:5000/lida/post`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
