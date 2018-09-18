import { css } from 'styled-components';

// baseline === one rem in pixels
const BASELINE = 10;

const remToPx = value => value * BASELINE;
const pxSuffix = value => `${value}px`;
const remSuffix = value => `${value}rem`;

export const scaled = ({
  MIN_VALUE_REM = 1,
  MAX_VALUE_REM = 2,
  MIN_WIDTH_REM = 32,
  MAX_WIDTH_REM = 64,
} = {}) => {
  const MIN_WIDTH_PX = remToPx(MIN_WIDTH_REM);
  const MAX_WIDTH_PX = remToPx(MAX_WIDTH_REM);

  // c – difference between the biggest and the smallest font size
  const c = remToPx(MAX_VALUE_REM) - remToPx(MIN_VALUE_REM);

  // b – difference between the biggest and the smallest viewport
  //     that changes font-size
  const d = MAX_WIDTH_PX - MIN_WIDTH_PX;

  // m – how many pixels do we add to the font-size for
  //     each increase of 1px to the viewport width?
  const m = c / d;

  // x - window width
  const x = '100vw';

  // b – font-size before we add any viewport-based value
  // b = y - m * x
  const b = pxSuffix(remToPx(MIN_VALUE_REM) - m * MIN_WIDTH_PX);

  // linear function
  // y = m * x + b
  const y = `calc(${m} * ${x} + ${b})`;

  return y;
};

export const cssLocks = ({
  MIN_FONT_SIZE_REM = 1.8,
  MAX_FONT_SIZE_REM = 2.56,
  MIN_WIDTH_REM = 32,
  MAX_WIDTH_REM = 66,
  upperLimit = false,
} = {}) => {
  const MIN_WIDTH_PX = remToPx(MIN_WIDTH_REM);
  const MAX_WIDTH_PX = remToPx(MAX_WIDTH_REM);

  // c – difference between the biggest and the smallest font size
  const c = remToPx(MAX_FONT_SIZE_REM) - remToPx(MIN_FONT_SIZE_REM);

  // b – difference between the biggest and the smallest viewport
  //     that changes font-size
  const d = MAX_WIDTH_PX - MIN_WIDTH_PX;

  // m – how many pixels do we add to the font-size for
  //     each increase of 1px to the viewport width?
  const m = c / d;

  // x - window width
  const x = '100vw';

  // b – font-size before we add any viewport-based value
  // b = y - m * x
  const b = pxSuffix(remToPx(MIN_FONT_SIZE_REM) - m * MIN_WIDTH_PX);

  // linear function
  // y = m * x + b
  const y = `calc(${m} * ${x} + ${b})`;

  return css`
    font-size: ${remSuffix(MIN_FONT_SIZE_REM)};

    @media (min-width: ${pxSuffix(MIN_WIDTH_PX)}) {
      font-size: ${y};
    }

    ${upperLimit &&
      css`
        @media (min-width: ${pxSuffix(MAX_WIDTH_PX)}) {
          font-size: ${remSuffix(MAX_FONT_SIZE_REM)};
        }
      `};
  `;
};
