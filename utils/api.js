import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://ai.w-manage.org/api',
  headers: {
    'Cache-Control': 'no-cache',
  },
});

export const apiCart = axios.create({
  baseURL: 'https://ai.w-manage.org/api',
});
