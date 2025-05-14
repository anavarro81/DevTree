
import { Link } from "react-router-dom"
import { useForm } from 'react-hook-form';
import { FaEye } from 'react-icons/fa';
import type {RegisterForm} from "../types/index"
import { useState } from "react";
import axios, {isAxiosError} from "axios";
import { toast } from 'sonner'


const RegisterPage = () => {

       const ininialValues: RegisterForm = {
        handle: '',
        name: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    }
 

    toast('Hola desde Toaster')
  
  const {
    register, 
    watch, 
    handleSubmit, 
    reset,
    formState: { errors }} = useForm({defaultValues: ininialValues})
  
    const handleRegister = async (formData: RegisterForm) => {
        
        console.log(formData)

        // 

        

        try {
             const {data} = await axios.post(`${import.meta.env.VITE_URL_BASE}/user/auth/register`, formData)
            // const {data} = await axios.post('http://localhost:3000/user/auth/register', formData)
            console.log('registrado dado de alta correctamente')
            console.log(data)
            reset()
        } catch (error) {
            if (isAxiosError(error)) {
                console.log('error >> ', error)
                console.log('Error en el registro', error.response?.data.message)                
            }
            
        }
    }

    const [showPassword, setShowPassword] = useState(false)


    console.log('import.meta.env', import.meta.env.VITE_URL_BASE)
    
  
return (
    <>
      
      <h1 className="text-4xl text-white font-bold"> Crear cuenta </h1>

      <form onSubmit={handleSubmit(handleRegister)}
    
    className="bg-white px-5 py-20 rounded-lg space-y-10 mt-10"
>
    <div className="grid grid-cols-1 space-y-3">
        <label htmlFor="name" className="text-2xl text-slate-500">Nombre</label>
        <input
            id="name"
            type="text"
            placeholder="Tu Nombre"
            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
            {...register('name', { required: 'El nombre es obligatorio' })}

        />
            {errors.name &&
                <p className='bg-red-50 text-red-600 p-3 uppercase text-sm text-center '> { String(errors.name.message)} </p>
            }

    </div>
    <div className="grid grid-cols-1 space-y-3">
        <label htmlFor="email" className="text-2xl text-slate-500">E-mail</label>
        <input
            id="email"
            type="email"
            placeholder="Email de Registro"
            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
            {...register('email', 
                { required: 'El email es obligatorio' ,
                pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'El email no es válido'
                }}

            )}

        />
            {errors.email &&
                <p className='bg-red-50 text-red-600 p-3 uppercase text-sm text-center '> { String(errors.email.message)} </p>
            }


    </div>
    <div className="grid grid-cols-1 space-y-3">
        <label htmlFor="handle" className="text-2xl text-slate-500">Handle</label>
        <input
            id="handle"
            type="text"
            placeholder="Nombre de usuario: sin espacios"
            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
            {...register('handle', { required: 'El handle es obligatorio' })}
        />
            {errors.handle &&
                <p className='bg-red-50 text-red-600 p-3 uppercase text-sm text-center '> { String(errors.handle.message)} </p>
            }
    </div>
    <div className="grid grid-cols-1 space-y-3">
        <label htmlFor="password" className="text-2xl text-slate-500">Password</label>
        

        <div className="mt-1 relative"> 
            <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password de Registro"
                className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400 w-full"
                {...register('password', { required: 'El password es obligatorio', 
                    minLength: {
                        value: 8,
                        message: 'El password debe tener al menos 8 caracteres'
                    },
                    validate: (value) => {
                        if (value !== watch('passwordConfirmation')) {
                            return 'Las contraseñas no coinciden'
                        }
                    }

                })}
            

        />
            <button
                type='button' 
                className='absolute inset-y-0 right-0 px-3 flex items-center'>
                    <FaEye className="h-5 w-5 text-gray-400" 
                onClick={() => setShowPassword(!showPassword)}
                />
                </button>

        </div>



                    {errors.password &&
                <p className='bg-red-50 text-red-600 p-3 uppercase text-sm text-center '> { String(errors.password.message)} </p>
            }

    </div>

    <div className="grid grid-cols-1 space-y-3">
        <label htmlFor="password_confirmation" className="text-2xl text-slate-500">Repetir Password</label>
        <input
            id="passwordConfirmation"
            type="password"
            placeholder="Repetir Password"
            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
            {...register('passwordConfirmation', { required: 'La confirmación de la password es obligatoria ' })}
        />
            {errors.passwordConfirmation &&
                <p className='bg-red-50 text-red-600 p-3 uppercase text-sm text-center '> { String(errors.passwordConfirmation.message)} </p>
            }

    </div>

    <input
        type="submit"
        className="bg-cyan-400 p-3 text-lg w-full uppercase text-slate-600 rounded-lg font-bold cursor-pointer"
        value='Crear Cuenta'
    />  
</form>

      <nav className="mt-10">
        <Link to='/login'>
          <p className="text-white text-center text-lg"> ¿Ya tienes cuenta? Inicia sesión aquí </p>
          
        </Link>
      </nav>



    </>
  )
}

export default RegisterPage