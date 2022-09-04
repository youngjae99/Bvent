import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { timezoneState } from '@/recoil/atoms/timezone';
import { calcTime } from '@/utils/parseTime';

const CurrentTime = () => {
  const [time, setTime] = useState('');
  const [timezone] = useRecoilState(timezoneState);

  useEffect(() => {
    setTimeout(() => {
      setTime(calcTime(timezone));
    }, 1000);
  }, [time]);

  return <div className="text-white">{time}</div>;
};

export default CurrentTime;
