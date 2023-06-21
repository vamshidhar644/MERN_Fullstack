import React, { useState } from 'react';

function AgeCalculator() {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const birthdateObj = new Date(birthdate);
    const currentDate = new Date();
    const calculatedAge = Math.floor((currentDate - birthdateObj) / (365.25 * 24 * 60 * 60 * 1000));
    setAge(calculatedAge);
  };

  return (
    <div className='age-box'>
      <label htmlFor="birthdate">Enter your birthdate:</label>
      <input
        type="date"
        id="birthdate"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
      />
      <button onClick={calculateAge}>Calculate Age</button>
      {age !== null && <p>Your age is: {age} years</p>}
    </div>
  );
}

export default AgeCalculator;
