import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import { Container, Header, Main, Footer, Cards } from '@components';

const SubEvent: React.FC = () => {
  const router = useRouter();
  const slug = (router.query.slug as string[]) || []
  const event_title = slug[0]
  const subevent_id = slug[1];
  const [eventInfo, setEventInfo] = useState();

  const { subevent_info, subevent_presenter, subevent_src, subevent_timme } = eventInfo;

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
      <h1 className="text-white">{event_title}</h1>
      <p className="text-white">{subevent_id}</p>
      <img src="https://api.time.com/wp-content/uploads/2022/02/Kevin_Jones-9710.jpg?quality=85&crop=0px%2C808px%2C2732px%2C1428px&resize=1200%2C628&strip"></img>
      <div className="text-white">
        <p>{eventInfo?.subevent_info}</p>
        <p>{eventInfo?.subevent_time}</p>
        <p>{eventInfo?.subevent_src}</p>
        <p>{eventInfo?.subevent_presenter}</p>
      </div>
      <div>
        //Comments
        Reviews
      </div>
    </Container>
  );
};

export default SubEvent;
