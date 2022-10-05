import { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp;

function App() {

  useEffect( () => {
    tg.ready();
  }, [])

  const closeBtn = () =>{
    tg.close()
  }

  return (
    <div className="App">
      <button onClick={closeBtn }>Close</button>
    </div>
  );
}

export default App;
