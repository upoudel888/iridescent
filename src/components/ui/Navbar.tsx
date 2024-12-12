import Link from "next/link";
import { GiQuillInk } from "react-icons/gi";
import { MdOutlineLightMode } from "react-icons/md";

export function Navbar() {
  return (
    <nav className="w-full h-[4rem] flex justify-center">
      <div className="container max-w-screen-2xl px-4 md:px-8 flex flex-row items-center justify-between border-b-gray-200 border-b-[1px]">
        <div className="logo w-1/3 text-xl flex flex-row gap-2">
          <span className="text-4xl">
            <GiQuillInk />
          </span>
          <span className="leading-10">Iridescent</span>
        </div>
        <ul className="w-1/3 flex flex-row gap-8 justify-end items-center text-sm uppercase font-semibold">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/poems"}>Poems</Link>
          </li>
        </ul>
        <div className="mode">
          <span className="text-2xl cursor-not-allowed">
            <MdOutlineLightMode />
          </span>
        </div>
      </div>
    </nav>
  );
}
