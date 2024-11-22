import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { handleLogin } from "../action";

const loginSchema = z.object({
  email: z.string().email({
    message: "invalid email",
  }),
  password: z.string(),
});

const loginDefaultValues: LoginRequest = {
  email: "",
  password: "",
};

const useLogin = () => {
  const methods = useForm<LoginRequest>({
    defaultValues: loginDefaultValues,
    resolver: zodResolver(loginSchema),
  });

  const { setError } = methods;
  const onSubmit = async (inputData: LoginRequest) => {
    const { message, error } = await handleLogin(inputData);
    console.log(message);
    if (error) {
      Object.entries(error).forEach(([k, v]) => {
        setError(k, { message: v });
      });
    }
  };
  return { methods, onSubmit };
};

export default useLogin;
