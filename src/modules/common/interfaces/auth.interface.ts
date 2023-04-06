import { IUser } from '~/modules/auth/interfaces'

export interface IAuthState {

    isLoggedIn : boolean
    user?      : IUser
    isError?   : boolean
    
}