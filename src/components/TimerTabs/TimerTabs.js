import React, { useState } from 'react';
import './TimerTabs.scss';

function TimerTabs({ currentColor, toggleTimer }) {



  return (
    <div className='panel'>
      <button
        className={`pomodoro-btn${currentColor}`}
        onClick={() => toggleTimer('pomodoro', true)}
      >pomodoro</button>
      <button
        className={`short-btn${currentColor}`}
        onClick={() => toggleTimer('short', true)}
      >short break</button>
      <button
        className={`long-btn${currentColor}`}
        onClick={() => toggleTimer('long', true)}
      >long break</button>
    </div>
  );
}

export default TimerTabs;