import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import axios from 'axios';

import { Button } from '@components/Button';
import EventCard from '../eventpage/Card';
import { eventState } from '@recoil/atoms/events';
import { GradientText } from '@components/Text/GradientText';

export const Main: React.FC = () => {
  const [events, setEvents] = useRecoilState(eventState);

  console.log(events);

  useEffect(() => {
    const getEventData = async () => {
      const res = await axios.get(`https://bvent-seoul.web.app/events`);
      setEvents(res.data);
      console.log(events);
    };
    getEventData();
  }, []);

  return (
    <div className="flex flex-row">
      <div
        className="ml-6 mr-5"
        style={{
          height: 'auto',
          width: '2px',
          background:
            'linear-gradient(180deg, #F0194D00 0%, #F0194D 5%, #7B33FF 50.52%, #14DE95 100%)',
        }}
      />
      <div className="text-center font-light py-5 flex-1">
        <GradientText
          style={{ textAlign: 'left', width: '100%', fontSize: '1.5rem' }}
        >
          Ongoing Events
        </GradientText>
        <div className="container mx-auto flex flex-col gap-2">
          {events &&
            Object.keys(events)
              .filter((key) => events[key].event_tag === 'current')
              .map((key) => <EventCard event={events[key]} />)}
          <a href="/now" className="text-white text-right">
            see more
          </a>
        </div>

        <div className="container mx-auto mt-10 flex flex-col gap-2">
          <GradientText
            style={{ textAlign: 'left', width: '100%', fontSize: '1.5rem' }}
          >
            Past Events
          </GradientText>
          {events &&
            Object.keys(events)
              .filter((key) => events[key].event_tag === 'past')
              .map((key) => <EventCard event={events[key]} />)}
          <a href="/past" className="text-white text-right">
            see more
          </a>
        </div>

        <div className="container mx-auto mt-10 flex flex-col gap-2">
          <GradientText
            style={{ textAlign: 'left', width: '100%', fontSize: '1.5rem' }}
          >
            Upcoming Events
          </GradientText>
          {events &&
            Object.keys(events)
              .filter((key) => events[key].event_tag === 'future')
              .map((key) => <EventCard event={events[key]} />)}
          <a href="/future" className="text-white text-right">
            see more
          </a>
        </div>
      </div>
    </div>
  );
};
