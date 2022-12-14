import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Layout from '@/components/Layout';
import EventDetailCard from '@/components/pages/event/DetailedCard';
import Selector from '@/components/Dropdown';
import {Event as EventType} from '@/types/event';
import SearchBar from '@/components/pages/event/searchBar';
import EventAPI from '@/api/event';

const defaultValue = [];

const Past: React.FC = () => {
  const [events, setEvents] = useState<EventType[]>(defaultValue);
  const [useFilter, setUseFilter] = useState(false);

  useEffect(() => {
    const getEventData = async () => {
      const eventList = await EventAPI.getWithTags('past');
      setEvents(eventList);
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
    <Layout>
      <div className="flex flex-col items-center">
        <h1>Past Events</h1>
        <SearchBar/>
      </div>
      <div className="border-t-2 border-glass1 my-5 text-white pt-2 flex justify-end">
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
                  <EventDetailCard key={key} event={events[key]} />
                ))
              : Object.keys(events)
                  .filter(eventFilter)
                  .map((key) => <EventDetailCard key={key} event={events[key]} />)}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Past;
