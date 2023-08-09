import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Notepad App</h1>
      </header>
      <main className="App-main">
        <textarea
          className="notepad-textarea"
          value={text}
          onChange={handleTextChange}
          placeholder="Start typing here..."
        />
        <button className="save-button">Save</button>
      </main>
    </div>
  );
}

export default App;
