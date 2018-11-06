import system from 'system-components';
import { responsiveFontSize } from '../../utils/responsiveFontSize';

const fontSize = responsiveFontSize({
  minSize: 2,
  maxSize: 3.2,
});

export const H2 = system({
  is: 'h2',
  mt: '3.2rem',
  fontSize,
});
