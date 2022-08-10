import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { parseTime } from '@utils/parseTime';

type Props = {
  event: any;
};

export const EventTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  padding: 0.8rem 1.4rem;
  margin-bottom: 4px;
  /* background: linear-gradient(
    97.02deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.05) 100%
  ); */
  color: white;
  font-weight: 600;
  font-size: 1.2rem;
  cursor: pointer;

  /* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px); */
  /* $border: 5px; */
  /* border-radius: 24px; */
  border: solid 2px transparent;
  box-sizing: border-box;
  border-image-slice: 1;
  background-clip: padding-box;
  border-image-source: linear-gradient(to left, #743ad599, #d53a9d);

  transition: 0.1s ease-in-out;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const EventCard = (props: Props) => {
  console.log(props);
  const { event } = props;
  const time = parseTime(event.event_time);
  console.log(time);
  return (
    <Link href={`/event/${event?.event_title}`}>
      <EventTitleWrapper>{event?.event_title}</EventTitleWrapper>
    </Link>
  );
};

export default EventCard;
