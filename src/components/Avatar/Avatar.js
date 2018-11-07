import system from 'system-components';
import avatar from '../../images/avatar.png';
import { cssLocks } from '../../utils/cssLocks';

export const Avatar = system(
  {
    is: 'img',
    width: '10rem',
    borderRadius: '100vw',
    mt: '5rem',
    m: '0 auto',
  },
  ({ theme }) => ({
    [`@media (min-width: ${theme.breakpoints[0]})`]: {
      width: cssLocks({ minSize: 10, maxSize: 14 }),
    },
    [`@media (min-width: ${theme.breakpoints[1]})`]: {
      width: '14rem',
    },
  })
);

Avatar.defaultProps = {
  ...Avatar.defaultProps,
  src: avatar,
  alt: 'portrait',
};
