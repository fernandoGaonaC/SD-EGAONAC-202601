import '../stylesheet/Menu.css'
import { Link } from 'react-router-dom';
const Menu =()=>{
return(
    <>
    <header>
        <h2>Tienda Generica</h2>
    </header>
    <nav>
        <ul>    
          <li><Link to="/usuario">Usuarios</Link></li>
          <li><Link to="/cliente">Clientes</Link></li>
          <li><Link to="/provedores">Proveedores</Link></li>
          <li><Link to="/producto">Productos</Link></li>
          <li><Link to="/ventas">Ventas</Link></li>
          <li><Link to="/reportes">Reportes</Link></li>

        </ul>
    </nav>
    </>
)
}
export default Menu;