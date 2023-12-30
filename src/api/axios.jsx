import customAxios from "axios";

const getAccessToken = () => {
  const accessToken = localStorage.getItem("idToken");
  let token = "";
  if (accessToken) {
    token = accessToken.replace(/"/g, "");
  }
  return token;
};

function buildAPI() {
  const instance = customAxios.create({
    baseURL: "http://localhost:5000",
    withCredentials: false,
  });
  instance.interceptors.request.use((config) => ({
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${getAccessToken()}`,
    },
    withCredentials: false,
  }));

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalRequest = error.config;
      // if (
      //   error.response &&
      //   error.response.status === 401 &&
      //   !originalRequest._retry &&
      //   getRefreshToken()
      // ) {
      //   originalRequest._retry = true;
      //   const response = await axios.post(
      //     import.meta.env.VITE_BACK_END_URL + "/api/auth/refresh",
      //     `refresh_token=${getRefreshToken()}`,
      //     {
      //       headers: {
      //         Authorization: `Bearer ${getAccessToken()}`,
      //         "Content-Type": "application/x-www-form-urlencoded",
      //       },
      //     }
      //   );
      //   if (response.data && response.data.access_token) {
      //     localStorage.setItem("accessToken", response.data.access_token);
      //     originalRequest.headers["Authorization"] = "Bearer " + getAccessToken();
      //     return instance(originalRequest);
      //   }
      //   localStorage.removeItem("accessToken");
      // }
      return Promise.reject(error);
    }
  );
  return instance;
}

const axios = buildAPI();
export default axios;
