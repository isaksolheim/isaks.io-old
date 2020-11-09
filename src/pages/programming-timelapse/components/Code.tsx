import React, { useEffect, useState } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';

interface Props {
  input: string;
}

function updateScroll() {
  var element = document.getElementById('content');
  element.scrollTop = element.scrollHeight;
}

SyntaxHighlighter.registerLanguage('jsx', jsx);

const Code: React.FC<Props> = ({ input }) => {
  const [code, setCode] = useState('');
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (code.length < input.length) {
      const interval = setInterval(() => {
        setCode(code + input[counter]);
        setCounter(counter + 1);
      }, 2);
      updateScroll();
      return () => clearInterval(interval);
    }
  }, [code, setCode, counter, setCounter, input]);

  return (
    <SyntaxHighlighter language='jsx' style={dracula}>
      {code}
    </SyntaxHighlighter>
  );
};

export default Code;
