import React, { useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { CgProfile } from 'react-icons/cg';
import { BiChevronDown } from 'react-icons/bi';

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
    const time = new Date(subevent?.subevent_time);
    setEventTime(time.getDate());
    setUserTime(time.getDate());
  }, []);

  return (
    <CardWrapper className="mb-3 text-white">
      <div className="flex flex-row w-40">
        <UserTimeWrapper>{userTime}</UserTimeWrapper>
        <EventTimeWrapper>{eventTime}</EventTimeWrapper>
      </div>
      <div className="mb-3 flex-1">
        <Link href={`/event/${subevent?.event_title}/${subevent?.subevent_id}`}>
          <p className="text-xl">{subevent?.subevent_info}</p>
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
