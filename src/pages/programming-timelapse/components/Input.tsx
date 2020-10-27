import React, { ChangeEvent } from 'react';

interface Props {
  input: string;
  setInput: Function;
  setPlaying: Function;
}

const Input: React.FC<Props> = ({ input, setInput, setPlaying }) => {
  return (
    <div className='input-container'>
      <textarea
        value={input}
        onChange={(evt: ChangeEvent<HTMLTextAreaElement>) =>
          setInput(evt.target.value)
        }
      />
      <button onClick={() => setPlaying(true)}>START TIMELAPSE</button>
    </div>
  );
};

export default Input;
