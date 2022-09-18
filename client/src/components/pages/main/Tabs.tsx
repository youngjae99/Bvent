import React, { Fragment, useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import Image from 'next/image';

import { Tab } from '@headlessui/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { eventState } from '@/recoil/atoms/events';
import EventAPI from '@/api/event';
import EventCard from './EventCard';

const Tabs = () => {
  const [events, setEvents] = useRecoilState(eventState);
  const navPrevButton = React.useRef(null);
  const navNextButton = React.useRef(null);
  // const paginationLabel = React.useRef<HTMLHeadingElement>(null);

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
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={2}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              navigation={{
                prevEl: navPrevButton.current,
                nextEl: navNextButton.current,
              }}
              style={{ width:"100%"}}
            >
              {events &&
                Object.keys(events)
                  .filter((key) => events[key].event_tag === 'future')
                  .map((key) => (
                    <SwiperSlide key={key}>
                      <EventCard key={key} event={events[key]} />
                    </SwiperSlide>
                  ))}
            </Swiper>
          </div>
        </Tab.Panel>
        <Tab.Panel>
          <div className="flex flex-row gap-2">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={100}
              slidesPerView={3}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              navigation={{
                prevEl: navPrevButton.current,
                nextEl: navNextButton.current,
              }}
              // onBeforeInit={(swiper) => {
              //   swiper.params.navigation.prevEl = navPrevButton.current;
              //   swiper.params.navigation.nextEl = navNextButton.current;
              //   // swiper.activeIndex = mainImageIndex;
              //   swiper.navigation.update();
              // }}
            >
              {events &&
                Object.keys(events)
                  .filter((key) => events[key].event_tag === 'current')
                  .map((key) => (
                    <SwiperSlide key={key}>
                      <EventCard key={key} event={events[key]} />
                    </SwiperSlide>
                  ))}
              <button ref={navPrevButton}>
                <img
                  src="/icons/swiper-prev-icon.svg"
                  alt="prevButton"
                  height="62"
                  width="62"
                />
              </button>
              <button ref={navNextButton}>
                <img
                  src="/icons/swiper-next-icon.svg"
                  alt="nextButton"
                  height="62"
                  width="62"
                />
              </button>
            </Swiper>
          </div>
        </Tab.Panel>
        <Tab.Panel>
          <div className="flex flex-row gap-2 text-white">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={2}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              navigation={{
                prevEl: navPrevButton.current,
                nextEl: navNextButton.current,
              }}
              // onBeforeInit={(swiper) => {
              //   swiper.params.navigation.prevEl = navPrevButton.current;
              //   swiper.params.navigation.nextEl = navNextButton.current;
              //   // swiper.activeIndex = mainImageIndex;
              //   swiper.navigation.update();
              // }}
            >
              {events &&
                Object.keys(events)
                  .filter((key) => events[key].event_tag === 'past')
                  .map((key) => (
                    <SwiperSlide key={key}>
                      <EventCard key={key} event={events[key]} />
                    </SwiperSlide>
                  ))}
              <button ref={navPrevButton}>
                <img
                  src="/icons/swiper-prev-icon.svg"
                  alt="prevButton"
                  height="62"
                  width="62"
                />
              </button>
              <button ref={navNextButton}>
                <img
                  src="/icons/swiper-next-icon.svg"
                  alt="nextButton"
                  height="62"
                  width="62"
                />
              </button>
            </Swiper>
          </div>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};
export default Tabs;
