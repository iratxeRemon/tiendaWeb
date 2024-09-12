import React, { useRef } from 'react';
import './Login.css';

const Login = ({ cambiarVista }) => {
  const nombreRef = useRef(null);
  const passwRef = useRef(null);

  const manejarSubmit = (e) => {
    e.preventDefault(); 
    if (nombreRef.current.value.trim() === 'a' && passwRef.current.value.trim() === 'a') {
      cambiarVista('principal'); 
    } else {
      alert('Nombre o contraseña incorrectos');
    }
  };

  return (
    <div className="login">
      <div className="formulario">
        <form onSubmit={manejarSubmit}>
          <label>TITULO</label>
          <label>Nombre de usuario:</label>
          <input name="nombre" ref={nombreRef}/>
          <label>Contraseña:</label>
          <input type="password" name="passw" ref={passwRef}/>
          <label>
            <input type="checkbox" name="mostrarPass" /> Mostrar contraseña
          </label>
          {/* Botón de iniciar sesión con type="submit" para que se ejecute el submit */}
          <button type="submit">Iniciar sesión</button>

          {/* Botón para registro, si tienes lógica de registro, ponla aquí */}
          <button type="button">Registro</button>
        </form>
      </div>
      <div className="separador"></div>
      <div className="fondo">
        <button onClick={() => cambiarVista('principal')}>X</button>
      </div>
    </div>
  );
}

export default Login;
