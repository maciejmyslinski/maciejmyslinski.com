import styled, { css } from 'styled-components';
import { cssLocks } from '../utils/cssLocks';

export default styled.h2(
  css`
    margin: 3.2rem 0 0;
    font-size: 1.8rem;
  `,
  cssLocks({
    MIN_FONT_SIZE_REM: 1.8,
    MAX_FONT_SIZE_REM: 2.88,
    MIN_WIDTH_PX: 320,
    MAX_WIDTH_PX: 520,
  })
);
