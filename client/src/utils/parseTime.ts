export const parseTime = (time: string) => {
  const parsedTime = new Date(time);
  console.log(parsedTime.toLocaleString());
  const hour = parsedTime.getHours();
  const minute = parsedTime.getMinutes();
  if (minute < 10) {
    return `${hour}:0${minute}`;
  }
  return hour + ':' + minute;
};

export const parseEventTime = (time: string, timeZone:string) => {
  const parsedTime = new Date(time);
//   console.log(parsedTime.toLocaleString())
  return parsedTime.toLocaleString('en-GB', { timeZone: timeZone });
};
