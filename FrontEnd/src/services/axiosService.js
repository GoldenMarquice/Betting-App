import axios from 'axios';

const axiosInstance = axios.create({
    baseURL:"http://127.0.0.1:8000",
});

axiosInstance.interceptors.request.use(
    (config) => {
        const authToken = localStorage.getItem("token");
        if(authToken) {
            config.headers["Authorization"] = 'Token ' + authToken
        }

        return config;

    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;