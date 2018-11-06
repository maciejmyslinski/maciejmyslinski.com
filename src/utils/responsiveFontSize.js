import { cssLocks } from './cssLocks';

export const responsiveFontSize = ({
  minSize,
  maxSize,
  minBreakpoint = 32,
  maxBreakpoint = 74,
}) => {
  const cssCalc = cssLocks({
    minSize,
    maxSize,
    minBreakpoint,
    maxBreakpoint,
  });
  return [`${minSize}rem`, cssCalc, `${maxSize}rem`];
};
