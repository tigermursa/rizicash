import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 1500,
  categories: {
    food: 0,
    travels: 0,
    entertainment: 0,
    clothing: 0,
  },
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    //1
    increment: (state) => {
      state.count = state.count + 1;
    },
    //2
    decrement: (state) => {
      state.count = state.count - 1;
    },

    //3
    incrementByValue: (state, actions) => {
      state.count = state.count + actions.payload;
    },
    //4
    decrementByValue: (state, actions) => {
      state.count = state.count - actions.payload;
    },
    //5
    addAmountToCategory: (state, action) => {
      const { category, amount } = action.payload;
      state.categories[category] += amount;
    },
  },
});

export const { increment, decrement, incrementByValue, decrementByValue ,addAmountToCategory } =
  counterSlice.actions;

export default counterSlice.reducer;
