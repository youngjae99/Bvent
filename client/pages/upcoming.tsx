import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Layout from '@/components/Layout';
import EventDetailCard from '@/components/pages/event/DetailedCard';
import Selector from '@/components/Dropdown';
import SearchBar from '@/components/pages/event/searchBar';
import EventAPI from '@/api/event';

const Upcoming: React.FC = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEventData = async () => {
      const eventList = await EventAPI.getWithTags('upcoming');
      setEvents(eventList);
    };
    getEventData();
  }, []);

  return (
    <Layout>
      <div className="flex flex-col items-center">
        <h1>Upcoming Events</h1>
        <SearchBar/>
      </div>
      <div className="border-t-2 border-gray-500 my-5 text-white pt-2 flex justify-end">
        <Selector label="Any Year" options={['All', '2022', '2021']} />
        <Selector label="Any Type" options={['All', '2022', '2021']} />
        <Selector label="Any Host" options={['All', '2022', '2021']} />
      </div>
      <div className="flex flex-row">
        <div className="text-center font-light py-5 flex-1">
          <div className="container mx-auto flex flex-col gap-2">
            {Object.keys(events).map((key) => (
              <EventDetailCard key={key} event={events[key]} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Upcoming;
