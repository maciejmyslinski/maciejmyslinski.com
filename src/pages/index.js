import React from 'react';
import { Helmet } from 'react-helmet';

export default () => (
  <div>
    <Helmet>
      <html lang="en" />
      <title>Maciej Myśliński – Senior Frontend Developer, Public Speaker.</title>
      <meta name="description" content="My mission in 2018 is to speak at every frontend-related meetup in Poland." />
    </Helmet>
    <h1>Maciej Myśliński</h1>
    <p>Senior Frontend Developer and Team Leader at Netguru. Public Speaker.</p>
    <p>My mission in 2018 is to speak at every frontend-related meetup in Poland.</p>
    <h2>Public speaking events</h2>
    <h3>Upcoming</h3>
    <ul>
      <li>Aug 27, 2018 – meet.js Wrocław</li>
      <li>Aug 31, 2018 – meet.js Szczecin</li>
      <li>Sep 25, 2018 – React Poznań</li>
      <li>Sep 26, 2018 – dev.js Warszawa</li>
    </ul>
    <h3>Past</h3>
    <ul>
      <li>Jun 6, 2018 – chill.js</li>
    </ul>
    <h2>Bio</h2>
    <p>
      As a child, he dreamed to become a pilot. Hungry to feel the freedom of
      flying, he craved to learn everything required to control the plane. He
      wanted people to feel peaceful knowing he will be the one taking them
      home.
    </p>
    <p>
      At age 19 he sold his motorbike, purchased his first computer and started
      to learn to program. Back then he didn't even know what the word
      'framework' means.
    </p>
    <p>
      Today as a Senior Frontend Developer, Team Leader, and internal Frontend
      meetings host at Netguru, he enjoys the freedom of building anything the
      technology allows him to. He continuously learns new technologies to build
      apps people love to use.
    </p>
  </div>
);
