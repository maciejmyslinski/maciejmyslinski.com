import React from 'react';
import { Helmet } from 'react-helmet';
import 'normalize.css';
import '../fonts/fonts';
import Wrapper from '../components/Wrapper/Wrapper';
import { H1 } from '../components/H1/H1';
import { H2 } from '../components/H2/H2';
import { H3 } from '../components/H3/H3';
import P from '../components/P/P';
import { Avatar } from '../components/Avatar/Avatar';
import Emoji from '../components/Emoji/Emoji';
import { TheSun } from '../components/TheSun/TheSun';
import { TheMap } from '../components/TheMap/TheMap';
import { Styles } from '../components/Styles/Styles';
import { SocialMedia } from '../components/SocialMedia/SocialMedia';
import { Section } from '../components/Section/Section';
import { OptimalLineLength } from '../components/OptimalLineLength/OptimalLineLength';
import { Event } from '../components/Event/Event';
import { Events } from '../components/Events/Events';

const socialMediaAccounts = [
  {
    name: 'youtube',
    url: 'https://youtube.com/maciejmyslinski',
  },
  {
    name: 'instagram',
    url: 'https://www.instagram.com/maciej.myslinski/',
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/maciejmyslinski/',
  },
  {
    name: 'twitter',
    url: 'https://twitter.com/maciejmyslinski',
  },
  {
    name: 'email',
    url: 'mailto:hello@maciejmyslinski.com',
  },
  {
    name: 'github',
    url: 'https://github.com/maciejmyslinski',
  },
];

const pastEvents = [
  {
    headline: '06.06 Poland, Poznań',
    topic: '“What I learned creating my first Open Source library”',
    name: 'chill.js',
    link:
      'https://web.facebook.com/netguru/photos/gm.1868374533213251/10156257742389795/?type=1&theater',
  },
  {
    headline: '27.08 Poland, Wrocław',
    topic: '“What I learned creating my first Open Source library”',
    name: 'meet.js',
    videoLink: 'https://web.facebook.com/hubert.zub/videos/1980027542053919/',
  },
  {
    headline: '31.08 Poland, Szczecin',
    topic: '"What I learned creating my first Open Source library"',
    name: 'meet.js',
    link: 'https://web.facebook.com/events/381649469036136/',
  },
  {
    headline: '17.09 Poland, Kraków',
    topic: '"What I learned creating my first Open Source library"',
    name: 'meet.js',
  },
  {
    headline: '26.09 Poland, Warsaw',
    topic: '"What I learned creating my first Open Source library"',
    name: 'dev.js',
    link: 'https://www.meetup.com/dev-js/events/251135731/',
    videoLink: 'https://www.facebook.com/devjspoland/videos/548311215612437/',
  },
  {
    headline: '29.09 Poland, Poznań',
    topic: '"What I learned creating my first Open Source library"',
    name: 'Netguru Tech Talks',
  },
  {
    headline: '29.09 Poland, Poznań',
    topic: '"Async"',
    name: 'Netguru Tech Talks',
  },
  {
    headline: '02.10 Poland, Gliwice',
    topic: '"What I learned creating my first Open Source library"',
    name: 'DevDuck',
    link: 'https://www.meetup.com/Devduck/events/254266703/',
  },
  {
    headline: '24.10 Poland, Lublin',
    topic: '"What I learned creating my first Open Source library"',
    name: 'G/Devs Lublin',
    link:
      'https://www.facebook.com/gdevslublin/photos/rpp.520958894721563/1182752718542174/?type=3&theater',
  },
  {
    headline: '25.10 Poland, Poznań',
    topic: '"What I learned creating my first Open Source library"',
    name: 'front.radar',
    link:
      'https://www.facebook.com/front.radar/photos/a.318446155553904/318446368887216/?type=3&theater',
  },
  {
    headline: '8.11 Poland, Olsztyn',
    topic: '“What I learned creating my first Open Source library”',
    name: 'meet.js',
    link: 'https://www.facebook.com/events/1432139586930676/',
  },
];

const upcomingEvents = [
  {
    headline: '14.11 Poland, Białystok',
    topic: '“What I learned creating my first Open Source library”',
    name: 'meet.js',
    link: 'https://www.facebook.com/events/583484972107142/',
  },
  {
    headline: '4-5.12 Poland, Warsaw',
    topic: '“The missing piece of testing”',
    name: 'Frontend Con 2018',
    link: 'https://frontend-con.io/speakers/',
  },
];

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
      <OptimalLineLength>
        <Avatar alt="avatar" />
        <H1>Maciej Myśliński</H1>
        <P textAlign="center" mb="7rem">
          Senior Frontend Developer and Team Leader at Netguru. Public Speaker,
          on a mission to speak at every frontend-related meetup in Poland{' '}
          <Emoji name="flag-poland" /> in 2018.
        </P>
      </OptimalLineLength>
      <SocialMedia>
        {socialMediaAccounts.map(account => (
          <a
            key={account.name}
            href={account.url}
            aria-label={account.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Emoji name={account.name} />
          </a>
        ))}
      </SocialMedia>
      <OptimalLineLength>
        <H2 id="public-speaking-events" mt="12rem" mb="5rem">
          Public speaking
        </H2>
        <TheMap />
      </OptimalLineLength>
    </Wrapper>

    <Section>
      <H3>Upcoming</H3>
      <Events>
        {upcomingEvents.map(event => (
          <Event key={`${event.headline}${event.topic}`} {...event} />
        ))}
      </Events>
    </Section>
    <Section>
      <H3>Past</H3>
      <Events>
        {pastEvents.map(event => (
          <Event key={`${event.headline}${event.topic}`} {...event} />
        ))}
      </Events>
    </Section>
    <Wrapper>
      <OptimalLineLength>
        <H2 id="bio">
          <Emoji name="waving-hand" />
          Bio
        </H2>
        <P>
          As a child, he dreamed of becoming a pilot. Hungry for the freedom of
          flying <Emoji name="airplane" />, he craved to learn everything
          required to control the plane. He wanted people to feel the peace of
          knowing he is going to be the one to take them home.
        </P>
        <P>
          At age 19 he didn't even know what the word ‘framework’ meant.
          Nevertheless, he sold his motorbike <Emoji name="motorcycle" />,
          purchased his first computer <Emoji name="laptop-computer" /> and
          started to learn coding.
        </P>
        <P>
          Today as a Senior Frontend Developer, Team Leader and the host of
          internal Frontend meetings at Netguru, he enjoys the freedom of
          building anything that the technology allows him to. His goal changed
          a little bit but the idea remained the same – he loves{' '}
          <Emoji name="red-heart" /> to give users a feeling of peace and
          security while taking infinite care about user experience he delivers.
        </P>
      </OptimalLineLength>
    </Wrapper>
  </Styles>
);
