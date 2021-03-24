import React, { useState, useEffect, useMemo } from 'react';
import './App.scss';
import Timer from '../Timer/Timer';
import TimerTabs from '../TimerTabs/TimerTabs';
import SettingsView from '../SettingsModal/SettingsModal';


function App() {
  const [settingPomodoroTime, setSettingPomodoroTime] = useState(25);
  const [settingShortTime, setSettingShortTime] = useState(5);
  const [settingLongTime, setSettingLongTime] = useState(10);
  const [isTimerGo, setIsTimerGo] = useState(false);
  const [currentTime, setCurrentTime] = useState(settingPomodoroTime);
  const [currentRemainingTime, setCurrentRemainingTime] = useState(currentTime);
  const [timerInterval, setTimerInterval] = useState(null);
  const [showSettings, setShowSettings] = useState(false);
  const [font, setFont] = useState(' font-sans');
  const [color, setColor] = useState(' peach');

  function onTimerToggle() {
    setIsTimerGo(!isTimerGo);
    if (isTimerGo) clearInterval(timerInterval);
    else {
      setCurrentRemainingTime(currentTime);
      startTimer();
    }
  }

  function toggleTimer(timer, isManually) {
    switch (timer) {
      case 'pomodoro':
        setCurrentTime(settingPomodoroTime);
        setCurrentRemainingTime(settingPomodoroTime);
        break;
      case 'short':
        setCurrentTime(settingShortTime);
        setCurrentRemainingTime(settingShortTime);
        break;
      case 'long':
        setCurrentTime(settingLongTime);
        setCurrentRemainingTime(settingLongTime);
        break;
      default:
        break;
    }
    if(isManually) setIsTimerGo(!isTimerGo);
  }

  function toggleSettingsView() {
    setShowSettings(oldValue => !oldValue);
  }

  function toggleFont(newFont) {
    setFont(newFont);
  }

  function toggleColor(newColor) {
    setColor(newColor);
  }


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
        currentColor={color}
        toggleTimer={toggleTimer} />
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
