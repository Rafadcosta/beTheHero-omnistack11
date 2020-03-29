import React, { useState } from 'react';

import Header from './Header';

function App() {
  const [count, setCount]  = useState(0);

  function increment(){
    setCount ( count + 1 );
  }

  return (
    <div>
      <Header>
        Contador: {count}
      </Header>
      <button onClick={increment}>Incrementar</button>
    </div>
    
  );
}

export default App;
