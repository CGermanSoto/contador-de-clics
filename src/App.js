import './App.css';
import boton from './components/boton.js';
import freecodecamplogo from './img/freecodecamp-logo.png';


function App() {

  const eventClick = () => {
    console.log('Funciona');
  }

  const resetCount = () => {
    console.log('Resetear');
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
        <boton
          texto='Click'
          click-button={true} 
          eventClick={} />
        <boton />
        <boton
          texto='Reset'
          reset-button={false} 
          eventClick={} />
        <boton />
      </div>
    </div>
  );
}

export default App;
