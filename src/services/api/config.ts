import axios, { AxiosResponse } from 'axios';

axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.timeout = 12000;
axios.defaults.baseURL = `${process.env.REACT_APP_API_BASE_URL}`;

const responseBody = (response: AxiosResponse) => response.data;

export const requests = {
  get: (url: string, query_params: Record<string | number, unknown> = {}) =>
    axios.get(url, { params: query_params }).then(responseBody),
  post: (url: string, body: Record<string | number, unknown> | FormData) =>
    axios.post(url, body).then(responseBody),
  put: (url: string, body: Record<string | number, unknown> | FormData) =>
    axios.put(url, body).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody),
};
