import React from 'react';
import styled from 'styled-components';
import { HiOutlineLink } from 'react-icons/hi';
import { CgProfile } from 'react-icons/cg';
import { parseEventTime } from '@utils/parseTime';
import { SubeventImage } from './SubeventImage';

type Props = {
  eventInfo: any;
};

const StyledInfoWrapper = styled.div`
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
  padding: 0 0.8rem;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 10, 23, 0.7),
    rgba(0, 10, 23, 1)
  );
`;

export const SubeventHeader = (props: Props) => {
  const { eventInfo } = props;
  return (
    <div className="text-white relative">
      <SubeventImage src="https://api.time.com/wp-content/uploads/2022/02/Kevin_Jones-9710.jpg?quality=85&crop=0px%2C808px%2C2732px%2C1428px&resize=1200%2C628&strip" />
      <StyledInfoWrapper className="absolute bottom-0">
        <p className="text-green-400 text-2xl">{eventInfo?.subevent_info}</p>
        <p>{parseEventTime(eventInfo?.subevent_time, 'UTC')}</p>
        <div className="flex flex-row gap-2 leading-4 mt-1">
          <CgProfile />
          {eventInfo?.subevent_presenter}
        </div>
        <a href={eventInfo?.subevent_src} className="mt-1">
          <HiOutlineLink />
        </a>
      </StyledInfoWrapper>
    </div>
  );
};
