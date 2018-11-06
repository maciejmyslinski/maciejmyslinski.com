import React from 'react';
import { Helmet } from 'react-helmet';
import TweetEmbed from 'react-tweet-embed';
import 'normalize.css';
import '../fonts/fonts';
import Wrapper from '../components/Wrapper/Wrapper';
import { H1 } from '../components/H1/H1';
import H2 from '../components/H2/H2';
import H3 from '../components/H3/H3';
import P from '../components/P/P';
import { Avatar } from '../components/Avatar/Avatar';
import Emoji from '../components/Emoji/Emoji';
import { TheSun } from '../components/TheSun/TheSun';
import { TheMap } from '../components/TheMap/TheMap';
import { Ornament } from '../components/Ornament/Ornament';
import { Styles } from '../components/Styles/Styles';

export default props => (
  <Styles> 
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
      <TheSun />
      <Ornament top="1.5rem" left="3vw" />
      <Ornament top="7rem" left="80vw" width="6vw" />
      <Ornament top="30rem" left="90vw" width="12vw" />
      <Ornament top="36rem" left="12vw" width="8vw" />
      <Avatar alt="avatar" />
      <H1>Maciej Myśliński</H1>
      <P textAlign="center" mb="7rem">
        Senior Frontend Developer and Team Leader at Netguru. Public Speaker, on
        a mission to speak at every frontend-related meetup in Poland{' '}
        <Emoji name="flag-poland" /> in 2018.
      </P>
      <H2 id="public-speaking-events">
        <Emoji name="studio-microphone" />
        Where I spoke
      </H2>
      <TheMap />
      <H3>Upcoming</H3>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://web.facebook.com/events/381649469036136/"
          >
            Aug 31, 2018 – meet.js Szczecin
          </a>
        </li>
        <li>Sep 19, 2018 – meet.js Katowice</li>
        <li>Sep 25, 2018 – React Poznań</li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.meetup.com/dev-js/events/251135731/"
          >
            Sep 26, 2018 – dev.js Warszawa
          </a>
        </li>
        <li>Oct 2, 2018 – DevDuck</li>
        <li>Oct 24, 2018 – dev.js Lublin</li>
        <li>Nov 28, 2018 – meet.js Białystok</li>
        <li>Dec, 2018 – WarsawJS</li>
      </ul>
      <H3>Past</H3>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://web.facebook.com/hubert.zub/videos/1980027542053919/?__xts__[0]=68.ARDr4hkBDBRX--6TLQ944nGkXY4w2YwLjcP6_zOqTU3Nb4pkIm9Uc_E9uaVWx_9sQ_x4bdaxGuV8iNom179Ydz-5mCal-tsu4by7yzVVBKX68Oxrd8SW0UPKTFhOUDXxxZ5em4c&__tn__=-R"
          >
            Aug 27, 2018 – meet.js Wrocław
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://web.facebook.com/netguru/photos/gm.1868374533213251/10156257742389795/?type=1&theater"
          >
            Jun 6, 2018 – chill.js
          </a>
        </li>
      </ul>
      <H2 id="others-about-me">
        <Emoji name="raising-hands" />
        Others about me
      </H2>
      <TweetEmbed id="1034202065990340608" />
      <H2 id="bio">
        <Emoji name="waving-hand" />
        Bio
      </H2>
      <P>
        As a child, he dreamed of becoming a pilot. Hungry for the freedom of
        flying <Emoji name="airplane" />, he craved to learn everything required
        to control the plane. He wanted people to feel the peace of knowing he
        is going to be the one to take them home.
      </P>
      <P>
        At age 19 he didn't even know what the word ‘framework’ meant.
        Nevertheless, he sold his motorbike <Emoji name="motorcycle" />,
        purchased his first computer <Emoji name="laptop-computer" /> and
        started to learn coding.
      </P>
      <P>
        Today as a Senior Frontend Developer, Team Leader and the host of
        internal Frontend meetings at Netguru, he enjoys the freedom of building
        anything that the technology allows him to. His goal changed a little
        bit but the idea remained the same – he loves <Emoji name="red-heart" />{' '}
        to give users a feeling of peace and security while taking infinite care
        about user experience he delivers.
      </P>
    </Wrapper>
  </Styles>
);
