"use client";
import Button from "@/components/button";
import useRegister from "./hooks/use-register";
import RHFProvider from "@/components/rhf/provider";
import RHFTextField from "@/components/rhf/text-field";

export default function Register() {
  const { methods, onSubmit } = useRegister();
  return (
    <RHFProvider methods={methods} onSubmit={onSubmit}>
      <RHFTextField label="First Name" name="first_name" />
      <RHFTextField label="Last Name" name="last_name" />
      <RHFTextField label="Email" name="email" />
      <RHFTextField label="Password" name="password" type="password" />
      <div className="mt-5">
        <Button fullWidth type="submit">
          register
        </Button>
      </div>
    </RHFProvider>
  );
}
