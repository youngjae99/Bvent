import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { parseTime } from '@/utils/parseTime';

type Props = {
  event: any;
};

// export const EventTitleWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   color: #EE5390;
//   font-size: 1.5rem;
// `;

const EventCard = (props: Props) => {
  console.log(props);
  const { event } = props;
  const time = parseTime(event.event_time);
  console.log(time);
  return (
    <Link href={`/event/${event?.event_title}`}>
      <p className="flex justify-center text-white cursor-pointer">{event?.event_title}</p>
    </Link>
  );
};

export default EventCard;
