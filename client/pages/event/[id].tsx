import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';

import { Container } from '@components/container';
import SubeventCard from '@components/eventPage/subevent/SubeventCard';
import { EventTitleWrapper } from '@components/eventPage/Card';
import { useRecoilState } from 'recoil';
import { timezoneState } from '@recoil/atoms/timezone';

const Event: React.FC = () => {
  const router = useRouter();
  const event_title = router.query.id as string;
  const [eventInfo, setEventInfo] = useState();
  const [timezone] = useRecoilState(timezoneState);
  console.log(router.query.id);

  useEffect(() => {
    const getEventData = async () => {
      const res = await axios.get(
        `https://bvent-seoul.web.app/events/${event_title}`
      );
      console.log(res);
      setEventInfo(res.data);
    };
    if (event_title) {
      getEventData();
    }
  }, [event_title]);

  return (
    <Container>
      <div className="flex flex-row justify-center mb-4">
        <div className="flex flex-col justify-center items-end">
          <p className="text-2xl font-bold text-white text-center">
            Ongoing Conferences
          </p>
          <p className="text-white font-medium text-center">Timeline</p>
        </div>
      </div>
      <div className="m-8">
        <EventTitleWrapper>{event_title}</EventTitleWrapper>
      </div>
      <p className="text-white">{}</p>
      <div>
        <div className="flex flex-row w-24 mr-2 text-green-400 font-bold">
          <div className="w-12 text-center">{timezone}</div>
          <div className="w-12 text-center">GMT</div>
        </div>
        <div className="mb-3 flex-1"></div>
        {eventInfo &&
          Object.keys(eventInfo)
            .sort(
              (a, b) => eventInfo[a].subevent_time - eventInfo[b].subevent_time
            )
            .map((key) => <SubeventCard subevent={eventInfo[key]} />)}
      </div>
    </Container>
  );
};

export default Event;
