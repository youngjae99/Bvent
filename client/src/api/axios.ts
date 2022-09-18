import axios from 'axios';

export const clientApi = axios.create({
  baseURL: '/api',
});

export const serverApi = axios.create({
  baseURL: 'https://api.bventdao.xyz',
});
