import React from 'react';
import styled from 'styled-components';
import { parseEventTime } from '@/utils/parseTime';
import { EventImage } from './EventImage';
import { getImageURI } from '@/utils/getImageURI';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { Event } from '@/types/event';

type Props = {
  eventInfo: Event;
};

const StyledInfoWrapper = styled.div`
  position: sticky;
  top: 0px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
  padding: 0.5rem;
  margin: 10px 0;
  border: 1px solid rgba(84, 84, 88, 0.65);
  border-radius: 10px;
`;

interface TimeWrapperProps {
  startTime: number;
  endTime?: number;
}

// FIXME(aaron): should add endTime
const TimeWrapper = ({ startTime, endTime }: TimeWrapperProps) => {
  return (
    <div className="flex flex-row items-center gap-2 leading-4 mt-1">
      <CalendarIcon style={{ width: '20px' }} />
      {parseEventTime(startTime, 'UTC')}
    </div>
  );
};

export const EventHeader = (props: Props) => {
  const { eventInfo } = props;

  return (
    <>
      <EventImage
        src={
          eventInfo
            ? getImageURI(eventInfo.event_img)
            : 'https://i0.wp.com/oyaschool.com/wp-content/uploads/2018/12/conferences15.jpg?fit=600%2C315&ssl=1'
        }
      />
      <StyledInfoWrapper className="text-white bg-black flex flex-col sticky top-16">
        <p className="text-primary text-2xl">
          {eventInfo?.event_title.slice(0, 60)}
        </p>
        <TimeWrapper startTime={eventInfo?.event_start_time} />
      </StyledInfoWrapper>
    </>
  );
};
