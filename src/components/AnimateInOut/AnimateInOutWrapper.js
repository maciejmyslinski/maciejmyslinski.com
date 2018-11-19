import system from 'system-components';
import { number } from 'prop-types';
import { responsiveFontSize } from '../../utils/responsiveFontSize';

const pxToEm = px => px / 16;

export const AnimateInOutWrapper = system(
  {
    flex: '1 1 34rem',
    display: 'flex',
  },
  ({ delay }) => {
    return {
      '& .Plx': {
        display: 'flex',
        flexGrow: '1',
        transitionProperty: 'opacity, transform',
        transitionDuration: '200ms',
        transitionTimingFunction: 'ease-out',
        [`@media (min-width: ${pxToEm(680)}em)`]: {
          transitionDelay: `${delay}ms, ${delay}ms`,
        },
        '& > *': {
          flexGrow: '1',
        },
      },
      '& .Plx--above': {
        opacity: 0,
        transform: 'translateY(2rem)',
      },
      '& .Plx--active': { opacity: 1, transform: 'translateY(0)' },
    };
  }
);

AnimateInOutWrapper.propTypes = {
  ...AnimateInOutWrapper.propTypes,
  delay: number,
};

AnimateInOutWrapper.defaultProps = {
  ...AnimateInOutWrapper.defaultProps,
  delay: 0,
  blacklist: Object.keys(AnimateInOutWrapper.propTypes),
};
