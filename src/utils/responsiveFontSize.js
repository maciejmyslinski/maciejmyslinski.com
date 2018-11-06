export const responsiveFontSize = ({
  minSize,
  maxSize,
  minBreakpoint = 32,
  maxBreakpoint = 74,
}) => {
  const cssCalc = `calc(${minSize}rem + ${maxSize -
    minSize} * (100vw - ${minBreakpoint}rem) / (${maxBreakpoint} - ${minBreakpoint}))`;
  return [`${minSize}rem`, cssCalc, `${maxSize}rem`];
};
