import Menu from "./Menu";
import { useState } from "react";

interface Persona {
    cedula: number;
    nombre: string;
    correo: string;
    n_usuario: string;
    contrasena: string;
}
const CrearUsuario=()=>{
    return (
        <>
        <form action="">
        <label htmlFor="nombre-in">nombre</label><input type="text"  id="nombre-in"/>
        <label htmlFor="cedula-in">cedula</label><input type="text"  id="cedula-in"/>
        <label htmlFor="correo-in">correo</label><input type="text"  id="correo-in"/>
        <label htmlFor="username-in">username</label><input type="text"  id="username-in"/>
        <label htmlFor="contraseña">contraseña</label><input type="text"  id="contraseña"/>
            <button >crear</button>
        </form>
        </>
    )
}

const ActualizarUsuario=()=>{
    return (
        <h1>Actualizar</h1>
    )
}
const EliminarUsuario=()=>{
    return (
        <h1>Eliminar</h1>
    )
}

const Usuario =()=>{
    const [estado,cambioEstado]=useState<Number>(0);

    const seleccionarModo=()=>{
    switch(estado){
        case 1:return <EliminarUsuario/>;
        case 2:return <ActualizarUsuario/>;
        case 3:return<CrearUsuario/>; 
    }
}

    return (
    <>
    <Menu></Menu>
    <h2>Usuarios</h2>
    <button onClick={()=>{cambioEstado(1)}}>Eliminar</button>
    <button onClick={()=>{cambioEstado(2)}}>Actualizar</button>
    <button onClick={()=>{cambioEstado(3)}}>Crear</button>
    {seleccionarModo()}
    </>)
}

export default Usuario;