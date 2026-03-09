import { useNavigate } from 'react-router-dom';
import '../stylesheet/login.css'
const ingresar=()=>{
    const navegar= useNavigate();
        navegar("/usuario")
}

export function Login(){
return(
    <>
    <div className="contenedor-login">
    <h2>Bienvenidos a la tienda generica</h2>
    <div className="formulario-login">

    <form onSubmit={ingresar} >
        
        <label htmlFor="user_in">usuario </label>
        <input type="text" id="user_in" />
        <br />
        <label htmlFor="password_in">Contraseña</label>
        <input type="text" id="password_in"  />
        <br />
        <button type="submit" >Ingresar</button>
    
    </form>
    </div>
    </div>
    </>
)
}
export default Login;