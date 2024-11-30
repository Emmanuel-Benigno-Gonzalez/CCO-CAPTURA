import { useForm } from "react-hook-form";
import { UserRegistrationForm } from "@/types/index";
import ErrorMessage from "../../components/ErrorMessage";
import { Link } from "react-router-dom";
import { createAccount } from "../../api/AuthAPI";

export default function RegisterView() {
  
  const initialValues: UserRegistrationForm = {
    id_usuario: null,
    nombre: '',
    apPaterno: '',
    apMaterno: '',
    password: '',
    password_confirmation: '',
    tipo_usuario: null
  }

  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<UserRegistrationForm>({ defaultValues: initialValues });

  const password = watch('password');

  const handleRegister = (formData: UserRegistrationForm) => {
    createAccount(formData)
  }

  return (
    <>
      <h1 className="text-5xl font-black text-white">Crear Cuenta</h1>
      <p className="text-2xl font-light text-white mt-5">
        Llena el formulario para {''}
        <span className=" text-cyan-500 font-bold"> crear tu cuenta</span>
      </p>

      <form
        onSubmit={handleSubmit(handleRegister)}
        className="space-y-8 p-10  bg-white mt-10"
        noValidate
      >
        <div className="flex flex-col gap-5">
          <label
            className="font-normal text-2xl"
            htmlFor="text"
          >Id Usuario</label>
          <input
            id="id_usuario"
            type="text"
            placeholder="Id de Registro"
            className="w-full p-3  border-gray-300 border"
            {...register("id_usuario", {
              required: "El Id de Usuario de registro es obligatorio",
              pattern: {
                value: /^\d+$/,
                message: "Id no válido",
              },
            })}
          />
          {errors.id_usuario && (
            <ErrorMessage>{errors.id_usuario.message}</ErrorMessage>
          )}
        </div>

        <div className="flex flex-col gap-5">
          <label
            className="font-normal text-2xl"
          >Nombre</label>
          <input
            type="name"
            placeholder="Nombre de Registro"
            className="w-full p-3  border-gray-300 border"
            {...register("nombre", {
              required: "El Nombre de usuario es obligatorio",
            })}
          />
          {errors.nombre && (
            <ErrorMessage>{errors.nombre.message}</ErrorMessage>
          )}
        </div>

        <div className="flex flex-col gap-5">
          <label
            className="font-normal text-2xl"
          >Apellido Paterno</label>
          <input
            type="name"
            placeholder="Apellido Paterno"
            className="w-full p-3  border-gray-300 border"
            {...register("apPaterno", {
              required: "El Apellido Paterno de usuario es obligatorio",
            })}
          />
          {errors.apPaterno && (
            <ErrorMessage>{errors.apPaterno.message}</ErrorMessage>
          )}
        </div>

        <div className="flex flex-col gap-5">
          <label
            className="font-normal text-2xl"
          >Apellido Materno</label>
          <input
            type="name"
            placeholder="Apellido Materno"
            className="w-full p-3  border-gray-300 border"
            {...register("apMaterno", {
              required: "El Apellido Materno de usuario es obligatorio",
            })}
          />
          {errors.apMaterno && (
            <ErrorMessage>{errors.apMaterno.message}</ErrorMessage>
          )}
        </div>

        <div className="flex flex-col gap-5">
          <label
            className="font-normal text-2xl"
          >Password</label>

          <input
            type="password"
            placeholder="Password de Registro"
            className="w-full p-3  border-gray-300 border"
            {...register("password", {
              required: "El Password es obligatorio",
              minLength: {
                value: 8,
                message: 'El Password debe ser mínimo de 8 caracteres'
              }
            })}
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </div>

        <div className="flex flex-col gap-5">
          <label
            className="font-normal text-2xl"
          >Repetir Password</label>

          <input
            id="password_confirmation"
            type="password"
            placeholder="Repite Password de Registro"
            className="w-full p-3  border-gray-300 border"
            {...register("password_confirmation", {
              required: "Repetir Password es obligatorio",
              validate: value => value === password || 'Los Passwords no son iguales'
            })}
          />

          {errors.password_confirmation && (
            <ErrorMessage>{errors.password_confirmation.message}</ErrorMessage>
          )}
        </div>

        <div className="flex flex-col gap-5">
            <label className="font-normal text-2xl">
                Tipo de Usuario
            </label>
            <select
                className="w-full p-3 border-gray-300 border"
                {...register("tipo_usuario", {
                required: "El tipo de usuario es obligatorio",
                })}
            >
                <option value="">Seleccione un tipo de usuario</option>
                <option value={1}>Administrador</option>
                <option value={2}>Capturador</option>
            </select>
            {errors.tipo_usuario && (
                <ErrorMessage>{errors.tipo_usuario.message}</ErrorMessage>
            )}
        </div>

        <input
          type="submit"
          value='Registrarme'
          className="bg-cyan-600 hover:bg-cyan-700 w-full p-3  text-white font-black  text-xl cursor-pointer"
        />
      </form>

      <nav className="mt-10 flex flex-col space-y-4">
          <Link
            to={'/auth/login'}
            className="text-center text-gray-300 font-normal"
          >¿Ya tienes una Cuenta? Iniciar Sesión</Link>
      </nav>

    </>
  )
}