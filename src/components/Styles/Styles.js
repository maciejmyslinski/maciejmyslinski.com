import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import './globalStyles';

export const Styles = ThemeProvider;

Styles.defaultProps = {
  theme,
};
