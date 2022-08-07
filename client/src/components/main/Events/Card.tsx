import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

type Props = {
  event: any;
};

const CardWrapper = styled.div`
  flex: 1 1 220px;
  max-width: 240px;
  margin-left: 16px;
  margin-bottom: 16px;
  padding: 16px;
  border-radius: 8px;
  box-shadow: rgb(0 0 0 / 6%) 0px 0px 10px;
  backdrop-filter: blur(8px);
  background: radial-gradient(
    circle at center bottom,
    rgba(137, 0, 246, 0.333),
    rgba(255, 255, 255, 0.06) 70%
  );
`;

const EventCard = (props: Props) => {
  console.log(props);
  return (
    <Link href={`/event/${props.event.id}`}>
      <CardWrapper className="py-2 bg-black text-white">
        <p className="font-semibold text-white">{props.event.title}</p>
        <p className="">{props.event.description}</p>
      </CardWrapper>
    </Link>
  );
};

export default EventCard;
