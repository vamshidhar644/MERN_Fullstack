import React, { useEffect, useState } from 'react';

function WordCounter() {
  const [text, setText] = useState('');
  const [wordCount, setWordcount] = useState(0);

  useEffect(() => {
    const wordCount = text.trim().split(' ').length;
    setWordcount(wordCount);
    console.log(wordCount);
  }, [text]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <textarea
        rows={4}
        cols={50}
        value={text}
        onChange={handleChange}
        placeholder="Enter your text..."
        className='text-area'
      />
      <p>Word Count: {wordCount}</p>
    </div>
  );
}

export default WordCounter;
