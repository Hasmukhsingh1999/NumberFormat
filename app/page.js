"use client";
import React from "react";
import Output from "./components/Output";
import { useForm } from "react-hook-form";

const page = () => {
  // register is a method allowing automatic regitser the two input its a callback and return some props and inject into your inputs ->
  const { register, handleSubmit, } = useForm();

  const handleInputChangeActualCost = (e) => {};
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
          {...register("actual_cost")}
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
        <Output />
      </div>
      {/* OUTPUT  */}
    </div>
  );
};

export default page;
