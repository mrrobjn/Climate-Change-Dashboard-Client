import axios from "axios";

const get = async (url, params) => {
  try {
    const response = await axios.get(`http://localhost:5000/${url}`, {
      params,
    });
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const getLocations = async (value) =>
  get("location/get", { name: value });
export const getAirQuality = async (
  latitude,
  longitude,
  hourly,
  startDate,
  endDate
) =>
  get("air-quality/get", {
    latitude,
    longitude,
    hourly,
    start_date: startDate,
    end_date: endDate,
  });
export const downloadAirQuality = async (
  latitude,
  longitude,
  hourly,
  startDate,
  endDate
) =>
  get(
    "air-quality/download?lat=" +
      latitude +
      "&lon=" +
      longitude +
      "&hourly=" +
      hourly +
      "&start_date=" +
      startDate +
      "&end_date=" +
      endDate
  );

export const getWeatherForCast = async (latitude, longitude, hourly, daily) =>
  get("forecast/get", { latitude, longitude, hourly, daily });
export const getHistoricalWeather = async (
  latitude,
  longitude,
  startDate,
  endDate,
  hourly,
  daily
) =>
  get("historical/get", {
    latitude,
    longitude,
    start_date: startDate,
    end_date: endDate,
    hourly,
    daily,
  });
export const getArticles = async () => get("articles/get");
export const getSingleArticle = async (article_id) =>
  get("articles/find", { id: article_id });
export const getArticleDetail = async (article_id) =>
  get("articles/find_detail", { id: article_id });

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
    throw err
  }
};

export const postSingleGoal = async (path, goal) => {
  try {
    const response = await axios.post(
      `http://localhost:5000/lida/post_goal`,
      { path, goal },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (err) {
    throw err;
  }
};
export const modifyGoal = async (path, goal, instruction) => {
  try {
    const response = await axios.post(
      `http://localhost:5000/lida/modify_goal`,
      { path, goal, instruction },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (err) {
    throw err;
  }
};
