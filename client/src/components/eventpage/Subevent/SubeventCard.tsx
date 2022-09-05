import React, { useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { CgProfile } from 'react-icons/cg';
import { BiChevronDown } from 'react-icons/bi';
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

const UserTimeWrapper = styled.div`
  text-align: center;
  width: 3rem;
  border-right: 1px dashed;
`;

const EventTimeWrapper = styled.div`
  text-align: center;
  width: 3rem;
`;

const EventTitle = styled.p`
  cursor: pointer;
  font-size: 1.2rem;
  transition: 0.2s ease-in-out;
  &:hover {
    color: #14de95;
  }
`;

const SubeventCard = (props: Props) => {
  const { subevent } = props;
  const showSpeaker = false;
  const [userDate, setUserDate] = React.useState('');
  const [userTime, setUserTime] = React.useState('');
  const [eventTime, setEventTime] = React.useState('');
  const [timezone] = useRecoilState(timezoneState);

  useEffect(() => {
    setEventTime(parseTime(subevent.subevent_time));
    setUserTime(convertTime(subevent.subevent_time, timezone));
    setUserDate(parseDate(subevent.subevent_time));
  }, [timezone]);

  return (
    <CardWrapper className="mb-3 text-white hover:bg-gray-900 transition-all">
      <div className="flex flex-row w-24 mr-2">
        <UserTimeWrapper>{userTime}</UserTimeWrapper>
        <EventTimeWrapper>{eventTime}</EventTimeWrapper>
      </div>
      <div className="mb-3 flex-1">
        <Link href={`/event/${subevent?.event_title}/${subevent?.subevent_id}`}>
          <EventTitle>{subevent?.subevent_info}</EventTitle>
        </Link>
        <div className="flex flex-row justify-between mt-2">
          <div className="flex flex-row gap-2 leading-4">
            <CgProfile />
            {subevent?.subevent_presenter.substring(0, 20)}
          </div>
          <div className="text-green-600 cursor-pointer">
            <BiChevronDown />
          </div>
        </div>
        {showSpeaker && <div>extra info about speaker</div>}
      </div>
    </CardWrapper>
  );
};

export default SubeventCard;
