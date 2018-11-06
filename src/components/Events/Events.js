import system from 'system-components';
import { responsiveFontSize } from '../../utils/responsiveFontSize';

const mt = responsiveFontSize({ minSize: 2.5, maxSize: 10 });

export const Events = system(
  {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '100rem',
    mt,
  },
  'space',
  {
    '&:after': {
      content: '""',
      flex: '1 1 30rem',
      margin: '2.5rem',
    },
  }
);
