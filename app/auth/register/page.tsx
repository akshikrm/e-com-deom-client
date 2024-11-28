"use client";
import useRegister from "./hooks/use-register";
import RHFProvider from "@/components/rhf/provider";
import RHFTextField from "@/components/rhf/text-field";
import { Button, Stack } from "@mui/material";

export default function Register() {
  const { methods, onSubmit } = useRegister();
  return (
    <RHFProvider methods={methods} onSubmit={onSubmit}>
      <Stack spacing={2}>
        <RHFTextField label="First Name" name="first_name" />
        <RHFTextField label="Last Name" name="last_name" />
        <RHFTextField label="Email" name="email" />
        <RHFTextField label="Password" name="password" type="password" />
        <Button fullWidth type="submit">
          register
        </Button>
      </Stack>
    </RHFProvider>
  );
}
