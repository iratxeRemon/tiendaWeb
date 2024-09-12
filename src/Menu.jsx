import './Menu.css'

const Menu = ({ cambiarVista }) => {
  

    return (
        <div className="menu">
          <p>TITULO</p>
          <button onClick={() => cambiarVista('login')}>Iniciar sesión</button>
        </div>
    )
  }


  export default Menu