"use server";
import axios, { AxiosError } from "axios";
import { BASE_URL } from "@/config";
import { getJWT } from "./auth";

const server = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
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

server.interceptors.request.use(
  async function (config) {
    const jwt = await getJWT();
    if (jwt) {
      config.headers.Authorization = jwt;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
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
