import system from 'system-components';
import ornament from './ornament.svg';

export const Ornament = system(
  {
    is: 'img',
    position: 'absolute',
    width: '12vw',
  },
  'top',
  'left'
);

Ornament.defaultProps = {
  ...Ornament.defaultProps,
  src: ornament,
};
