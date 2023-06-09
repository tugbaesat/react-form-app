import React from "react";
import { useForm } from "react-hook-form";
import PasswordComponent from "./PasswordComponent";
import EmailComponent from "./EmailComponent";
import { useState } from "react";

const FormComponent = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [isRegistered, setIsRegistered] = useState(false);

  const formSubmit = (data) => {
    console.log(data);
    setIsRegistered(true);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="w-full max-w-lg p-5 bg-orange-300 rounded"
      >
        <h1 className="p-3 mb-4 font-bold text-center text-gray-700 uppercase rounded">
          Registration Form
        </h1>
        <div className="flex flex-wrap mb-6 -mx-3">
          <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              htmlFor="grid-first-name"
            >
              First Name
            </label>
            <input
              {...register("firstName", { required: true })}
              aria-invalid={errors.firstName ? "true" : "false"}
              className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border rounded appearance-none focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Peter"
            />
            {errors.firstName?.type === "required" && (
              <p role="alert" className="text-xs italic text-red-500">
                First name is required.
              </p>
            )}
          </div>
          <div className="w-full px-3 md:w-1/2">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              htmlFor="grid-last-name"
            >
              Last Name
            </label>
            <input
              {...register("lastName", { required: true })}
              aria-invalid={errors.lastName ? "true" : "false"}
              className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Parker"
            />
            {errors.lastName?.type === "required" && (
              <p role="alert" className="text-xs italic text-red-500">
                Last name is required.
              </p>
            )}
          </div>
        </div>
        <EmailComponent register={register} errors={errors} />
        <PasswordComponent register={register} errors={errors} />
        <div className="items-center mt-4 mb-4">
          <input
            {...register("terms", { required: true })}
            aria-invalid={errors.terms ? "true" : "false"}
            id="checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-gray-600 bg-gray-400 border-gray-300 rounded focus:ring-gray-500"
          />
          <label
            htmlFor="checkbox"
            className="ml-2 text-sm font-medium text-gray-500 "
          >
            I agree to the{" "}
            <a href="#" className="text-blue-600 hover:underline">
              terms and conditions
            </a>
            .
          </label>
          {errors.terms && (
            <p className="mt-3 text-xs italic text-red-500">
              You must agree to the terms and conditions.
            </p>
          )}
        </div>
        <div>
          <button
            className="w-full px-4 py-2 font-bold text-gray-200 uppercase bg-orange-500 rounded shadow hover:bg-orange-400 focus:shadow-outline focus:outline-none"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
      {isRegistered && (
        <div className="p-3 mt-4 text-orange-500 rounded bg-amber-200">
          Form successfully registered!
        </div>
      )}
    </div>
  );
};

export default FormComponent;
