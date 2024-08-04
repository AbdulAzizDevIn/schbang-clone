import React, { useState } from 'react';
import moment from 'moment-timezone';

const timeZones = [
  { name: 'India', zone: 'Asia/Kolkata' },
  { name: 'London', zone: 'Europe/London' },
  { name: 'Dubai', zone: 'Asia/Dubai' },
  { name: 'Amsterdam', zone: 'Europe/Amsterdam' },
];

const Worldclock = () => {
  const [hoveredZone, setHoveredZone] = useState(null);

  return (
    <div className='time'>
      {timeZones.map((tz) => (
        <div
          key={tz.zone}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid black",
            padding: "15px",
            borderRadius: "30px",
            margin: "5px",
            backgroundColor: 'Transparent',
            color: 'black',
            cursor: 'pointer',
          }}
          onMouseEnter={() => setHoveredZone(tz.zone)}
          onMouseLeave={() => setHoveredZone(null)}
        >
          <div style={{ fontSize: "20px", fontWeight: "bold", marginRight: "10px" }}>
            {hoveredZone === tz.zone ? '' : tz.name}
          </div>
          <span style={{ fontSize: "20px" }}>
            {hoveredZone === tz.zone ? 'Contact Us' : moment().tz(tz.zone).format('hh:mm A')}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Worldclock;

