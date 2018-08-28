import React from 'react';
import { Helmet } from 'react-helmet';
import { injectGlobal } from 'styled-components';
import 'normalize.css';
import Wrapper from '../components/Wrapper/Wrapper';
import H1 from '../components/H1/H1';
import H2 from '../components/H2/H2';
import H3 from '../components/H3/H3';
import P from '../components/P/P';
import Avatar from '../components/Avatar/Avatar';
import Emoji from '../components/Emoji/Emoji';

injectGlobal`
  html {
    font-size: 62.5%;

    @media (min-width: 52em) {
      font-size: 100%;
    }
  }

  body {
    font-family: 'Lato', sans-serif;
    font-size: 1.6rem;
    line-height: 1.42;
    color: rgba(0, 0, 0, .87);
  }

  *, *:after, *:before {
    box-sizing: border-box;
  }
`;

export default props => (
  <Wrapper>
    <Helmet>
      <html lang="en" />
      <title>
        Maciej Myśliński – Senior Frontend Developer, Public Speaker.
      </title>
      <meta
        name="description"
        content="My mission in 2018 is to speak at every frontend-related meetup in Poland."
      />
    </Helmet>
    <Avatar />
    <H1>Maciej Myśliński</H1>
    <P>
      <Emoji name="man-technologist" />
      Senior Frontend Developer and Team Leader at Netguru. Public Speaker.
    </P>
    <P>
      On a mission to speak at every frontend-related meetup in Poland{' '}
      <Emoji name="flag-poland" /> in 2018.
    </P>
    <H2>
      <Emoji name="studio-microphone" />
      Public speaking events
    </H2>
    <H3>Upcoming</H3>
    <ul>
      <li>Aug 31, 2018 – meet.js Szczecin</li>
      <li>Sep 19, 2018 – meet.js Katowice</li>
      <li>Sep 25, 2018 – React Poznań</li>
      <li>Sep 26, 2018 – dev.js Warszawa</li>
      <li>Oct 2, 2018 – DevDuck</li>
      <li>Oct 24, 2018 – G/Devs Lublin</li>
      <li>Nov 28, 2018 – meet.js Białystok</li>
      <li>Dec, 2018 – WarsawJS</li>
    </ul>
    <H3>Past</H3>
    <ul>
      <li>Aug 27, 2018 – meet.js Wrocław</li>
      <li>Jun 6, 2018 – chill.js</li>
    </ul>
    <H2>
      <Emoji name="waving-hand" />
      Bio
    </H2>
    <P>
      As a child, he dreamed of becoming a pilot. Hungry for the freedom of
      flying <Emoji name="airplane" />, he craved to learn everything required
      to control the plane. He wanted people to feel the peace of knowing he is
      going to be the one to take them home.
    </P>
    <P>
      At age 19 he didn't even know what the word ‘framework’ meant.
      Nevertheless, he sold his motorbike <Emoji name="motorcycle" />, purchased
      his first computer <Emoji name="laptop-computer" /> and started to learn
      coding.
    </P>
    <P>
      Today as a Senior Frontend Developer, Team Leader, and internal Frontend
      meetings host at Netguru, he enjoys the freedom of building anything that
      the technology allows him to. He continuously learns new technologies to
      build apps people would love <Emoji name="red-heart" /> to use.
    </P>
  </Wrapper>
);
