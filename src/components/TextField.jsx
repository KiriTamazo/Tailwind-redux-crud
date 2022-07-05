import React from "react";

const TextField = ({ label, inputProps, onChange, value }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="" className="mb-2 text-base text-gray-800">
        {label}
      </label>
      <input
        className="bg-gray-200 py-2 px-3 border-2 outline-none rounded-md"
        value={value}
        type="text"
        {...inputProps}
        onChange={onChange}
      />
    </div>
  );
};

export default TextField;
