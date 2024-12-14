import { PageBanner } from "@/components";
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
      createdAt: poem.createdAt,
    };
  });

  return (
    <>
      <PageBanner pageTitle="Poems"></PageBanner>
      <div className="flex w-full justify-center">
        <div className="container flex max-w-screen-xl flex-col items-center justify-center px-4 py-14 md:px-8">
          <PoemLists poems={poems}></PoemLists>
        </div>
      </div>
    </>
  );
}
