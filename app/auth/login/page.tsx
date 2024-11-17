"use client";
import InputItem from "@/components/input-item";
import { getValueFromForm } from "@/utils/form";
import { useActionState, useMemo } from "react";
import { handleSubmit } from "./action";
import { loginDefaultState } from "./util";

const Login = () => {
  const [state, loginUser] = useActionState(handleSubmit, loginDefaultState);

  const getValue = useMemo(
    () => getValueFromForm(state.payload),
    [state.payload],
  );

  return (
    <form action={loginUser} className="space-y-6">
      <InputItem
        label="Email Address"
        id="email"
        name="email"
        type="email"
        defaultValue={getValue("email")}
        errors={state.errors?.email}
      />
      <InputItem
        label="Password"
        id="password"
        name="password"
        type="password"
        defaultValue={getValue("password")}
        errors={state.errors?.password}
      />
      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          login
        </button>
      </div>
    </form>
  );
};

export default Login;
