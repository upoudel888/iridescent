import { GiScrollQuill } from "react-icons/gi";
import Link from "next/link";
import { poemType } from "../models/poem";
import { DrawerDialog } from "./DrawerDialog";
import { UpdatePoemForm } from "./forms";
import { DeleteButton } from "./ui/DeleteButton";

export function PoemCard({ poem }: { poem: poemType }) {
  return (
    <div className="flex w-full flex-col gap-2">
      <Link
        className="group relative mx-auto flex w-full flex-1 items-center gap-1 overflow-hidden rounded-lg border-[1px] border-primaryLight bg-white px-4 pb-6 pt-8 font-semibold capitalize transition-all duration-700 hover:-translate-y-1 hover:shadow-lg"
        href={`poems/${poem.id}`}
      >
        <div className="relative z-10 mx-auto flex w-full flex-col justify-between">
          <div className="flex flex-row items-center gap-4">
            <span className="flex h-16 w-16 items-center justify-center rounded-full border-[1px] border-primaryMain bg-white text-5xl text-primaryDark transition-all duration-300 group-hover:bg-white sm:h-20 sm:w-20">
              <span className="h-18 w-18 absolute -z-10 rounded-full bg-gradient-to-tr from-[#fbb232] via-[#f6c66b] to-[#fa9004] transition-all duration-1000 group-hover:scale-[10] sm:h-20 sm:w-20"></span>
              <GiScrollQuill />
            </span>
            <div className="flex flex-col text-gray-500 duration-300 group-hover:text-black">
              <span className="font-medium">Ujjwal Paudel</span>
              <span className="text-sm">{poem.createdAt.toDateString()}</span>
            </div>
          </div>
          <div className="space-y-4 pt-4 text-lg font-bold transition-all duration-700 group-hover:text-black sm:space-y-6 sm:text-2xl">
            <h2>{poem.title}</h2>
          </div>
          <div className="min-h-[7rem] whitespace-pre-line pt-2 text-sm font-medium text-gray-500 transition-all duration-700 group-hover:text-black sm:pt-3 sm:text-base">
            <p>
              {poem.verses.split("\r").splice(0, 3).join("\r").slice(0, 80) +
                " ..."}
            </p>
          </div>
          <div className="flex flex-row gap-1 pt-2 text-primaryDark duration-700 group-hover:text-black sm:pt-3">
            <span>Read More</span>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="mt-1 text-sm sm:text-lg"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
            </svg>
            <span className="absolute bottom-0 left-0 h-[2px] w-[72px] origin-left scale-x-0 transform bg-black transition-transform duration-1000 group-hover:scale-x-100 sm:w-[92px]"></span>
          </div>
        </div>
      </Link>
      {/* TODO : Check for roles before showing this button */}
      <div className="flex w-full flex-row justify-center gap-4">
        <DeleteButton id={poem.id}></DeleteButton>
        <DrawerDialog
          drawerTitle={`Editing - ${poem.title}`}
          description=""
          buttonText="Edit"
        >
          <UpdatePoemForm poem={poem}></UpdatePoemForm>
        </DrawerDialog>
      </div>
    </div>
  );
}
