import {Route,Routes} from 'react-router-dom'
import Login from './Login';
import Menu from './Menu';
import Usuario from './Usuario';
import Cliente from './Cliente';
import Provedores from './Provedores';
import Producto from './Producto';

const Rutas=()=>{
return(
    <>
    <Routes>
        <Route path='/' element ={<Login></Login>}/>
        <Route path='/menu' element={<Menu></Menu>}></Route>
        <Route path='/usuario' element={<Usuario></Usuario>}></Route>
        <Route path='/cliente' element={<Cliente></Cliente>}></Route>
        <Route path='/provedores' element={<Provedores></Provedores>}></Route>
        <Route path='/Producto'element={<Producto></Producto>}></Route>
    </Routes>
    </>
)

}
export default Rutas;