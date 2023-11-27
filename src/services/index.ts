import axios from 'axios';

export const api = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
  headers: {
    'Content-Type': 'application/json',
  }
})

export const leadApi = axios.create({
  baseURL: 'https://api.whatsapp.laks.net.br',
  headers: {
    'Content-Type': 'application/json',
    apikey: `${import.meta.env.VITE_API_KEY}`
  }
})