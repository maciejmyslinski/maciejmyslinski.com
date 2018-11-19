import system from 'system-components';

export const TheMapDot = system(
  {
    position: 'absolute',
    width: '1rem',
    height: '1rem',
    borderRadius: '1rem',
    bg: 'black',
  },
  ({ theme, isUpcoming }) => {
    if (isUpcoming) {
      return {
        background: theme.colors.netguru,
      };
    }
    return null;
  },
  'top',
  'left'
);

TheMapDot.defaultProps = {
  ...TheMapDot.defaultProps,
  blacklist: [...TheMapDot.defaultProps.blacklist, 'isUpcoming'],
};
