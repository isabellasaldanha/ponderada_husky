import React, { useState, useEffect } from 'react';

const TimezoneClock = ({ timezone, city }) => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const localTime = date.toLocaleString('en-US', { timeZone: timezone });
      setTime(localTime);
    }, 1000);

    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div>
      <h2>{city}</h2>
      <p>Timezone: {timezone}</p>
      <p>Horário atual: {time}</p>
    </div>
  );
};

export default TimezoneClock;
