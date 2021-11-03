import React from 'react';

export default function Spinner() {

  return (
    <>
    <div style={{
        position: 'absolute', 
        left: '50%', 
        top: '50%',
        transform: 'translate(-50%, -50%)'
        }}>
      <svg>
        <circle cx="50" cy="50" r="40" stroke="#fdd4cf" strokeDasharray="78.5 235.5" strokeWidth="3" fill="none" />
        <circle cx="50" cy="50" r="30" stroke="#fdd4cf" strokeDasharray="62.8 188.8" strokeWidth="3" fill="none" />
        <circle cx="50" cy="50" r="20" stroke="#f56d6c" strokeDasharray="47.1 141.3" strokeWidth="3" fill="none" />
      </svg>
    </div>
    </>
  )
}