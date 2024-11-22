import axios from "axios";
import { BASE_URL } from "@/config";
import { getJWT } from "@/utils/auth";

const server = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: await getJWT(),
  },
});

export default server;
