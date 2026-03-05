function Login(){
return(
    <>
    <div className="contenedor-login">
    <h2>Bienvenidos a la tienda generica</h2>
    <form action="" method="post">
        
        <label htmlFor="user_in">usuario </label>
        <input type="text" id="user_in" />
        <br />
        <label htmlFor="password_in">Contraseña</label>
        <input type="text" id="password_in" />
        <br />
        <a href="/menu">Ingresar</a>
    </form>
    </div>
    </>
)
}
export default Login;