import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { IUser } from '~/modules/auth/interfaces'

import { IAuthState } from '../../interfaces'

const initialState: IAuthState = {
    isLoggedIn : true,
    user       : undefined,
    isError    : false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

        error: ( state, { payload }: PayloadAction< boolean > ) => {
            state.isError = payload
        },

        login: ( state, { payload }: PayloadAction< IUser > ) => {

            state.isError    = false
            state.isLoggedIn = true
            state.user       = payload

        },

        logout: ( state ) => {

            state.isLoggedIn = false
            state.user       = undefined

        }

    }
})

export const {

    error,
    login,
    logout

} = authSlice.actions

export default authSlice.reducer
