import React from 'react';
import system from 'system-components';
import arrowRight from './arrow-right.svg';
import buttonOrnament from './button-ornament.svg';

export const EventLink = system({
  is: 'a',
  gridArea: 'link',
  justifySelf: 'end',
  p: '1.1rem 2.3rem',
  m: '0 2.6rem',
  bg: '#F5F5F5',
  display: 'flex',
  position: 'relative',
  alignSelf: 'end',
  css: {
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      width: '2.6rem',
      height: '100%',
      top: 0,
      right: '100%',
      background: `url(${buttonOrnament}) right/auto 100% no-repeat`,
    },

    '&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      width: '2.6rem',
      height: '100%',
      top: 0,
      left: '100%',
      background: `url(${buttonOrnament}) right/auto 100% no-repeat`,
      transform: 'rotate(180deg)',
    },
  },
});

EventLink.defaultProps = {
  ...EventLink.defaultProps,
  children: <img src={arrowRight} />,
};
