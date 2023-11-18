import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import modalSlice from "../features/counter/modal/modalSlice";
import addMoneyModalSlice from "../features/counter/modal/addMoneyModalSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    modal: modalSlice,
    addMoneyModal: addMoneyModalSlice,
  },
});

export default store;
