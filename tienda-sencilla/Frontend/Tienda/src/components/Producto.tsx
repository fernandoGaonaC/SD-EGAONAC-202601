import Menu from "./Menu";
import '../stylesheet/Producto.css'
const Producto=()=>{
    return(
        <>
        <Menu></Menu>
       <div className="contenedor-productos">
         <h2>Productos</h2>
        <br />
        <label htmlFor="">Nombre del Archivo</label>
         <button>Examinar</button>
         <br />
         <button>Cargar</button>
       </div>
        </>
    )
}
export default Producto;