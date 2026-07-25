import React from 'react';

function WeeklyForecast({ weekly }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h3>7-Day Forecast</h3>
      {weekly.map((day, index) => (
        <div key={index} style={{ display: 'flex', justifyContent: 'space-between', margin: '5px 0' }}>
          <span>{new Date(day.date).toLocaleDateString('en-US', { weekday: 'long' })}</span>
          <span>{day.high}°C / {day.low}°C</span>
        </div>
      ))}
    </div>
  );
}

export default WeeklyForecast;
