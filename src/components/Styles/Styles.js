import React from 'react';
import { node } from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { StylesGlobal } from './StylesGlobal';

export const Styles = ({ children }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <StylesGlobal />
      <div style={{ overflowX: 'hidden' }}>{children}</div>
    </React.Fragment>
  </ThemeProvider>
);

Styles.propTypes = {
  children: node,
};

Styles.defaultProps = {
  children: null,
};
