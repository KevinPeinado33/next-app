import { createSlice } from '@reduxjs/toolkit'

import { IUiState } from '../../interfaces'

const initialState: IUiState = {
  isOpenMenu: false
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
