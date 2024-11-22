"use client";
import RHFProvider from "@/components/rhf/provider";
import useLogin from "./hooks/use-login";
import RHFTextField from "@/components/rhf/text-field";
import Button from "@/components/button";

const Login = () => {
  const { methods, onSubmit } = useLogin();
  return (
    <RHFProvider onSubmit={onSubmit} methods={methods}>
      <RHFTextField label="Email" name="email" />
      <RHFTextField label="Password" name="password" type="password" />
      <div className="mt-5">
        <Button fullWidth type="submit">
          login
        </Button>
      </div>
    </RHFProvider>
  );
};

export default Login;
