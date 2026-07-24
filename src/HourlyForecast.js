import React from 'react';

function HourlyForecast({ hourly }) {
  return (
    <div style={{ display: 'flex', overflowX: 'scroll' }}>
      {hourly.map((hour, index) => (
        <div key={index} style={{ margin: '0 10px' }}>
          <p>{new Date(hour.time).getHours()}:00</p>
          <p>{hour.temperature}°C</p>
          <p>{hour.icon}</p>
        </div>
      ))}
    </div>
  );
}

export default HourlyForecast;