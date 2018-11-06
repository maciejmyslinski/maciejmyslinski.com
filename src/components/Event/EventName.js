import system from 'system-components';
import { fontSize } from './fontSize';

export const EventName = system({
  is: 'span',
  fontSize,
  color: '#5A5A5A',
  gridArea: 'name',
  alignSelf: 'center',
});
