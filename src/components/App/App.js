import React, { useState, useEffect, useMemo } from 'react';
import './App.scss';
import Timer from '../Timer/Timer';
import TimerTabs from '../TimerTabs/TimerTabs';
import SettingsView from '../SettingsModal/SettingsModal';


function App() {

  const [isTimerGo, setIsTimerGo] = useState(false);
  const [currentTime, setCurrentTime] = useState(5);
  const [currentRemainingTime, setCurrentRemainingTime] = useState(currentTime);
  const [timerInterval, setTimerInterval] = useState(null);
  const [showSettings, setShowSettings] = useState(false);
  const [font, setFont] = useState(' font-sans');
  const [color, setColor] = useState(' peach');

  function onTimerToggle() {
    setIsTimerGo(!isTimerGo);
    if (!isTimerGo) clearInterval(timerInterval);
    else {
      setCurrentRemainingTime(currentTime);
      startTimer();
    }
  }

  function toggleSettingsView(){
    setShowSettings(oldValue => !oldValue);
  }

  function toggleFont(newFont) {
    setFont(newFont);
  }

  function toggleColor(newColor) {
    setColor(newColor);
  }

  useEffect(() => {
    startTimer();
  }, []);

  function startTimer() {
    setTimerInterval(setInterval(() => {
      setCurrentRemainingTime(oldValue => oldValue - 1);
    }, 1000));
  }


  useEffect(() => { if (currentRemainingTime <= 0) onTimerToggle(); },
    [currentRemainingTime]);


  const modal = showSettings ? <div className='modal'></div> : null;

  

  return (
    <div className={`app${font}`}>
      <TimerTabs
        currentColor={color} />
      <Timer
        time={currentTime}
        remainingTime={currentRemainingTime}
        onTimerToggle={onTimerToggle}
        isTimerGo={isTimerGo}
        currentColor={color} />
      <button className='settings-btn' onClick={toggleSettingsView}></button>
      <SettingsView
        isShow={showSettings}
        toggleFont={toggleFont}
        toggleColor={toggleColor}
        toggleSettingsView={toggleSettingsView}
        currentColor={color} />
      {modal}
    </div>
  );
}

export default App;
