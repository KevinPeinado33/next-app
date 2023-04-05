import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
  isOpenMenu: boolean
}

const initialState: CounterState = {
  isOpenMenu: false,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

    toggleMenu: (state) => {
        state.isOpenMenu = !state.isOpenMenu
    }

  },
})

export const { toggleMenu } = counterSlice.actions

export default counterSlice.reducer
