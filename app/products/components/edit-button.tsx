"use client";

import Button from "@/components/button";
import { useRouter } from "next/navigation";
import { FunctionComponent } from "react";

type Props = {
  productId: number;
};

const EditProductButton: FunctionComponent<Props> = ({ productId }) => {
  const router = useRouter();
  return (
    <Button
      onClick={() => {
        router.push(`/products/${productId}`);
      }}
    >
      edit
    </Button>
  );
};

export default EditProductButton;
