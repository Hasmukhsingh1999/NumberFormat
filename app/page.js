"use client";
import React from "react";
import Output from "./components/Output";
import { useForm } from "react-hook-form";

const page = () => {
  // register is a method allowing automatic regitser the two input its a callback and return some props and inject into your inputs ->
  const { register, handleSubmit, watch, setValue } = useForm();

  const actualCost = watch("actual_cost", "");
  const supplierCost = watch("supplier_cost", "");

  const formatDecimalPart = (decimalPart) => {
    return decimalPart ? decimalPart.slice(0, 2) : "";
  };

  const handleInputChangeActualCost = (e) => {
    let inputValue = e.target.value.replace(/[^\d.]/g, "");
    console.log(inputValue);
    if (inputValue === "") {
      setValue("actual_cost", "");
    } else {
      const partsTheInputWithDecimal = inputValue.split(".");
      console.log("Parts : ", partsTheInputWithDecimal);

      // fetch the two index in parts
      if (partsTheInputWithDecimal.length > 1) {
        const [integralParts, decimalParts] = partsTheInputWithDecimal;
        console.log("IntegralParts", integralParts);
        console.log("Decimal Parts:", decimalParts);
        const formattedInteger = new Intl.NumberFormat().format(integralParts);
        const forattedDecimal = formatDecimalPart(decimalParts);

        const formattedValue = `${formattedInteger}.${forattedDecimal}`;
        console.log("FormattedValue", formattedValue);

        // Update input value
        setValue("actual_cost", formattedValue);
      } else {
        const formattedValue = new Intl.NumberFormat().format(inputValue);
        console.log("Formatted Value:", formattedValue);
        setValue("actual_cost", formattedValue);
      }
    }
  };
  const handleInputChangeSupplierCost = (e) => {};

  return (
    <div className="h-screen w-full flex md:flex-row flex-col items-center justify-center gap-9">
      <h1 className="text-4xl font-bold ">FORM HANDLER</h1>
      <form
        className="flex md:flex-row flex-col gap-5"
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <input
          className="border border-gray-400 bg-transparent p-4 rounded-xl"
          type="text"
          placeholder="Actual Cost"
          name="actual_cost"
          {...register("actual_cost")}
          onChange={handleInputChangeActualCost}
        />
        <input
          className="border border-gray-400 bg-transparent p-4 rounded-xl"
          type="text"
          placeholder="Supplier Cost"
          name="supplier_cost"
          {...register("supplier_cost")}
          onChange={handleInputChangeSupplierCost}
        />
        <button
          type="submit"
          className="p-4 bg-orange-600 rounded-xl text-white font-semibold"
        >
          Submit
        </button>
      </form>
      {/* OUTPUT  */}
      <div>
        <Output actualCost={actualCost} supplierCost={supplierCost} />
      </div>
      {/* OUTPUT  */}
    </div>
  );
};

export default page;
