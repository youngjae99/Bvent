import React from 'react';
import styled from 'styled-components';
import { parseEventTime } from '@/utils/parseTime';
import { SubeventImage } from './SubeventImage';
import { getImageURI } from '@/utils/getImageURI';
import { LinkIcon, UserCircleIcon } from '@heroicons/react/24/outline';

type Props = {
  eventInfo: any;
};

const StyledInfoWrapper = styled.div`
  /* position: absolute; */
  /* bottom: 0; */
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
  /* padding: 0 0.8rem; */
  margin: 10px 0;
`;

export const SubeventHeader = (props: Props) => {
  const { eventInfo } = props;
  return (
    <div className="text-white flex flex-col">
      <SubeventImage
        src={
          eventInfo
            ? getImageURI(eventInfo.subevent_img)
            : 'https://i0.wp.com/oyaschool.com/wp-content/uploads/2018/12/conferences15.jpg?fit=600%2C315&ssl=1'
        }
      />
      <StyledInfoWrapper>
        <p className="text-green-400 text-2xl">
          {eventInfo?.subevent_info.slice(0, 60)}
        </p>
        <p>{parseEventTime(eventInfo?.subevent_time, 'UTC')}</p>
        <div className="flex flex-row gap-2 leading-4 mt-1">
          <UserCircleIcon style={{ width: '20px' }} />
          {eventInfo?.subevent_presenter}
        </div>
        <a href={eventInfo?.subevent_src} className="mt-1">
          <LinkIcon style={{ width: '20px' }} />
        </a>
      </StyledInfoWrapper>
    </div>
  );
};
