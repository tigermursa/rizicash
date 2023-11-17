import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/features/counter/counterSlice";

const Home = () => {
  // using useSelector ti get my state values
  const { count } = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  return (
    <div>
      <div className="border w-80 mx-auto text-center font-semibold text-3xl mt-9 p-6">
        ${count}
      </div>

      <div className="flex justify-center mt-4">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mx-2 rounded"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mx-2 rounded"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Home;
