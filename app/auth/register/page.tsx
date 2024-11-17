"use client";
import InputItem from "@/components/input-item";
import { useActionState } from "react";
import { registerDefaultState } from "./utils";
import { handleSubmit } from "./action";

export default function Register() {
  const [state, registerUser] = useActionState(
    handleSubmit,
    registerDefaultState,
  );
  console.log(state);
  return (
    <form action={registerUser} className="space-y-6">
      <InputItem
        label="Email Address"
        id="email"
        name="email"
        type="email"
        defaultValue={state.payload?.get("email") as string}
      />
      <InputItem
        label="Password"
        labelAction={
          <a
            href="#"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Forgot password?
          </a>
        }
        id="password"
        name="password"
        type="password"
        defaultValue={state.payload?.get("password") as string}
      />
      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Register
        </button>
      </div>
    </form>
  );
}
