"use server";
import axios, { AxiosError } from "axios";
import { BASE_URL } from "@/config";
import { getJWT } from "@/utils/auth";

const server = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: await getJWT(),
  },
});

server.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(parseAxiosErrors(error));
  },
);

const parseAxiosErrors = (err: unknown): RequestFailedError => {
  const { status, response } = err as AxiosError<{ error: string }>;

  const failed = (error: object | null = null): FailedResponse => ({
    status: false,
    message: response?.data.error || "something went wrong",
    error: error,
  });

  return { status, failed };
};

export default server;
