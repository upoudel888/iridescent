import { poemType } from "../models/poem";
import { DrawerDialog } from "./DrawerDialog";
import { UpdatePoemForm } from "./forms";
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
            <DrawerDialog
              drawerTitle={`Editing - ${poem.title}`}
              description=""
              buttonText="Edit"
            >
              <UpdatePoemForm poem={poem}></UpdatePoemForm>
            </DrawerDialog>
          </div>
        );
      })}
    </div>
  );
}
