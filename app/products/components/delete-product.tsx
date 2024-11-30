"use client";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { usePathname, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { productDelete } from "../handler";

const DeleteProduct = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const onClose = () => {
    history.replaceState(null, "", pathname);
  };

  const handleDelete = async (selectedID: number) => {
    await productDelete(selectedID);
    // console.log(selectedID);
  };

  const open = useMemo(() => {
    return searchParams.get("delete") === "open";
  }, [searchParams]);

  const selectedID = useMemo(() => {
    if (open) {
      return history.state?.delete || null;
    }
    return null;
  }, [open]);

  return (
    <Dialog open={Boolean(open)} onClose={onClose}>
      <DialogTitle>delete product</DialogTitle>
      <DialogContent>
        are you sure you want to continue this action cannot be reversed
      </DialogContent>
      <DialogActions>
        <Button
          disabled={!selectedID}
          color="error"
          onClick={() => {
            if (selectedID) {
              handleDelete(selectedID);
            }
          }}
        >
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
