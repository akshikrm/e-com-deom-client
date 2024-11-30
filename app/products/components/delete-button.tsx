import { Button } from "@mui/material";

type Props = {
  deleteId: number | null;
};

export default function DeleteButton(props: Props) {
  const { deleteId } = props;
  const handleDelete = async (selectedId: number) => {
    console.log(selectedId);
  };
  return (
    <Button
      disabled={!deleteId}
      color="error"
      onClick={() => {
        if (deleteId) {
          handleDelete(deleteId);
        }
      }}
    >
      confirm
    </Button>
  );
}
