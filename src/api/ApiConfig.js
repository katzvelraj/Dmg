import axios from 'axios';
import {utils} from './../res/utils';
const axiosInstance = axios.create({
  baseURL: utils.BASE_URL,
});
export default axiosInstance;
