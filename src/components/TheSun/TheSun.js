import system from 'system-components';

export const TheSun = system(
  {
    position: 'fixed',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    height: '100vh',
    width: '100vw',
    zIndex: 1,
  },
  {
    background:
      'linear-gradient(137.5deg, rgba(255, 255, 255, 0.3) 14.09%, rgba(255, 255, 255, 0) 88.03%)',
    pointerEvents: 'none',
  }
);
