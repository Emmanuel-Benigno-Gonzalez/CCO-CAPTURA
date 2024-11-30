import { useForm } from 'react-hook-form'

export default function DashboardView() {

  const initialValues = {

  }

  const {register, handleSubmit, formState: {errors}} = useForm({defaultValues: initialValues})

  return (
    <>
        <h1> Captura de Operaciones</h1>

    </>
  );
}
