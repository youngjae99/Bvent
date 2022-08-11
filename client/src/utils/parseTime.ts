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
  var d = new Date();
  var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
  var nd = new Date(utc + (3600000*offset[timezone]));
  return nd.toLocaleString();
}

export const convertTime = (time, timezone):any => {
  // console.log(time, timezone);
  var d = new Date(time);
  var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
  var nd = new Date(utc + (3600000*offset[timezone]));
  // console.log(nd);
  const hour = nd.getHours();
  const minute = nd.getMinutes();
  if (minute < 10) {
    return `${hour}:0${minute}`;
  }
  return hour + ':' + minute;
}