import { DateTime } from 'luxon';
import { type } from 'os';

const offset = {
  KST: 9,
  EDT: '-4',
  PDT: -7,
  IST: +5.5,
};

const ONE_HOUR = 60 * 60 * 1000;
const ONE_DAY = 24 * ONE_HOUR;

export const parseTime = (time: string) => {
  const parsedTime = new Date(parseInt(time));
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
  console.log(parsedStartTime, parsedEndTime);
  return (
    parsedStartTime.toLocaleString() + ' ~ ' + parsedEndTime.toLocaleString()
  );
};

export const parseEventTime = (time: string, timeZone: string) => {
  const parsedTime = new Date(parseInt(time));
  console.log(parsedTime);
  return parsedTime.toLocaleString('en-GB', { timeZone: timeZone });
};

export const parseReviewTime = (time: number) => {
  const parsedTime = new Date(time);
  console.log();

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

export const parseDate = (time): any => {
  const parsedTime = new Date(parseInt(time));
  return parsedTime.getDate();
};

export const calcTime = (timezone): any => {
  const d = new Date();
  const utc = d.getTime() + d.getTimezoneOffset() * 60000;
  const nd = new Date(utc + 3600000 * offset[timezone]);
  return nd.toLocaleString();
};

export const convertTime = (time, timezone): any => {
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

export const getLocalTime = (time): any => {
  const parsedTime = new Date(parseInt(time));
  return parsedTime.toLocaleString();
};

export const getOriginTime = (time): any => {
  const parsedTime = new Date(parseInt(time));
  return parsedTime.toLocaleString();
};

// const changeTimezone = (date, ianatz):any => {
//   const invdate = new Date(parseInt(time));
//   return new Date(date.getTime())
// }
