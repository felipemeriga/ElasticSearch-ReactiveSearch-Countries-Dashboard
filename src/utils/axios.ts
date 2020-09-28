import axios, {AxiosInstance} from 'axios'

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://restcountries.eu/rest/v2',
  timeout: 10000,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json'
  }
});

export default axiosInstance
