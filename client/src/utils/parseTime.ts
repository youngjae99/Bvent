import { DateTime } from 'luxon';

export const offset = {
  KST: 9,
  EDT: '-4',
  PDT: -7,
  IST: +5.5,
};

export const IANAZone = {
  KST: 'Asia/Seoul',
  EDT: 'America/New_York',
  PDT: 'America/Los_Angeles',
  IST: 'Asia/Kolkata',
};

export const parseTime = (time: number) => {
  const parsedTime = new Date(time);
  const hour = parsedTime.getHours();
  const minute = parsedTime.getMinutes();
  if (minute < 10) {
    return `${hour}:0${minute}`;
  }
  return hour + ':' + minute;
};

export const parseMainTabEventTime = (startTime: number, endTime: number) => {
  const parsedStartTime = DateTime.fromJSDate(new Date(startTime));
  const parsedEndTime = DateTime.fromJSDate(new Date(endTime));
  return (
    parsedStartTime.toLocaleString() + ' ~ ' + parsedEndTime.toLocaleString()
  );
};

export const parseEventTime = (time: number, timeZone: string) => {
  const parsedTime = new Date(time);
  return parsedTime.toLocaleString('en-GB', { timeZone: timeZone });
};

export const parseReviewTime = (time: number) => {
  const parsedTime = new Date(time);

  const diffInDays = parseInt(
    DateTime.now().diff(DateTime.fromJSDate(parsedTime), 'days').days.toFixed(),
  );
  const diffInHours = parseInt(
    DateTime.now()
      .diff(DateTime.fromJSDate(parsedTime), 'hours')
      .hours.toFixed(),
  );
  const diffInMins = parseInt(
    DateTime.now()
      .diff(DateTime.fromJSDate(parsedTime), 'minutes')
      .minutes.toFixed(),
  );

  if (diffInDays >= 7) {
    return `${DateTime.fromJSDate(parsedTime).toLocaleString()}`;
  } else if (diffInDays >= 1) {
    if (diffInDays === 1) {
      return `${diffInDays} day ago`;
    } else {
      return `${diffInDays} days ago`;
    }
  }

  if (diffInHours >= 1) {
    if (diffInHours === 1) {
      return `${diffInHours} hour ago`;
    } else {
      return `${diffInHours} hours ago`;
    }
  }
  if (diffInMins > 0) return `${diffInMins} minutes ago`;
  return `just now`;
};

export const parseDate = (time): string => {
  const parsedTime = new Date(parseInt(time));
  return parsedTime.getDate().toString();
};

export const calcTime = (timezone): string => {
  const d = new Date();
  const utc = d.getTime() + d.getTimezoneOffset() * 60000;
  const nd = new Date(utc + 3600000 * offset[timezone]);
  return nd.toLocaleString();
};

export const convertTime = (time, timezone): string => {
  // console.log(time, timezone);
  const d = new Date(time);
  const utc = d.getTime() + d.getTimezoneOffset() * 60000;
  const nd = new Date(utc + 3600000 * offset[timezone]);
  // console.log(nd);
  const hour = nd.getHours();
  const minute = nd.getMinutes();
  if (minute < 10) {
    return `${hour}:0${minute}`;
  }
  return hour + ':' + minute;
};

export const getTimezoneTime = (timezone): string => {
  const now = DateTime.now();
  console.log('now', now);
  return now.setZone(timezone).toLocaleString(DateTime.DATETIME_SHORT);
};

export const getLocalTime = (time): string => {
  const parsedTime = new Date(parseInt(time));
  return parsedTime.toLocaleString();
};

export const getOriginTime = (time): string => {
  const parsedTime = new Date(parseInt(time));
  return parsedTime.toLocaleString();
};
