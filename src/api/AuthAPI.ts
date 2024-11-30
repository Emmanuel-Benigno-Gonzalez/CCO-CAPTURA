import api from '../lib/axios'
import {isAxiosError} from 'axios'
import { UserRegistrationForm } from '../types'

export async function createAccount(formData: UserRegistrationForm) {
  try {
    const { data } = await api.post<string>('/auth/sign-up', formData)
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
}


