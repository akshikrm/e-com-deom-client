"use server";
import { cookies } from "next/headers";
import server from "@/utils/server";

export async function handleRegister(
  inputData: RegisterReqest,
): Promise<FailedResponse> {
  const cookieStore = await cookies();
  try {
    const { data } = await server.post("/users", inputData);
    cookieStore.set("auth-token", data.data);
    return { status: true, message: "register success" };
  } catch (err) {
    return handleAxiosErrors(err);
  }
}

const handleAxiosErrors = (err: unknown) => {
  {
    const { status, failed } = err as RequestFailedError;
    switch (status) {
      case 409: {
        return failed({
          email: "email already taken",
        });
      }
      default: {
        return failed();
      }
    }
  }
};
