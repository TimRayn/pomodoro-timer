import React, { useState } from 'react';
import './TimerTabs.scss';

function TimerTabs(currentTab) {

  

  return (
    <div className='panel'>
      <button className='pomodoro-btn'>pomodoro</button>
      <button className='short-btn'>short break</button>
      <button className='long-btn'>long break</button>
    </div>
  )
}

export default TimerTabs;