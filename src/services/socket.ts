import { io } from "socket.io-client";

const socket = io(`${import.meta.env.VITE_BASE_URL}`, { transports: ['websocket'] });
// const socket = io('https://evolution-chat.onrender.com', { transports: ['websocket'] });

export { socket };
