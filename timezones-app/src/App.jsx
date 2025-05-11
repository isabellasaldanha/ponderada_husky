import React from 'react';
import TimezoneClock from './TimezoneClock';

function App() {
  return (
    <div>
      <h1>Consultor de horários - Fusos horários</h1>
      <TimezoneClock timezone="America/New_York" city="New York" />
      <TimezoneClock timezone="Europe/London" city="London" />
      <TimezoneClock timezone="Asia/Tokyo" city="Tokyo" />
    </div>
  );
}

export default App;
