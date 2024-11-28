"use client";
import { FunctionComponent } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { productDelete } from "../handler";

const DeleteProduct: FunctionComponent<{
  selectedId: number | null;
  onClose: () => Promise<void>;
}> = ({ selectedId, onClose }) => {
  const handleDelete = async () => {
    if (selectedId) {
      const { status } = await productDelete(selectedId);
      if (status) {
        onClose();
      }
    }
  };

  return (
    <Dialog open={Boolean(selectedId)} onClose={onClose}>
      <DialogTitle>delete product</DialogTitle>
      <DialogContent>
        are you sure you want to continue this action cannot be reversed
      </DialogContent>
      <DialogActions>
        <Button color="error" onClick={handleDelete}>
          confirm
        </Button>
        <Button color="warning" onClick={onClose}>
          cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default DeleteProduct;
