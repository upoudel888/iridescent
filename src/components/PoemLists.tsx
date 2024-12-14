import { poemType } from "../models/poem";

import { PoemCard } from "./PoemCard";

export function PoemLists({ poems }: { poems: poemType[] }) {
  return (
    <div className="grid w-full grid-cols-1 items-center justify-evenly gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {poems.map((poem, idx) => {
        return <PoemCard poem={poem} key={idx} />;
      })}
    </div>
  );
}
