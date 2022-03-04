import axios from 'axios';

const backendHost = 'https://api.openweathermap.org/data/2.5/';

export const API_ROOT = backendHost;

export function http() {

  var axiosRequest = axios.create({
    baseURL: API_ROOT,
    timeout: 100000
  })

  return axiosRequest

}