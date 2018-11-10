import React from 'react';
import { EventCard } from './EventCard';
import { EventHeadline } from './EventHeadline';
import { EventTopic } from './EventTopic';
import { EventName } from './EventName';
import { EventLink } from './EventLink';
import { EventVideoLink } from './EventVideoLink';

export const Event = ({ headline, topic, name, link, videoLink }) => (
  <EventCard>
    <EventHeadline>{headline}</EventHeadline>
    <EventTopic>{topic}</EventTopic>
    <EventName>{name}</EventName>
    {!videoLink &&
      link && (
        <EventLink
          href={link}
          target="_blank"
          aria-label={`read more about ${headline} ${name}`}
          rel="noopener noreferrer"
        />
      )}
    {videoLink && (
      <EventVideoLink
        href={videoLink}
        aria-label={`watch a recording of ${headline} ${name}`}
        target="_blank"
        rel="noopener noreferrer"
      />
    )}
  </EventCard>
);
