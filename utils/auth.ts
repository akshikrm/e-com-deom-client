"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type USER_ROLE = "admin" | "user";

type JWT = {
  exp: number;
  iat: number;
  role: USER_ROLE;
  sub: number;
};

export const getJWT = async (): Promise<string> => {
  const cookieStore = await cookies();
  const jwt = cookieStore.get("auth-token")?.value;
  if (jwt) {
    return jwt;
  }
  return "";
};

export const getDecodedJwt = async (jwt: string): Promise<JWT | null> => {
  const decoded = Buffer.from(jwt?.split(".")[1], "base64").toString();
  if (decoded) {
    return JSON.parse(decoded);
  }
  return null;
};
