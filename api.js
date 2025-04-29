import axios from 'axios';

const api = axios.create({
  baseURL: 'https://mockapi.io/absensi', // Ganti ke API kamu
});

export default api;
