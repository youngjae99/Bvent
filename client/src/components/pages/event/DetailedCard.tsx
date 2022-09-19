import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { getLocalTime, getOriginTime, parseTime } from '@/utils/parseTime';
import {getImageURI} from '@/utils/getImageURI';

type Props = {
  event: any;
};

const EventDetailCard = (props: Props) => {
  const { event } = props;
  const time = parseTime(event.event_time);
  console.log(event);
  return (
    <Link href={`/event/${event?.event_title}`}>
      <div className="flex flex-col items-start w-full px-4 py-2 text-white bg-gray-900 rounded-lg hover:bg-gray-800">
        <p className="text-2xl text-primary font-semibold">
          {event?.event_title}
        </p>
        <div className="flex flex-row gap-2 flex-1 w-full">
          <img src={getImageURI(event?.event_img)} width="120" height="70" className='m-2 rounded-md'/>
          <div className="flex flex-col items-start w-full">
            <p>{getOriginTime(event.event_start_time)}</p>
            <p>{getLocalTime(event.event_start_time)}</p>
            <br />
            <p>{event?.event_type}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventDetailCard;
