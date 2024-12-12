import { poemType } from "../models/poem";
import { DeleteButton } from "./ui/DeleteButton";

export function PoemLists({ poems }: { poems: poemType[] }) {
  return (
    <div className="flex flex-col gap-4">
      {poems.map((poem, idx) => {
        return (
          <div
            key={idx}
            className="flex flex-col gap-2 border-2 border-gray-200"
          >
            <div>{poem.title}</div>
            <div className="whitespace-pre-line">{poem.verses}</div>
            <DeleteButton id={poem.id}></DeleteButton>
          </div>
        );
      })}
    </div>
  );
}
