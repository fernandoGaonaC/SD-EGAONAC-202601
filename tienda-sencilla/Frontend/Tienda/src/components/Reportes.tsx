import Menu from "./Menu"
import { useState } from "react"

const ListarUsuarios=()=>{
    return (
        <h2>Usuarios</h2>
    )
}
const ListaCliente=()=>{
    return (
        <h2>Cliente</h2>
    )
}
const ListaProductos=()=>{
    return (
        <h2>Productos</h2>
    )

}

const Reportes =()=>{
    const [estado,cambiarEstado]=useState<Number>(0);
    
    
    
    
    const seleccion=()=>{
        switch(estado){
            case 1: return  <ListarUsuarios/>;
            case 2: return <ListaProductos/>; 
            case 3: return <ListaCliente/>
        }

    }
    return (
        
    <>
    <Menu/>
    {console.log(1)}
    <h2>Reportes</h2>
    {seleccion()}
    <button onClick={()=>{cambiarEstado(1)}}>Lista de usuario</button>
    <button onClick={()=>{cambiarEstado(2)}}>Lista de Productos</button>
    <button onClick={()=>{cambiarEstado(3)}}>Ventas por cliente</button>
    </>
)
}
export default Reportes