"use client";
import Button from "@/components/button";
import useRegister from "./hooks/use-register";
import RHFProvider from "@/components/rhf/provider";
import RHFTextField from "@/components/rhf/text-field";

export default function Register() {
  const { methods, onSubmit } = useRegister();
  return (
    <RHFProvider methods={methods} onSubmit={onSubmit}>
      <RHFTextField label="Email" name="email" />
      <RHFTextField label="Password" name="password" />
      <Button type="submit">register</Button>
    </RHFProvider>
  );
}
