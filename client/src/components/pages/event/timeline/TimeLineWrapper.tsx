import React from 'react';
import { useRecoilState } from 'recoil';
import { timezoneState } from '@/recoil/atoms/timezone';

import TimelineSubevent from './SubeventCard';
import { Event } from '@/types/event';

const TimeLineWrapper = (props: { eventInfo: Event; subevents: object }) => {
  const { eventInfo, subevents } = props;
  const [timezone] = useRecoilState(timezoneState);

  return (
    <div>
      <div className="flex flex-row w-24 mr-2 text-secondary font-bold">
        <div className="w-12 text-center">{timezone}</div>
        <div className="w-12 text-center">GMT</div>
      </div>
      <div className="mb-3 flex-1"></div>
      {eventInfo &&
        Object.keys(subevents)
          .sort(
            (a, b) => subevents[a].subevent_time - subevents[b].subevent_time,
          )
          .map((key) => (
            <TimelineSubevent key={key} subevent={subevents[key]} />
          ))}
    </div>
  );
};

export default TimeLineWrapper;
