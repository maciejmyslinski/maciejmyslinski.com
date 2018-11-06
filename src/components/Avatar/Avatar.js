import system from 'system-components';
import avatar from './avatar.png';

export const Avatar = system({
  is: 'img',
  width: '9vw',
  borderRadius: '9vw',
  mt: '5rem',
  m: '0 auto',
});

Avatar.defaultProps = {
  ...Avatar.defaultProps,
  src: avatar,
};
