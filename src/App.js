import './App.css';
import Boton from './components/Boton';
import Counter from './components/Counter'
import freecodecamplogo from './img/freecodecamp-logo.png';
import { useState } from 'react';


function App() {

  const[numClics, setNumClics] = useState(0);

  const eventClick = () => {
    setNumClics(numClics + 1);
  }

  const resetCount = () => {
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-container'>
        <img
          className='freecodecamp-logo'
          src={freecodecamplogo}
          alt='Logo de FreeCodeCamp' />
      </div>
      <div className='container-principal'>
        <Counter
          numClics={ numClics }
        />
        <Boton
          texto='Click'
          clickButton={true} 
          eventClick={eventClick} />
        <Boton
          texto='Reset'
          clickButton={false} 
          eventClick={resetCount}/>
      </div>
    </div>
  );
}

export default App;
