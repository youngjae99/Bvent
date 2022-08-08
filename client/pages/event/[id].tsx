import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import { Container, Header, Main, Footer, Cards } from '@components';

const Event: React.FC = () => {
  const router = useRouter();
  const event_title = router.query.id as string;
  const [eventInfo, setEventInfo] = useState();
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
      <Header />
      <h1 className="text-white">{event_title}</h1>
      <p className="text-white">{}</p>
      <div>
        {eventInfo &&
          Object.keys(eventInfo).map((key) => (
            <p className="text-white">{eventInfo[key].subevent_info}</p>
          ))}
      </div>
    </Container>
  );
};

export default Event;
