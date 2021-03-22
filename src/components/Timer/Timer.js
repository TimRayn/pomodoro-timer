import React from 'react';
import './Timer.scss';

function Timer({ time, remainingTime = 345, isTimerGo }) {

  const minRemTime = Math.floor(remainingTime/60);
  const secRemTime = remainingTime - minRemTime*60;

  const buttonText = isTimerGo ? 'RESTART' : 'PAUSE';

  return (
    <div className='timer-out-circle'>
      <div className='timer-in-circle'>
        <div className='progress-bar'>
        </div>
        <div className='timer-time'>{minRemTime}:{secRemTime}</div>
        <button className='timer-button'><h3>{buttonText}</h3></button>
      </div>
    </div>

  );
}


export default Timer;