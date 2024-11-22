import { getJWT } from "@/utils/auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const jwt = await getJWT();
  if (!jwt) {
    redirect("auth/login");
  }
  return <h1>dashboard</h1>;
}
