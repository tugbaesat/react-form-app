import React from "react";

const EmailComponent = ({ register, errors }) => {
  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) {
      return "Email is required.";
    } else if (!regex.test(value)) {
      return "Invalid email format.";
    }
    return true;
  };

  return (
    <div className="flex flex-wrap mb-6 -mx-3">
      <div className="w-full px-3">
        <label
          className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
          htmlFor="grid-password"
        >
          Email
        </label>
        <input
          {...register("email", { validate: validateEmail })}
          className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-password"
          type="email"
          placeholder="example@email.com"
        />
        {errors.email && (
          <p className="mt-3 text-xs italic text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default EmailComponent;
