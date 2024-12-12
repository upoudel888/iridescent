import { AddPoemForm } from "@/components";
import { getPoems } from "./actions";
import { PoemLists } from "@/components/PoemLists";
import { poemType } from "@/models/poem";

export default async function Poems() {
  const allPoems = await getPoems();
  const poems: poemType[] = allPoems.map((poem) => {
    return {
      id: poem.id,
      title: poem.title,
      verses: poem.verses,
    };
  });

  return (
    <div className="w-full flex flex-col justify-center">
      <div className="container max-w-screen-2xl px-4 md:px-8 flex flex-col justify-center items-center">
        {/* TODO : show this form only for the admin */}
        <AddPoemForm />
        <PoemLists poems={poems}></PoemLists>
      </div>
    </div>
  );
}
