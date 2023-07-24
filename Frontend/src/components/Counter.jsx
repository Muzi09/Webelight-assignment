import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

function Counter({ onCounterChange, price }) {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
    onCounterChange(price);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
    onCounterChange(-price);
  };

  return (
    <div className="d-flex align-items-center">
      <button
        className="btn btn-sm btn-outline-secondary me-2"
        onClick={() => {handleDecrement()}}
      >
        <FaMinus />
      </button>
      <span className="fw-bold">{count}</span>
      <button
        className="btn btn-sm btn-outline-secondary ms-2"
        onClick={() => {handleIncrement()}}
      >
        <FaPlus />
      </button>
    </div>
  );
}

export default Counter;
