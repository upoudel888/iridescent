type ReadPoemParamsType = {
  id: string;
};

export default async function ReadPoem({
  params,
}: {
  params: Promise<ReadPoemParamsType>;
}) {
  const poemId = (await params).id;

  return (
    <div className="text-center">
      This is poem <div> {poemId}</div>
    </div>
  );
}
