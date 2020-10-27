import React, { useEffect, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface Props {
  input: string;
}

function updateScroll() {
  var element = document.getElementById('content');
  element.scrollTop = element.scrollHeight;
}

const Code: React.FC<Props> = ({ input }) => {
  const [code, setCode] = useState('');
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (code.length < input.length) {
      const interval = setInterval(() => {
        setCode(code + input[counter]);
        setCounter(counter + 1);
      }, 1);
      updateScroll();
      return () => clearInterval(interval);
    }
  }, [code, setCode, counter, setCounter, input]);

  return (
    <SyntaxHighlighter language='javascript' style={dracula}>
      {code}
    </SyntaxHighlighter>
  );
};

export default Code;
