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
import avatar from '../images/avatar.png';

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
    <Avatar src={avatar} />
    <H1>Maciej Myśliński</H1>
    <P>Senior Frontend Developer and Team Leader at Netguru. Public Speaker.</P>
    <P>
      On a mission to speak at every frontend-related meetup in Poland in 2018.
    </P>
    <H2>Public speaking events</H2>
    <H3>Upcoming</H3>
    <ul>
      <li>Aug 27, 2018 – meet.js Wrocław</li>
      <li>Aug 31, 2018 – meet.js Szczecin</li>
      <li>Sep 25, 2018 – React Poznań</li>
      <li>Sep 26, 2018 – dev.js Warszawa</li>
    </ul>
    <H3>Past</H3>
    <ul>
      <li>Jun 6, 2018 – chill.js</li>
    </ul>
    <H2>Bio</H2>
    <P>
      As a child, he dreamed to become a pilot. Hungry to feel the freedom of
      flying, he craved to learn everything required to control the plane. He
      wanted people to feel peaceful knowing he will be the one taking them
      home.
    </P>
    <P>
      At age 19 he sold his motorbike, purchased his first computer and started
      to learn to program. Back then he didn't even know what the word
      ‘framework’ means.
    </P>
    <P>
      Today as a Senior Frontend Developer, Team Leader, and internal Frontend
      meetings host at Netguru, he enjoys the freedom of building anything the
      technology allows him to. He continuously learns new technologies to build
      apps people love to use.
    </P>
  </Wrapper>
);
