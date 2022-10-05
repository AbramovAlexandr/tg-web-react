import { useEffect } from 'react';
import './App.css';

function App() {

  useEffect( () => {
    tg.ready();
  }, [])

  return (
    <div className="App">
      <button onClick={closeBtn }>Close</button>
    </div>
  );
}

export default App;
