import React from "react";

const Output = ({ actualCost, supplierCost }) => {
  return (
    <div>
      <p>Actual Cost: {actualCost}</p>
      <p>Supplier Cost: {supplierCost}</p>
    </div>
  );
};

export default Output;
