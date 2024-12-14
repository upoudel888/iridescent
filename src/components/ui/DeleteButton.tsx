"use client";

import { deletePoem } from "@/app/poems/actions";
import { Button } from "./button";

export function DeleteButton({ id }: { id: string }) {
  const handleDelete = (poemId: string) => {
    deletePoem(poemId);
  };

  return (
    <Button
      onClick={() => {
        handleDelete(id);
      }}
      variant={"destructive"}
      className="flex-1"
    >
      Delete
    </Button>
  );
}
