import system from 'system-components';
import { fontSize } from './fontSize';

export const EventTopic = system({
  is: 'p',
  fontSize,
  p: 0,
  mt: 0,
  mb: '2rem',
  gridArea: 'topic',
});
