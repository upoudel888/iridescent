"use client";

import { deletePoem } from "@/app/poems/actions";

export function DeleteButton({ id }: { id: string }) {
  const handleDelete = (poemId: string) => {
    deletePoem(poemId);
  };

  return (
    <button
      onClick={() => {
        handleDelete(id);
      }}
    >
      Delete
    </button>
  );
}
