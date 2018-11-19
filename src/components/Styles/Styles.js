import React from 'react';
import { node } from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import './globalStyles';

export const Styles = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div style={{ overflowX: 'hidden' }}>{children}</div>
  </ThemeProvider>
);

Styles.propTypes = {
  children: node,
};

Styles.defaultProps = {
  children: null,
};
