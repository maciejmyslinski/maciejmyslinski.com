import system from 'system-components';
import { responsiveFontSize } from '../../utils/responsiveFontSize';

const left = responsiveFontSize({ minSize: 2, maxSize: -3 });

const fontSize = responsiveFontSize({
  minSize: 4,
  maxSize: 15,
});

export const H3 = system(
  {
    is: 'h3',
    opacity: '0.1',
    fontSize,
    position: 'absolute',
    top: 0,
    left,
    m: '0',
    zIndex: '-1',
    maxWidth: '100rem',
  },
  {
    transform: `translateY(-25%)`,
  }
);
