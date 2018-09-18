import styled, { css } from 'styled-components';
import { cssLocks } from '../utils/cssLocks';

export default styled.h1(
  css`
    margin: 3.2rem 0 0;
    text-align: center;
  `,
  cssLocks({
    MIN_FONT_SIZE_REM: 2,
    MAX_FONT_SIZE_REM: 4,
  })
);
