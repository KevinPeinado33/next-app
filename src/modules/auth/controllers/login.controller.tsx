import { useCallback } from 'react'
import { useForm } from 'react-hook-form'

import { loginUseCase } from '../usecases'

type FormData =  { email: string, password: string }

export const loginController = () => {

    const { register, handleSubmit, formState: { errors } } = useForm< FormData >()

    const onLogin = useCallback(( { email, password }: FormData ) => {

        loginUseCase( email, password )

    }, [ ])

    return {
        onLogin,
        register,
        handleSubmit,
        errors
    }

}