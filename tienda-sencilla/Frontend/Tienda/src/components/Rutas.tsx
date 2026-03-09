import {Route, Navigate, Routes} from 'react-router-dom'
import Login from './Login';
import Menu from './Menu';
import Usuario from './Usuario';
import Cliente from './Cliente';
import Provedores from './Provedores';
import Producto from './Producto';
import Reportes from './Reportes';
import Ventas from './Ventas';

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
        <Route path='/Reportes' element={<Reportes></Reportes>}></Route>
        <Route path='/Ventas' element={<Ventas></Ventas>}></Route>
        <Route path='*' element={<Navigate to="/" replace />}></Route>
    </Routes>
    </>
)

}
export default Rutas;