import React, { useState } from 'react';

const ColorPicker = ({ colors }) => {
  const [isColorListVisible, setColorListVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const toggleColorList = () => {
    setColorListVisible(!isColorListVisible);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setColorListVisible(false);
  };

  return (
    <div>
      <button onClick={toggleColorList}>Pick a color</button>
      {isColorListVisible && (
        <div>
          {colors.map((color) => (
            <div
              key={color}
              style={{
                backgroundColor: color,
                width: '30px',
                height: '30px',
                display: 'inline-block',
                margin: '5px',
                cursor: 'pointer',
              }}
              onClick={() => handleColorClick(color)}
            />
          ))}
        </div>
      )}
      {selectedColor && <p>Selected color: {selectedColor}</p>}
    </div>
  );
};

export default ColorPicker;
