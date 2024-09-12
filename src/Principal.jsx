//import { useState } from 'react'
//import './Style/Principal.css'

const Principal = ({ cambiarVista }) => {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <p>
          PANTALLA PRINCIPAL
        </p>
        <button onClick={() => cambiarVista('productos')}>IR A PRODUCTOS</button>
      </div>
    </>
  )
}

export default Principal