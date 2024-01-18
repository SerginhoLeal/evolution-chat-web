import 'styled-components';
import { light } from '../styles/theme';

type ThemeProps = typeof light;

declare module 'styled-components' {
  export interface DefaultTheme  extends ThemeProps {}
}
