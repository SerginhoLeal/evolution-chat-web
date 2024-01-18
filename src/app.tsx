import { Provider } from './context';
import { light, dark } from './styles/theme';

import Background from './styles/background/index.tsx';

import { usePersistedState } from './hooks';

import { ThemeProvider, DefaultTheme } from 'styled-components';

import Main from './pages'

export default function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  // const toggleTheme = () => {
  //   setTheme(theme.title === 'light' ? dark : light)
  // };

  return (
    <ThemeProvider theme={light}>
      <Provider>
        <Main />
        <Background />
      </Provider>
    </ThemeProvider>
  )
}