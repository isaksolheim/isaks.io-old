import React, { useState } from 'react';
import Input from './components/Input';
import Code from './components/Code';
import './index.scss';

function App() {
  const [input, setInput] = useState('');
  const [playing, setPlaying] = useState(false);

  return (
    <div className='programming-timelapse'>
      <h1>Programming timelapse</h1>
      <p>
        Paste your code in the input field and click the <i>Start</i> button.
      </p>
      <blockquote>
        Note: This application currently only supports syntax highlighting for
        jsx
      </blockquote>
      <div className={`content ${playing ? 'playing' : ''}`} id='content'>
        {playing ? (
          <>
            <Code input={input} />
            <div style={{ height: '20px' }} />
          </>
        ) : (
          <Input input={input} setInput={setInput} setPlaying={setPlaying} />
        )}
      </div>
      {playing && <button onClick={() => setPlaying(false)}>Back</button>}
    </div>
  );
}

export default App;
