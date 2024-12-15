import Link from "next/link";
import { GiQuillInk } from "react-icons/gi";
import { MdOutlineLightMode } from "react-icons/md";

export function Navbar() {
  return (
    <nav className="flex h-[4rem] w-full justify-center">
      <div className="container flex max-w-screen-xl flex-row items-center justify-between border-b-[1px] border-b-gray-400 px-4 md:px-8">
        <Link href={"/"} className="logo flex w-1/3 flex-row gap-2 text-xl">
          <span className="text-4xl text-primaryDark">
            <GiQuillInk />
          </span>
          <span className="leading-10">Iridescent</span>
        </Link>
        <ul className="flex w-1/3 flex-row items-center justify-end gap-8 text-sm font-semibold uppercase">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/poems"}>Poems</Link>
          </li>
        </ul>
        <div className="mode">
          <span className="cursor-not-allowed text-2xl">
            <MdOutlineLightMode />
          </span>
        </div>
      </div>
    </nav>
  );
}
