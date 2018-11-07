import React from 'react';
import theMap from './theMap.svg';
import { TheMapDot } from './TheMapDot';

const cities = [
  { name: 'Szczecin', top: '25%', left: '9%' },
  {
    name: 'Poznań',
    top: '41%',
    left: '31%',
  },
  {
    name: 'Wrocław',
    top: '61%',
    left: '33%',
  },
  {
    name: 'Warszawa',
    top: '43%',
    left: '66%',
  },
  {
    name: 'Gliwice',
    top: '74%',
    left: '46%',
  },
  {
    name: 'Kraków',
    top: '78%',
    left: '58%',
  },
  {
    name: 'Lublin',
    top: '60%',
    left: '80%',
  },
  {
    name: 'Olsztyn',
    top: '20%',
    left: '60%',
  },
  {
    name: 'Białystok',
    top: '30%',
    left: '87%',
  },
];

export const TheMap = () => (
  <div style={{ position: 'relative' }}>
    <img style={{ width: '100%' }} src={theMap} alt="public speaking map" />
    {cities.map(city => (
      <TheMapDot key={city.name} top={city.top} left={city.left} />
    ))}
  </div>
);
