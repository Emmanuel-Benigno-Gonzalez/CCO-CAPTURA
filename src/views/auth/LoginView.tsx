import { useForm } from "react-hook-form";
import { UserLoginForm } from "@/types/index";
import ErrorMessage from "../../components/ErrorMessage";
import { Link } from "react-router-dom";


export default function LoginView() {

  const initialValues: UserLoginForm = {
    id_usuario: null,
    password: '',
  }
  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues })

  const handleLogin = (formData: UserLoginForm) => { }

  return (
    <>
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="space-y-8 p-10 bg-white"
        noValidate
      >
        <div className="flex flex-col gap-5">
          <label
            className="font-normal text-2xl"
          >Usuario</label>

          <input
            id="id_usuario"
            type="text"
            placeholder="Usuario de Registro"
            className="w-full p-3  border-gray-300 border"
            {...register("id_usuario", {
              required: "El id del usuario es obligatorio",
              pattern: {
                value: /^\d+$/,
                message: "Id de usuario no válido",
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
          >Password</label>

          <input
            type="password"
            placeholder="Password de Registro"
            className="w-full p-3  border-gray-300 border"
            {...register("password", {
              required: "El Password es obligatorio",
            })}
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </div>

        <input
          type="submit"
          value='Iniciar Sesión'
          className="bg-cyan-600 hover:bg-cyan-700 w-full p-3  text-white font-black  text-xl cursor-pointer"
        />
      </form>

      <nav className="mt-10 flex flex-col space-y-4">
          <Link
            to={'/auth/register'}
            className="text-center text-gray-300 font-normal"
          >¿No tienes una Cuenta? Crear Cuenta</Link>
      </nav>

    </>
  )
}