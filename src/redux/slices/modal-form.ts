import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isFormOpen: false,
}

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openFormModal: (state) => {
      state.isFormOpen = true
    },
    closeFormModal: (state) => {
      state.isFormOpen = false
    },
  },
})

export const { openFormModal, closeFormModal } = modalSlice.actions
export default modalSlice.reducer
