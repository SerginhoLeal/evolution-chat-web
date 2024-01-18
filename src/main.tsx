import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './app.tsx'
import Global from './styles/global.ts';

import './styles/font.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Main />
    <Global />
  </React.StrictMode>,
)
