import React from 'react';

function WindDirection({ degrees }) {
  const rotation = degrees;
  return (
    <svg width="50" height="50" style={{ transform: `rotate(${rotation}deg)` }}>
      <line x1="25" y1="0" x2="25" y2="20" stroke="black" strokeWidth="2" />
      <circle cx="25" cy="25" r="20" fill="none" stroke="black" />
      <text x="25" y="30" textAnchor="middle" fontSize="10">↑</text>
    </svg>
  );
}

export default WindDirection;
