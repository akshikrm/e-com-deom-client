"use client";

import InputItem from "@/components/input-item";
import { getValueFromForm } from "@/utils/form";
import { useActionState, useEffect, useMemo } from "react";
import { loginDefaultState } from "./util";
import { handleSubmit } from "./action";
import { useRouter } from "next/navigation";

const Login = () => {
  const [state, loginUser] = useActionState(handleSubmit, loginDefaultState);

  const getValue = useMemo(() => {
    return getValueFromForm(state.payload);
  }, [state.payload]);

  const router = useRouter();

  useEffect(() => {
    if (state.data) {
      const { data } = state.data;
      localStorage.setItem("auth-token", data);
      router.push("/dashboard");
    }
  }, [state.data, router]);

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
