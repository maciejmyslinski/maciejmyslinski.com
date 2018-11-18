import React from 'react';
import Plx from 'react-plx';
import { AnimateInOutWrapper } from './AnimateInOutWrapper';

export const AnimateInOut = ({ delay, children }) => (
  <AnimateInOutWrapper delay={delay}>
    <Plx
      parallaxData={[
        {
          start: 'self',
          duration: '100vh',
          startOffset: '100px',
          properties: [],
        },
      ]}
    >
      {children}
    </Plx>
  </AnimateInOutWrapper>
);
