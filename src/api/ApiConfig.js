import axios from 'axios';
//
const axiosInstance = axios.create({
  baseURL: 'https://api.nytimes.com/svc/search/v2',
});
export default axiosInstance;