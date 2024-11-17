"use client";
import { getSession } from "@/utils/auth";

export default function Products() {
  const session = getSession();
  console.log(session);

  return (
    <div className="container mx-auto">
      <h1 className="capitalize">products list</h1>
    </div>
  );
}
