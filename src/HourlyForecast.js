import React from 'react';

function convertTemperature(temp, isCelsius) {
  return isCelsius ? temp : (temp * 9/5) + 32;
}

function HourlyForecast({ hourly, isCelsius }) {
  return (
    <div style={{ display: 'flex', overflowX: 'scroll' }}>
      {hourly.map((hour, index) => (
        <div key={index} style={{ margin: '0 10px' }}>
          <p>{new Date(hour.time).getHours()}:00</p>
          <p>{convertTemperature(hour.temperature, isCelsius).toFixed(1)}°{isCelsius ? 'C' : 'F'}</p>
          <p>{hour.icon}</p>
        </div>
      ))}
    </div>
  );
}

export default HourlyForecast;
