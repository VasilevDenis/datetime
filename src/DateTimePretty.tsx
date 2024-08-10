import React from 'react';
import moment from 'moment';

interface DateTimePrettyProps {
  date: string; 
}

const DateTimePretty: React.FC<DateTimePrettyProps> = ({ date }) => {
  const now = moment();
  const dateMoment = moment(date);

  const duration = moment.duration(now.diff(dateMoment));

  if (duration.asMinutes() < 60) {
    return <span>{Math.floor(duration.asMinutes())} минут назад</span>;
  }
  if (duration.asHours() < 24) {
    return <span>{Math.floor(duration.asHours())} часов назад</span>;
  }
  return <span>{Math.floor(duration.asDays())} дней назад</span>;
};

export default DateTimePretty;
