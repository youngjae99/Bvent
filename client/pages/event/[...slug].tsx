import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import { Container, Header, Main, Footer, Cards } from '@components';
import SubeventHeader from '@components/event/SubeventHeader';
import { SubeventImage } from '@components/event/SubeventImage';
import { parseEventTime } from '@utils/parseTime';
import { HiOutlineLink } from 'react-icons/hi';
import { CgProfile } from 'react-icons/cg';

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
      <SubeventHeader />
      <div className="text-white">
        <SubeventImage src="https://api.time.com/wp-content/uploads/2022/02/Kevin_Jones-9710.jpg?quality=85&crop=0px%2C808px%2C2732px%2C1428px&resize=1200%2C628&strip" />
        <p className="text-green-400 text-2xl">{eventInfo?.subevent_info}</p>
        <p>{parseEventTime(eventInfo?.subevent_time, 'UTC')}</p>

        <div className="flex flex-row gap-2 leading-4 mt-1">
          <CgProfile />
          {eventInfo?.subevent_presenter}
        </div>
        <a href={eventInfo?.subevent_src} className="mt-1">
          <HiOutlineLink />
        </a>
      </div>
      <div>Reviews</div>
    </Container>
  );
};

export default SubEvent;
