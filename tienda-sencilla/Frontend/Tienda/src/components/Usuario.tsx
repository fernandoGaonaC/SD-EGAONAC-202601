import Menu from "./Menu";
import { useState } from "react";

interface Usuario {
  nombre: string;
  cedula: string;
  correo: string;
  username: string;
  contraseña: string;
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
     const [usuario, setUsuario] = useState<Usuario>({
    nombre: "felipe",
    cedula: "1234566789",
    correo: "correo@example",
    username: "user1",
    contraseña: "password",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUsuario({ ...usuario, [id]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Usuario Actualizado")
    // Aquí podrías llamar a una API o actualizar el estado global
  };
 return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nombre">Nombre</label>
      <input type="text" id="nombre" value={usuario.nombre} onChange={handleChange} />

      <label htmlFor="cedula">Cédula</label>
      <input type="text" id="cedula" value={usuario.cedula} onChange={handleChange} />

      <label htmlFor="correo">Correo</label>
      <input type="email" id="correo" value={usuario.correo} onChange={handleChange} />

      <label htmlFor="username">Username</label>
      <input type="text" id="username" value={usuario.username} onChange={handleChange} />

      <label htmlFor="contraseña">Contraseña</label>
      <input type="password" id="contraseña" value={usuario.contraseña} onChange={handleChange} />

      <button type="submit">Actualizar</button>
    </form>
  );
};

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
   <div className="contenedor-botones">
     <button onClick={()=>{cambioEstado(1)}}>Eliminar</button>
    <button onClick={()=>{cambioEstado(2)}}>Actualizar</button>
    <button onClick={()=>{cambioEstado(3)}}>Crear</button>
   </div>
    {seleccionarModo()}
    </>)
}

export default Usuario;