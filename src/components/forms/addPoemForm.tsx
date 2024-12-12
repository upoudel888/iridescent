import { addPoem } from "@/app/poems/actions";

export function AddPoemForm() {
  return (
    <form action={addPoem} className="flex flex-col w-1/3">
      <input
        className="border-2 border-black-50"
        placeholder="Title"
        name="title"
        required
      />
      <textarea
        className="border-2 border-black-50"
        placeholder="Verses"
        name="verses"
        required
      />
      <button type="submit">Add Post</button>
    </form>
  );
}
