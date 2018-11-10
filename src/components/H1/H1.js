import system from 'system-components';
import { responsiveFontSize } from '../../utils/responsiveFontSize';

const fontSize = responsiveFontSize({
  minSize: 3,
  maxSize: 5,
});

export const H1 = system({
  is: 'h1',
  textAlign: 'center',
  mt: '3.2rem',
  mb: '2rem',
  fontSize,
});
