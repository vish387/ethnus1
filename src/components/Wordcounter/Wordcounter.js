import React, { useState } from 'react';
import './Wordcounter.scss';

function WordCounter() {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const wordCount = text.split(/\s+/).filter((word) => word !== '').length;

  return (
    <div className="container">
      <h1>Responsive Paragraph Word Counter</h1>
      <textarea
        placeholder="Type your text here..."
        value={text}
        onChange={handleTextChange}
        rows="5"
        cols="50"
        className="text-input"
      />
      <p className={`word-count ${wordCount > 50 ? 'high-word-count' : ''}`}>
        Word Count: {wordCount}
      </p>
    </div>
  );
}

export default WordCounter;
