import axios from 'axios';

const api = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/api`,
  // withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    // 'Authorization': `Bearer ${localStorage.getItem('@token-evo')}`,
    // 'Cookies': 'evoToken'
  }
})

const mediaApi = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/api`,
  // withCredentials: true,
  headers: {
    'Content-Type': 'multipart/form-data',
    'Authorization': `Bearer ${localStorage.getItem('@token-evo')}`,
  }
})

const leadApi = axios.create({
  baseURL: `${import.meta.env.VITE_EVOLUTION_API}`,
  headers: {
    'Content-Type': 'application/json',
    apikey: `${import.meta.env.VITE_API_KEY}`
  }
})

export { api, mediaApi, leadApi };
