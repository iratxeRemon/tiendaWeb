import { useGLTF } from '@react-three/drei';
import { useState } from 'react';
import Menu from './Menu.jsx';
import Principal from './Principal.jsx';
import Login from './login.jsx';
import './App.css'
import Productos from './Productos.jsx';

function App() {
  const [vistaActual, setVistaActual] = useState('principal'); 

  const cambiarVista = (vista) => {
    setVistaActual(vista); 
  };

  return (
    <>
      <Menu cambiarVista={cambiarVista} /> 
   
      {vistaActual === 'login' && <Login cambiarVista={cambiarVista} />}
      {vistaActual === 'productos' && <Productos cambiarVista={cambiarVista} />}
      {vistaActual === 'principal' && <Principal cambiarVista={cambiarVista}/>}
    </>
  );
}

export default App;
