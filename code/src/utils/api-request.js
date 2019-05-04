import axios from 'axios';

const request = axios.create({
  baseURL: process.env.REACT_APP_API_DOMAIN,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default request;