import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import { Container, Header, Main, Footer, Cards } from '@components';
import TitleBar from '@components/EventPage/Subevent/TitleBar';
import { SubeventHeader } from '@components/EventPage/Subevent/SubeventHeader';
import ReviewContainer from '@components/EventPage/Subevent/ReviewContainer';

const SubEvent: React.FC = () => {
  const router = useRouter();
  const slug = (router.query.slug as string[]) || [];
  const event_title = slug[0];
  const subevent_id = slug[1];
  const [eventInfo, setEventInfo] = useState();

  //   const { subevent_info, subevent_presenter, subevent_src, subevent_timme } = eventInfo;

  useEffect(() => {
    const getEventData = async () => {
      const res = await axios.get(
        `https://bvent-seoul.web.app/events/${event_title}/${subevent_id}`
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
      {/* <h1 className="text-white">{event_title}</h1> */}
      <TitleBar backUrl={`/event/${event_title}`} />
      <SubeventHeader eventInfo={eventInfo} />
      <ReviewContainer eventInfo={eventInfo}/>
    </Container>
  );
};

export default SubEvent;
