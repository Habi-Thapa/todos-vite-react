import { useState } from 'react';

function App() {
  // let paraColor = 'green';
  const [paraColor, setParaColor] = useState('green');

  const consumeWeed = () => {
    setParaColor('red');
  };

  return (
    <>
      <h1>Hello, World!</h1>
      <p style={{ color: paraColor }} onClick={consumeWeed}>
        Welcome to the jungle. na nan na na ni ni.
      </p>
    </>
  );
}

export default App;
