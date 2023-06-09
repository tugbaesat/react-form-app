import React from "react";

const PasswordComponent = ({ register, errors }) => {
  //   const {
  //     register,
  //     formState: { errors },
  //     handleSubmit,
  //   } = useForm();
  const validatePassword = (value) => {
    let errorMessage = "";

    if (!value) {
      errorMessage = "Password is required.";
    } else if (value.length < 6) {
      errorMessage = "Password must be at least 6 characters long.";
    } else if (!/[A-Z]/.test(value)) {
      errorMessage = "Password must contain at least one uppercase letter.";
    } else if (!/[a-z]/.test(value)) {
      errorMessage = "Password must contain at least one lowercase letter.";
    } else if (!/[0-9]/.test(value)) {
      errorMessage = "Password must contain at least one number.";
    } else if (!/[!@#$%^&*()]/.test(value)) {
      errorMessage = "Password must contain at least one special character.";
    }

    return errorMessage || true;
  };

  return (
    <div className="flex flex-wrap mb-6 -mx-3">
      <div className="w-full px-3">
        <label
          className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
          htmlFor="grid-password"
        >
          Password
        </label>
        <input
          {...register("password", { validate: validatePassword })}
          className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-password"
          type="password"
          placeholder="******"
        />
        {errors.password && (
          <p className="mt-3 text-xs italic text-red-500">
            {errors.password.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default PasswordComponent;
