import React, { useState } from 'react';
import './TimerTabs.scss';

function TimerTabs({currentColor}) {

  

  return (
    <div className='panel'>
      <button className={`pomodoro-btn${currentColor}`}>pomodoro</button>
      <button className={`short-btn${currentColor}`}>short break</button>
      <button className={`long-btn${currentColor}`}>long break</button>
    </div>
  )
}

export default TimerTabs;