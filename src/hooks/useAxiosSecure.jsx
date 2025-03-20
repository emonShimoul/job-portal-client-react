import axios from "axios";
import React, { useEffect } from "react";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const useAxiosSecure = () => {
  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log("Error caught in interceptoor", error);

        if (error.status === 401 || error.status === 403) {
          console.log("need to logout the user");
        }

        return Promise.reject(error);
      }
    );
  }, []);

  return axiosInstance;
};

export default useAxiosSecure;
