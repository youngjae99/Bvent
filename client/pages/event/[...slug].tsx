import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import axios from 'axios';

import Layout from '@/components/Layout';
import TitleBar from '@/components/eventpage/Subevent/TitleBar';
import { SubeventHeader } from '@/components/eventpage/Subevent/SubeventHeader';
import ReviewContainer from '@/components/eventpage/Subevent/Review/ReviewContainer';

const fetcher = (url) => axios.get(url).then((res) => res.data);

const SubEvent: React.FC = () => {
  const router = useRouter();
  const slug = (router.query.slug as string[]) || [];
  const event_title = slug[0];
  const subevent_id = slug[1];
  const [eventInfo, setEventInfo] = useState();
  const { data } = useSWR(`https://bvent-seoul.web.app/reviews/`, fetcher);

  useEffect(() => {
    const getEventData = async () => {
      const res = await axios.get(
        `https://bvent-seoul.web.app/events/${event_title}/${subevent_id}`
      );
      setEventInfo(res.data);
    };

    if (event_title) {
      getEventData();
      //   getEventReview();
    }
  }, [event_title]);

  return (
    <Layout>
      {/* <h1 className="text-white">{event_title}</h1> */}
      <TitleBar title="Session Reviews" backUrl={`/event/${event_title}`} />
      <SubeventHeader eventInfo={eventInfo} />
      <ReviewContainer
        event_name={event_title}
        subevent_id={subevent_id}
        review={data ? data[subevent_id] : []} 
      />
    </Layout>
  );
};

export default SubEvent;
