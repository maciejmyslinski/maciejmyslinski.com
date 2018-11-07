import React from 'react';
import system from 'system-components';
import { EventLink } from './EventLink';
import playIcon from './play.svg';
import playButtonOrnament from './play-button-ornament.svg';

export const EventVideoLink = system({
  is: EventLink,
  bg: '#212121',
  css: {
    '&:before': {
      background: `url(${playButtonOrnament}) right/auto 100% no-repeat`,
    },

    '&:after': {
      background: `url(${playButtonOrnament}) right/auto 100% no-repeat`,
    },
  },
});

EventVideoLink.defaultProps = {
  ...EventVideoLink.defaultProps,
  children: <img src={playIcon} alt="play icon" />,
};
