import './App.css';
import logo from './img/Logo-Pokeball.png';
import Boton from './componentes/boton';
import Contador from './componentes/Contador';
import {useState} from 'react';

function App() {
const [numClics, setNumClics] = useState(0); 

  const manejarClic = () => {
  setNumClics( numClics + 1 );
  };

  const reinciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img className='logo-img' 
          src={logo}
          alt='Logo de Prueba'
          
        />

      </div>

      <div className='contenedor-principal'>
        <Contador
        numClics={numClics}
        />

        <Boton 
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic} 
        />
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reinciarContador} 
        />  
      </div>

    </div>
  );
}

export default App;
