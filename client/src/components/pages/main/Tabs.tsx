import React, { Fragment, useState, useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { Tab } from '@headlessui/react';
import SwiperCore, { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { eventState } from '@/recoil/atoms/events';
import EventAPI from '@/api/event';
import EventCard from './EventCard';

const Tabs = () => {
  const [events, setEvents] = useRecoilState(eventState);
  const navPrevButton = useRef(null);
  const navNextButton = useRef(null);
  const [swiperSetting, setSwiperSetting] = useState<SwiperProps | null>(null);

  SwiperCore.use([Navigation, Scrollbar]);

  useEffect(() => {
    const getEventData = async () => {
      const res = await EventAPI.getAll();
      setEvents(res);
    };
    getEventData();
  }, []);

  useEffect(() => {
    if (!swiperSetting) {
      setSwiperSetting({
        spaceBetween: 10,
        slidesPerView: 'auto',
        navigation: {
          prevEl: navPrevButton.current,
          nextEl: navNextButton.current,
        },
        scrollbar: { draggable: true, el: null },
        onBeforeInit: (swiper: SwiperCore) => {
          if (typeof swiper.params.navigation !== 'boolean') {
            if (swiper.params.navigation) {
              swiper.params.navigation.prevEl = navPrevButton.current;
              swiper.params.navigation.nextEl = navNextButton.current;
            }
          }
          swiper.navigation.update();
        },
      });
    }
  }, [swiperSetting]);

  return (
    <StyledRoot>
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
          <button
            ref={navPrevButton}
            className="absolute z-10 left-2"
            style={{ height: '200px' }}
          >
            <img
              src="/icons/swiper-prev-icon.svg"
              alt="prevButton"
              height="32"
              width="32"
            />
          </button>
          <button
            ref={navNextButton}
            className="absolute z-10 right-2"
            style={{ height: '200px' }}
          >
            <img
              src="/icons/swiper-next-icon.svg"
              alt="nextButton"
              height="32"
              width="32"
            />
          </button>
          <Tab.Panel>
            <div className="flex flex-col items-end gap-2">
              {swiperSetting && (
                <Swiper {...swiperSetting}>
                  {events &&
                    Object.keys(events)
                      .filter((key) => events[key].event_tag === 'upcoming')
                      .map((key) => (
                        <SwiperSlide key={key}>
                          <EventCard key={key} event={events[key]} />
                        </SwiperSlide>
                      ))}
                </Swiper>
              )}
              <a href="/upcoming" className="text-white hover:text-primary">
                See more
              </a>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="flex flex-col items-end gap-2">
              {swiperSetting && (
                <Swiper {...swiperSetting}>
                  {events &&
                    Object.keys(events)
                      .filter((key) => events[key].event_tag === 'current')
                      .map((key) => (
                        <SwiperSlide key={key}>
                          <EventCard key={key} event={events[key]} />
                        </SwiperSlide>
                      ))}
                  {
                    // FIXME(aaron) : show this when there are no current events. should be a component
                    Object.keys(events).filter(
                      (key) => events[key].event_tag === 'current',
                    ).length === 0 && (
                      <div
                        className="flex justify-center items-center bg-darkgray rounded-lg"
                        style={{ height: '200px' }}
                      >
                        No ongoing events
                      </div>
                    )
                  }
                </Swiper>
              )}
              <a href="/current" className="text-white hover:text-primary">
                See more
              </a>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="flex flex-col items-end gap-2">
              <div className="contents">
                {swiperSetting && (
                  <Swiper {...swiperSetting}>
                    {events &&
                      Object.keys(events)
                        .filter((key) => events[key].event_tag === 'past')
                        .map((key) => (
                          <SwiperSlide key={key}>
                            <EventCard key={key} event={events[key]} />
                          </SwiperSlide>
                        ))}
                  </Swiper>
                )}
              </div>
              <a href="/past" className="text-white hover:text-primary">
                See more
              </a>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </StyledRoot>
  );
};

const StyledRoot = styled.div`
  .swiper {
    &-wrapper,
    &-container {
      width: 230px;
      margin: 0;
    }
    &-slide {
      width: 230px;
    }
    &-container {
      margin: 0 3.2rem;
    }
    &-button-disabled {
      visibility: hidden;
    }
  }
`;

export default Tabs;
