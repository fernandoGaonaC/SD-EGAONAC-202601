import { useNavigate } from 'react-router-dom';
import '../stylesheet/login.css'
interface entrada{
usuario:string;
contraseña:string;
}
export function Login(){

    const navegar = useNavigate();

    const ingresar = () => {
        navegar("/usuario");
    };
return(
    <>
    <div className="contenedor-login">
    <h2>Bienvenidos a la tienda generica</h2>
    <div className="formulario-login">
        <label htmlFor="user_in">usuario </label>
        <input type="text" id="user_in" />
        <br />
        <label htmlFor="password_in">Contraseña</label>
        <input type="text" id="password_in"  />
        <br />
        <button type="submit" onClick={ingresar} >Ingresar</button>
    </div>
    </div>
    </>
)
}
export default Login;