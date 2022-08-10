import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import axios from 'axios';

import { Button } from '@components/button';
import EventCard from '../eventPage/Card';
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
    <div className="flex flex-row">
      <div
      className="ml-6 mr-5"
        style={{
          height: '70vh',
          width: '2px',
          background:
            'linear-gradient(180deg, #F0194D 0%, #7B33FF 50.52%, #14DE95 100%)',
        }}
      />
      <div className="text-center font-light py-5 flex-1">
        <div className="container mx-auto flex flex-col gap-2">
          {Object.keys(events).map((key) => (
            <EventCard event={events[key]} />
          ))}
        </div>
      </div>
    </div>
  );
};
