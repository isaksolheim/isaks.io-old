import React, { useState } from 'react';
import Input from './components/Input';
import Code from './components/Code';
import './index.scss';

function App() {
  const [input, setInput] = useState('');
  const [playing, setPlaying] = useState(false);

  return (
    <div className='programming-timelapse'>
      <div className={`content ${playing ? 'playing' : ''}`} id='content'>
        {playing ? (
          <Code input={input} />
        ) : (
          <Input input={input} setInput={setInput} setPlaying={setPlaying} />
        )}
        <div id='anchor'></div>
      </div>
      {playing && <button onClick={() => setPlaying(false)}>Back</button>}
    </div>
  );
}

export default App;
