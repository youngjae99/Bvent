const offset = {
  KST: 9,
  EDT: '-4',
  PDT: -7,
  IST: +5.5,
};

export const parseTime = (time: string) => {
  const parsedTime = new Date(parseInt(time));
  const hour = parsedTime.getHours();
  const minute = parsedTime.getMinutes();
  if (minute < 10) {
    return `${hour}:0${minute}`;
  }
  return hour + ':' + minute;
};

export const parseEventTime = (time: string, timeZone:string) => {
  const parsedTime = new Date(parseInt(time));
  console.log(parsedTime);
  return parsedTime.toLocaleString('en-GB', { timeZone: timeZone });
};

export const parseDate =  (time):any => {
  const parsedTime = new Date(parseInt(time));
  return parsedTime.getDate();
};

export const calcTime = (timezone):any => {
  const d = new Date();
  const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
  const nd = new Date(utc + (3600000*offset[timezone]));
  return nd.toLocaleString();
}

export const convertTime = (time, timezone):any => {
  // console.log(time, timezone);
  const d = new Date(time);
  const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
  const nd = new Date(utc + (3600000*offset[timezone]));
  // console.log(nd);
  const hour = nd.getHours();
  const minute = nd.getMinutes();
  if (minute < 10) {
    return `${hour}:0${minute}`;
  }
  return hour + ':' + minute;
}


export const getLocalTime = (time, timezone):any => {
  const parsedTime = new Date(parseInt(time));
  return parsedTime.toLocaleString();
}

export const getOriginTime = (time, timezone):any => {
  const parsedTime = new Date(parseInt(time));
  return parsedTime.toLocaleString();
}

const changeTimezone = (date, ianatz):any => {
  const invdate = new Date(parseInt(time));
  return new Date(date.getTime())
}