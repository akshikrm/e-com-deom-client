"use server";
import { cookies } from "next/headers";
import server from "@/utils/server";

export async function handleLogin(
  inputData: LoginRequest,
): Promise<FailedResponse> {
  const cookieStore = await cookies();

  try {
    const { data } = await server.post("/login", inputData);
    cookieStore.set("auth-token", data.data);
    return { status: true, message: "login success" };
  } catch (err) {
    return handleAxiosErrors(err);
  }
}

const handleAxiosErrors = (err: unknown) => {
  {
    const { status, failed } = err as RequestFailedError;

    switch (status) {
      case 404: {
        return failed({
          email: "email not found",
        });
      }
      case 401: {
        return failed({
          email: "wrong email or password",
          password: "wrong email or password",
        });
      }
      default: {
        return failed();
      }
    }
  }
};
