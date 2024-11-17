"use client";
import InputItem from "@/components/input-item";
import { useActionState, useEffect, useMemo } from "react";
import { registerDefaultState } from "./utils";
import { handleSubmit } from "./action";
import { useRouter } from "next/navigation";

const getValueFromForm = (formData?: FormData) => {
  return (key: string): string => {
    if (formData) {
      return formData.get(key) as string;
    }
    return "";
  };
};

export default function Register() {
  const [state, registerUser] = useActionState(
    handleSubmit,
    registerDefaultState,
  );

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
    <form action={registerUser} className="space-y-6">
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
        defaultValue={getValue("password")}
        errors={state.errors?.password}
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
