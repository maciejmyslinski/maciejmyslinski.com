import system from 'system-components';
import { responsiveFontSize } from '../../utils/responsiveFontSize';

const marginY = responsiveFontSize({ minSize: 1.25, maxSize: 2.5 });

export const EventCard = system({
  bg: 'white',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.12)',
  p: '3rem',
  display: 'grid',
  gridTemplateAreas: '"headline headline" "topic topic" "name link"',
  gridTemplateColumns: '1fr auto',
  gridRowGap: '0.5rem',
  mt: marginY,
  mr: '2.5rem',
  mb: marginY,
  ml: '2.5rem',
  borderRadius: '0.3rem',
});
