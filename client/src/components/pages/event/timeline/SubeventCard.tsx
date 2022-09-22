import React, { useState, useEffect, ReactNode } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { parseTime, parseDate } from '@/utils/parseTime';
import { useRecoilState } from 'recoil';
import { convertTime } from '@/utils/parseTime';
import { timezoneState } from '@/recoil/atoms/timezone';
import { Subevent } from '@/types/event';

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
`;

const TimeWrapper = (props: { isOngoing: boolean; children: ReactNode }) => {
  if (props.isOngoing) {
    return (
      <div className="flex flex-row w-24 mr-2 text-primary">
        {props.children}
      </div>
    );
  }
  return <div className="flex flex-row w-24 mr-2">{props.children}</div>;
};

const UserTime = styled.div`
  text-align: center;
  width: 3rem;
`;

const EventTime = styled.div`
  text-align: center;
  width: 3rem;
`;

const EventTitle = styled.p`
  cursor: pointer;
  font-size: 1.2rem;
  transition: 0.2s ease-in-out;
`;

const TimelineSubevent = (props: { subevent: Subevent }) => {
  const { subevent } = props;
  const [, setUserDate] = useState('');
  const [userTime, setUserTime] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [timezone] = useRecoilState(timezoneState);

  const isOngoing = true;

  useEffect(() => {
    setEventTime(parseTime(subevent.subevent_time));
    setUserTime(convertTime(subevent.subevent_time, timezone));
    setUserDate(parseDate(subevent.subevent_time));
  }, [timezone]);

  return (
    <CardWrapper className="mb-3 text-white transition-all">
      <TimeWrapper isOngoing={isOngoing}>
        <UserTime>{userTime}</UserTime>
        <EventTime>{eventTime}</EventTime>
      </TimeWrapper>
      <div className="mb-3 flex-1 rounded-lg hover:bg-gray-900">
        <Link href={`/event/${subevent?.event_title}/${subevent?.subevent_id}`}>
          <EventTitle>{subevent?.subevent_title}</EventTitle>
        </Link>
        <div className="flex flex-row justify-between mt-2">
          <div className="flex flex-row gap-2 leading-4">
            <UserCircleIcon className="w-5" />
            {subevent?.subevent_presenter.substring(0, 20)}
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default TimelineSubevent;
