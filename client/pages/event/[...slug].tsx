import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import { Container } from '@components/container';
import TitleBar from '@components/eventPage/subevent/TitleBar';
import { SubeventHeader } from '@components/eventPage/subevent/SubeventHeader';
import ReviewContainer from '@components/eventPage/subevent/review/ReviewContainer';

const SubEvent: React.FC = () => {
  const router = useRouter();
  const slug = (router.query.slug as string[]) || [];
  const event_title = slug[0];
  const subevent_id = slug[1];
  const [eventInfo, setEventInfo] = useState();
  const [eventReview, setEventReview] = useState();

  //   const { subevent_info, subevent_presenter, subevent_src, subevent_timme } = eventInfo;

  useEffect(() => {
    const getEventData = async () => {
      const res = await axios.get(
        `https://bvent-seoul.web.app/events/${event_title}/${subevent_id}`
      );
      setEventInfo(res.data);
    };
    const getEventReview = async () => {
        const res = await axios.get(
          `https://bvent-seoul.web.app/reviews/`
        );
        setEventReview(res.data[subevent_id]);
      };
    
    if (event_title) {
      getEventData();
      getEventReview();
    }
  }, [event_title]);

  return (
    <Container>
      {/* <h1 className="text-white">{event_title}</h1> */}
      <TitleBar backUrl={`/event/${event_title}`} />
      <SubeventHeader eventInfo={eventInfo} />
      <ReviewContainer review={eventReview}/>
    </Container>
  );
};

export default SubEvent;
