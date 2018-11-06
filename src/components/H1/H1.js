import system from 'system-components';
import styled from 'styled-components';
import { responsiveFontSize } from '../../utils/responsiveFontSize';

const fontSize = responsiveFontSize({
  minSize: 3,
  maxSize: 5,
  minBreakpoint: 32,
  maxBreakpoint: 64,
});

export const H1 = system({
  is: 'h1',
  textAlign: 'center',
  mt: '3.2rem',
  fontSize: ['3rem', fontSize, fontSize, '5rem'],
});
