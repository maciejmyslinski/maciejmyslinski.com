import system from 'system-components';
import { responsiveFontSize } from '../../utils/responsiveFontSize';

const fontSize = responsiveFontSize({
  minSize: 1.6,
  maxSize: 2,
});

export default system(
  {
    is: 'p',
    mt: '2rem',
    fontSize,
  },
  'textAlign'
);
