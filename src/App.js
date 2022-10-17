import './App.css';
import Boton from './components/Boton';
import Counter from './components/Counter'
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
      <Counter

      />
      <div className='container-principal'>
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
