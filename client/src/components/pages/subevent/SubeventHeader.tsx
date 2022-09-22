import React from 'react';
import styled from 'styled-components';
import { parseEventTime } from '@/utils/parseTime';
import { SubeventImage } from './SubeventImage';
import { getImageURI } from '@/utils/getImageURI';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { Subevent } from '@/types/event';

type Props = {
  eventInfo: Subevent;
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

const TimeWrapper = ({
  startTime,
  endTime,
}: {
  startTime: number;
  endTime?: number;
}) => {
  return <p>{parseEventTime(startTime, 'UTC')}</p>;
};

const SpeakerWrapper = ({ speaker }: { speaker: string }) => {
  return (
    <div className="flex flex-row items-center gap-2 leading-4 mt-1">
      <UserCircleIcon style={{ width: '20px' }} />
      {speaker}
    </div>
  );
};

export const SubeventHeader = (props: Props) => {
  const { eventInfo } = props;
  return (
    <>
      <SubeventImage
        src={
          eventInfo
            ? getImageURI(eventInfo.subevent_img)
            : 'https://i0.wp.com/oyaschool.com/wp-content/uploads/2018/12/conferences15.jpg?fit=600%2C315&ssl=1'
        }
      />
      <StyledInfoWrapper className="text-white bg-black flex flex-col sticky top-16">
        <p className="text-secondary text-2xl">
          {eventInfo?.subevent_title.slice(0, 60)}
        </p>
        <TimeWrapper startTime={eventInfo?.subevent_time} />
        <SpeakerWrapper speaker={eventInfo?.subevent_presenter} />
      </StyledInfoWrapper>
    </>
  );
};
