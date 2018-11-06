import system from 'system-components';
import { cssLocks } from '../../utils/cssLocks';

export const SocialMedia = system(
  {
    display: 'flex',
    m: '0 auto',
  },
  {
    '> *': {
      fontSize: '2.8rem',
      '@media (min-width: 20em)': {
        fontSize: cssLocks({ minSize: 2.8, maxSize: 3.5 }),
      },
      '@media (min-width: 46.25em)': {
        fontSize: '3.5rem',
      },
    },
  }
);
