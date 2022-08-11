import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Container } from '@components/container';
import EventDetailCard from '@components/eventPage/DetailedCard';
import Selector from '@components/dropdown';

type eventType = {
  event_start_time: string;
};

const Past: React.FC = () => {
  const [events, setEvents] = useState<eventType>([]);
  const [useFilter, setUseFilter] = useState(false);

  console.log(events);

  useEffect(() => {
    const getEventData = async () => {
      const res = await axios.get('https://bvent-seoul.web.app/tags/past');
      console.log(res);
      setEvents(res.data);
    };
    getEventData();
  }, []);

  const filterYear = (val) => {
    if (val == 1) {
      setUseFilter(true);
    }
  };

  const eventFilter = (key) => {
    const d = new Date(events[key]?.event_start_time);
    return d.getFullYear() === 2021;
  };

  return (
    <Container>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl">Past Events</h1>
        <img src="/images/search-bar.png" />
      </div>
      <div className="border-t-2 border-gray-500 my-5 text-white pt-2 flex justify-end">
        <Selector
          label="Any Year"
          options={['All', '2021', '2022']}
          handler={(x) => filterYear(x)}
        />
        <Selector
          label="Any Type"
          options={['All', '2022', '2021']}
          handler={() => alert('test')}
        />
        <Selector
          label="Any Host"
          options={['All', '2022', '2021']}
          handler={() => alert('test')}
        />
      </div>
      <div className="flex flex-row">
        <div className="text-center font-light py-5 flex-1">
          <div className="container mx-auto flex flex-col gap-2">
            {!useFilter
              ? Object.keys(events).map((key) => (
                  <EventDetailCard event={events[key]} />
                ))
              : Object.keys(events)
                  .filter(eventFilter)
                  .map((key) => <EventDetailCard event={events[key]} />)}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Past;
