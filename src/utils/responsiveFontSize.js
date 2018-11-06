import { cssLocks } from './cssLocks';

export const responsiveFontSize = ({
  minSize,
  maxSize,
  minBreakpoint,
  maxBreakpoint,
}) => {
  const cssCalc = cssLocks({
    minSize,
    maxSize,
    minBreakpoint,
    maxBreakpoint,
  });
  return [`${minSize}rem`, cssCalc, `${maxSize}rem`];
};
