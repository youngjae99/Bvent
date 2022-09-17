import React, { Fragment, useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { Tab } from '@headlessui/react';

import { eventState } from '@/recoil/atoms/events';
import EventAPI from '@/api/event';
import EventCard from './EventCard';

const Tabs = () => {
  const [events, setEvents] = useRecoilState(eventState);

  useEffect(() => {
    const getEventData = async () => {
      const res = await EventAPI.getAll();
      setEvents(res);
    };
    getEventData();
  }, []);

  console.log(events);

  return (
    <Tab.Group>
      <Tab.List className="text-white">
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={
                selected
                  ? 'border border-primary text-white mr-2 p-3 rounded-lg'
                  : 'border border-white text-white mr-2 p-3 rounded-lg'
              }
            >
              Upcoming
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={
                selected
                  ? 'border border-primary text-white mr-2 p-3 rounded-lg'
                  : 'border border-white text-white mr-2 p-3 rounded-lg'
              }
            >
              Current
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={
                selected
                  ? 'border border-primary text-white mr-2 p-3 rounded-lg'
                  : 'border border-white text-white mr-2 p-3 rounded-lg'
              }
            >
              Past
            </button>
          )}
        </Tab>
      </Tab.List>
      <Tab.Panels className="text-white mt-10">
        <Tab.Panel>
          <div className="flex flex-row gap-2">
            {events &&
              Object.keys(events)
                .filter((key) => events[key].event_tag === 'future')
                .map((key) => <EventCard key={key} event={events[key]} />)}
          </div>
        </Tab.Panel>
        <Tab.Panel>
          <div className="flex flex-row gap-2">
            {events &&
              Object.keys(events)
                .filter((key) => events[key].event_tag === 'current')
                .map((key) => <EventCard key={key} event={events[key]} />)}
          </div>
        </Tab.Panel>
        <Tab.Panel>
          <div className="flex flex-row gap-2">
            {events &&
              Object.keys(events)
                .filter((key) => events[key].event_tag === 'past')
                .map((key) => <EventCard key={key} event={events[key]} />)}
          </div>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};
export default Tabs;
