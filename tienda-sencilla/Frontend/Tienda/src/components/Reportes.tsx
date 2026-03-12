import '../stylesheet/Reportes.css'
import Menu from "./Menu"

import { useState } from "react"

const ListarUsuarios=()=>{
    return (
        <>
        <div className="contenedor-tabla">

        <table>
            <thead>
                
        <tr>
            <th>Cedula</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Usuario</th>
            <th>Password</th>
        </tr>
            </thead>
        <tbody>
            <td>Cedula</td>
            <td>Nombre</td> 
            <td>Correo</td>
            <td>Usuario</td>
            <td>Password</td>
        </tbody>    

        </table>
        </div>
        </>
   
    )
}
const ListaCliente=()=>{
    return (
        <div className="contenedor-tabla">

        <table>
            <thead>

            <tr>
                <th>Cedula</th>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Direccion</th>
                <th>Telefono</th>
            </tr>
            </thead>
            <tbody>

            <tr>
                <td>Cedula</td>
                <td>Nombre</td>
                <td>Correo</td>
                <td>Direccion</td>
                <td>Telefono</td>
            </tr>
            </tbody>
        </table>
        </div>
    )
}
const VentasCliente=()=>{
    return (
      <>
      <div className="contenedor-tabla">

      <table>
        <thead>

        <tr>
            <th>Cedula</th>
            <th>Nombre</th>
            <th>Valor Total Ventas</th>
        </tr>
        </thead>
        <tbody>

        <tr>
            <td>Cedula</td>
            <td>Nombre</td>
            <td>Valor Total Ventas</td>
        </tr>
        </tbody>
      </table>
      <label htmlFor="">Total Ventas $</label>
      <br />
      </div>
      </>
    )

}

const Reportes =()=>{
    const [estado,cambiarEstado]=useState<Number>(0);
    
    
    
    
    const seleccion=()=>{
        switch(estado){
            case 1: return  <ListarUsuarios/>;
            case 2: return <ListaCliente/>; 
            case 3: return <VentasCliente/>
        }

    }
    return (
        
    <>
    <Menu/>
    <h2>Reportes</h2>
    {seleccion()}
   <div className="contenedor-botones">
    <button onClick={()=>{cambiarEstado(1)}}>Lista de usuario</button>
    <button onClick={()=>{cambiarEstado(2)}}>Listado de Clientes</button>
    <button onClick={()=>{cambiarEstado(3)}}>Ventas por cliente</button>
   </div>
    </>
)
}
export default Reportes