import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 1000,
  headers: {
    access_token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTg2MTU1MWFjMjk2MTgzYjg0OWJjNjgiLCJpYXQiOjE1ODU4NDU5NDV9.b5nw3BPcrFU0fMF_Qr2rGCUXOrgOeYdA-QppaVz8n0E',
  },
});

export default api;
