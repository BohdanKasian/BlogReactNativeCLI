export const formatAMPM = (date?: Date, hoursVal?: number | null, minutesVal?: number | null) => {
  let hours: number = hoursVal || date?.getHours() || 0;
  let minutes: string | number = minutesVal || date?.getMinutes() || 0;
  const ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  return {
    date: hours + ":" + minutes + " " + ampm,
    minutes: minutes,
  };
};
