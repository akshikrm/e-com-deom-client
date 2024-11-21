"use client";

import Button from "@/components/button";
import { useRouter } from "next/navigation";

const AddButton = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => {
        router.push("products/add");
      }}
    >
      Add
    </Button>
  );
};

export default AddButton;
