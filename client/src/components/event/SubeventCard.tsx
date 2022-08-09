import React, { useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { CgProfile } from 'react-icons/cg';
import { BiChevronDown } from 'react-icons/bi';

type Props = {
  subevent: any;
};

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
`;

const UserTimeWrapper = styled.div`
  width: 100px;
`;

const EventTimeWrapper = styled.div`
  width: 100px;
`;

const SubeventCard = (props: Props) => {
  console.log(props);
  const { subevent } = props;
  const showSpeaker = false;
  const [userTime, setUserTime] = React.useState('');
  const [eventTime, setEventTime] = React.useState('');

  useEffect(() => {
    const time = subevent?.subevent_date;
    setEventTime(time);
    setUserTime(time);
  }, []);

  return (
    <CardWrapper className="mb-3 text-white">
      <div className="flex flex-row">
        <UserTimeWrapper>{userTime}</UserTimeWrapper>
        <EventTimeWrapper>{eventTime}</EventTimeWrapper>
      </div>
      <div>
        <Link href={`/event/subevent/${subevent?.subevent_id}`}>
          <p className="text-xl">{subevent?.subevent_info}</p>
        </Link>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-2">
            <CgProfile />
            speaker
          </div>
          <div className="text-green-600 cursor-pointer">
            <BiChevronDown />
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default SubeventCard;
