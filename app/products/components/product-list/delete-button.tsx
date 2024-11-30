"use client";
import { Button } from "@mui/material";

type Props = {
  productId: number;
};

const DeleteButton = ({ productId }: Props) => {
  return (
    <Button
      color="error"
      onClick={() => {
        history.pushState({ delete: productId }, "", `?delete=open`);
      }}
    >
      delete
    </Button>
  );
};

export default DeleteButton;
