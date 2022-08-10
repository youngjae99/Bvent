import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

type Props = {
  event: any;
};

export const EventTtileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  /* margin: 0 1rem; */
  padding: 0.8rem 1.4rem;
  font-size: 1.2rem;
  /* glass */
  background: linear-gradient(
    97.02deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  color: white;
  font-weight: 600;
  font-size: 1.5rem;
  backdrop-filter: blur(30px);
  border-radius: 30px;
  cursor: pointer;

  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  /* border-image-source: radial-gradient(
      100% 811.94% at 0% 0%,
      #f0194d 0%,
      rgba(255, 255, 255, 0.1) 100%
    ); */
  /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */ ;
`;

const EventCard = (props: Props) => {
  console.log(props);
  const { event } = props;
  return (
    <Link href={`/event/${event?.event_title}`}>
      <EventTtileWrapper>
        {event?.event_title}
        {/* <p className="font-semibold text-white">{event?.event_title}</p> */}
      </EventTtileWrapper>
    </Link>
  );
};

export default EventCard;
