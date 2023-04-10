import { configureStore } from '@reduxjs/toolkit'

import authReducer from '~/modules/auth/data/slices/auth.slice'
import uiReducer from './slices/ui.slice'

export const store = configureStore({
  
  reducer: {
    ui   : uiReducer,
    auth : authReducer
  }
  
})

export type RootState   = ReturnType< typeof store.getState >
export type AppDispatch = typeof store.dispatch
