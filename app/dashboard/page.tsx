"use client";
import { getSession } from "@/utils/auth";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  router.replace("/products");
  return <h1> dashboard</h1>;
}
