import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './pages'
import Global from './styles/global.ts';

import './styles/font.css';

import { Provider } from './context/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <Provider>
      <Main />
    </Provider>

    <Global />
  </React.StrictMode>,
)
