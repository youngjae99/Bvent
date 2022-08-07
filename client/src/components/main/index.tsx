import React from 'react';
import { useRecoilState } from 'recoil';

import { Button } from '@components';
import EventCard from './Events/Card';
import { eventState } from '@recoil/atoms/events';

export const Main: React.FC = () => {
  const [events, setEvents] = useRecoilState(eventState);

  console.log(events);

  return (
    <div className="text-center font-light py-5">
      <div className="container mx-auto flex flex-col gap-2">
        {events.map((event) => (
          <EventCard event={event} />
        ))}
      </div>
    </div>
  );
};
