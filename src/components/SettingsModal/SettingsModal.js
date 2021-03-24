import React, {useState} from 'react';
import './SettingsModal.scss';

function SettingsView({isShow, toggleFont, toggleColor, currentColor, toggleSettingsView}) {
  const [currentFont, setCurrentFont] = useState(null);

  const show = isShow ? '' : ' hidden';

  return (
    <div className={`form-wrapper${show}`}>
      <div className='form-header'>
        <span className='title'><h2>Settings</h2></span>
        <button className='close-btn' onClick={toggleSettingsView}></button>
      </div>
      <div className='time-set'>
        <span className='time-title'><h4>TIME(MINUTES)</h4></span>
        <div className='inputs'>
          <div className='input-block'>
            <label htmlFor="pomodoro"><h6>pomodoro</h6></label>
            <div className='number-wrapper'>
              <input type="number" className='pomodoro-input' id='pomodoro' />
              <div className="number-wrapper-arrow up"></div>
              <div className="number-wrapper-arrow down"></div>
            </div>
          </div>
          <div className='input-block'>
            <label htmlFor="short"><h6>short break</h6></label>
            <div className='number-wrapper'>
              <input type="number" className='short-input' id='short' />
              <div className="number-wrapper-arrow up"></div>
              <div className="number-wrapper-arrow down"></div>
            </div>
          </div>
          <div className='input-block'>
            <label htmlFor="long"><h6>long break</h6></label>
            <div className='number-wrapper'>
              <input type="number" className='long-input' id='long' />
              <div className="number-wrapper-arrow up"></div>
              <div className="number-wrapper-arrow down"></div>
            </div>
          </div>
        </div>
      </div>
      <div className='font-set'>
        <div className='font-wrapper'>
          <span className='font-title'><h4>FONT</h4></span>
          <div className='font-block'>
            <button className='font-btn1' onClick={() => toggleFont(' font-sans')}><div className='hover-div'></div><h4>Aa</h4></button>
            <button className='font-btn2' onClick={() => toggleFont(' font-slab')}><div className='hover-div'></div><h4>Aa</h4></button>
            <button className='font-btn3' onClick={() => toggleFont(' font-mono')}><div className='hover-div'></div><h4>Aa</h4></button>
          </div>
        </div>
      </div>
      <div className='color-set'>
        <div className='color-wrapper'>
          <span className='color-title'><h4>COLOR</h4></span>
          <div className='color-block'>
            <button className='color-btn1' onClick={() => toggleColor(' peach')}><div className='hover-div'></div></button>
            <button className='color-btn2' onClick={() => toggleColor(' cyan')}><div className='hover-div'></div></button>
            <button className='color-btn3' onClick={() => toggleColor(' purple')}><div className='hover-div'></div></button>
          </div>
        </div>
      </div>
      <button className={`apply-btn${currentColor}`} onClick={toggleSettingsView}>Apply</button>
    </div>
  );
}


export default SettingsView;