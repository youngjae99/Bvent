import React, { useState, useEffect } from 'react';

export const TimeBox = () => {
  const [time, setTime] = useState('09:00:00');

  useEffect(() => {
    setTimeout(() => {
      getDate();
    }, 1000);
  }, [time]);

  const getDate = () => {
    const today = new Date();
    const date =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate() +
      '  ' +
      today.getHours() +
      ':' +
      today.getMinutes() +
      ':' +
      today.getSeconds();
    setTime(date);
  };

  return (
    <div>
      {' '}
      <div className="border-t border-gray-300">
        <div className="w-full flex items-center justify-between px-6 py-3">
          KOR USA IND AUS
        </div>
      </div>
      <div className="border-t border-gray-300">
        <div className="w-full flex items-center justify-between px-6 py-3">
          KST {time}
        </div>
      </div>
    </div>
  );
};
