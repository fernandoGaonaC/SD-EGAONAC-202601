import "../stylesheet/Cliente.css";
import Menu from "./Menu";
import { useState } from "react";
const CrearCliente=()=>{
    return(
        <>
        <div className="contenedor-crear">

        <form action="" method="post">
            <label htmlFor="cedula-in"></label>Cedula<input type="text" id="cedula-in" placeholder="No.cedula de ciudadania"/>
            <label htmlFor="nombre-in"></label>Nombre completo<input type="text" id="nombre-in"/> 
            <label htmlFor="direccio-in"></label>Direccion<input type="text" id="direccion-in"/>
            <label htmlFor="telefono-in"></label>Telefono<input type="text" id="telefono-in"/>
            <label htmlFor="correo-in"></label>Correo<input type="text" id="correo-in"/>
            <button type="submit">Crear</button>
        </form>
        </div>
        </>
    )
}
const EliminarCliente=()=>{
    return(
        <>
        </>
    )
}
const ListarCliente=()=>{
    return(
        <>
        <h2>Listar</h2>
        </>
    )
}
const EditarCliente=()=>{
    return(
        <>
        <h2>Editar</h2>
        </>
    )
}
const Cliente=()=>{
    const [estado, setestado]=useState<Number>(0)

const Seleccion=()=>{
    switch(estado){
        case 1:return <CrearCliente/>;
        case 2:return <ListarCliente/>;
        case 3:return <EditarCliente/>;
        case 4:return <EliminarCliente/>;
    }
}




    return (
        <>
        <Menu></Menu>
        <h2>Clientes</h2>
        <div className="contenedor-botones">

        <button onClick={()=>{setestado(1)}}>Crear</button>
        <button onClick={()=>{setestado(2)}}>listar</button>
        <button onClick={()=>{setestado(3)}}>editar</button>
        <button onClick={()=>{setestado(4)}}>eliminar</button>
        </div>
        {Seleccion()}



        </>
    )
}


export default Cliente;