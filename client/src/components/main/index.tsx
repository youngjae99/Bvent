import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import axios from 'axios';

import { Button } from '@components';
import EventCard from './Events/Card';
import { eventState } from '@recoil/atoms/events';

export const Main: React.FC = () => {
  const [events, setEvents] = useRecoilState(eventState);

  console.log(events);

  useEffect(() => {
    const getEventData = async () => {
      const res = await axios.get('https://bvent-seoul.web.app/events/');
      console.log(res);
      setEvents(res.data);
    };
    getEventData();
  }, []);

  return (
    <div className="text-center font-light py-5">
      <div className="container mx-auto flex flex-col gap-2">
        {Object.keys(events).map((key) => (
          <EventCard event={events[key]} />
        ))}
      </div>
    </div>
  );
};
