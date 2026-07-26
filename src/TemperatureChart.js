import React from 'react';

function TemperatureChart({ hourly }) {
  const maxTemp = Math.max(...hourly.map(hour => hour.temperature));
  const minTemp = Math.min(...hourly.map(hour => hour.temperature));

  return (
    <svg width="100%" height="100">
      <polyline
        fill="none"
        stroke="blue"
        strokeWidth="2"
        points={hourly.map((hour, index) => `${index * 10},${100 - ((hour.temperature - minTemp) / (maxTemp - minTemp)) * 100}`).join(' ')}
      />
      {hourly.map((hour, index) => (
        <text key={index} x={index * 10} y="90" fontSize="10" textAnchor="middle">{hour.temperature.toFixed(1)}°</text>
      ))}
    </svg>
  );
}

export default TemperatureChart;