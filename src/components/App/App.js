import React, { useState, useEffect, useMemo } from 'react';
import './App.scss';
import Timer from '../Timer/Timer';
import TimerTabs from '../TimerTabs/TimerTabs';


function App() {

  const [isTimerGo, setIsTimerGo] = useState(false);
  const [currentTime, setCurrentTime] = useState(5);
  const [currentRemainingTime, setCurrentRemainingTime] = useState(currentTime);
  const [timerInterval, setTimerInterval] = useState(null);

  function onTimerToggle() {
    setIsTimerGo(!isTimerGo);
    if (!isTimerGo) clearInterval(timerInterval);
    else {
      setCurrentRemainingTime(currentTime);
      startTimer();
    }
  }

  useEffect(() => {
    startTimer();
  }, []);

  function startTimer() {
    setTimerInterval(setInterval(() => {
      setCurrentRemainingTime(oldValue => oldValue - 1);
    }, 1000));
  }


  useMemo(() => { if (currentRemainingTime === 0) onTimerToggle(); },
    [currentRemainingTime]);


  return (
    <div className="app font-sans">
      <TimerTabs/>
      <Timer
        time={currentTime}
        remainingTime={currentRemainingTime}
        onTimerToggle={onTimerToggle}
        isTimerGo={isTimerGo} />

      main div
    </div>
  );
}

export default App;
