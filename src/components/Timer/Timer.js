import React, { useMemo } from 'react';
import './Timer.scss';

function Timer({ time, remainingTime, isTimerGo, onTimerToggle }) {

  const remTimeStr = useMemo(() => {
    let minRemTime = Math.floor(remainingTime / 60);
    let secRemTime = remainingTime - minRemTime * 60;
    if (secRemTime < 10) secRemTime = '0' + secRemTime.toString();
    if (minRemTime < 10) minRemTime = '0' + minRemTime.toString();
    return `${minRemTime}:${secRemTime}`;
  }, [remainingTime]);

  const percent = useMemo(() => 1060 / time * (time - remainingTime),
    [remainingTime, time]);

  const buttonText = isTimerGo ? 'RESTART' : 'PAUSE';

  return (
    <div className='timer-out-circle'>
      <div className='timer-in-circle'>
        <svg className='svg-container'>
          <circle
            className='progress'
            cx="180"
            cy="180"
            r="169"
            style={{ strokeDasharray: `${percent} 10000` }}></circle>
        </svg>
        <div className='timer-time'><h1>{remTimeStr}</h1></div>
        <button className='timer-button' onClick={onTimerToggle}>
          <h3>{buttonText}</h3>
        </button>
      </div>
    </div>

  );
}


export default Timer;