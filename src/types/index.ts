import { z } from 'zod'

/** Auth & Users **/
const authSchema = z.object({
    id_usuario: z.number().nullable(),
    nombre: z.string(),
    apPaterno: z.string(),
    apMaterno: z.string(),
    password: z.string(),
    password_confirmation: z.string(),
    tipo_usuario: z.number().nullable()
})

type Auth = z.infer< typeof authSchema >
export type UserLoginForm = Pick<Auth, 'id_usuario' | 'password'>
export type UserRegistrationForm = Pick<Auth, 'id_usuario' | 'nombre' | 'apPaterno' | 'apMaterno' |'password' | 'password_confirmation' | 'tipo_usuario' >

