import axios from 'axios';

// export const URL_TEST = 'http://localhost:3000';
export const URL_TEST = 'https://evolution-chat.onrender.com';

export const api = axios.create({
  baseURL: `${URL_TEST}/api`
})

export const leadApi = axios.create({
  baseURL: 'https://api.whatsapp.laks.net.br',
  headers: {
    'Content-Type': 'application/json',
    apikey: `${process.env.API_KEY}`
  }
})