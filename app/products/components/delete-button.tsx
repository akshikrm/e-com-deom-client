"use client";

import Button from "@/components/button";

const DeleteButton = () => {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <>
      <Button onClick={handleClick} variant="danger">
        delete
      </Button>
    </>
  );
};

export default DeleteButton;
