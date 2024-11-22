import { useForm } from "react-hook-form";
import { handleRegister } from "../action";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

const registerSchema = z.object({
  email: z
    .string({
      required_error: "email is required",
    })
    .min(1, { message: "email is requried" })
    .email({
      message: "invalid email",
    }),
  password: z
    .string({ required_error: "password is required" })
    .min(1, { message: "password is requried" }),
});

export const defaultRegisterData: RegisterReqest = { email: "", password: "" };

const useRegister = () => {
  const methods = useForm<RegisterReqest>({
    defaultValues: defaultRegisterData,
    resolver: zodResolver(registerSchema),
  });

  const router = useRouter();

  const { setError } = methods;
  const onSubmit = async (inputData: RegisterReqest) => {
    const { error } = await handleRegister(inputData);
    if (error) {
      Object.entries(error).forEach(([k, v]) => {
        setError(k, { message: v });
      });
      return;
    }

    router.push("/dashboard");
  };
  return { methods, onSubmit };
};

export default useRegister;
