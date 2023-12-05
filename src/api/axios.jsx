import customAxios from "axios";

function buildAPI() {
  const instance = customAxios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
  });
  // instance.interceptors.response.use(
  //   (response) => {
  //     return response;
  //   },
  //   async (error) => {
  //     throw error;
  //   }
  // );
  return instance;
}

const axios = buildAPI();
export default axios;
