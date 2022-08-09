import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import { Container, Header, Main, Footer, Cards } from '@components';

const SubEvent: React.FC = () => {
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
      <h1 className="text-white">{event_title}</h1>
    </Container>
  );
};

export default SubEvent;
