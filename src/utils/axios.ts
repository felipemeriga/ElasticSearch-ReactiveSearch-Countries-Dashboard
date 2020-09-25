import axios, {AxiosInstance} from 'axios'

const instance: AxiosInstance = axios.create({
  baseURL: process.env.API_URL
});

export default instance
