import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { getImageURI } from '@/utils/getImageURI';

import { parseMainTabEventTime, parseTime } from '@/utils/parseTime';

type Props = {
  event: any;
};

const EventCard = (props: Props) => {
  const { event } = props;

  return (
    <Link href={`/event/${event?.event_title}`}>
      <div
        className="bg-white bg-opacity-10 hover:bg-opacity-20"
        style={{
          width: '230px',
          height: '200px',
          borderRadius: '10px',
          cursor: 'pointer',
        }}
      >
        <Image
          src={getImageURI(event?.event_img)}
          width={230}
          height={130}
          style={{ borderRadius: '10px 10px 0 0' }}
        />
        <div className="ml-2">
          <p className="flex justify-start text-primary cursor-pointer">
            {event?.event_title}
          </p>
          <p>
            {parseMainTabEventTime(
              event?.event_start_time,
              event?.event_end_time,
            )}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
