// Home.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
  decrementByValue,
  addAmountToCategory,
} from "../redux/features/counter/counterSlice";

import "./Home.css";
import {
  closeModal,
  openModal,
  selectModal,
} from "../redux/features/counter/modal/modalSlice";

const Home = () => {
  const { count, categories } = useSelector((state) => state.counter); // Update this line
  const modal = useSelector(selectModal);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("food"); // Add this line

  const handleAddMoney = () => {
    dispatch(openModal("add"));
  };

  const handleSpendMoney = () => {
    dispatch(openModal("spend"));
  };

  const handleModalClose = () => {
    dispatch(closeModal());
  };

  const handleModalSubmit = () => {
    const numericAmount = parseFloat(amount);

    if (!isNaN(numericAmount)) {
      if (modal.actionType === "add") {
        dispatch(incrementByValue(numericAmount));
      } else if (modal.actionType === "spend") {
        dispatch(
          addAmountToCategory({
            category: selectedCategory,
            amount: numericAmount,
          })
        ); // Update this line
        dispatch(decrementByValue(numericAmount));
      }

      dispatch(closeModal());
    } else {
      console.error("Invalid amount entered");
    }
  };

  return (
    <div>
      <div className="border w-80 mx-auto text-center font-semibold text-3xl mt-9 p-6">
        <span className="font-extrabold"> &#2547; </span> {count}
      </div>

      <div className="flex justify-center mt-4">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mx-2 rounded"
          onClick={handleAddMoney}
        >
          Add money
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mx-2 rounded"
          onClick={handleSpendMoney}
        >
          Spend money
        </button>
      </div>

      <div className=" w-80 mx-auto  font-semibold mt-10 border p-2">
        <div>Food: {categories.food}</div>
        <div>Travels: {categories.travels}</div>
        <div>Entertainment: {categories.entertainment}</div>
        <div>Clothing and Accessories: {categories.clothing}</div>
      </div>

      {modal.isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close mb-5" onClick={handleModalClose}>
              &times;
            </span>
            <p className="font-semibold">
              Select category and enter the amount
            </p>
            <select
              className="h-14 text-xl mt-2 mb-2 ps-2 pe-2"
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="food">Food</option>
              <option value="travels">Travels</option>
              <option value="entertainment">Entertainment</option>
              <option value="clothing">Clothing and Accessories</option>
            </select>
            <input
              className="h-14 text-3xl mt-2 mb-2 ps-2 pe-2"
              type="number"
              onChange={(e) => setAmount(e.target.value)}
            />
            <button
              className="btn p-2 bg-green-500 mt-4 font-semibold text-white"
              onClick={handleModalSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
