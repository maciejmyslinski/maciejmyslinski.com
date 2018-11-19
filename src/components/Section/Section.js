import system from 'system-components';
import { responsiveFontSize } from '../../utils/responsiveFontSize';

const mt = responsiveFontSize({ minSize: 2, maxSize: 15 });

export const Section = system({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  maxWidth: '100rem',
  width: '100vw',
  m: '0 auto',
  mt,
});
