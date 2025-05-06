import { Link } from "react-router-dom"


const LoginPage = () => {
  return (
    <>
        <h1 className="text-4xl text-white font-bold"> Acceder a tu cuenta </h1>
        <nav className="mt-10">
        <Link to='/register'>
          <p className="text-white text-center text-lg"> ¿No tienes cuenta? Crearla aquí</p>
          
        </Link>
      </nav>

    </>
  )
}

export default LoginPage