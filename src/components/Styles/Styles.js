import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import './globalStyles';

export const Styles = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div style={{ overflowX: 'hidden' }}>{children}</div>
  </ThemeProvider>
);
