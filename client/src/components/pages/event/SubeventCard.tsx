import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import {
  UserCircleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@heroicons/react/24/outline';
import { parseTime, parseDate } from '@/utils/parseTime';
import { useRecoilState } from 'recoil';
import { convertTime } from '@/utils/parseTime';
import { timezoneState } from '@/recoil/atoms/timezone';

type Props = {
  subevent: any;
};

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
`;

const TimeWrapper = (props: any) => {
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
  /* border-right: 1px dashed; */
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

const DropdownWrapper = (props: any) => {
  return (
    <div className="flex gap-2 pl-6 py-2">
      <img src="/icons/hashtag_icon.svg" />
      {props.children}
    </div>
  );
};

const SubeventCard = (props: Props) => {
  const { subevent } = props;
  const [showDropdown, setShowDropdown] = useState(false);
  const [userDate, setUserDate] = useState('');
  const [userTime, setUserTime] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [timezone] = useRecoilState(timezoneState);

  const isOngoing = true;

  console.log(subevent);

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
          <EventTitle>{subevent?.subevent_info}</EventTitle>
        </Link>
        <div className="flex flex-row justify-between mt-2">
          <div className="flex flex-row gap-2 leading-4">
            <UserCircleIcon className="w-5" />
            {subevent?.subevent_presenter.substring(0, 20)}
          </div>
          <div
            className="text-secondary cursor-pointer"
            onClick={() => setShowDropdown((prev) => !prev)}
          >
            {showDropdown ? (
              <ChevronUpIcon className="w-5" />
            ) : (
              <ChevronDownIcon className="w-5" />
            )}
          </div>
        </div>
        {showDropdown && (
          <DropdownWrapper>subevent topic is shown here</DropdownWrapper>
        )}
      </div>
    </CardWrapper>
  );
};

export default SubeventCard;
