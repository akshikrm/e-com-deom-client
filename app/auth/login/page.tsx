"use client";
import InputItem from "@/components/input-item";
import { getValueFromForm } from "@/utils/form";
import { useActionState, useMemo } from "react";
import { handleSubmit } from "./action";
import { loginDefaultState } from "./util";
import RHFProvider from "@/components/rhf/provider";
import useLogin from "./hooks/use-login";
import RHFTextField from "@/components/rhf/text-field";
import Button from "@/components/button";

const Login = () => {
  // const [state, loginUser] = useActionState(handleSubmit, loginDefaultState);

  // const getValue = useMemo(
  // 	() => getValueFromForm(state.payload),
  // 	[state.payload],
  // );

  const { methods, onSubmit } = useLogin();
  return (
    <RHFProvider onSubmit={onSubmit} methods={methods}>
      <RHFTextField label="Email" name="email" />
      <RHFTextField label="Password" name="password" />
      <Button type="submit">login</Button>
    </RHFProvider>
  );
};

export default Login;
