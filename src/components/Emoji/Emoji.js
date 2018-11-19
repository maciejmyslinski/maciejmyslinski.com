import styled from 'styled-components';
import { oneOf } from 'prop-types';
import manTechnologist from './emojis/man-technologist.png';
import studioMicrophone from './emojis/studio-microphone.png';
import wavingHand from './emojis/waving-hand.png';
import airplane from './emojis/airplane.png';
import motorcycle from './emojis/motorcycle.png';
import laptopComputer from './emojis/laptop-computer.png';
import redHeart from './emojis/red-heart.png';
import flagPoland from './emojis/flag-poland.png';
import raisingHands from './emojis/raising-hands.png';
import email from './emojis/email.svg';
import linkedin from './emojis/linkedin.svg';
import youtube from './emojis/youtube.svg';
import instagram from './emojis/instagram.svg';
import twitter from './emojis/twitter.svg';
import github from './emojis/github.svg';

const Emoji = styled.i`
  display: inline-block;
  line-height: inherit;
  height: 1em;
  width: 1em;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  vertical-align: middle;
  position: relative;
  bottom: 0.2rem;
  margin: 0 0.2em;

  ${({ name }) => {
    switch (name) {
      case 'man-technologist':
        return { backgroundImage: `url(${manTechnologist})` };
      case 'studio-microphone':
        return { backgroundImage: `url(${studioMicrophone})` };
      case 'waving-hand':
        return { backgroundImage: `url(${wavingHand})` };
      case 'airplane':
        return { backgroundImage: `url(${airplane})` };
      case 'motorcycle':
        return { backgroundImage: `url(${motorcycle})` };
      case 'laptop-computer':
        return { backgroundImage: `url(${laptopComputer})` };
      case 'red-heart':
        return { backgroundImage: `url(${redHeart})` };
      case 'flag-poland':
        return { backgroundImage: `url(${flagPoland})` };
      case 'raising-hands':
        return { backgroundImage: `url(${raisingHands})` };
      case 'email':
        return { backgroundImage: `url(${email})` };
      case 'linkedin':
        return { backgroundImage: `url(${linkedin})` };
      case 'youtube':
        return { backgroundImage: `url(${youtube})` };
      case 'instagram':
        return { backgroundImage: `url(${instagram})` };
      case 'twitter':
        return { backgroundImage: `url(${twitter})` };
      case 'github':
        return { backgroundImage: `url(${github})` };
      default:
        return null;
    }
  }};
`;

Emoji.propTypes = {
  name: oneOf([
    'man-technologist',
    'studio-microphone',
    'waving-hand',
    'airplane',
    'motorcycle',
    'laptop-computer',
    'red-heart',
    'flag-poland',
    'raising-hands',
    'email',
    'linkedin',
    'youtube',
    'instagram',
    'twitter',
    'github',
  ]),
};

export default Emoji;
