import system from 'system-components';
import { fontSize } from './fontSize';

export const EventHeadline = system({
  is: 'h4',
  fontSize,
  p: 0,
  m: 0,
  gridArea: 'headline',
});
