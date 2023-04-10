import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

import { RootState } from '~/modules/common/data'
import { loginUseCase } from '../../domain/usecases'

type FormData =  { email: string, password: string }

export const loginController = () => {

    const router      = useRouter()
    
    const { isError } = useSelector( (state: RootState) => state.auth )
    
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm< FormData >()

    const onLogin = useCallback(( { email, password }: FormData ) => {

        loginUseCase( email, password )

    }, [ ])

    return {
        onLogin,
        register,
        handleSubmit,
        errors,
        isError,
        router
    }

}