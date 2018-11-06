export const responsiveFontSize = ({
  minSize,
  maxSize,
  minBreakpoint,
  maxBreakpoint,
}) =>
  `calc(${minSize}rem + ${maxSize -
    minSize} * (100vw - ${minBreakpoint}rem) / (${maxBreakpoint} - ${minBreakpoint}))`;
