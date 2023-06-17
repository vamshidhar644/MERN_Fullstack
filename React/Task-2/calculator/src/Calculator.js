import React, { useState } from 'react';
import { MdOutlineLightMode, MdLightMode } from 'react-icons/md';

function Calculator() {
  const [num, setNum] = useState('');
  const [displayValue, setDisplayValue] = useState('');

  const [mode, setMode] = useState(true);

  const handleButtonClick = (value) => {
    setNum(num + value);
  };

  const handleCalculate = () => {
    try {
      const result = eval(num); // Using eval is not recommended in production code
      setDisplayValue(result.toString());
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  const handleClear = () => {
    setDisplayValue('');
    setNum('');
  };

  const handleBackspace = () => {
    setNum(num.slice(0, -1));
  };

  const handleMode = () => {
    setMode(!mode);
  };

  return (
    <div className="calculator">
      <div className={`display ${mode ? 'display-dark' : 'display-light'}`}>
        <div className="mode">
          <p onClick={handleMode}>
            {mode ? (
              <p>
                <MdOutlineLightMode />
              </p>
            ) : (
              <p>
                <MdLightMode />
              </p>
            )}
          </p>
        </div>
        <div className="calculate">{num}</div>
        <div className="answer">{displayValue}</div>
      </div>
      <div className={`buttons ${mode ? 'buttons-dark' : 'buttons-light'}`}>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={handleBackspace}>Backspace</button>
        <button onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
}

export default Calculator;
