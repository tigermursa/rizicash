import { createSlice } from "@reduxjs/toolkit";

export const addMoneyModalSlice = createSlice({
  name: "addMoneyModal",
  initialState: {
    isOpen: false,
  },
  reducers: {
    openAddMoneyModal: (state) => {
      state.isOpen = true;
    },
    closeAddMoneyModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openAddMoneyModal, closeAddMoneyModal } = addMoneyModalSlice.actions;
export const selectAddMoneyModal = (state) => state.addMoneyModal;
export default addMoneyModalSlice.reducer;