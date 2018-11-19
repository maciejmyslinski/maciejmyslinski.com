import React from 'react';
import { node, number } from 'prop-types';
import Plx from 'react-plx';
import { AnimateInOutWrapper } from './AnimateInOutWrapper';

export const AnimateInOut = ({ delay, children }) => (
  <AnimateInOutWrapper delay={delay}>
    <Plx
      disabled={typeof window === 'undefined'}
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

AnimateInOut.propTypes = {
  delay: number,
  children: node.isRequired,
};

AnimateInOut.defaultProps = {
  delay: 0,
};
