"use client";
import React, { useState } from "react";

const NumberFormatter = () => {
  const [inputNumber, setInputNumber] = useState("");

  // Function to format the number as "9,999.99"
  const formatNumber = (num) => {
    return num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value.replace(/[^0-9.]/g, "");
    setInputNumber(inputValue);
  };

  return (
    <div>
      <label>
        Enter Number:
        <input
          className="text-black"
          type="text"
          value={inputNumber}
          onChange={handleInputChange}
        />
      </label>
      {inputNumber && (
        <p>Formatted Number: {formatNumber(parseFloat(inputNumber))}</p>
      )}
    </div>
  );
};

export default NumberFormatter;
