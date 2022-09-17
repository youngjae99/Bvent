import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import styled from 'styled-components';
import { getImageURI } from '@/utils/getImageURI';

import { parseMainTabEventTime, parseTime } from '@/utils/parseTime';

type Props = {
  event: any;
};

const EventCard = (props: Props) => {
  const { event } = props;
  console.log(event);
  return (
    <Link href={`/event/${event?.event_title}`}>
      <div
        style={{
          width: '180px',
          height: '200px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '10px',
        }}
      >
        <Image src={getImageURI(event?.event_img)} width={180} height={135} />
        <p className="flex justify-center text-primary cursor-pointer">
          {event?.event_title}
        </p>
        <p>
          {parseMainTabEventTime(
            event?.event_start_time,
            event?.event_end_time,
          )}
        </p>
      </div>
    </Link>
  );
};

export default EventCard;
