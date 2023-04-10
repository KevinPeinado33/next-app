import { IUser } from '~/modules/auth/domain/interfaces'

export interface IAuthState {

    isLoggedIn : boolean
    user?      : IUser
    isError?   : boolean
    
}