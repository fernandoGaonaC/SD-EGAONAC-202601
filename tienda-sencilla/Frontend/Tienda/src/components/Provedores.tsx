import Menu from "./Menu";
import { useState } from "react";

{/* NIT, nombre proveedor, dirección, teléfono, y ciudad.    */}
const CrearProveedor=()=>{
    return <>
   <form action="">
    <label htmlFor="nit-in">Nit:</label>
    <input type="text" id="nit-in"/>
    <label htmlFor="nombre-in">Nombre:</label>
    <input type="text" id="nombre-in"/>
    <label htmlFor="direccion-in">Direccion:</label>
    <input type="text" id="direccion-in"/>
    <label htmlFor="telefono-in">Telefono:</label>
    <input type="text" id="telefono-in"/>
    <label htmlFor="ciudad">Ciudad</label>
    <input type="text" id="ciudad"/>
    <button type="submit">Crear</button>
   </form>
    </>
}
const ActualizarProveedor=()=>{
    return <>
    <h2>actualizar</h2>
    </>
}
const ListarProveedor=()=>{
    return <>
    <h2>listar</h2>
    </>
}
const EliminarProveedor=()=>{
    return <>
    <h2>eliminar</h2>
    </>
}
const Provedores =()=>{
const seleccion=()=>{
 switch (estado) {
    case 1:return<CrearProveedor/>;
    case 2:return<EliminarProveedor/>;
    case 3:return<ListarProveedor/>;
    case 4:return<ActualizarProveedor/>;
}   
}   
    
const [estado,cambioEstado]=useState<Number>(0);
    return (
        <>
        <Menu></Menu>
        <h2>Provedores</h2>
        <button onClick={()=>{cambioEstado(1)}}>Crear</button>
        <button onClick={()=>{cambioEstado(2)}}>Eliminar</button>
        <button onClick={()=>{cambioEstado(3)}}>Listar</button>
        <button onClick={()=>{cambioEstado(4)}}>Actualizar</button>
        {seleccion()}
        </>
    )
}
export default Provedores;