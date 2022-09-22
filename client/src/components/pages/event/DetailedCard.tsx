import React from 'react';
import Link from 'next/link';

import { getLocalTime, getOriginTime } from '@/utils/parseTime';
import { getImageURI } from '@/utils/getImageURI';
import { Event } from '@/types/event';

type Props = {
  event: Event;
};

const EventDetailCard = (props: Props) => {
  const { event } = props;

  return (
    <Link href={`/event/${event?.event_title}`}>
      <div className="flex flex-col items-start w-full px-4 py-2 text-white rounded-lg bg-darkgray hover:bg-darkgray-light cursor-pointer">
        <p className="text-2xl text-primary font-semibold">
          {event?.event_title}
        </p>
        <div className="flex flex-row gap-2 flex-1 w-full">
          <img
            src={getImageURI(event?.event_img)}
            width="120"
            height="70"
            className="m-2 rounded-md"
          />
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
