import axios from 'axios';

const axiosInstance  = axios.create({
    baseUrl: 'https://dummyjson.com',
})

export default axiosInstance;

