// modalSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
    actionType: "", // "add" or "spend"
  },
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.actionType = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.actionType = "";
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const selectModal = (state) => state.modal;
export default modalSlice.reducer;
