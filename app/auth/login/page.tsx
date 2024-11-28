"use client";
import RHFProvider from "@/components/rhf/provider";
import useLogin from "./hooks/use-login";
import RHFTextField from "@/components/rhf/text-field";
import { Button, Stack } from "@mui/material";

const Login = () => {
  const { methods, onSubmit } = useLogin();
  return (
    <RHFProvider onSubmit={onSubmit} methods={methods}>
      <Stack spacing={2}>
        <RHFTextField label="Email" name="email" />
        <RHFTextField label="Password" name="password" type="password" />
        <div className="mt-5">
          <Button fullWidth type="submit">
            login
          </Button>
        </div>
      </Stack>
    </RHFProvider>
  );
};

export default Login;
