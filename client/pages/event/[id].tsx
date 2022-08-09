import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';

import { Container, Header, Main, Footer, Cards } from '@components';
import SubeventCard from '@components/event/SubeventCard';
import { EventTtileWrapper } from '@components/main/Events/Card';

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
      {/* <h1 className="text-white"></h1> */}
      <EventTtileWrapper>{event_title}</EventTtileWrapper>
      <p className="text-white">{}</p>
      <div>
        {eventInfo &&
          Object.keys(eventInfo).map((key) => (
            // <Link href={`/event/subevent/${eventInfo[key].subevent_id}`}>
            //   <p className="text-white my-3">{eventInfo[key].subevent_info}</p>
            // </Link>
            <SubeventCard subevent={eventInfo[key]} />
          ))}
      </div>
    </Container>
  );
};

export default Event;
